import type React from "react"
import type { Metadata } from "next"
import { Kumbh_Sans } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/contexts/cart-context"
import { CartSidebar } from "@/components/cart-sidebar"

const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-kumbh-sans",
})

export const metadata: Metadata = {
  title: "Clean Theory",
  description: "Premium skincare products for sensitive skin",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={kumbhSans.className}>
        <CartProvider>
          {children}
          <CartSidebar />
        </CartProvider>
      </body>
    </html>
  )
}
