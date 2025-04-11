'use client'

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Phone, Mail, Menu, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function TopBar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMobileMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="bg-[#E10A17] text-white">
      {/* Top Contact Bar */}
      <div className="container mx-auto py-1 flex flex-col md:flex-row justify-between items-center text-sm ">
        <div className="flex items-center flex-wrap justify-center md:justify-start gap-4 md:gap-6 mb-2 md:mb-0">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-white" />
            <span>+91 98406 12345</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Mail className="h-4 w-4 text-white" />
            <a href="mailto:sm@balajihonda.in">sm@balajihonda.in</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white text-black">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="flex items-center mb-4 md:mb-0">
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-bold text-[#E10A17] uppercase">Balaji Honda</div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-[#E10A17] focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`font-montserrat ${pathname === '/' ? 'text-[#E10A17]' : 'text-black'} hover:text-[#E10A17] font-medium transition-all`}>Home</Link>
            <Link href="/about" className={`font-montserrat ${pathname === '/about' ? 'text-[#E10A17]' : 'text-black'} hover:text-[#E10A17] font-medium transition-all`}>About Us</Link>

            {/* Vehicles Dropdown */}
            <div className="relative group">
              <Link href="/vehicles" className={`font-montserrat ${pathname.startsWith('/vehicles') ? 'text-[#E10A17]' : 'text-black'} hover:text-[#E10A17] font-medium transition-all flex items-center`}>
                Vehicles 
              </Link>
              {/* <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block z-10"> */}
                {/* <Link href="/vehicles?category=new" className="block px-4 py-2 text-sm hover:bg-gray-100">New Cars</Link>
                <Link href="/vehicles?category=used" className="block px-4 py-2 text-sm hover:bg-gray-100">Used Cars</Link>
                <Link href="/vehicles?category=upcoming" className="block px-4 py-2 text-sm hover:bg-gray-100">Upcoming Models</Link> */}
              {/* </div> */}
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <Link href="/services" className={`font-montserrat ${pathname.startsWith('/services') ? 'text-[#E10A17]' : 'text-black'} hover:text-[#E10A17] font-medium transition-all flex items-center`}>
                Services 
              </Link>
            </div>

            <Link href="/contact" className={`font-montserrat ${pathname === '/contact' ? 'text-[#E10A17]' : 'text-black'} hover:text-[#E10A17] font-medium transition-all`}>Contact</Link>
          </nav>

          {/* CTA */}
          <Link href="/book-test-drive" className="hidden md:inline-block bg-[#E10A17] hover:bg-red-700 text-white px-6 py-2 rounded-md font-medium transition-all">
            Book Test Drive
          </Link>
        </div>

        {/* Mobile Menu Content */}
        {isMenuOpen && (
          <div className="md:hidden px-4 pb-4 flex flex-col space-y-4 bg-white text-black">
            <Link href="/" className={`font-montserrat ${pathname === '/' ? 'text-[#E10A17]' : ''}`}>Home</Link>
            <Link href="/about" className={`font-montserrat ${pathname === '/about' ? 'text-[#E10A17]' : ''}`}>About Us</Link>
            {/* <Link href="/vehicles?category=new">New Cars</Link>
            <Link href="/vehicles?category=used">Used Cars</Link>
            <Link href="/vehicles?category=upcoming">Upcoming Models</Link>
            <Link href="/services/maintenance">Maintenance</Link>
            <Link href="/services/repair">Repairs</Link>
            <Link href="/services/bodyshop">Body Shop</Link>
            <Link href="/services/genuine-parts">Genuine Parts</Link> */}
            <Link href="/contact" className={`font-montserrat ${pathname === '/contact' ? 'text-[#E10A17]' : ''}`}>Contact</Link>
            <Link href="/book-test-drive" className="bg-[#E10A17] text-white text-center py-2 rounded-md font-medium">Book Test Drive</Link>
          </div>
        )}
      </div>
    </div>
  )
}
