import type React from "react"
export interface ConversationEntry {
  id: number
  type: string
  request: string
  timestamp: Date
  status: "Processing" | "Completed" | "Failed"
  response: string
}

export interface Suggestion {
  id: number
  type: "dining" | "attraction" | "hotel" | "activity"
  title: string
  description: string
  image: string
  rating: number
  price: string
}

export interface QuickAction {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
  action: string
}
