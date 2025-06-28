"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Plane, Hotel, Utensils, MapPin, CheckCircle, Loader, AlertCircle } from "lucide-react"
import type { ConversationEntry } from "@/types"

interface ConversationLogProps {
  conversations: ConversationEntry[]
}

const getTypeIcon = (type: string) => {
  switch (type.toLowerCase()) {
    case "flight":
      return <Plane className="h-4 w-4 text-sky-600" />
    case "hotel":
      return <Hotel className="h-4 w-4 text-gold-600" />
    case "dining":
      return <Utensils className="h-4 w-4 text-cream-600" />
    case "itinerary":
      return <MapPin className="h-4 w-4 text-green-600" />
    default:
      return <MapPin className="h-4 w-4 text-gray-600" />
  }
}

const getStatusIcon = (status: ConversationEntry["status"]) => {
  switch (status) {
    case "Completed":
      return <CheckCircle className="h-4 w-4 text-green-600" />
    case "Processing":
      return <Loader className="h-4 w-4 text-blue-600 animate-spin" />
    case "Failed":
      return <AlertCircle className="h-4 w-4 text-red-600" />
    default:
      return <Clock className="h-4 w-4 text-gray-600" />
  }
}

const getStatusColor = (status: ConversationEntry["status"]) => {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-800 border-green-200"
    case "Processing":
      return "bg-blue-100 text-blue-800 border-blue-200"
    case "Failed":
      return "bg-red-100 text-red-800 border-red-200"
    default:
      return "bg-gray-100 text-gray-800 border-gray-200"
  }
}

export default function ConversationLog({ conversations }: ConversationLogProps) {
  return (
    <Card className="bg-white/90 backdrop-blur-sm border-sky-200 shadow-xl sticky top-8">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-sky-900 flex items-center gap-2">
          <Clock className="h-5 w-5 text-gold-600" />
          Live Conversation Log
        </CardTitle>
        <p className="text-sm text-gray-600">Your recent travel requests</p>
      </CardHeader>

      <CardContent className="space-y-4">
        {conversations.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <Clock className="h-12 w-12 mx-auto mb-3 opacity-50" />
            <p>No conversations yet</p>
            <p className="text-sm">Start by asking for travel help!</p>
          </div>
        ) : (
          conversations.map((conversation) => (
            <div
              key={conversation.id}
              className="p-4 rounded-xl border border-sky-100 bg-gradient-to-r from-white to-sky-50 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  {getTypeIcon(conversation.type)}
                  <span className="font-semibold text-sky-900 text-sm">{conversation.type}</span>
                </div>
                <Badge
                  variant="outline"
                  className={`text-xs ${getStatusColor(conversation.status)} flex items-center gap-1`}
                >
                  {getStatusIcon(conversation.status)}
                  {conversation.status}
                </Badge>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-gray-700 font-medium line-clamp-2">{conversation.request}</p>
                <p className="text-xs text-gray-600 italic">{conversation.response}</p>
              </div>

              <div className="flex items-center justify-between mt-3 pt-2 border-t border-sky-100">
                <span className="text-xs text-gray-500">
                  {conversation.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
                {conversation.status === "Processing" && (
                  <span className="text-xs text-blue-600 animate-pulse">Processing...</span>
                )}
              </div>
            </div>
          ))
        )}

        {conversations.length > 0 && (
          <div className="text-center pt-4 border-t border-sky-100">
            <p className="text-xs text-gray-500">Updates in real-time</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
