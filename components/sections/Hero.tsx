"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Sparkles, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToDemo = () => {
    const element = document.getElementById("demo")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleWatchDemo = () => {
    alert("Demo video would play here - integrating with your video content")
  }

  return (
    <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="space-y-6">
              <Badge
                variant="secondary"
                className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-0 px-4 py-2 text-sm font-medium hover:scale-105 transition-transform duration-300"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered Travel Revolution 2024
              </Badge>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Your Personal
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                  Travel Genius
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Experience seamless journeys with AI that understands, anticipates, and delivers. From smart hotel
                services to intelligent flight management and personalized exploration.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToDemo}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 px-8 py-6 text-lg"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleWatchDemo}
                className="border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 px-8 py-6 text-lg group bg-transparent"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
              {["24/7 AI Companion", "50+ Languages", "Instant Responses", "Privacy First"].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative">
              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-xl animate-bounce">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl animate-pulse">
                <Play className="h-8 w-8 text-white" />
              </div>

              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  width="800"
                  height="600"
                  alt="VoyageAI Interface"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-2xl -z-10 scale-110"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
