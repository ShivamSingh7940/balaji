import Image from "next/image"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface VehicleCardProps {
  image: string
  title: string
  price: string
  mileage: string
  features: string[]
  special?: string
}

export function VehicleCard({ image, title, price, mileage, features, special }: VehicleCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
        {special && <Badge className="absolute top-2 left-2 bg-red-600">{special}</Badge>}
      </div>
      <CardContent className="pt-6">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <div className="flex justify-between items-center mb-4">
          <div className="text-xl font-bold text-red-600">{price}</div>
          <div className="text-sm text-slate-500">{mileage}</div>
        </div>
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-slate-600">
              <Check className="h-4 w-4 mr-2 text-green-500" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button className="w-full">View Details</Button>
        <Button variant="outline" className="w-full">
          Compare
        </Button>
      </CardFooter>
    </Card>
  )
}
