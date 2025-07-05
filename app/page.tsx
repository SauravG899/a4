import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-200 to-emerald-300">
      <Header />

      {/* Hero Section */}
      <main className="relative px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-8xl lg:text-9xl font-bold text-white leading-none tracking-wider">SUMMER</h1>
                <h1 className="text-8xl lg:text-9xl font-bold text-white leading-none tracking-wider -mt-4">SALE</h1>
              </div>

              <p className="text-coral-500 text-xl italic font-medium">*ends July 6th</p>

              <Button
                className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-medium rounded-full shadow-lg"
                size="lg"
              >
                SHOP NOW
              </Button>
            </div>

            {/* Right side - Hero image */}
            <div className="relative">
              <Image
                src="/hero-hands-soap.png"
                alt="Hands holding white soap with bubbles"
                width={600}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
