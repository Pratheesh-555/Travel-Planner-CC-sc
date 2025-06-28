"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Bot, Mic, MessageSquare, Languages, Brain, Zap, Shield, X, Volume2, Phone, Sparkles } from "lucide-react"

const aiCapabilities = [
  {
    id: "voice",
    title: "Voice Conversation",
    description: "Natural speech in 50+ languages with emotion recognition",
    icon: Mic,
    color: "from-blue-500 to-blue-600",
    demo: 'Try saying: "Book me a hotel room in Paris for next weekend"',
  },
  {
    id: "realtime",
    title: "Real-time Intelligence",
    description: "Instant responses with contextual understanding",
    icon: Zap,
    color: "from-green-500 to-emerald-600",
    demo: 'Ask: "My flight is delayed, what are my options?"',
  },
  {
    id: "multilingual",
    title: "Global Communication",
    description: "Seamless translation and cultural adaptation",
    icon: Languages,
    color: "from-purple-500 to-pink-600",
    demo: 'Switch languages: "Parlez-vous français? 你好吗？"',
  },
  {
    id: "context",
    title: "Memory & Learning",
    description: "Remembers preferences and learns from interactions",
    icon: Brain,
    color: "from-orange-500 to-red-600",
    demo: 'Say: "Remember I prefer window seats and vegetarian meals"',
  },
  {
    id: "security",
    title: "Privacy Shield",
    description: "End-to-end encryption with zero data retention",
    icon: Shield,
    color: "from-gray-600 to-gray-800",
    demo: "All conversations are encrypted and private",
  },
]

export default function FloatingBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCapability, setSelectedCapability] = useState<string | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 1000)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleCapabilitySelect = (capabilityId: string) => {
    setSelectedCapability(capabilityId)
    const capability = aiCapabilities.find((c) => c.id === capabilityId)
    if (capability) {
      alert(`${capability.title} activated!\n\n${capability.demo}\n\nThis would connect to your AI system.`)
    }
  }

  const handleVoiceChat = () => {
    alert("Voice chat would start here - connecting to your voice AI system")
  }

  const handleTextChat = () => {
    alert("Text chat would open here - launching your chat interface")
  }

  const handlePhoneCall = () => {
    alert("Phone call feature would initiate here - connecting to your call system")
  }

  return (
    <>
      {/* Floating Bot Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Pulse Animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-ping opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse opacity-30"></div>

          {/* Main Button */}
          <Button
            onClick={() => setIsOpen(true)}
            className={`relative w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-2xl hover:shadow-3xl transition-all duration-300 group ${
              isAnimating ? "scale-110" : "hover:scale-110"
            }`}
          >
            <Bot
              className={`h-8 w-8 text-white transition-transform duration-300 ${isAnimating ? "animate-bounce" : "group-hover:rotate-12"}`}
            />
          </Button>

          {/* Notification Badge */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
            <Sparkles className="h-3 w-3 text-white" />
          </div>
        </div>
      </div>

      {/* AI Assistant Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader className="pb-6">
            <DialogTitle className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Bot className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">VoyageAI Assistant</h3>
                  <p className="text-sm text-gray-500 font-normal">Your intelligent travel companion</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="hover:bg-gray-100">
                <X className="h-4 w-4" />
              </Button>
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {/* Welcome Message */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div className="space-y-2">
                  <p className="text-gray-800 font-medium">
                    Hello! I'm your AI travel companion. I can help you with hotel services, flight management, and
                    local recommendations.
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Powered by Advanced Voice AI • Online & Ready</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid gap-3 sm:grid-cols-3">
              <Button
                onClick={handleVoiceChat}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-4 h-auto flex-col gap-2"
              >
                <Volume2 className="h-6 w-6" />
                <span className="text-sm font-medium">Voice Chat</span>
              </Button>
              <Button
                onClick={handleTextChat}
                variant="outline"
                className="border-2 hover:bg-gray-50 p-4 h-auto flex-col gap-2 bg-transparent"
              >
                <MessageSquare className="h-6 w-6" />
                <span className="text-sm font-medium">Text Chat</span>
              </Button>
              <Button
                onClick={handlePhoneCall}
                variant="outline"
                className="border-2 border-green-200 hover:bg-green-50 p-4 h-auto flex-col gap-2 bg-transparent"
              >
                <Phone className="h-6 w-6 text-green-600" />
                <span className="text-sm font-medium text-green-600">Call Me</span>
              </Button>
            </div>

            {/* AI Capabilities */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold text-gray-800">AI Capabilities</h4>
                <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                  5 Active Systems
                </Badge>
              </div>

              <div className="grid gap-3">
                {aiCapabilities.map((capability) => {
                  const IconComponent = capability.icon
                  const isSelected = selectedCapability === capability.id

                  return (
                    <button
                      key={capability.id}
                      onClick={() => handleCapabilitySelect(capability.id)}
                      className={`p-4 rounded-xl border-2 text-left transition-all duration-300 hover:shadow-md ${
                        isSelected
                          ? "border-blue-500 bg-blue-50 shadow-md"
                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${capability.color} text-white flex-shrink-0`}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h5 className="font-semibold text-gray-800">{capability.title}</h5>
                            {isSelected && (
                              <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                                Active
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{capability.description}</p>
                          {isSelected && (
                            <p className="text-xs text-blue-600 italic bg-blue-50 p-2 rounded border-l-2 border-blue-500">
                              {capability.demo}
                            </p>
                          )}
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Secure • Private • Intelligent</span>
                <span>Response time: &lt;0.5s</span>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
