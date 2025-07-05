import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { getProductsByCategory } from "@/lib/products"
import { Header } from "@/components/header"

const handSoapProducts = getProductsByCategory("Hand Soaps")

function StarRating({ rating, reviews }: { rating: number; reviews: string }) {
  return (
    <div className="flex items-center gap-1 mb-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
        />
      ))}
      <span className="text-sm text-gray-600 ml-1">({reviews})</span>
    </div>
  )
}

export default function HandSoapsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-200 to-emerald-300">
      <Header />

      {/* Main Content */}
      <main className="px-8 py-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-black mb-6">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Hand Soaps</span>
          </nav>

          {/* Page Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-black mb-2">HAND SOAPS</h1>
              <p className="text-lg text-gray-700">Premium hand care for clean, soft, and healthy hands</p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="bg-white border-gray-300 text-black hover:bg-gray-50">
                Filters
              </Button>
              <Button variant="outline" className="bg-white border-gray-300 text-black hover:bg-gray-50">
                Sort by
              </Button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {handSoapProducts.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.slug}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Discount Badge */}
                {product.discount && (
                  <div className="relative">
                    <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full z-10">
                      <span className="text-coral-500 font-bold text-sm">{product.discount}</span>
                    </div>
                  </div>
                )}

                {/* Popular Badge */}
                {product.isPopular && (
                  <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full z-10">
                    <span className="text-xs font-medium">Popular</span>
                  </div>
                )}

                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="font-bold text-lg text-black mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{product.description}</p>

                  <StarRating rating={product.rating} reviews={product.reviews} />

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-lg">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
