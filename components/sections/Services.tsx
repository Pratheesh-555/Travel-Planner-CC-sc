"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Hotel,
  Plane,
  MapPin,
  Utensils,
  Clock,
  Phone,
  Calendar,
  Coffee,
  Camera,
  Navigation,
  Bed,
  ArrowRight,
} from "lucide-react"

const services = [
  {
    id: "concierge",
    title: "Smart Concierge",
    description: "Voice-powered hotel services without the hassle",
    icon: Hotel,
    color: "from-blue-500 to-blue-600",
    features: [
      { icon: Utensils, text: "Voice-activated room service ordering" },
      { icon: Bed, text: "Instant amenity requests (towels, pillows)" },
      { icon: Clock, text: "Seamless checkout extensions" },
    ],
    example: '"I need fresh towels and would like to order the club sandwich with late checkout tomorrow"',
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
  },
  {
    id: "navigator",
    title: "Flight Navigator",
    description: "Proactive flight management and instant solutions",
    icon: Plane,
    color: "from-green-500 to-emerald-600",
    features: [
      { icon: Phone, text: "Automatic delay notifications and calls" },
      { icon: Calendar, text: "Smart rebooking with your preferences" },
      { icon: Hotel, text: "Instant accommodation arrangements" },
    ],
    example: '"Your flight has a 4-hour delay. I\'ve found 3 alternatives and booked you a nearby hotel room"',
    bgColor: "bg-green-50",
    textColor: "text-green-700",
  },
  {
    id: "curator",
    title: "Local Curator",
    description: "Personalized discoveries tailored to your taste",
    icon: MapPin,
    color: "from-purple-500 to-pink-600",
    features: [
      { icon: Coffee, text: "Curated dining based on your preferences" },
      { icon: Camera, text: "Custom itineraries for unique experiences" },
      { icon: Navigation, text: "Auto-sync with maps and calendar apps" },
    ],
    example: '"Find me authentic street food within 10 minutes walk, vegetarian-friendly with outdoor seating"',
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
  },
]

export default function Services() {
  const [activeService, setActiveService] = useState<string | null>(null)

  const handleLearnMore = (serviceId: string) => {
    alert(
      `Learn more about ${services.find((s) => s.id === serviceId)?.title} - This would open a detailed modal or navigate to a dedicated page`,
    )
  }

  return (
    <section id="services" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 mb-4">
            AI-Powered Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Three Intelligent
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Companions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionary AI assistants that transform how you experience travel and hospitality
          </p>
        </div>

        <div className="grid gap-8 md:gap-12 lg:grid-cols-3">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={service.id}
                className={`group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-4 cursor-pointer ${
                  activeService === service.id ? "ring-2 ring-blue-500 shadow-2xl" : ""
                }`}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                <CardHeader className="text-center pb-6">
                  <div
                    className={`mx-auto w-20 h-20 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800 mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-lg">{service.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {service.features.map((feature, featureIndex) => {
                      const FeatureIcon = feature.icon
                      return (
                        <div key={featureIndex} className="flex items-center gap-3 text-sm">
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${service.color} text-white`}>
                            <FeatureIcon className="h-4 w-4" />
                          </div>
                          <span className="text-gray-700">{feature.text}</span>
                        </div>
                      )
                    })}
                  </div>

                  <div className={`${service.bgColor} p-4 rounded-xl border-l-4 border-current`}>
                    <p className={`text-sm ${service.textColor} italic leading-relaxed`}>{service.example}</p>
                  </div>

                  <Button
                    onClick={() => handleLearnMore(service.id)}
                    className={`w-full bg-gradient-to-r ${service.color} hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
