"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    image: "https://capitalhonda.in/uploads/common/20250502173876120667a363f63a96c.jpg",
    title: "Discover the All-New Honda City",
    subtitle: "Elegance, Power and Technology",
    // cta: "Book Test Drive",
  },
  {
    image: "https://capitalhonda.in/uploads/common/20250502173876130267a3645664bca.jpg",
    title: "Honda Amaze",
    subtitle: "Drive in Comfort and Style",
    // cta: "Explore Now",
  },
  {
    image: "https://capitalhonda.in/uploads/common/20240412173330839767502fedb25d1.jpg",
    title: "Honda Elevate",
    subtitle: "Bold, Versatile SUV for Every Journey",
    // cta: "Learn More",
  },
]

export function CarouselSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
      <div className="absolute inset-0 flex">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image src={slide.image || "/placeholder.svg"} alt={slide.title} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
              <div className="container">
                <div className="max-w-lg text-white space-y-5">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">{slide.title}</h1>
                  <p className="text-lg md:text-xl">{slide.subtitle}</p>
                  {/* <Button className="bg-red-600 hover:bg-red-700">{slide.cta}</Button> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <Button
        onClick={prevSlide}
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 rounded-full h-10 w-10 flex items-center justify-center"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        onClick={nextSlide}
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 rounded-full h-10 w-10 flex items-center justify-center"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              currentSlide === index ? "w-8 bg-red-600" : "w-2 bg-white/60"
            }`}
          ></button>
        ))}
      </div>
    </section>
  )
}
