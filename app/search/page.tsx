"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Star, Search, Filter } from "lucide-react"
import { products } from "@/lib/products"
import { Header } from "@/components/header"

interface SearchFilters {
  query: string
  category: string[]
  priceRange: [number, number]
  skinType: string[]
  keyIngredients: string[]
  rating: number
  onSale: boolean
  popular: boolean
}

const skinTypes = ["Sensitive", "Dry", "Oily", "Combination", "Acne-Prone", "Normal"]
const allIngredients = [
  "Hyaluronic Acid",
  "Ceramides",
  "Niacinamide",
  "Salicylic Acid",
  "Vitamin E",
  "Aloe Vera",
  "Tea Tree Oil",
  "Glycerin",
  "Colloidal Oatmeal",
  "Lactic Acid",
]

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

export default function SearchPage() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get("q") || ""

  const [filters, setFilters] = useState<SearchFilters>({
    query: initialQuery,
    category: [],
    priceRange: [0, 50],
    skinType: [],
    keyIngredients: [],
    rating: 0,
    onSale: false,
    popular: false,
  })

  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Text search
      if (
        filters.query &&
        !product.name.toLowerCase().includes(filters.query.toLowerCase()) &&
        !product.description.toLowerCase().includes(filters.query.toLowerCase()) &&
        !product.keyIngredients.some((ing) => ing.toLowerCase().includes(filters.query.toLowerCase()))
      ) {
        return false
      }

      // Category filter
      if (filters.category.length > 0 && !filters.category.includes(product.category)) {
        return false
      }

      // Price range
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false
      }

      // Skin type (based on product description and key ingredients)
      if (filters.skinType.length > 0) {
        const productText =
          `${product.description} ${product.longDescription} ${product.keyIngredients.join(" ")}`.toLowerCase()
        const matchesSkinType = filters.skinType.some((type) => {
          switch (type) {
            case "Sensitive":
              return productText.includes("sensitive") || productText.includes("gentle")
            case "Dry":
              return productText.includes("dry") || productText.includes("hydrat") || productText.includes("moistur")
            case "Oily":
              return (
                productText.includes("oily") || productText.includes("oil control") || productText.includes("sebum")
              )
            case "Combination":
              return productText.includes("combination") || productText.includes("balance")
            case "Acne-Prone":
              return (
                productText.includes("acne") || productText.includes("breakout") || productText.includes("salicylic")
              )
            case "Normal":
              return !productText.includes("sensitive") && !productText.includes("dry") && !productText.includes("oily")
            default:
              return false
          }
        })
        if (!matchesSkinType) return false
      }

      // Key ingredients
      if (filters.keyIngredients.length > 0) {
        const hasIngredient = filters.keyIngredients.some(
          (ingredient) =>
            product.keyIngredients.some((prodIng) => prodIng.toLowerCase().includes(ingredient.toLowerCase())) ||
            product.ingredients.toLowerCase().includes(ingredient.toLowerCase()),
        )
        if (!hasIngredient) return false
      }

      // Rating filter
      if (filters.rating > 0 && product.rating < filters.rating) {
        return false
      }

      // On sale filter
      if (filters.onSale && !product.discount) {
        return false
      }

      // Popular filter
      if (filters.popular && !product.isPopular) {
        return false
      }

      return true
    })
  }, [filters])

  const updateFilter = (key: keyof SearchFilters, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const toggleArrayFilter = (key: "category" | "skinType" | "keyIngredients", value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key].includes(value) ? prev[key].filter((item) => item !== value) : [...prev[key], value],
    }))
  }

  const clearFilters = () => {
    setFilters({
      query: "",
      category: [],
      priceRange: [0, 50],
      skinType: [],
      keyIngredients: [],
      rating: 0,
      onSale: false,
      popular: false,
    })
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#B2E7DC" }}>
      <Header />

      <main className="px-8 py-6">
        <div className="max-w-7xl mx-auto">
          {/* Search Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-black mb-4">Search Products</h1>
            <div className="flex gap-4 items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search products, ingredients, skin concerns..."
                  value={filters.query}
                  onChange={(e) => updateFilter("query", e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button
                onClick={() => setShowFilters(!showFilters)}
                variant="outline"
                className="bg-white border-gray-300 text-black hover:bg-gray-50"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className={`lg:block ${showFilters ? "block" : "hidden"} bg-white rounded-lg p-6 shadow-md h-fit`}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-black">Filters</h2>
                <Button onClick={clearFilters} variant="ghost" size="sm" className="text-coral-500">
                  Clear All
                </Button>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <Label className="text-sm font-medium text-black mb-3 block">Category</Label>
                <div className="space-y-2">
                  {["Face Wash", "Hand Soaps", "Body Wash"].map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        id={category}
                        checked={filters.category.includes(category)}
                        onCheckedChange={() => toggleArrayFilter("category", category)}
                      />
                      <Label htmlFor={category} className="text-sm">
                        {category} ({products.filter((p) => p.category === category).length})
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <Label className="text-sm font-medium text-black mb-3 block">
                  Price Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}
                </Label>
                <Slider
                  value={filters.priceRange}
                  onValueChange={(value) => updateFilter("priceRange", value as [number, number])}
                  max={50}
                  min={0}
                  step={1}
                  className="w-full"
                />
              </div>

              {/* Skin Type */}
              <div className="mb-6">
                <Label className="text-sm font-medium text-black mb-3 block">Skin Type</Label>
                <div className="space-y-2">
                  {skinTypes.map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox
                        id={type}
                        checked={filters.skinType.includes(type)}
                        onCheckedChange={() => toggleArrayFilter("skinType", type)}
                      />
                      <Label htmlFor={type} className="text-sm">
                        {type}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Ingredients */}
              <div className="mb-6">
                <Label className="text-sm font-medium text-black mb-3 block">Key Ingredients</Label>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {allIngredients.map((ingredient) => (
                    <div key={ingredient} className="flex items-center space-x-2">
                      <Checkbox
                        id={ingredient}
                        checked={filters.keyIngredients.includes(ingredient)}
                        onCheckedChange={() => toggleArrayFilter("keyIngredients", ingredient)}
                      />
                      <Label htmlFor={ingredient} className="text-sm">
                        {ingredient}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <Label className="text-sm font-medium text-black mb-3 block">Minimum Rating</Label>
                <RadioGroup
                  value={filters.rating.toString()}
                  onValueChange={(value) => updateFilter("rating", Number.parseInt(value))}
                >
                  {[4, 3, 2, 1, 0].map((rating) => (
                    <div key={rating} className="flex items-center space-x-2">
                      <RadioGroupItem value={rating.toString()} id={`rating-${rating}`} />
                      <Label htmlFor={`rating-${rating}`} className="flex items-center text-sm">
                        {rating > 0 ? (
                          <>
                            {[...Array(rating)].map((_, i) => (
                              <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            ))}
                            <span className="ml-1">& up</span>
                          </>
                        ) : (
                          "All ratings"
                        )}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Special Filters */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="onSale"
                    checked={filters.onSale}
                    onCheckedChange={(checked) => updateFilter("onSale", checked)}
                  />
                  <Label htmlFor="onSale" className="text-sm">
                    On Sale
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="popular"
                    checked={filters.popular}
                    onCheckedChange={(checked) => updateFilter("popular", checked)}
                  />
                  <Label htmlFor="popular" className="text-sm">
                    Popular Items
                  </Label>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-600">
                  {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""} found
                  {filters.query && ` for "${filters.query}"`}
                </p>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600 mb-4">No products found matching your criteria.</p>
                  <Button onClick={clearFilters} className="bg-gray-600 hover:bg-gray-700 text-white">
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={`/product/${product.slug}`}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
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
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
