"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, Minus, Plus, ArrowLeft } from "lucide-react"
import { getProductBySlug } from "@/lib/products"
import { useParams, useRouter } from "next/navigation"
import { useCart } from "@/contexts/cart-context"
import { Header } from "@/components/header"

function StarRating({ rating, reviews }: { rating: number; reviews: string }) {
  return (
    <div className="flex items-center gap-1 mb-4">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-5 w-5 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
        />
      ))}
      <span className="text-sm text-gray-600 ml-2">({reviews})</span>
      <Link href="#reviews" className="text-sm text-black underline ml-4">
        See Reviews
      </Link>
    </div>
  )
}

export default function ProductPage() {
  const params = useParams()
  const router = useRouter()
  const [quantity, setQuantity] = useState(1)
  const { addItem, openCart } = useCart()

  const product = getProductBySlug(params.slug as string)

  if (!product) {
    return <div>Product not found</div>
  }

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change))
  }

  const handleAddToCart = () => {
    addItem(product, quantity)
    openCart()
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#B2E7DC" }}>
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
            <Link href="/face-wash" className="hover:underline">
              {product.category}
            </Link>
          </nav>

          {/* Category Title */}
          <h1 className="text-2xl font-bold text-black mb-8">{product.category.toUpperCase()}</h1>

          {/* Product Details */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Product Image */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-4xl font-bold text-black mb-2">{product.name}</h2>
                  <p className="text-xl text-gray-700 mb-4">{product.description}</p>
                  {product.isPopular && (
                    <span className="inline-block border border-black px-3 py-1 text-sm font-medium">Popular</span>
                  )}
                </div>
                <Button variant="ghost" onClick={() => router.back()} className="text-black hover:bg-white/20">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </div>

              <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Price and Purchase Controls */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-black">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-300 rounded">
                    <Button variant="ghost" size="sm" onClick={() => handleQuantityChange(-1)} className="px-3 py-2">
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="px-4 py-2 font-medium">{quantity}</span>
                    <Button variant="ghost" size="sm" onClick={() => handleQuantityChange(1)} className="px-3 py-2">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <Button
                  onClick={handleAddToCart}
                  className="w-full bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 text-lg"
                >
                  ADD TO CART
                </Button>

                <StarRating rating={product.rating} reviews={product.reviews} />
              </div>
            </div>

            {/* Right side - Product Information */}
            <div className="space-y-6">
              <div>
                <div className="prose prose-gray max-w-none">
                  {product.longDescription.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                      {paragraph.split(/(\*\*.*?\*\*)/g).map((part, i) => {
                        if (part.startsWith("**") && part.endsWith("**")) {
                          const text = part.slice(2, -2)
                          return (
                            <strong key={i} className="font-bold text-black">
                              {text}
                            </strong>
                          )
                        }
                        // Highlight key ingredients
                        let highlightedText = part
                        product.keyIngredients.forEach((ingredient) => {
                          const regex = new RegExp(`\\b${ingredient}\\b`, "gi")
                          highlightedText = highlightedText.replace(regex, `**${ingredient}**`)
                        })

                        return highlightedText.split(/(\*\*.*?\*\*)/g).map((subPart, j) => {
                          if (subPart.startsWith("**") && subPart.endsWith("**")) {
                            const text = subPart.slice(2, -2)
                            return (
                              <strong key={j} className="font-bold text-black">
                                {text}
                              </strong>
                            )
                          }
                          return subPart
                        })
                      })}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg text-black mb-3 underline">Ingredients:</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{product.ingredients}</p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-black mb-3">Free From:</h3>
                <p className="text-gray-700 text-sm">{product.freeFrom.join(", ")}.</p>
              </div>

              <div className="bg-white/50 p-4 rounded-lg">
                <p className="text-gray-700 text-sm italic">
                  Let me know if you'd like a "hero ingredients" spotlight section or if you want versions for face
                  wash, hand soap, or sensitive skin products!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
