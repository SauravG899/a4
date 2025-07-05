import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { products } from "@/lib/products"
import { Header } from "@/components/header"

// Filter products that are on sale
const saleProducts = products.filter((product) => product.discount)

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

export default function SalePage() {
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
            <Link href="/all-items" className="hover:underline">
              All Items
            </Link>
            <span className="mx-2">/</span>
            <span>Sale</span>
          </nav>

          {/* Page Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-black">
              TOP <span className="text-coral-500">DISCOUNTED</span> ITEMS
            </h1>
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
            {saleProducts.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.slug}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Discount Badge */}
                <div className="relative">
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full z-10">
                    <span className="text-coral-500 font-bold text-sm">{product.discount}</span>
                  </div>
                  <div className="aspect-square bg-gray-100 flex items-center justify-center">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="font-bold text-lg text-black mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{product.description}</p>

                  {/* Rating - show for all products */}
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
