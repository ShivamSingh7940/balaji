"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2 } from "lucide-react"

const carModels = [
  { id: "city", name: "Honda City" },
  { id: "city-hybrid", name: "Honda City e:HEV" },
  { id: "amaze", name: "Honda Amaze" },
  { id: "elevate", name: "Honda Elevate" },
]

export function BookTestDriveForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset form after showing success message
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      {isSuccess ? (
        <div className="text-center py-8">
          <div className="h-12 w-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-green-600 mb-2">Test Drive Booked!</h3>
          <p className="text-gray-600">
            Thank you for booking a test drive with Capital Honda. Our representative will contact you shortly to
            confirm the details.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <h3 className="text-xl font-bold mb-4">Book Your Test Drive</h3>

          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Full Name*
            </label>
            <Input id="name" placeholder="Enter your name" required />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Phone Number*
            </label>
            <Input id="phone" type="tel" placeholder="Enter your phone number" required />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>

          <div>
            <label htmlFor="car-model" className="block text-sm font-medium mb-1">
              Select Car Model*
            </label>
            <Select required>
              <SelectTrigger id="car-model">
                <SelectValue placeholder="Select a model" />
              </SelectTrigger>
              <SelectContent>
                {carModels.map((model) => (
                  <SelectItem key={model.id} value={model.id}>
                    {model.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="preferred-date" className="block text-sm font-medium mb-1">
              Preferred Date*
            </label>
            <Input id="preferred-date" type="date" required min={new Date().toISOString().split("T")[0]} />
          </div>

          <div className="text-xs text-gray-500">
            By submitting this form, you agree to our Privacy Policy and consent to be contacted regarding your request.
          </div>

          <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please Wait
              </>
            ) : (
              "Book Test Drive"
            )}
          </Button>
        </form>
      )}
    </div>
  )
}
