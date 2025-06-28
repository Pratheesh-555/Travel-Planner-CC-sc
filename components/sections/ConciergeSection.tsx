"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mic, MicOff, MessageSquare, Utensils, Bed, Coffee, Car } from "lucide-react"
import type { VoiceBotProps } from "@/types"

const quickRequests = [
  { icon: Utensils, label: "Room Service", description: "Order food & beverages" },
  { icon: Bed, label: "Housekeeping", description: "Towels, pillows, cleaning" },
  { icon: Coffee, label: "Amenities", description: "Coffee, toiletries, robes" },
  { icon: Car, label: "Transportation", description: "Taxi, shuttle, valet" },
]

export default function ConciergeSection({ onAddRequest }: VoiceBotProps) {
  const [isListening, setIsListening] = useState(false)
  const [textRequest, setTextRequest] = useState("")
  const [selectedRoom, setSelectedRoom] = useState("Suite 1205")

  const handleVoiceToggle = () => {
    setIsListening(!isListening)
    if (!isListening) {
      // Simulate voice recognition
      setTimeout(() => {
        setIsListening(false)
        onAddRequest({
          type: "Room Service",
          description: "Voice request: Two club sandwiches and fresh orange juice",
          status: "Pending",
          room: selectedRoom,
        })
      }, 3000)
    }
  }

  const handleTextSubmit = () => {
    if (textRequest.trim()) {
      onAddRequest({
        type: "Concierge",
        description: textRequest,
        status: "Pending",
        room: selectedRoom,
      })
      setTextRequest("")
    }
  }

  const handleQuickRequest = (type: string, description: string) => {
    onAddRequest({
      type,
      description: `Quick request: ${description}`,
      status: "Pending",
      room: selectedRoom,
    })
  }

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-gold-200 shadow-xl">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-3xl font-bold text-navy-900 mb-2">Talk to Our Concierge</CardTitle>
        <p className="text-gray-600">Speak naturally or type your request. Our AI understands what you need.</p>
        <div className="flex items-center justify-center gap-2 mt-4">
          <Badge variant="outline" className="border-gold-300 text-gold-700">
            Room: {selectedRoom}
          </Badge>
          <Badge variant="outline" className="border-green-300 text-green-700">
            ● Online
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-8">
        {/* Voice Interface */}
        <div className="text-center space-y-4">
          <Button
            onClick={handleVoiceToggle}
            size="lg"
            className={`w-32 h-32 rounded-full text-white shadow-2xl transition-all duration-300 ${
              isListening
                ? "bg-red-500 hover:bg-red-600 animate-pulse scale-110"
                : "bg-gradient-to-br from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 hover:scale-105"
            }`}
          >
            {isListening ? <MicOff className="h-12 w-12" /> : <Mic className="h-12 w-12" />}
          </Button>

          <div className="space-y-2">
            <p className="text-lg font-semibold text-navy-900">{isListening ? "Listening..." : "Tap to Speak"}</p>
            {isListening && (
              <div className="flex justify-center">
                <div className="flex space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-8 bg-gold-500 rounded-full animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    ></div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quick Request Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickRequests.map((request, index) => {
            const IconComponent = request.icon
            return (
              <Button
                key={index}
                variant="outline"
                onClick={() => handleQuickRequest(request.label, request.description)}
                className="h-auto p-4 flex-col gap-2 border-gold-200 hover:border-gold-400 hover:bg-gold-50 bg-transparent"
              >
                <IconComponent className="h-6 w-6 text-gold-600" />
                <div className="text-center">
                  <div className="font-semibold text-navy-900">{request.label}</div>
                  <div className="text-xs text-gray-600">{request.description}</div>
                </div>
              </Button>
            )
          })}
        </div>

        {/* Text Fallback */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-navy-900">
            <MessageSquare className="h-5 w-5" />
            <span className="font-semibold">Or type your request:</span>
          </div>

          <div className="space-y-3">
            <Textarea
              placeholder="Type your request here... (e.g., 'I need extra towels and would like to order room service')"
              value={textRequest}
              onChange={(e) => setTextRequest(e.target.value)}
              className="min-h-[100px] border-gold-200 focus:border-gold-400 bg-white/50"
            />
            <Button
              onClick={handleTextSubmit}
              disabled={!textRequest.trim()}
              className="w-full bg-navy-900 hover:bg-navy-800 text-white"
            >
              Send Request
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
