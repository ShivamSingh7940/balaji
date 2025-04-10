"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    car: "Honda City",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "I've been a Honda customer for years, but my experience with Capital Honda was exceptional. The team was professional, knowledgeable and made the entire buying process smooth. My new City is fantastic!",
  },
  {
    id: 2,
    name: "Priya Patel",
    car: "Honda Amaze",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "The service at Capital Honda is outstanding. From test drive to delivery, everything was handled with care. I'm extremely satisfied with my Amaze and the after-sales support is excellent.",
  },
  {
    id: 3,
    name: "Amit Verma",
    car: "Honda Elevate",
    image: "/placeholder.svg?height=80&width=80",
    rating: 4,
    text: "Capital Honda made buying my first SUV a memorable experience. The staff was patient in explaining all features and helped me choose the right variant of Elevate that suits my needs and budget.",
  },
]

export function TestimonialSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-slate-50">
      <div className="container">
        <div className="text-center mb-12">
          <h4 className="text-red-600 font-medium mb-2">TESTIMONIALS</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Hear from our satisfied customers about their experience with Capital Honda and why they choose us for their
            automotive needs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <div className="flex items-center mb-6">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.car} Owner</p>
                        <div className="flex items-center mt-1">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                              />
                            ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">"{testimonial.text}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <Button
            onClick={prevSlide}
            variant="ghost"
            size="icon"
            className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-md hover:bg-gray-100 rounded-full h-10 w-10 flex items-center justify-center"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            onClick={nextSlide}
            variant="ghost"
            size="icon"
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-md hover:bg-gray-100 rounded-full h-10 w-10 flex items-center justify-center"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index ? "w-8 bg-red-600" : "w-2 bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
