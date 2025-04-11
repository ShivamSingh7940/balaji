"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"

const carModels = [
  {
    id: "city",
    name: "All New Amaze",
    image: "https://res.cloudinary.com/djy15bn9n/image/upload/v1744385404/WhatsApp_Image_2025-04-11_at_8.58.35_PM_kzciua.jpg",
    // description: "A premium sedan with sporty design and advanced technology",
  },
  {
    id: "city-hybrid",
    name: "All New Elevate",
    image: "https://capitalhonda.in/uploads/common/20232308169277182864e5a5f4767f8.png",
    // description: "Self-charging hybrid electric sedan with intelligent tech",
  },
  {
    id: "elevate",
    name: "City 5-Gen",
    image: "https://capitalhonda.in/uploads/common/202307031678189043640721f346fd3.jpg",
    // description: "Bold and versatile SUV with a powerful presence",
  },
  {
    id: "amaze",
    name: "Amaze -2nd Gen",
    image: "https://res.cloudinary.com/djy15bn9n/image/upload/v1744371026/WhatsApp_Image_2025-04-11_at_5.00.12_PM_iu5xzd.jpg",
    // description: "Comfortable and stylish compact sedan for the family",
  },
  {
    id: "jazz",
    name: "City e:HEV",
    image: "https://capitalhonda.in/uploads/common/202307031678188777640720e9d61b4.jpg",
    // description: "Spacious hatchback with sharp styling and versatile features",
  },
]

export function CarModels() {
  const router = useRouter()

  const handleRedirect = () => {
    router.push("/vehicles")
  }

  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {carModels.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col"
            >
              <Image
                src={car.image}
                alt={car.name}
                width={320}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold mb-2">{car.name}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{car.description}</p>
                <button
                  className="mt-auto px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                  onClick={handleRedirect}
                >
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
