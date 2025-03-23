"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, CreditCard, Shield, Smartphone } from "lucide-react"

const features = [
  {
    id: 1,
    icon: <CreditCard className="h-8 w-8" />,
    title: "Zero Account Opening Charges",
    description: "Open a new account with no initial charges and enjoy premium banking benefits.",
  },
  {
    id: 2,
    icon: <Shield className="h-8 w-8" />,
    title: "Enhanced Security Features",
    description: "Multi-factor authentication and real-time fraud detection to keep your money safe.",
  },
  {
    id: 3,
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile Banking",
    description: "Access your accounts anytime, anywhere with our award-winning mobile app.",
  },
]

export default function FeatureCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % features.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const next = () => setCurrent((prev) => (prev + 1) % features.length)
  const prev = () => setCurrent((prev) => (prev - 1 + features.length) % features.length)

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          <div className="overflow-hidden relative h-48 md:h-64">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center p-6"
              >
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full">
                  <div className="flex-shrink-0 p-4 rounded-full bg-primary/10 text-primary">
                    {features[current].icon}
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold mb-2">{features[current].title}</h3>
                    <p className="text-muted-foreground">{features[current].description}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === current ? "bg-primary" : "bg-primary/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-background/80 flex items-center justify-center text-foreground hover:bg-background"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-background/80 flex items-center justify-center text-foreground hover:bg-background"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </CardContent>
    </Card>
  )
}

