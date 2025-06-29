"use client";

import { useState } from "react";
import HeroBanner from "../components/sections/HeroBanner";
import VoiceAssistant from "../components/sections/VoiceAssistant";
import ConversationLog from "../components/sections/ConversationLog";
import QuickActions from "../components/sections/QuickActions";
import PersonalizedSuggestions from "../components/sections/PersonalizedSuggestions";
import QRSection from "../components/sections/QRSection";
import AdminDashboard from "../components/sections/AdminDashboard";
import ConfirmationPopup from "../components/ui/ConfirmationPopup";

export default function TravelPlannerApp() {
  const [conversations, setConversations] = useState([
    {
      id: 1,
      type: "Hotel",
      request: "Book a luxury hotel in Paris for 3 nights",
      timestamp: new Date(Date.now() - 300000),
      status: "Completed",
      response: "Booked Le Bristol Paris - 3 nights, €450/night",
    },
    {
      id: 2,
      type: "Flight",
      request: "Check flight status for AA1234",
      timestamp: new Date(Date.now() - 600000),
      status: "Completed",
      response: "Flight AA1234 is on time, departing at 3:45 PM",
    },
    {
      id: 3,
      type: "Dining",
      request: "Find romantic restaurants near Eiffel Tower",
      timestamp: new Date(Date.now() - 900000),
      status: "Processing",
      response: "Searching for romantic dining options...",
    },
  ]);

  const [suggestions, setSuggestions] = useState([
    {
      id: 1,
      type: "dining",
      title: "Le Jules Verne",
      description: "Michelin-starred restaurant in Eiffel Tower",
      image: "/placeholder.svg?height=150&width=200",
      rating: 4.8,
      price: "€€€€",
    },
    {
      id: 2,
      type: "attraction",
      title: "Seine River Cruise",
      description: "Romantic evening cruise with dinner",
      image: "/placeholder.svg?height=150&width=200",
      rating: 4.6,
      price: "€€",
    },
    {
      id: 3,
      type: "hotel",
      title: "Hotel Plaza Athénée",
      description: "Luxury hotel with Eiffel Tower views",
      image: "/placeholder.svg?height=150&width=200",
      rating: 4.9,
      price: "€€€€",
    },
  ]);

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const addConversation = (newEntry) => {
    const entry = {
      ...newEntry,
      id: Date.now(),
      timestamp: new Date(),
    };

    setConversations((prev) => [entry, ...prev.slice(0, 4)]);

    setConfirmationMessage(getConfirmationMessage(newEntry.type));
    setShowConfirmation(true);

    setTimeout(() => setShowConfirmation(false), 4000);
  };

  const getConfirmationMessage = (type) => {
    switch (type.toLowerCase()) {
      case "hotel":
        return "Your hotel booking request has been processed!";
      case "flight":
        return "Flight information retrieved successfully!";
      case "dining":
        return "Restaurant recommendations found!";
      case "itinerary":
        return "Your travel itinerary is being created!";
      default:
        return "Your request has been processed!";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-cream-50 to-gold-50">
      <HeroBanner />

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-8">
            <VoiceAssistant onAddConversation={addConversation} />
            <QuickActions onAddConversation={addConversation} />
            <PersonalizedSuggestions suggestions={suggestions} />
            <div className="grid md:grid-cols-2 gap-8">
              <QRSection />
              <AdminDashboard />
            </div>
          </div>

          <div className="lg:col-span-1">
            <ConversationLog conversations={conversations} />
          </div>
        </div>
      </div>

      <ConfirmationPopup
        show={showConfirmation}
        message={confirmationMessage}
        onClose={() => setShowConfirmation(false)}
      />
    </div>
  );
}
