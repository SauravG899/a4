"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, User, Search } from "lucide-react"
import { useCart } from "@/contexts/cart-context"

export function Header() {
  const { toggleCart, getTotalItems } = useCart()

  return (
    <header className="flex items-center justify-between px-8 py-6">
      <Link href="/" className="text-2xl font-bold text-black" style={{ fontStyle: "italic" }}>
        Clean Theory
      </Link>

      <nav className="flex items-center space-x-8">
        <Link href="/sale" className="text-coral-500 font-semibold hover:text-coral-600">
          SALE
        </Link>
        <Link href="/face-wash" className="text-black font-medium hover:text-gray-700">
          Face Wash
        </Link>
        <Link href="/hand-soaps" className="text-black font-medium hover:text-gray-700">
          Hand Soaps
        </Link>
        <Link href="/body-wash" className="text-black font-medium hover:text-gray-700">
          Body Wash
        </Link>
      </nav>

      <div className="flex items-center space-x-4">
        <Link href="/search">
          <Button variant="ghost" size="icon" className="text-black hover:bg-white/20">
            <Search className="h-6 w-6" />
            <span className="sr-only">Search</span>
          </Button>
        </Link>
        <Button variant="ghost" size="icon" className="text-black hover:bg-white/20">
          <User className="h-6 w-6" />
          <span className="sr-only">Account</span>
        </Button>
        <Button variant="ghost" size="icon" className="text-black hover:bg-white/20 relative" onClick={toggleCart}>
          <ShoppingCart className="h-6 w-6" />
          {getTotalItems() > 0 && (
            <span className="absolute -top-1 -right-1 bg-coral-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
              {getTotalItems()}
            </span>
          )}
          <span className="sr-only">Shopping Cart</span>
        </Button>
      </div>
    </header>
  )
}
