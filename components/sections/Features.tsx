"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mic, Zap, Languages, Brain, Shield, Globe } from "lucide-react"

const features = [
  {
    id: "voice",
    title: "Natural Voice Interface",
    description: "Speak naturally in 50+ languages with human-like understanding",
    icon: Mic,
    color: "bg-blue-500",
    stats: "50+ Languages",
  },
  {
    id: "realtime",
    title: "Lightning Response",
    description: "Sub-second response times with real-time problem solving",
    icon: Zap,
    color: "bg-green-500",
    stats: "<0.5s Response",
  },
  {
    id: "multilingual",
    title: "Global Communication",
    description: "Seamless translation and cultural context awareness",
    icon: Languages,
    color: "bg-purple-500",
    stats: "195 Countries",
  },
  {
    id: "context",
    title: "Memory & Learning",
    description: "Remembers preferences and learns from every interaction",
    icon: Brain,
    color: "bg-orange-500",
    stats: "99.9% Accuracy",
  },
  {
    id: "security",
    title: "Enterprise Security",
    description: "Bank-level encryption with privacy-first architecture",
    icon: Shield,
    color: "bg-red-500",
    stats: "SOC 2 Certified",
  },
  {
    id: "integration",
    title: "Universal Connectivity",
    description: "Integrates with 1000+ travel and hospitality platforms",
    icon: Globe,
    color: "bg-teal-500",
    stats: "1000+ APIs",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 mb-4">
            Advanced AI Capabilities
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powered by
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}
              Next-Gen AI
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built on cutting-edge voice AI technology for natural, intelligent, and secure interactions
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card
                key={feature.id}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-xl ${feature.color} text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="text-xs font-medium">
                      {feature.stats}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
