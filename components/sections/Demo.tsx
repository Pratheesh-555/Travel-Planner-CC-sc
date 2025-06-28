"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Mic, MessageSquare, Users, Globe, Zap, Volume2, Phone } from "lucide-react"

export default function Demo() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null)

  const handleVoiceDemo = () => {
    setActiveDemo("voice")
    alert("Voice demo would start here - integrating with your voice AI system")
  }

  const handleTextDemo = () => {
    setActiveDemo("text")
    alert("Text chat demo would open here - connecting to your chat interface")
  }

  const handleCallDemo = () => {
    setActiveDemo("call")
    alert("Phone call demo would initiate here - showcasing the call functionality")
  }

  const stats = [
    { icon: Users, value: "25,000+", label: "Happy Travelers", color: "text-blue-600" },
    { icon: Globe, value: "50+", label: "Languages", color: "text-green-600" },
    { icon: Zap, value: "<0.5s", label: "Response Time", color: "text-purple-600" },
  ]

  return (
    <section id="demo" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200/30 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-gradient-to-r from-green-100 to-blue-100 text-green-700 mb-4">
            Interactive Experience
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience the
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              {" "}
              Future Now
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Try our AI assistant and discover how natural conversation transforms travel experiences
          </p>

          {/* Demo Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              onClick={handleVoiceDemo}
              className={`bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-8 py-6 ${
                activeDemo === "voice" ? "ring-4 ring-blue-300" : ""
              }`}
            >
              <Mic className="mr-3 h-6 w-6" />
              Start Voice Demo
              <Volume2 className="ml-3 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={handleTextDemo}
              className={`border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 px-8 py-6 group ${
                activeDemo === "text" ? "ring-4 ring-blue-300 border-blue-500" : ""
              }`}
            >
              <MessageSquare className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              Try Text Chat
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={handleCallDemo}
              className={`border-2 border-green-300 hover:border-green-500 hover:bg-green-50 transition-all duration-300 px-8 py-6 group ${
                activeDemo === "call" ? "ring-4 ring-green-300 border-green-500" : ""
              }`}
            >
              <Phone className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              Demo Call
            </Button>
          </div>

          {/* Active Demo Indicator */}
          {activeDemo && (
            <div className="mb-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200">
              <div className="flex items-center justify-center gap-3 text-blue-700">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="font-medium">
                  {activeDemo === "voice" && "Voice demo activated - Speak naturally to interact"}
                  {activeDemo === "text" && "Text chat ready - Type your questions below"}
                  {activeDemo === "call" && "Call demo initiated - Simulating phone interaction"}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-gradient-to-br from-white to-gray-50"
              >
                <CardContent className="space-y-4">
                  <div
                    className={`mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center`}
                  >
                    <IconComponent className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
