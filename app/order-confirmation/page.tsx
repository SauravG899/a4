import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { CheckCircle, Package, Truck, Mail } from "lucide-react"
import Link from "next/link"

export default function OrderConfirmationPage() {
  const orderNumber = `CT${Date.now().toString().slice(-6)}`

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#B2E7DC" }}>
      <Header />

      <main className="px-8 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />

            <h1 className="text-3xl font-bold text-black mb-4">Order Confirmed!</h1>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for your purchase. Your order has been successfully placed.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="text-sm text-gray-600">Order Number</p>
              <p className="text-xl font-bold text-black">#{orderNumber}</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center text-sm text-gray-600">
                <Mail className="h-4 w-4 mr-2" />
                Confirmation email sent to your inbox
              </div>
              <div className="flex items-center justify-center text-sm text-gray-600">
                <Package className="h-4 w-4 mr-2" />
                Order will be processed within 1-2 business days
              </div>
              <div className="flex items-center justify-center text-sm text-gray-600">
                <Truck className="h-4 w-4 mr-2" />
                Estimated delivery: 3-5 business days
              </div>
            </div>

            <div className="space-y-4">
              <Link href="/feedback">
                <Button className="w-full bg-coral-500 hover:bg-coral-600 text-white">Share Your Experience</Button>
              </Link>
              <Link href="/all-products">
                <Button variant="outline" className="w-full bg-transparent">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
