"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"

const carModels = [
  {
    id: "city",
    name: "All New Amaze",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHIxi3zL-hG_nWK-CkDl2xTJ3K-vwEw64of1Mwkxn5fyJtOElD4eHX4zo&s",
    description: "A premium sedan with sporty design and advanced technology",
  },
  {
    id: "city-hybrid",
    name: "All New Elevate",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2RK8FMBGDV6UtMJ1NQJezLEKTWQnuWd_zEQLFTGVlJBL4uVMKhmEJbQPvd_RDUY7CxqXP&s",
    description: "Self-charging hybrid electric sedan with intelligent tech",
  },
  {
    id: "elevate",
    name: "City 5-Gen",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE7GnfhJqiue4DUVZkWDQQg86q-CNiKbSjwqXpLjNEJwuEphbhK5QV4pU&s",
    description: "Bold and versatile SUV with a powerful presence",
  },
  {
    id: "amaze",
    name: "Amaze -2nd Gen",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXbGLvA32gezxhHe926A-RScrLZONqnoT-OqWwC91IMC4g8Wplj67nAC52B1mrJ2gEhJT5&s",
    description: "Comfortable and stylish compact sedan for the family",
  },
  {
    id: "jazz",
    name: "City e:HEV",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv2d_ILk9hNHwhQG91CCEsnJwx0cEmpyQVzDThXQCYhl1al85LnTLk7ljWv9xQm8mtp7sc&s",
    description: "Spacious hatchback with sharp styling and versatile features",
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
