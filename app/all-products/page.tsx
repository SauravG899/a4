import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { products } from "@/lib/products"
import { Header } from "@/components/header"

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

export default function AllProductsPage() {
  // Group products by category for better organization
  const faceWashProducts = products.filter((p) => p.category === "Face Wash")
  const handSoapProducts = products.filter((p) => p.category === "Hand Soaps")
  const bodyWashProducts = products.filter((p) => p.category === "Body Wash")

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
            <span>All Products</span>
          </nav>

          {/* Page Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-black mb-2">ALL PRODUCTS</h1>
              <p className="text-lg text-gray-700">Discover our complete collection of premium skincare products</p>
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

          {/* Category Navigation */}
          <div className="flex gap-4 mb-8 overflow-x-auto">
            <Button
              variant="outline"
              className="bg-white border-gray-300 text-black hover:bg-gray-50 whitespace-nowrap"
            >
              All ({products.length})
            </Button>
            <Link href="/face-wash">
              <Button
                variant="outline"
                className="bg-white border-gray-300 text-black hover:bg-gray-50 whitespace-nowrap"
              >
                Face Wash ({faceWashProducts.length})
              </Button>
            </Link>
            <Link href="/hand-soaps">
              <Button
                variant="outline"
                className="bg-white border-gray-300 text-black hover:bg-gray-50 whitespace-nowrap"
              >
                Hand Soaps ({handSoapProducts.length})
              </Button>
            </Link>
            <Link href="/body-wash">
              <Button
                variant="outline"
                className="bg-white border-gray-300 text-black hover:bg-gray-50 whitespace-nowrap"
              >
                Body Wash ({bodyWashProducts.length})
              </Button>
            </Link>
            <Link href="/sale">
              <Button
                variant="outline"
                className="bg-coral-500 border-coral-500 text-white hover:bg-coral-600 whitespace-nowrap"
              >
                Sale Items
              </Button>
            </Link>
          </div>

          {/* Face Wash Section */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-black">Face Wash</h2>
              <Link href="/face-wash" className="text-black hover:underline font-medium">
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {faceWashProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.slug}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Badges */}
                  <div className="relative">
                    {product.discount && (
                      <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full z-10">
                        <span className="text-coral-500 font-bold text-sm">{product.discount}</span>
                      </div>
                    )}
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
          </section>

          {/* Hand Soaps Section */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-black">Hand Soaps</h2>
              <Link href="/hand-soaps" className="text-black hover:underline font-medium">
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {handSoapProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.slug}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Badges */}
                  <div className="relative">
                    {product.discount && (
                      <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full z-10">
                        <span className="text-coral-500 font-bold text-sm">{product.discount}</span>
                      </div>
                    )}
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
          </section>

          {/* Body Wash Section */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-black">Body Wash</h2>
              <Link href="/body-wash" className="text-black hover:underline font-medium">
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {bodyWashProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.slug}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Badges */}
                  <div className="relative">
                    {product.discount && (
                      <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full z-10">
                        <span className="text-coral-500 font-bold text-sm">{product.discount}</span>
                      </div>
                    )}
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
          </section>
        </div>
      </main>
    </div>
  )
}
