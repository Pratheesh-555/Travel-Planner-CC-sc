"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, CheckCircle, AlertCircle, Utensils, Bed, Coffee, Car, User } from "lucide-react"
import type { Request } from "@/types"

interface RequestLogProps {
  requests: Request[]
}

const getStatusColor = (status: Request["status"]) => {
  switch (status) {
    case "Done":
      return "bg-green-100 text-green-800 border-green-200"
    case "Confirmed":
      return "bg-blue-100 text-blue-800 border-blue-200"
    case "Pending":
      return "bg-yellow-100 text-yellow-800 border-yellow-200"
    default:
      return "bg-gray-100 text-gray-800 border-gray-200"
  }
}

const getStatusIcon = (status: Request["status"]) => {
  switch (status) {
    case "Done":
      return <CheckCircle className="h-4 w-4" />
    case "Confirmed":
      return <Clock className="h-4 w-4" />
    case "Pending":
      return <AlertCircle className="h-4 w-4" />
    default:
      return <Clock className="h-4 w-4" />
  }
}

const getTypeIcon = (type: string) => {
  switch (type.toLowerCase()) {
    case "room service":
      return <Utensils className="h-4 w-4 text-gold-600" />
    case "housekeeping":
      return <Bed className="h-4 w-4 text-gold-600" />
    case "amenities":
      return <Coffee className="h-4 w-4 text-gold-600" />
    case "transportation":
      return <Car className="h-4 w-4 text-gold-600" />
    default:
      return <User className="h-4 w-4 text-gold-600" />
  }
}

export default function RequestLog({ requests }: RequestLogProps) {
  return (
    <Card className="bg-white/80 backdrop-blur-sm border-gold-200 shadow-xl sticky top-8">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-navy-900 flex items-center gap-2">
          <Clock className="h-5 w-5 text-gold-600" />
          Live Request Log
        </CardTitle>
        <p className="text-sm text-gray-600">Last 5 guest requests</p>
      </CardHeader>

      <CardContent className="space-y-4">
        {requests.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <Clock className="h-12 w-12 mx-auto mb-3 opacity-50" />
            <p>No recent requests</p>
          </div>
        ) : (
          requests.map((request) => (
            <div
              key={request.id}
              className="p-4 rounded-lg border border-gold-100 bg-white/50 hover:bg-white/70 transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  {getTypeIcon(request.type)}
                  <span className="font-semibold text-navy-900 text-sm">{request.type}</span>
                </div>
                <Badge
                  variant="outline"
                  className={`text-xs ${getStatusColor(request.status)} flex items-center gap-1`}
                >
                  {getStatusIcon(request.status)}
                  {request.status}
                </Badge>
              </div>

              <p className="text-sm text-gray-700 mb-2 line-clamp-2">{request.description}</p>

              <div className="flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <User className="h-3 w-3" />
                  {request.room}
                </span>
                <span>
                  {request.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </div>
          ))
        )}

        {requests.length > 0 && (
          <div className="text-center pt-4 border-t border-gold-100">
            <p className="text-xs text-gray-500">Updates every 30 seconds</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
