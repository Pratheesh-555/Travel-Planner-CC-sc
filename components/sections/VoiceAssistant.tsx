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

  const handleVoiceToggle = async () => {
    if (isProcessing) return;

    setIsListening(!isListening)
    if (!isListening) {
      setIsProcessing(true)
      try {
        // Call your Next.js API route, which proxies to OmniDimension
        const response = await fetch('/api/omnidimension');
        const data = await response.json();
        onAddConversation({
          type: "Hotel",
          request: "Voice request: Find me a beachfront resort in Maldives for next month",
          status: "Completed",
          response: JSON.stringify(data), // Replace with a user-friendly message if needed
        });
      } catch (error) {
        onAddConversation({
          type: "Hotel",
          request: "Voice request: Find me a beachfront resort in Maldives for next month",
          status: "Failed",
          response: 'Failed to fetch from OmniDimension API',
        });
      } finally {
        setIsListening(false)
        setIsProcessing(false)
      }
    }
  }

  const handleTextSubmit = async () => {
    if (textInput.trim() && !isProcessing) {
      setIsProcessing(true);
      try {
        const response = await fetch('/api/openai', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt: textInput }),
        });
        const data = await response.json();
        const answer = data.choices?.[0]?.message?.content || 'No response from LLM';
        onAddConversation({
          type: "Itinerary",
          request: textInput,
          status: "Completed",
          response: answer,
        });
      } catch (error) {
        onAddConversation({
          type: "Itinerary",
          request: textInput,
          status: "Failed",
          response: "Failed to fetch from OpenAI API",
        });
      } finally {
        setTextInput("");
        setIsProcessing(false);
      }
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

export function OutboundCallForm() {
  const [to, setTo] = useState("");
  const [agentId, setAgentId] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/omnidimension", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ to, agent_id: agentId, message }),
      });
      const data = await res.json();
      setResult(JSON.stringify(data, null, 2));
    } catch (err) {
      setResult("Error: " + (err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: 20, display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 400 }}>
      <input
        type="text"
        placeholder="Phone number (to)"
        value={to}
        onChange={e => setTo(e.target.value)}
        required
        style={{ padding: 8 }}
      />
      <input
        type="text"
        placeholder="Agent ID"
        value={agentId}
        onChange={e => setAgentId(e.target.value)}
        required
        style={{ padding: 8 }}
      />
      <input
        type="text"
        placeholder="Message (optional)"
        value={message}
        onChange={e => setMessage(e.target.value)}
        style={{ padding: 8 }}
      />
      <button type="submit" disabled={loading} style={{ padding: 10, background: '#2563eb', color: 'white', border: 'none', borderRadius: 4 }}>
        {loading ? "Calling..." : "Start Call"}
      </button>
      {result && <pre style={{ marginTop: 16, background: '#f3f4f6', padding: 10, borderRadius: 4 }}>{result}</pre>}
    </form>
  );
}
