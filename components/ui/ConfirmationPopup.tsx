"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, X, Sparkles, Clock } from "lucide-react"

interface ConfirmationPopupProps {
  show: boolean
  message: string
  onClose: () => void
}

export default function ConfirmationPopup({ show, message, onClose }: ConfirmationPopupProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 4000)
      return () => clearTimeout(timer)
    }
  }, [show, onClose])

  if (!show) return null

  return (
    <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-right duration-300">
      <Card className="bg-white border-green-200 shadow-2xl max-w-sm">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>

            <div className="flex-1 space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-sky-900 text-sm flex items-center gap-1">
                    <Sparkles className="h-4 w-4 text-gold-500" />
                    Request Confirmed!
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">{message}</p>
                </div>
                <Button variant="ghost" size="sm" onClick={onClose} className="h-6 w-6 p-0 hover:bg-gray-100">
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-sky-600">
                  <Clock className="h-3 w-3" />
                  <span>Processing your request...</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div className="bg-gradient-to-r from-sky-500 to-gold-500 h-1 rounded-full animate-pulse w-3/4"></div>
                </div>

                <p className="text-xs text-green-600 font-medium">You'll receive updates in real-time</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
