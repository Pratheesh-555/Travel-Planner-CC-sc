"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react"

export default function CallToAction() {
  const handleGetStarted = () => {
    alert("Get started functionality - would redirect to signup/onboarding flow")
  }

  const handleScheduleDemo = () => {
    alert("Schedule demo functionality - would open calendar booking widget")
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white">
              <Sparkles className="h-5 w-5" />
              <span className="font-medium">Ready to Transform Your Travel?</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Start Your AI-Powered
              <span className="block">Journey Today</span>
            </h2>

            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Join thousands of travelers who have revolutionized their experiences with intelligent AI assistance. Your
              personal travel genius awaits.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              onClick={handleGetStarted}
              className="bg-white text-blue-600 hover:bg-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 px-10 py-6 text-lg font-semibold"
            >
              Get Started Free
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={handleScheduleDemo}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent backdrop-blur-sm transition-all duration-300 px-10 py-6 text-lg font-semibold"
            >
              Schedule Personal Demo
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 text-blue-100 pt-8">
            {["Free 14-day trial", "No credit card required", "Setup in 2 minutes", "24/7 support included"].map(
              (feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-300" />
                  <span className="font-medium">{feature}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
