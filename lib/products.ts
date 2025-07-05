export interface Product {
  id: number
  name: string
  slug: string
  description: string
  longDescription: string
  price: number
  originalPrice?: number
  discount?: string
  rating: number
  reviews: string
  image: string
  category: string
  isPopular?: boolean
  ingredients: string
  freeFrom: string[]
  keyIngredients: string[]
}

export const products: Product[] = [
  // Face Wash Products
  {
    id: 1,
    name: "DermaQuench",
    slug: "dermaquench",
    description: "Quenches dry skin while clearing buildup",
    longDescription:
      "Experience a new standard in gentle cleansing with DermaQuench, a dermatologist-formulated body wash designed to replenish moisture while protecting your skin's natural barrier. Infused with hyaluronic acid, colloidal oatmeal, and provitamin B5, this rich, non-foaming gel wash hydrates deeply without stripping essential oils — making it ideal for dry, sensitive, or eczema-prone skin.\n\nDermaQuench uses a soap-free, pH-balanced formula that soothes irritation, reduces tightness, and leaves your skin feeling soft, smooth, and quenched — never greasy or dry. Fragrance-free, cruelty-free, and clinically tested for daily use.\n\nWhether you're recovering from flare-ups or just seeking lasting comfort, DermaQuench is the daily ritual your skin will thank you for.",
    price: 16.99,
    originalPrice: 24.99,
    discount: "70% OFF",
    rating: 5,
    reviews: "4k+",
    image: "/placeholder.svg?height=400&width=400",
    category: "Face Wash",
    isPopular: true,
    ingredients:
      "Water (Aqua), Glycerin, Cocamidopropyl Betaine, Sodium Lauroyl Sarcosinate, Sodium Hyaluronate (Hyaluronic Acid), Panthenol (Provitamin B5), Avena Sativa (Oat) Kernel Extract, Allantoin, Aloe Barbadensis Leaf Juice, Citric Acid, Disodium EDTA, Caprylyl Glycol, Phenoxyethanol, Ethylhexylglycerin.",
    freeFrom: ["Sulfates (SLS/SLES)", "parabens", "synthetic fragrances", "phthalates", "alcohol", "dyes"],
    keyIngredients: ["hyaluronic acid", "colloidal oatmeal", "provitamin B5"],
  },
  {
    id: 4,
    name: "SkinLogic Foam",
    slug: "skinlogic-foam",
    description: "Logic-driven cleansing for acne-prone skin.",
    longDescription:
      "SkinLogic Foam takes a scientific approach to acne-prone skin care. This intelligent foaming cleanser combines proven acne-fighting ingredients with gentle, skin-barrier supporting components to effectively treat breakouts without over-drying or irritating your skin.\n\nFormulated with salicylic acid, niacinamide, and zinc PCA, this cleanser helps unclog pores, reduce inflammation, and control excess oil production. The gentle foam texture ensures thorough cleansing without stripping your skin's natural protective barrier.\n\nClinically proven to reduce breakouts while maintaining skin comfort and hydration.",
    price: 19.99,
    originalPrice: 30.99,
    discount: "35% OFF",
    rating: 4,
    reviews: "326+",
    image: "/placeholder.svg?height=400&width=400",
    category: "Face Wash",
    isPopular: true,
    ingredients:
      "Water (Aqua), Sodium Cocoyl Isethionate, Cocamidopropyl Betaine, Glycerin, Salicylic Acid, Niacinamide, Zinc PCA, Sodium Methyl Cocoyl Taurate, Panthenol, Allantoin, Sodium Chloride, Citric Acid, Phenoxyethanol, Ethylhexylglycerin.",
    freeFrom: ["Harsh sulfates", "alcohol", "artificial fragrances", "comedogenic ingredients"],
    keyIngredients: ["salicylic acid", "niacinamide", "zinc PCA"],
  },
  {
    id: 3,
    name: "pHase Balance",
    slug: "phase-balance",
    description: "Keeps your skin barrier happy and healthy.",
    longDescription:
      "pHase Balance is scientifically formulated to maintain your skin's optimal pH level while providing gentle yet effective cleansing. This innovative cleanser helps restore and maintain your skin's natural acid mantle, which is crucial for healthy skin barrier function.\n\nEnriched with prebiotics and ceramides, pHase Balance supports your skin's natural microbiome while removing impurities. The balanced formula helps prevent irritation, dryness, and sensitivity that can result from pH imbalance.\n\nIdeal for all skin types, especially those experiencing sensitivity or barrier dysfunction.",
    price: 22.99,
    originalPrice: 35.99,
    discount: "35% OFF",
    rating: 4,
    reviews: "2k+",
    image: "/placeholder.svg?height=400&width=400",
    category: "Face Wash",
    ingredients:
      "Water (Aqua), Sodium Cocoyl Glutamate, Cocamidopropyl Betaine, Glycerin, Ceramide NP, Ceramide AP, Ceramide EOP, Inulin, Alpha-Glucan Oligosaccharide, Sodium Hyaluronate, Lactic Acid, Sodium Lauroyl Lactylate, Cholesterol, Phytosphingosine, Carbomer, Xanthan Gum, Ethylhexylglycerin, Phenoxyethanol.",
    freeFrom: ["Harsh sulfates", "soap", "artificial fragrances", "parabens"],
    keyIngredients: ["ceramides", "prebiotics", "pH balancers"],
  },
  {
    id: 5,
    name: "Clariplex Wash",
    slug: "clariplex-wash",
    description: "Clarifies and preps skin for active treatment.",
    longDescription:
      "Clariplex Wash is the perfect preparatory cleanser for those using active skincare treatments. This clarifying formula gently removes impurities, excess oil, and dead skin cells while preparing your skin to better absorb subsequent treatments.\n\nWith a blend of gentle exfoliating acids and purifying botanicals, Clariplex Wash helps improve skin texture and clarity without causing irritation. The formula is designed to work synergistically with retinoids, AHAs, and other active ingredients.\n\nEssential for anyone serious about their skincare routine and active ingredient efficacy.",
    price: 24.99,
    originalPrice: 29.99,
    discount: "15% OFF",
    rating: 4,
    reviews: "500+",
    image: "/placeholder.svg?height=400&width=400",
    category: "Face Wash",
    ingredients:
      "Water (Aqua), Sodium Cocoyl Glutamate, Cocamidopropyl Betaine, Glycerin, Lactic Acid, Gluconolactone, Willow Bark Extract, Tea Tree Oil, Chamomile Extract, Sodium Benzoate, Potassium Sorbate, Citric Acid.",
    freeFrom: ["Harsh scrubs", "sulfates", "artificial fragrances", "parabens"],
    keyIngredients: ["lactic acid", "willow bark extract", "tea tree oil"],
  },
  {
    id: 6,
    name: "Sebaclean",
    slug: "sebaclean",
    description: "Fights oil, not your face.",
    longDescription:
      "Sebaclean takes a smart approach to oily skin management. Instead of stripping your skin with harsh detergents, this intelligent cleanser works to regulate sebum production while maintaining your skin's natural balance.\n\nFormulated with sebum-regulating peptides, gentle BHAs, and mattifying botanicals, Sebaclean effectively controls shine and prevents clogged pores without triggering rebound oil production. The result is clean, balanced skin that looks and feels healthy.\n\nPerfect for oily and combination skin types seeking long-term oil control without irritation.",
    price: 21.99,
    originalPrice: 24.99,
    discount: "10% OFF",
    rating: 5,
    reviews: "1.4k+",
    image: "/placeholder.svg?height=400&width=400",
    category: "Face Wash",
    ingredients:
      "Water (Aqua), Sodium Cocoyl Isethionate, Cocamidopropyl Betaine, Glycerin, Betaine Salicylate, Oligopeptide-10, Green Tea Extract, Witch Hazel Extract, Niacinamide, Sodium Chloride, Citric Acid, Phenoxyethanol, Ethylhexylglycerin.",
    freeFrom: ["Harsh sulfates", "alcohol", "artificial fragrances", "comedogenic oils"],
    keyIngredients: ["sebum-regulating peptides", "BHA", "green tea extract"],
  },
  {
    id: 7,
    name: "Acufoam Rx",
    slug: "acufoam-rx",
    description: "Lightweight foam for sensitive skin.",
    longDescription:
      "Acufoam Rx is specifically formulated for sensitive and reactive skin types. This ultra-gentle foaming cleanser provides effective cleansing while minimizing the risk of irritation, redness, or sensitivity reactions.\n\nWith a minimal ingredient list featuring soothing botanicals and barrier-supporting lipids, Acufoam Rx cleanses without disrupting your skin's delicate balance. The lightweight foam texture feels comfortable and non-stripping.\n\nDermatologist-tested and recommended for those with rosacea, eczema, or highly sensitive skin.",
    price: 26.99,
    originalPrice: 29.99,
    discount: "10% OFF",
    rating: 4,
    reviews: "2k+",
    image: "/placeholder.svg?height=400&width=400",
    category: "Face Wash",
    ingredients:
      "Water (Aqua), Sodium Cocoyl Glutamate, Cocamidopropyl Betaine, Glycerin, Ceramide NP, Colloidal Oatmeal, Allantoin, Bisabolol, Panthenol, Sodium Chloride, Citric Acid, Phenoxyethanol.",
    freeFrom: ["Fragrances", "essential oils", "sulfates", "parabens", "dyes", "alcohol"],
    keyIngredients: ["ceramides", "colloidal oatmeal", "bisabolol"],
  },

  // Hand Soaps Products
  {
    id: 8,
    name: "Gentle Guard",
    slug: "gentle-guard",
    description: "Antibacterial protection without the harshness",
    longDescription:
      "Gentle Guard provides effective antibacterial protection while maintaining your hands' natural moisture barrier. This innovative hand soap combines powerful antimicrobial agents with nourishing ingredients to keep your hands clean, soft, and protected.\n\nFormulated with benzalkonium chloride and enriched with aloe vera and vitamin E, Gentle Guard eliminates 99.9% of germs without the drying effects of traditional antibacterial soaps. The creamy lather rinses clean, leaving hands feeling smooth and conditioned.\n\nPerfect for frequent hand washing without compromising skin health.",
    price: 12.99,
    rating: 5,
    reviews: "2.1k+",
    image: "/placeholder.svg?height=400&width=400",
    category: "Hand Soaps",
    isPopular: true,
    ingredients:
      "Water (Aqua), Sodium Cocoyl Isethionate, Cocamidopropyl Betaine, Glycerin, Benzalkonium Chloride, Aloe Barbadensis Leaf Juice, Tocopheryl Acetate (Vitamin E), Panthenol, Sodium Chloride, Citric Acid, Phenoxyethanol.",
    freeFrom: ["Triclosan", "harsh sulfates", "artificial fragrances", "parabens", "dyes"],
    keyIngredients: ["benzalkonium chloride", "aloe vera", "vitamin E"],
  },
  {
    id: 9,
    name: "Moisture Lock",
    slug: "moisture-lock",
    description: "Hydrating hand soap for dry, cracked hands",
    longDescription:
      "Moisture Lock is specially formulated for hands that need extra care. This ultra-hydrating hand soap combines gentle cleansing with intensive moisturizing to repair and protect dry, cracked, or overworked hands.\n\nEnriched with shea butter, ceramides, and hyaluronic acid, Moisture Lock creates a protective barrier that locks in moisture while effectively removing dirt and impurities. The rich, creamy formula transforms dry hands into soft, supple skin with every wash.\n\nIdeal for healthcare workers, frequent hand washers, or anyone with chronically dry hands.",
    price: 14.99,
    originalPrice: 18.99,
    discount: "20% OFF",
    rating: 4,
    reviews: "1.8k+",
    image: "/placeholder.svg?height=400&width=400",
    category: "Hand Soaps",
    ingredients:
      "Water (Aqua), Sodium Cocoyl Isethionate, Cocamidopropyl Betaine, Glycerin, Butyrospermum Parkii (Shea) Butter, Ceramide NP, Sodium Hyaluronate, Panthenol, Allantoin, Sodium Chloride, Citric Acid, Phenoxyethanol, Ethylhexylglycerin.",
    freeFrom: ["Sulfates", "artificial fragrances", "parabens", "dyes", "alcohol"],
    keyIngredients: ["shea butter", "ceramides", "hyaluronic acid"],
  },
  {
    id: 10,
    name: "Kitchen Fresh",
    slug: "kitchen-fresh",
    description: "Cuts through grease while caring for hands",
    longDescription:
      "Kitchen Fresh is the perfect hand soap for cooking enthusiasts and busy kitchens. This powerful yet gentle formula effectively removes cooking odors, grease, and food residues while keeping hands soft and moisturized.\n\nFormulated with natural deodorizing agents and grease-cutting surfactants, Kitchen Fresh eliminates stubborn odors from garlic, onions, and fish while nourishing your hands with botanical extracts. The fresh, clean scent leaves hands smelling pleasant without being overpowering.\n\nEssential for anyone who loves to cook but wants to keep their hands in perfect condition.",
    price: 13.99,
    rating: 4,
    reviews: "956+",
    image: "/placeholder.svg?height=400&width=400",
    category: "Hand Soaps",
    ingredients:
      "Water (Aqua), Sodium Cocoyl Isethionate, Cocamidopropyl Betaine, Glycerin, Citrus Limon (Lemon) Extract, Mentha Piperita (Peppermint) Oil, Rosmarinus Officinalis (Rosemary) Extract, Sodium Chloride, Citric Acid, Phenoxyethanol.",
    freeFrom: ["Harsh detergents", "artificial colors", "parabens", "sulfates"],
    keyIngredients: ["lemon extract", "peppermint oil", "rosemary extract"],
  },
  {
    id: 11,
    name: "Sensitive Touch",
    slug: "sensitive-touch",
    description: "Ultra-gentle formula for sensitive hands",
    longDescription:
      "Sensitive Touch is specifically designed for those with sensitive, reactive, or allergy-prone hands. This ultra-gentle formula provides effective cleansing without causing irritation, redness, or allergic reactions.\n\nWith a minimal ingredient list featuring only the gentlest surfactants and soothing botanicals, Sensitive Touch cleanses thoroughly while maintaining your skin's natural protective barrier. Free from common allergens and irritants, it's safe for the whole family.\n\nDermatologist-tested and recommended for those with eczema, dermatitis, or chemical sensitivities.",
    price: 15.99,
    rating: 5,
    reviews: "743+",
    image: "/placeholder.svg?height=400&width=400",
    category: "Hand Soaps",
    ingredients:
      "Water (Aqua), Sodium Cocoyl Glutamate, Cocamidopropyl Betaine, Glycerin, Chamomilla Recutita (Chamomile) Extract, Calendula Officinalis Flower Extract, Allantoin, Sodium Chloride, Citric Acid, Phenoxyethanol.",
    freeFrom: ["Fragrances", "essential oils", "sulfates", "parabens", "dyes", "alcohol", "common allergens"],
    keyIngredients: ["chamomile extract", "calendula extract", "allantoin"],
  },

  // Body Wash Products
  {
    id: 2,
    name: "PureB Body Wash",
    slug: "pureb-body-wash",
    description: "Fragrance-free, foam-rich, and clinically clean.",
    longDescription:
      "PureB Body Wash delivers a luxurious cleansing experience without compromise. This fragrance-free formula creates a rich, creamy foam that effectively cleanses while maintaining your skin's natural moisture barrier. Clinically tested and dermatologist-approved for sensitive skin.\n\nFormulated with gentle surfactants and enriched with vitamin B complex, this body wash removes impurities without over-drying. The pH-balanced formula ensures your skin feels clean, soft, and comfortable after every use.\n\nPerfect for those with sensitive skin or fragrance sensitivities who don't want to sacrifice performance for gentleness.",
    price: 18.99,
    originalPrice: 32.99,
    discount: "50% OFF",
    rating: 4,
    reviews: "1.4k+",
    image: "/placeholder.svg?height=400&width=400",
    category: "Body Wash",
    ingredients:
      "Water (Aqua), Sodium Cocoyl Isethionate, Cocamidopropyl Betaine, Glycerin, Sodium Methyl Cocoyl Taurate, Panthenol (Vitamin B5), Niacinamide (Vitamin B3), Sodium Chloride, Citric Acid, Phenoxyethanol, Ethylhexylglycerin.",
    freeFrom: ["Fragrances", "sulfates", "parabens", "dyes", "harsh detergents"],
    keyIngredients: ["vitamin B complex", "gentle surfactants", "glycerin"],
  },
  {
    id: 12,
    name: "Hydra Luxe",
    slug: "hydra-luxe",
    description: "Luxurious moisturizing body wash for dry skin",
    longDescription:
      "Hydra Luxe transforms your daily shower into a spa-like experience while providing intensive hydration for dry, rough skin. This rich, creamy body wash combines premium moisturizing ingredients with gentle cleansing agents for the ultimate in skin care luxury.\n\nInfused with argan oil, cocoa butter, and marine collagen, Hydra Luxe deeply nourishes while cleansing, leaving skin feeling silky smooth and beautifully hydrated. The indulgent lather rinses clean without leaving any residue, just perfectly moisturized skin.\n\nIdeal for those with dry skin who want to turn their shower routine into a pampering ritual.",
    price: 24.99,
    originalPrice: 34.99,
    discount: "25% OFF",
    rating: 5,
    reviews: "2.3k+",
    image: "/placeholder.svg?height=400&width=400",
    category: "Body Wash",
    isPopular: true,
    ingredients:
      "Water (Aqua), Sodium Cocoyl Isethionate, Cocamidopropyl Betaine, Glycerin, Argania Spinosa (Argan) Kernel Oil, Theobroma Cacao (Cocoa) Seed Butter, Hydrolyzed Marine Collagen, Panthenol, Tocopheryl Acetate, Sodium Chloride, Citric Acid, Phenoxyethanol.",
    freeFrom: ["Sulfates", "parabens", "artificial colors", "mineral oil"],
    keyIngredients: ["argan oil", "cocoa butter", "marine collagen"],
  },
  {
    id: 13,
    name: "Sport Clean",
    slug: "sport-clean",
    description: "Energizing body wash for active lifestyles",
    longDescription:
      "Sport Clean is formulated for active individuals who need effective cleansing after intense workouts. This energizing body wash removes sweat, odor, and impurities while invigorating your senses and preparing you for whatever comes next.\n\nEnriched with menthol, eucalyptus, and tea tree oil, Sport Clean provides a cooling, refreshing sensation while its antimicrobial properties help prevent body odor. The formula is designed to cleanse thoroughly without over-drying, maintaining your skin's natural balance even after the most intense activities.\n\nPerfect for athletes, gym enthusiasts, or anyone with an active lifestyle.",
    price: 16.99,
    rating: 4,
    reviews: "1.2k+",
    image: "/placeholder.svg?height=400&width=400",
    category: "Body Wash",
    ingredients:
      "Water (Aqua), Sodium Cocoyl Isethionate, Cocamidopropyl Betaine, Glycerin, Menthol, Eucalyptus Globulus Leaf Oil, Melaleuca Alternifolia (Tea Tree) Leaf Oil, Panthenol, Allantoin, Sodium Chloride, Citric Acid, Phenoxyethanol.",
    freeFrom: ["Harsh sulfates", "parabens", "artificial colors", "phthalates"],
    keyIngredients: ["menthol", "eucalyptus oil", "tea tree oil"],
  },
  {
    id: 14,
    name: "Evening Calm",
    slug: "evening-calm",
    description: "Relaxing body wash with lavender and chamomile",
    longDescription:
      "Evening Calm transforms your evening shower into a peaceful, relaxing ritual. This soothing body wash combines gentle cleansing with aromatherapeutic benefits to help you unwind and prepare for restful sleep.\n\nInfused with lavender essential oil, chamomile extract, and vanilla, Evening Calm creates a calming sensory experience while nourishing your skin with moisturizing botanicals. The gentle formula cleanses away the day's stress while leaving your skin soft, smooth, and delicately scented.\n\nPerfect for your nighttime routine or whenever you need a moment of tranquility.",
    price: 19.99,
    rating: 5,
    reviews: "1.7k+",
    image: "/placeholder.svg?height=400&width=400",
    category: "Body Wash",
    ingredients:
      "Water (Aqua), Sodium Cocoyl Isethionate, Cocamidopropyl Betaine, Glycerin, Lavandula Angustifolia (Lavender) Oil, Chamomilla Recutita (Chamomile) Extract, Vanilla Planifolia Fruit Extract, Panthenol, Allantoin, Sodium Chloride, Citric Acid, Phenoxyethanol.",
    freeFrom: ["Sulfates", "parabens", "artificial colors", "harsh chemicals"],
    keyIngredients: ["lavender oil", "chamomile extract", "vanilla extract"],
  },
  {
    id: 15,
    name: "Exfoli-Smooth",
    slug: "exfoli-smooth",
    description: "Gentle exfoliating body wash for smoother skin",
    longDescription:
      "Exfoli-Smooth combines gentle cleansing with mild exfoliation to reveal smoother, more radiant skin. This innovative body wash uses natural exfoliating agents and skin-renewing acids to remove dead skin cells while nourishing and protecting your skin.\n\nFormulated with jojoba beads, glycolic acid, and nourishing oils, Exfoli-Smooth buffs away roughness and dullness while maintaining your skin's moisture balance. Regular use reveals softer, smoother skin with improved texture and radiance.\n\nIdeal for those who want to incorporate gentle exfoliation into their daily routine without irritation.",
    price: 22.99,
    rating: 4,
    reviews: "892+",
    image: "/placeholder.svg?height=400&width=400",
    category: "Body Wash",
    ingredients:
      "Water (Aqua), Sodium Cocoyl Isethionate, Cocamidopropyl Betaine, Glycerin, Jojoba Esters, Glycolic Acid, Simmondsia Chinensis (Jojoba) Seed Oil, Sweet Almond Oil, Panthenol, Sodium Chloride, Citric Acid, Phenoxyethanol.",
    freeFrom: ["Harsh scrubs", "sulfates", "parabens", "artificial fragrances"],
    keyIngredients: ["jojoba beads", "glycolic acid", "jojoba oil"],
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}
