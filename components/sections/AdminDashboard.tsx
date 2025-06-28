"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Settings, BarChart3, Users, Activity, ExternalLink } from "lucide-react"

export default function AdminDashboard() {
  const handleDashboardAccess = () => {
    alert("Admin dashboard would open - showing all user requests, analytics, and system management")
  }

  return (
    <Card className="bg-gradient-to-br from-sky-50 to-blue-50 border-sky-200 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-sky-900 flex items-center gap-2">
          <Settings className="h-5 w-5 text-sky-600" />
          Admin Dashboard
        </CardTitle>
        <p className="text-gray-600 text-sm">Real-time system monitoring and analytics</p>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="text-center p-3 bg-white/70 rounded-lg">
            <Users className="h-6 w-6 text-sky-600 mx-auto mb-1" />
            <div className="text-lg font-bold text-sky-900">1,247</div>
            <div className="text-xs text-gray-600">Active Users</div>
          </div>
          <div className="text-center p-3 bg-white/70 rounded-lg">
            <Activity className="h-6 w-6 text-green-600 mx-auto mb-1" />
            <div className="text-lg font-bold text-sky-900">89</div>
            <div className="text-xs text-gray-600">Requests/Hour</div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-sky-900">System Status:</span>
            <Badge className="bg-green-100 text-green-700 border-green-200">● All Systems Operational</Badge>
          </div>

          <div className="space-y-1 text-xs text-gray-600">
            <div className="flex justify-between">
              <span>Voice AI Response Time:</span>
              <span className="font-medium">0.3s avg</span>
            </div>
            <div className="flex justify-between">
              <span>Booking Success Rate:</span>
              <span className="font-medium">97.2%</span>
            </div>
            <div className="flex justify-between">
              <span>User Satisfaction:</span>
              <span className="font-medium">4.8/5.0</span>
            </div>
          </div>
        </div>

        <Button onClick={handleDashboardAccess} className="w-full bg-sky-900 hover:bg-sky-800 text-white">
          <BarChart3 className="h-4 w-4 mr-2" />
          Access Full Dashboard
          <ExternalLink className="h-4 w-4 ml-2" />
        </Button>

        <div className="text-center">
          <p className="text-xs text-gray-500">Admin access required • Secure login</p>
        </div>
      </CardContent>
    </Card>
  )
}
