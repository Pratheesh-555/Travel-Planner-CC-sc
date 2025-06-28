"use client"

import { Sparkles, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const handleLinkClick = (section: string) => {
    alert(`${section} page would be implemented here`)
  }

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                VoyageAI
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Revolutionizing travel experiences with intelligent AI companions that understand, anticipate, and deliver
              exceptional service.
            </p>
            <div className="flex space-x-4">
              {["twitter", "linkedin", "github"].map((social) => (
                <button
                  key={social}
                  onClick={() => handleLinkClick(social)}
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current rounded"></div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Product</h4>
            <ul className="space-y-3">
              {["Features", "Pricing", "Integrations", "API Docs", "Changelog"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleLinkClick(item)}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Careers", "Blog", "Press Kit", "Partners"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleLinkClick(item)}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-5 w-5" />
                <span>hello@voyageai.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="h-5 w-5" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} VoyageAI. All rights reserved.</p>
          <div className="flex space-x-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <button
                key={item}
                onClick={() => handleLinkClick(item)}
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
