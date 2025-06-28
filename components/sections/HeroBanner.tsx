"use client"

import { useState, useEffect } from "react"
import { Plane, MapPin, Camera, Sparkles } from "lucide-react"
import Image from "next/image"

const travelDestinations = [
  { name: "Paris", image: "/placeholder.svg?height=600&width=1200" },
  { name: "Tokyo", image: "/placeholder.svg?height=600&width=1200" },
  { name: "Bali", image: "/placeholder.svg?height=600&width=1200" },
]

export default function HeroBanner() {
  const [currentDestination, setCurrentDestination] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDestination((prev) => (prev + 1) % travelDestinations.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[70vh] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={travelDestinations[currentDestination].image || "/placeholder.svg"}
          alt={`Travel to ${travelDestinations[currentDestination].name}`}
          fill
          className="object-cover transition-opacity duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-900/70 via-sky-800/50 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center animate-bounce">
        <Plane className="h-8 w-8 text-white" />
      </div>
      <div className="absolute top-32 right-20 w-12 h-12 bg-gold-400/30 rounded-full flex items-center justify-center animate-pulse">
        <Camera className="h-6 w-6 text-white" />
      </div>
      <div className="absolute bottom-32 left-20 w-14 h-14 bg-cream-400/30 rounded-full flex items-center justify-center animate-bounce delay-1000">
        <MapPin className="h-7 w-7 text-white" />
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-gold-300">
                <Sparkles className="h-6 w-6" />
                <span className="text-lg font-medium tracking-wide">AI-POWERED TRAVEL PLANNING</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Plan Your Perfect Trip,
                <span className="block text-gold-300">Just Say It!</span>
              </h1>

              <p className="text-xl md:text-2xl text-sky-100 leading-relaxed max-w-2xl">
                Your intelligent travel companion understands your voice and creates personalized itineraries, books
                hotels, and finds amazing experiences worldwide.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sky-200">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Voice-Powered Planning</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></div>
                  <span>Real-Time Bookings</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cream-400 rounded-full animate-pulse"></div>
                  <span>Personalized Suggestions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Destination Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {travelDestinations.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentDestination(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentDestination ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
