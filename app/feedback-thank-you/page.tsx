import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Heart, Gift } from "lucide-react"
import Link from "next/link"

export default function FeedbackThankYouPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#B2E7DC" }}>
      <Header />

      <main className="px-8 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <Heart className="h-16 w-16 text-coral-500 mx-auto mb-6" />

            <h1 className="text-3xl font-bold text-black mb-4">Thank You!</h1>
            <p className="text-lg text-gray-600 mb-6">
              Your feedback is incredibly valuable to us. We read every response and use your insights to make Clean
              Theory better.
            </p>

            <div className="bg-coral-50 border border-coral-200 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-center mb-2">
                <Gift className="h-5 w-5 text-coral-500 mr-2" />
                <span className="font-medium text-coral-700">Special Offer</span>
              </div>
              <p className="text-sm text-coral-600">
                As a thank you, enjoy 15% off your next order with code <strong>FEEDBACK15</strong>
              </p>
            </div>

            <div className="space-y-4">
              <Link href="/all-products">
                <Button className="w-full bg-gray-600 hover:bg-gray-700 text-white">Continue Shopping</Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="w-full bg-transparent">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
