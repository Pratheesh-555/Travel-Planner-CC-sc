"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Plane, Hotel, Utensils, Calendar, Camera, Car, Compass } from "lucide-react"
import type { ConversationEntry, QuickAction } from "@/types"

interface QuickActionsProps {
  onAddConversation: (entry: Omit<ConversationEntry, "id" | "timestamp">) => void
}

const quickActions: QuickAction[] = [
  {
    id: "itinerary",
    title: "Plan Itinerary",
    description: "Create a custom travel plan",
    icon: <MapPin className="h-6 w-6" />,
    color: "from-green-500 to-emerald-600",
    action: "Plan a 7-day itinerary for my upcoming trip",
  },
  {
    id: "flight",
    title: "Check Flight Status",
    description: "Get real-time flight updates",
    icon: <Plane className="h-6 w-6" />,
    color: "from-sky-500 to-blue-600",
    action: "Check my flight status and any delays",
  },
  {
    id: "hotel",
    title: "Book Hotel",
    description: "Find and reserve accommodation",
    icon: <Hotel className="h-6 w-6" />,
    color: "from-gold-500 to-yellow-600",
    action: "Find and book a hotel for my destination",
  },
  {
    id: "dining",
    title: "Find Local Dining",
    description: "Discover restaurants & cuisine",
    icon: <Utensils className="h-6 w-6" />,
    color: "from-red-500 to-pink-600",
    action: "Recommend local restaurants and dining experiences",
  },
  {
    id: "activities",
    title: "Book Activities",
    description: "Tours, shows & experiences",
    icon: <Camera className="h-6 w-6" />,
    color: "from-purple-500 to-indigo-600",
    action: "Find and book activities and tours",
  },
  {
    id: "transport",
    title: "Transportation",
    description: "Rental cars, transfers & more",
    icon: <Car className="h-6 w-6" />,
    color: "from-gray-500 to-slate-600",
    action: "Arrange transportation and transfers",
  },
  {
    id: "weather",
    title: "Weather & Packing",
    description: "Weather forecast & packing tips",
    icon: <Compass className="h-6 w-6" />,
    color: "from-cyan-500 to-teal-600",
    action: "Check weather and get packing recommendations",
  },
  {
    id: "schedule",
    title: "Manage Schedule",
    description: "Organize your travel timeline",
    icon: <Calendar className="h-6 w-6" />,
    color: "from-orange-500 to-amber-600",
    action: "Help me organize my travel schedule",
  },
]

export default function QuickActions({ onAddConversation }: QuickActionsProps) {
  const handleQuickAction = (action: QuickAction) => {
    onAddConversation({
      type: action.title,
      request: `Quick action: ${action.action}`,
      status: "Processing",
      response: `Processing your ${action.title.toLowerCase()} request...`,
    })
  }

  return (
    <Card className="bg-white/90 backdrop-blur-sm border-sky-200 shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-sky-900 text-center">Quick Actions</CardTitle>
        <p className="text-gray-600 text-center">Tap any card to get instant help</p>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map((action) => (
            <Button
              key={action.id}
              onClick={() => handleQuickAction(action)}
              variant="outline"
              className="h-auto p-4 flex-col gap-3 border-sky-200 hover:border-sky-400 hover:shadow-lg transition-all duration-300 group bg-transparent"
            >
              <div
                className={`p-3 rounded-xl bg-gradient-to-br ${action.color} text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                {action.icon}
              </div>
              <div className="text-center space-y-1">
                <div className="font-semibold text-sky-900 text-sm">{action.title}</div>
                <div className="text-xs text-gray-600 leading-tight">{action.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
