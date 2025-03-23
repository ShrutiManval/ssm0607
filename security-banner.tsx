"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AlertCircle, X } from "lucide-react"

export default function SecurityBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full bg-yellow-50 border-b border-yellow-200 dark:bg-yellow-950 dark:border-yellow-900"
        >
          <div className="container py-2 px-4 flex items-center justify-between">
            <div className="flex items-center text-sm text-yellow-800 dark:text-yellow-300">
              <AlertCircle className="h-4 w-4 mr-2 flex-shrink-0" />
              <p>
                <span className="font-medium">Security Alert:</span> We never ask for confidential information such as
                PIN or OTP. Never share these details with anyone.
              </p>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-yellow-800 dark:text-yellow-300 hover:text-yellow-900 dark:hover:text-yellow-200"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

