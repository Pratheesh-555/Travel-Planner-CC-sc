import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          id="omnidimension-web-widget"
          src="https://backend.omnidim.io/web_widget.js?secret_key=12e3fa4e867f916ef70b22e94297f0f1"
          strategy="afterInteractive"
        />
        <style>{`
          #omnidimension-web-widget, .omnidimension-widget-launcher {
            position: fixed !important;
            right: 24px !important;
            bottom: 24px !important;
            z-index: 9999 !important;
          }
        `}</style>
      </body>
    </html>
  )
}
