"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Mic, MicOff, MessageSquare, Sparkles } from "lucide-react"
import type { ConversationEntry } from "@/types"

interface VoiceAssistantProps {
  onAddConversation: (entry: Omit<ConversationEntry, "id" | "timestamp">) => void
}

export default function VoiceAssistant({ onAddConversation }: VoiceAssistantProps) {
  const [isListening, setIsListening] = useState(false)
  const [textInput, setTextInput] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  const handleVoiceToggle = () => {
    if (isProcessing) return

    setIsListening(!isListening)
    if (!isListening) {
      setIsProcessing(true)
      // Simulate voice recognition
      setTimeout(() => {
        setIsListening(false)
        setIsProcessing(false)
        onAddConversation({
          type: "Hotel",
          request: "Voice request: Find me a beachfront resort in Maldives for next month",
          status: "Processing",
          response: "Searching for beachfront resorts in Maldives...",
        })
      }, 3000)
    }
  }

  const handleTextSubmit = () => {
    if (textInput.trim() && !isProcessing) {
      setIsProcessing(true)
      onAddConversation({
        type: "Itinerary",
        request: textInput,
        status: "Processing",
        response: "Processing your travel request...",
      })
      setTextInput("")
      setTimeout(() => setIsProcessing(false), 2000)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleTextSubmit()
    }
  }

  return (
    <Card className="bg-white/90 backdrop-blur-sm border-sky-200 shadow-2xl">
      <CardContent className="p-8">
        <div className="text-center space-y-8">
          {/* Header */}
          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-sky-900">Your AI Travel Assistant</h2>
            <p className="text-lg text-gray-600">
              Speak naturally or type your travel needs. I'll help you plan, book, and explore!
            </p>
          </div>

          {/* Voice Button */}
          <div className="space-y-6">
            <div className="relative inline-block">
              <Button
                onClick={handleVoiceToggle}
                disabled={isProcessing}
                className={`w-32 h-32 rounded-full text-white shadow-2xl transition-all duration-300 ${
                  isListening
                    ? "bg-red-500 hover:bg-red-600 animate-pulse scale-110"
                    : isProcessing
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-br from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 hover:scale-105"
                }`}
              >
                {isProcessing ? (
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent"></div>
                ) : isListening ? (
                  <MicOff className="h-12 w-12" />
                ) : (
                  <Mic className="h-12 w-12" />
                )}
              </Button>

              {/* Pulse rings when listening */}
              {isListening && (
                <>
                  <div className="absolute inset-0 rounded-full bg-red-400 animate-ping opacity-20"></div>
                  <div className="absolute inset-0 rounded-full bg-red-400 animate-ping opacity-20 animation-delay-200"></div>
                </>
              )}
            </div>

            {/* Status Text */}
            <div className="space-y-2">
              <p className="text-xl font-semibold text-sky-900">
                {isProcessing
                  ? "Processing..."
                  : isListening
                    ? "Listening... Speak now!"
                    : "Tap to speak or type below"}
              </p>

              {/* Voice Wave Animation */}
              {isListening && (
                <div className="flex justify-center items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-sky-500 rounded-full animate-pulse"
                      style={{
                        height: `${Math.random() * 20 + 10}px`,
                        animationDelay: `${i * 0.1}s`,
                        animationDuration: "0.5s",
                      }}
                    ></div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Text Input Fallback */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sky-700">
              <MessageSquare className="h-5 w-5" />
              <span className="font-semibold">Or type your travel request:</span>
            </div>

            <div className="space-y-3">
              <Textarea
                placeholder="Type here... (e.g., 'Plan a 5-day trip to Japan with cultural experiences and great food')"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="min-h-[100px] border-sky-200 focus:border-sky-400 bg-white/70 text-lg"
                disabled={isProcessing}
              />
              <Button
                onClick={handleTextSubmit}
                disabled={!textInput.trim() || isProcessing}
                className="w-full bg-gradient-to-r from-sky-600 to-gold-500 hover:from-sky-700 hover:to-gold-600 text-white text-lg py-3"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-5 w-5 mr-2" />
                    Send Request
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Example Requests */}
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-3">Try saying:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "Book a hotel in Paris",
                "Plan a weekend in Tokyo",
                "Find flights to Bali",
                "Recommend restaurants in Rome",
              ].map((example, index) => (
                <button
                  key={index}
                  onClick={() => setTextInput(example)}
                  className="px-3 py-1 bg-sky-100 hover:bg-sky-200 text-sky-700 rounded-full text-sm transition-colors"
                  disabled={isProcessing}
                >
                  "{example}"
                </button>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
