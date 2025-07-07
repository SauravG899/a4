"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { useCart } from "@/contexts/cart-context"
import { Header } from "@/components/header"
import Image from "next/image"
import { ArrowLeft, CreditCard, Truck, Shield } from "lucide-react"
import Link from "next/link"

interface CheckoutForm {
  email: string
  firstName: string
  lastName: string
  address: string
  city: string
  state: string
  zipCode: string
  phone: string
  paymentMethod: string
  cardNumber: string
  expiryDate: string
  cvv: string
  nameOnCard: string
  specialInstructions: string
  newsletter: boolean
}

export default function CheckoutPage() {
  const { state, getTotalPrice, clearCart } = useCart()
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [isProcessing, setIsProcessing] = useState(false)
  const [formData, setFormData] = useState<CheckoutForm>({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    paymentMethod: "credit",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
    specialInstructions: "",
    newsletter: false,
  })

  const handleInputChange = (field: keyof CheckoutForm, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmitOrder = async () => {
    setIsProcessing(true)
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Clear cart and redirect to confirmation
    clearCart()
    router.push("/order-confirmation")
  }

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: "#B2E7DC" }}>
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-black mb-4">Your cart is empty</h1>
            <Link href="/all-products">
              <Button className="bg-gray-600 hover:bg-gray-700 text-white">Continue Shopping</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#B2E7DC" }}>
      <Header />

      <main className="px-8 py-6">
        <div className="max-w-6xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      step <= currentStep ? "bg-black text-white" : "bg-white text-gray-400"
                    }`}
                  >
                    {step}
                  </div>
                  {step < 4 && <div className="w-12 h-0.5 bg-gray-300 mx-2" />}
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-2">
              <span className="text-sm text-gray-600">
                Step {currentStep} of 4:{" "}
                {currentStep === 1
                  ? "Cart Review"
                  : currentStep === 2
                    ? "Personal Information"
                    : currentStep === 3
                      ? "Payment"
                      : "Confirmation"}
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Form Steps */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              {/* Step 1: Cart Review */}
              {currentStep === 1 && (
                <div>
                  <h2 className="text-2xl font-bold text-black mb-6">Review Your Order</h2>
                  <div className="space-y-4">
                    {state.items.map((item) => (
                      <div key={item.product.id} className="flex gap-4 p-4 border border-gray-200 rounded-lg">
                        <Image
                          src={item.product.image || "/placeholder.svg"}
                          alt={item.product.name}
                          width={64}
                          height={64}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium">{item.product.name}</h3>
                          <p className="text-sm text-gray-600">{item.product.description}</p>
                          <div className="flex justify-between items-center mt-2">
                            <span className="text-sm">Qty: {item.quantity}</span>
                            <span className="font-bold">${(item.product.price * item.quantity).toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-end mt-6">
                    <Button onClick={handleNextStep} className="bg-gray-600 hover:bg-gray-700 text-white">
                      Continue to Personal Info
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 2: Personal Information */}
              {currentStep === 2 && (
                <div>
                  <h2 className="text-2xl font-bold text-black mb-6">Personal Information</h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="address">Address *</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => handleInputChange("city", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State *</Label>
                        <Input
                          id="state"
                          value={formData.state}
                          onChange={(e) => handleInputChange("state", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="zipCode">ZIP Code *</Label>
                        <Input
                          id="zipCode"
                          value={formData.zipCode}
                          onChange={(e) => handleInputChange("zipCode", e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between mt-6">
                    <Button onClick={handlePrevStep} variant="outline">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back
                    </Button>
                    <Button onClick={handleNextStep} className="bg-gray-600 hover:bg-gray-700 text-white">
                      Continue to Payment
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Payment */}
              {currentStep === 3 && (
                <div>
                  <h2 className="text-2xl font-bold text-black mb-6">Payment Information</h2>
                  <div className="space-y-6">
                    <RadioGroup
                      value={formData.paymentMethod}
                      onValueChange={(value) => handleInputChange("paymentMethod", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="credit" id="credit" />
                        <Label htmlFor="credit" className="flex items-center">
                          <CreditCard className="h-4 w-4 mr-2" />
                          Credit Card
                        </Label>
                      </div>
                    </RadioGroup>

                    {formData.paymentMethod === "credit" && (
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="nameOnCard">Name on Card *</Label>
                          <Input
                            id="nameOnCard"
                            value={formData.nameOnCard}
                            onChange={(e) => handleInputChange("nameOnCard", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="cardNumber">Card Number *</Label>
                          <Input
                            id="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            value={formData.cardNumber}
                            onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                            required
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiryDate">Expiry Date *</Label>
                            <Input
                              id="expiryDate"
                              placeholder="MM/YY"
                              value={formData.expiryDate}
                              onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV *</Label>
                            <Input
                              id="cvv"
                              placeholder="123"
                              value={formData.cvv}
                              onChange={(e) => handleInputChange("cvv", e.target.value)}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    <div>
                      <Label htmlFor="specialInstructions">Special Instructions</Label>
                      <Textarea
                        id="specialInstructions"
                        placeholder="Any special delivery instructions..."
                        value={formData.specialInstructions}
                        onChange={(e) => handleInputChange("specialInstructions", e.target.value)}
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                      />
                      <Label htmlFor="newsletter" className="text-sm">
                        Subscribe to our newsletter for exclusive offers
                      </Label>
                    </div>
                  </div>

                  <div className="flex justify-between mt-6">
                    <Button onClick={handlePrevStep} variant="outline">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back
                    </Button>
                    <Button onClick={handleNextStep} className="bg-gray-600 hover:bg-gray-700 text-white">
                      Review Order
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 4: Confirmation */}
              {currentStep === 4 && (
                <div>
                  <h2 className="text-2xl font-bold text-black mb-6">Order Confirmation</h2>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Shipping Address</h3>
                      <p className="text-sm text-gray-600">
                        {formData.firstName} {formData.lastName}
                        <br />
                        {formData.address}
                        <br />
                        {formData.city}, {formData.state} {formData.zipCode}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Payment Method</h3>
                      <p className="text-sm text-gray-600">Credit Card ending in {formData.cardNumber.slice(-4)}</p>
                    </div>
                    {formData.specialInstructions && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Special Instructions</h3>
                        <p className="text-sm text-gray-600">{formData.specialInstructions}</p>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between mt-6">
                    <Button onClick={handlePrevStep} variant="outline">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back
                    </Button>
                    <Button
                      onClick={handleSubmitOrder}
                      disabled={isProcessing}
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      {isProcessing ? "Processing..." : "Place Order"}
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Order Summary */}
            <div className="bg-white rounded-lg p-6 shadow-md h-fit">
              <h3 className="text-xl font-bold text-black mb-4">Order Summary</h3>
              <div className="space-y-3">
                {state.items.map((item) => (
                  <div key={item.product.id} className="flex justify-between text-sm">
                    <span>
                      {item.product.name} × {item.quantity}
                    </span>
                    <span>${(item.product.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <hr className="my-4" />
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${(getTotalPrice() * 0.08).toFixed(2)}</span>
                </div>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${(getTotalPrice() * 1.08).toFixed(2)}</span>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Truck className="h-4 w-4 mr-2" />
                  Free shipping on orders over $25
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Shield className="h-4 w-4 mr-2" />
                  Secure checkout with SSL encryption
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
