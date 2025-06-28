"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smartphone, Download, Share } from "lucide-react"
import Image from "next/image"

export default function QRSection() {
  const handleDownloadQR = () => {
    alert("QR code would be downloaded - containing the mobile app link")
  }

  const handleShareLink = () => {
    alert("Share link functionality - would copy mobile app URL to clipboard")
  }

  return (
    <Card className="bg-gradient-to-br from-cream-50 to-gold-50 border-gold-200 shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-xl font-bold text-sky-900 flex items-center justify-center gap-2">
          <Smartphone className="h-5 w-5 text-gold-600" />
          Continue on Mobile
        </CardTitle>
        <p className="text-gray-600 text-sm">Take your travel planning anywhere</p>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="text-center space-y-4">
          <div className="inline-block p-3 bg-white rounded-xl shadow-md">
            <Image
              src="/placeholder.svg?height=120&width=120"
              alt="QR Code for Mobile App"
              width={120}
              height={120}
              className="rounded-lg"
            />
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-sky-900">Scan with your phone camera</p>
            <p className="text-xs text-gray-600">Access your travel plans on the go</p>
          </div>

          <div className="flex gap-2">
            <Button
              onClick={handleDownloadQR}
              variant="outline"
              size="sm"
              className="flex-1 border-gold-300 text-gold-700 hover:bg-gold-50 bg-transparent"
            >
              <Download className="h-4 w-4 mr-1" />
              Download
            </Button>
            <Button
              onClick={handleShareLink}
              variant="outline"
              size="sm"
              className="flex-1 border-sky-300 text-sky-700 hover:bg-sky-50 bg-transparent"
            >
              <Share className="h-4 w-4 mr-1" />
              Share
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
