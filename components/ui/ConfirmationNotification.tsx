"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, X, Smartphone } from "lucide-react"

interface ConfirmationNotificationProps {
  show: boolean
  message: string
  onClose: () => void
}

export default function ConfirmationNotification({ show, message, onClose }: ConfirmationNotificationProps) {
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
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>

            <div className="flex-1 space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-navy-900 text-sm">Request Confirmed</h4>
                  <p className="text-sm text-gray-600 mt-1">{message}</p>
                </div>
                <Button variant="ghost" size="sm" onClick={onClose} className="h-6 w-6 p-0 hover:bg-gray-100">
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Smartphone className="h-3 w-3" />
                <span>SMS notification sent to your phone</span>
              </div>

              <div className="text-xs text-green-600 font-medium">Estimated completion: 15-20 minutes</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
