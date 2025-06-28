"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Settings, Users, BarChart3, ExternalLink } from "lucide-react"

export default function StaffDashboard() {
  const handleDashboardAccess = () => {
    alert("Staff dashboard would open here - showing real-time incoming orders and management interface")
  }

  return (
    <Card className="bg-gradient-to-r from-navy-50 to-blue-50 border-navy-200 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-navy-900 flex items-center gap-2">
          <Settings className="h-5 w-5 text-navy-600" />
          Staff Dashboard Access
        </CardTitle>
        <p className="text-gray-600">Real-time order management and guest request monitoring</p>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-white/50 rounded-lg">
            <Users className="h-8 w-8 text-navy-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-navy-900">24</div>
            <div className="text-sm text-gray-600">Active Guests</div>
          </div>
          <div className="text-center p-4 bg-white/50 rounded-lg">
            <BarChart3 className="h-8 w-8 text-gold-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-navy-900">12</div>
            <div className="text-sm text-gray-600">Pending Orders</div>
          </div>
          <div className="text-center p-4 bg-white/50 rounded-lg">
            <Settings className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-navy-900">98%</div>
            <div className="text-sm text-gray-600">Response Rate</div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-navy-900">Dashboard Features:</h4>
            <Badge variant="outline" className="border-green-300 text-green-700">
              ● Live Updates
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2 text-gray-700">
              <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
              Real-time order notifications
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
              Guest preference tracking
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
              Staff assignment system
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
              Performance analytics
            </div>
          </div>
        </div>

        <Button onClick={handleDashboardAccess} className="w-full bg-navy-900 hover:bg-navy-800 text-white">
          <ExternalLink className="h-4 w-4 mr-2" />
          Access Staff Dashboard
        </Button>

        <div className="text-center">
          <p className="text-xs text-gray-500">Staff login required • Secure access only</p>
        </div>
      </CardContent>
    </Card>
  )
}
