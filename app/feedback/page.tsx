"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Header } from "@/components/header"
import { Star, MessageCircle } from "lucide-react"

interface FeedbackForm {
  visitReason: string
  overallExperience: number
  websiteEase: number
  productSelection: number
  checkoutProcess: number
  mostUsefulFeature: string
  improvements: string
  recommendLikelihood: number
  email: string
  allowContact: boolean
  additionalComments: string
}

export default function FeedbackPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FeedbackForm>({
    visitReason: "",
    overallExperience: 0,
    websiteEase: 0,
    productSelection: 0,
    checkoutProcess: 0,
    mostUsefulFeature: "",
    improvements: "",
    recommendLikelihood: 0,
    email: "",
    allowContact: false,
    additionalComments: "",
  })

  const handleInputChange = (field: keyof FeedbackForm, value: string | number | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Redirect to thank you page
    router.push("/feedback-thank-you")
  }

  const StarRating = ({
    value,
    onChange,
    label,
  }: { value: number; onChange: (rating: number) => void; label: string }) => (
    <div className="space-y-2">
      <Label className="text-sm font-medium text-black">{label}</Label>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button key={star} type="button" onClick={() => onChange(star)} className="focus:outline-none">
            <Star
              className={`h-6 w-6 ${star <= value ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} hover:text-yellow-400 transition-colors`}
            />
          </button>
        ))}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#B2E7DC" }}>
      <Header />

      <main className="px-8 py-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="text-center mb-8">
              <MessageCircle className="h-12 w-12 text-coral-500 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-black mb-2">Share Your Experience</h1>
              <p className="text-gray-600">
                Your feedback helps us improve Clean Theory for everyone. This survey takes about 3 minutes.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Visit Reason */}
              <div>
                <Label className="text-sm font-medium text-black mb-3 block">
                  What brought you to Clean Theory today? *
                </Label>
                <RadioGroup
                  value={formData.visitReason}
                  onValueChange={(value) => handleInputChange("visitReason", value)}
                  required
                >
                  {[
                    "Looking for specific skincare products",
                    "Browsing for new products to try",
                    "Researching ingredients and reviews",
                    "Making a purchase I had planned",
                    "Recommended by someone",
                    "Found through search/social media",
                  ].map((reason) => (
                    <div key={reason} className="flex items-center space-x-2">
                      <RadioGroupItem value={reason} id={reason} />
                      <Label htmlFor={reason} className="text-sm">
                        {reason}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Experience Ratings */}
              <div className="grid md:grid-cols-2 gap-6">
                <StarRating
                  value={formData.overallExperience}
                  onChange={(rating) => handleInputChange("overallExperience", rating)}
                  label="Overall Experience *"
                />
                <StarRating
                  value={formData.websiteEase}
                  onChange={(rating) => handleInputChange("websiteEase", rating)}
                  label="Website Ease of Use *"
                />
                <StarRating
                  value={formData.productSelection}
                  onChange={(rating) => handleInputChange("productSelection", rating)}
                  label="Product Selection *"
                />
                <StarRating
                  value={formData.checkoutProcess}
                  onChange={(rating) => handleInputChange("checkoutProcess", rating)}
                  label="Checkout Process"
                />
              </div>

              {/* Most Useful Feature */}
              <div>
                <Label htmlFor="mostUsefulFeature" className="text-sm font-medium text-black">
                  What feature did you find most useful?
                </Label>
                <RadioGroup
                  value={formData.mostUsefulFeature}
                  onValueChange={(value) => handleInputChange("mostUsefulFeature", value)}
                >
                  {[
                    "Product search and filters",
                    "Detailed product information",
                    "Customer reviews and ratings",
                    "Shopping cart and checkout",
                    "Category organization",
                    "Sale and discount information",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <RadioGroupItem value={feature} id={feature} />
                      <Label htmlFor={feature} className="text-sm">
                        {feature}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Improvements */}
              <div>
                <Label htmlFor="improvements" className="text-sm font-medium text-black">
                  What could we improve?
                </Label>
                <Textarea
                  id="improvements"
                  placeholder="Tell us about any issues you encountered or features you'd like to see..."
                  value={formData.improvements}
                  onChange={(e) => handleInputChange("improvements", e.target.value)}
                  rows={3}
                />
              </div>

              {/* Recommendation */}
              <div>
                <Label className="text-sm font-medium text-black mb-3 block">
                  How likely are you to recommend Clean Theory to others? *
                </Label>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Not likely</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((score) => (
                      <button
                        key={score}
                        type="button"
                        onClick={() => handleInputChange("recommendLikelihood", score)}
                        className={`w-8 h-8 rounded text-sm font-medium transition-colors ${
                          score <= formData.recommendLikelihood
                            ? "bg-coral-500 text-white"
                            : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                        }`}
                      >
                        {score}
                      </button>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">Very likely</span>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-black">
                    Email (optional)
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="allowContact"
                    checked={formData.allowContact}
                    onCheckedChange={(checked) => handleInputChange("allowContact", checked as boolean)}
                  />
                  <Label htmlFor="allowContact" className="text-sm">
                    It's okay to contact me about my feedback
                  </Label>
                </div>
              </div>

              {/* Additional Comments */}
              <div>
                <Label htmlFor="additionalComments" className="text-sm font-medium text-black">
                  Anything else you'd like to share?
                </Label>
                <Textarea
                  id="additionalComments"
                  placeholder="Additional thoughts, compliments, or suggestions..."
                  value={formData.additionalComments}
                  onChange={(e) => handleInputChange("additionalComments", e.target.value)}
                  rows={3}
                />
              </div>

              <Button
                type="submit"
                disabled={
                  isSubmitting ||
                  !formData.visitReason ||
                  !formData.overallExperience ||
                  !formData.websiteEase ||
                  !formData.productSelection ||
                  !formData.recommendLikelihood
                }
                className="w-full bg-coral-500 hover:bg-coral-600 text-white py-3"
              >
                {isSubmitting ? "Submitting..." : "Submit Feedback"}
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
