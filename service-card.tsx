import type { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  variant?: "default" | "amber"
}

export default function ServiceCard({ icon, title, description, variant = "default" }: ServiceCardProps) {
  return (
    <Card
      className={cn(
        "overflow-hidden group hover:shadow-md transition-all cursor-pointer",
        variant === "amber"
          ? "hover:border-amber-200 dark:hover:border-amber-800"
          : "hover:border-blue-200 dark:hover:border-blue-800",
      )}
    >
      <CardContent className="p-4 flex flex-col items-center text-center">
        <div
          className={cn(
            "mb-3 p-2 rounded-full",
            variant === "amber"
              ? "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400"
              : "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400",
          )}
        >
          {icon}
        </div>
        <h3 className="font-medium mb-1">{title}</h3>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

