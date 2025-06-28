"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MapPin, DollarSign, Heart, ExternalLink } from "lucide-react"
import Image from "next/image"
import type { Suggestion } from "@/types"

interface PersonalizedSuggestionsProps {
  suggestions: Suggestion[]
}

const getSuggestionIcon = (type: Suggestion["type"]) => {
  switch (type) {
    case "dining":
      return "🍽️"
    case "attraction":
      return "🎭"
    case "hotel":
      return "🏨"
    case "activity":
      return "🎯"
    default:
      return "📍"
  }
}

const getSuggestionColor = (type: Suggestion["type"]) => {
  switch (type) {
    case "dining":
      return "bg-red-100 text-red-700"
    case "attraction":
      return "bg-purple-100 text-purple-700"
    case "hotel":
      return "bg-gold-100 text-gold-700"
    case "activity":
      return "bg-green-100 text-green-700"
    default:
      return "bg-gray-100 text-gray-700"
  }
}

export default function PersonalizedSuggestions({ suggestions }: PersonalizedSuggestionsProps) {
  const handleBookNow = (suggestion: Suggestion) => {
    alert(`Booking ${suggestion.title} - This would integrate with booking systems`)
  }

  const handleLearnMore = (suggestion: Suggestion) => {
    alert(`Learn more about ${suggestion.title} - This would show detailed information`)
  }

  return (
    <Card className="bg-white/90 backdrop-blur-sm border-sky-200 shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-sky-900 flex items-center gap-2">
          <Heart className="h-6 w-6 text-red-500" />
          Personalized Suggestions
        </CardTitle>
        <p className="text-gray-600">Based on your recent requests and preferences</p>
      </CardHeader>

      <CardContent>
        <div className="grid md:grid-cols-3 gap-6">
          {suggestions.map((suggestion) => (
            <Card key={suggestion.id} className="group hover:shadow-lg transition-all duration-300 border-sky-100">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={suggestion.image || "/placeholder.svg"}
                  alt={suggestion.title}
                  width={200}
                  height={150}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <Badge className={`${getSuggestionColor(suggestion.type)} border-0`}>
                    {getSuggestionIcon(suggestion.type)} {suggestion.type}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                  <Star className="h-3 w-3 text-yellow-500 fill-current" />
                  <span className="text-xs font-semibold">{suggestion.rating}</span>
                </div>
              </div>

              <CardContent className="p-4 space-y-3">
                <div className="space-y-2">
                  <h3 className="font-bold text-sky-900 text-lg leading-tight">{suggestion.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{suggestion.description}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-gold-600">
                    <DollarSign className="h-4 w-4" />
                    <span className="font-semibold">{suggestion.price}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <MapPin className="h-3 w-3" />
                    <span className="text-xs">Paris, France</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button
                    onClick={() => handleBookNow(suggestion)}
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-sky-600 to-gold-500 hover:from-sky-700 hover:to-gold-600 text-white"
                  >
                    Book Now
                  </Button>
                  <Button
                    onClick={() => handleLearnMore(suggestion)}
                    variant="outline"
                    size="sm"
                    className="border-sky-200 hover:border-sky-400 bg-transparent"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-6">
          <Button
            variant="outline"
            className="border-sky-300 text-sky-700 hover:bg-sky-50 bg-transparent"
            onClick={() => alert("More suggestions would be loaded here")}
          >
            View More Suggestions
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
