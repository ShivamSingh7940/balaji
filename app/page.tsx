import Image from "next/image"
import { CarouselSection } from "@/components/carousel-section"
import { CarModels } from "@/components/car-models"
import { TestimonialSection } from "@/components/testimonial-section"
import { ServiceSection } from "@/components/service-section"
import { Footer } from "@/components/footer"
// import { MainNav } from "@/components/main-nav"
import { TopBar } from "@/components/top-bar"
import { Button } from "@/components/ui/button"
import { BookTestDriveForm } from "@/components/book-test-drive-form"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Bar */}
      {/* <TopBar /> */}

      {/* Main Navigation */}
      {/* <MainNav /> */}

      {/* Hero Carousel Section */}
      <CarouselSection />

      {/* Book Test Drive Section */}
      <section className="bg-red-600 py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Book A Test Drive</h2>
              <p className="text-lg opacity-90">
                Experience the thrill of driving a Honda. Book a test drive at Capital Honda today.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-white rounded-full"></div>
                  <span>Trained and professional staff</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-white rounded-full"></div>
                  <span>Convenient and flexible schedule</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-white rounded-full"></div>
                  <span>Experience Honda's cutting-edge technology</span>
                </li>
              </ul>
            </div>
            <BookTestDriveForm />
          </div>
        </div>
      </section>

      {/* Car Models Section */}
      <CarModels />

      {/* About Capital Honda */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxoNY2QHgZtj41_cheyuB63SSKjeVcI0XirvPIH7Es2Rn5NJ-Imq5HBPYn3IVX21PlfJPy&s"
                alt="Capital Honda Showroom"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-red-600 font-medium mb-2">ABOUT US</h4>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Welcome to Capital Honda</h2>
              </div>
              <p className="text-gray-600">
                Capital Honda is a premier Honda dealership with state-of-the-art facilities offering sales, service,
                and genuine Honda parts. We are committed to providing an exceptional ownership experience with customer
                satisfaction as our primary goal.
              </p>
              <p className="text-gray-600">
                Our team of experienced professionals ensures that each customer receives personalized attention and
                expert advice to help them choose the perfect Honda vehicle that meets their requirements and budget.
              </p>
              
              <Button className="bg-red-600 hover:bg-red-700 mt-4">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServiceSection />

      {/* Testimonial Section */}
      {/* <TestimonialSection /> */}

      {/* Offers & Promotions */}
      {/* <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h4 className="text-red-600 font-medium mb-2">SPECIAL OFFERS</h4>
            <h2 className="text-3xl md:text-4xl font-bold">Current Offers & Promotions</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Finance Offer"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 m-2 text-sm font-medium rounded">
                  Limited Time
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Special Finance Rates</h3>
                <p className="text-gray-600">
                  Get attractive finance rates starting from 7.25%* on select Honda models.
                </p>
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 w-full">
                  View Details
                </Button>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Exchange Offer"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Exchange Bonus</h3>
                <p className="text-gray-600">Get up to ₹20,000* exchange bonus when you trade in your old car.</p>
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 w-full">
                  View Details
                </Button>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Service Offer"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 m-2 text-sm font-medium rounded">
                  New
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Free Service Package</h3>
                <p className="text-gray-600">
                  Get a complimentary service package worth ₹5,000* with every new car purchase.
                </p>
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 w-full">
                  View Details
                </Button>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Button className="bg-red-600 hover:bg-red-700">View All Offers</Button>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="bg-slate-900 py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Experience Honda?</h2>
              <p className="text-white/80 text-lg">
                Visit our showroom or book an appointment online. Our team is ready to assist you.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-red-600 hover:bg-red-700">Visit Showroom</Button>
                <Button variant="outline" className="bg-red-600 hover:bg-red-700">
                  Contact Us
                </Button>
              </div>
            </div>
            {/* <div className="relative">
              <Image
                src="/placeholder.svg?height=300&width=600"
                alt="Honda City"
                width={600}
                height={300}
                className="rounded-lg object-cover"
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  )
}
