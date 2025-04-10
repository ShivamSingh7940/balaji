// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { Menu, X, ChevronDown, Search } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// export function MainNav() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   return (
//     <header className="bg-white border-b sticky top-0 z-50">
//       <div className="container flex h-20 items-center justify-between  flex-wrap gap-y-1 ">
//         <Link href="/" className="flex items-center gap-2">
//           <div className="relative h-12 w-36">
//             <div className="absolute inset-0 flex items-center">
//               <span className="text-2xl font-bold">
//                 <span className="text-black">Capital</span>
//                 <span className="text-red-600">Honda</span>
//               </span>
//             </div>
//           </div>
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden lg:flex items-center gap-6">
//           <Link href="/" className="text-sm font-medium hover:text-red-600 transition-colors">
//             Home
//           </Link>

//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" className="flex items-center gap-1">
//                 About Us <ChevronDown className="h-4 w-4" />
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="start">
//               <DropdownMenuItem asChild>
//                 <Link href="/about/company">Company Profile</Link>
//               </DropdownMenuItem>
//               <DropdownMenuItem asChild>
//                 <Link href="/about/team">Our Team</Link>
//               </DropdownMenuItem>
//               <DropdownMenuItem asChild>
//                 <Link href="/about/showroom">Showroom</Link>
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>

//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" className="flex items-center gap-1">
//                 New Cars <ChevronDown className="h-4 w-4" />
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="start">
//               <DropdownMenuItem asChild>
//                 <Link href="/cars/city">Honda City</Link>
//               </DropdownMenuItem>
//               <DropdownMenuItem asChild>
//                 <Link href="/cars/amaze">Honda Amaze</Link>
//               </DropdownMenuItem>
//               <DropdownMenuItem asChild>
//                 <Link href="/cars/elevate">Honda Elevate</Link>
//               </DropdownMenuItem>
//               <DropdownMenuItem asChild>
//                 <Link href="/cars/all">All Models</Link>
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>

//           <Link href="/offers" className="text-sm font-medium hover:text-red-600 transition-colors">
//             Offers
//           </Link>

//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" className="flex items-center gap-1">
//                 Services <ChevronDown className="h-4 w-4" />
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="start">
//               <DropdownMenuItem asChild>
//                 <Link href="/services/booking">Service Booking</Link>
//               </DropdownMenuItem>
//               <DropdownMenuItem asChild>
//                 <Link href="/services/warranty">Warranty</Link>
//               </DropdownMenuItem>
//               <DropdownMenuItem asChild>
//                 <Link href="/services/insurance">Insurance</Link>
//               </DropdownMenuItem>
//               <DropdownMenuItem asChild>
//                 <Link href="/services/accessories">Accessories</Link>
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>

//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" className="flex items-center gap-1">
//                 Finance <ChevronDown className="h-4 w-4" />
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="start">
//               <DropdownMenuItem asChild>
//                 <Link href="/finance/loans">Car Loans</Link>
//               </DropdownMenuItem>
//               <DropdownMenuItem asChild>
//                 <Link href="/finance/emi">EMI Calculator</Link>
//               </DropdownMenuItem>
//               <DropdownMenuItem asChild>
//                 <Link href="/finance/insurance">Insurance</Link>
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>

//           <Link href="/contact" className="text-sm font-medium hover:text-red-600 transition-colors">
//             Contact Us
//           </Link>
//         </nav>

//         <div className="hidden lg:flex items-center gap-4">
//           <Button variant="ghost" size="icon">
//             <Search className="h-5 w-5" />
//           </Button>
//           {/* <Button className="bg-red-600 hover:bg-red-700">Book Test Drive</Button> */}
//         </div>

//         {/* Mobile Menu Button */}
//         <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//           {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//         </Button>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <div className="lg:hidden border-t">
//           <div className="container py-4 space-y-4">
//             <Link href="/" className="block font-medium py-2 hover:text-red-600 transition-colors">
//               Home
//             </Link>

//             <div className="border-t pt-2">
//               <div className="font-medium py-2">About Us</div>
//               <div className="pl-4 space-y-2">
//                 <Link href="/about/company" className="block text-sm text-slate-600 py-1">
//                   Company Profile
//                 </Link>
//                 <Link href="/about/team" className="block text-sm text-slate-600 py-1">
//                   Our Team
//                 </Link>
//                 <Link href="/about/showroom" className="block text-sm text-slate-600 py-1">
//                   Showroom
//                 </Link>
//               </div>
//             </div>

//             <div className="border-t pt-2">
//               <div className="font-medium py-2">hdghj</div>
//               <div className="pl-4 space-y-2">
//                 <Link href="/cars/city" className="block text-sm text-slate-600 py-1">
//                   Honda City
//                 </Link>
//                 <Link href="/cars/amaze" className="block text-sm text-slate-600 py-1">
//                   Honda Amaze
//                 </Link>
//                 <Link href="/cars/elevate" className="block text-sm text-slate-600 py-1">
//                   Honda Elevate
//                 </Link>
//                 <Link href="/cars/all" className="block text-sm text-slate-600 py-1">
//                   All Models
//                 </Link>
//               </div>
//             </div>

//             <Link href="/offers" className="block font-medium py-2 border-t pt-4 hover:text-red-600 transition-colors">
//               Offers
//             </Link>

//             <div className="border-t pt-2">
//               <div className="font-medium py-2">Services</div>
//               <div className="pl-4 space-y-2">
//                 <Link href="/services/booking" className="block text-sm text-slate-600 py-1">
//                   Service Booking
//                 </Link>
//                 <Link href="/services/warranty" className="block text-sm text-slate-600 py-1">
//                   Warranty
//                 </Link>
//                 <Link href="/services/insurance" className="block text-sm text-slate-600 py-1">
//                   Insurance
//                 </Link>
//                 <Link href="/services/accessories" className="block text-sm text-slate-600 py-1">
//                   Accessories
//                 </Link>
//               </div>
//             </div>

//             <Link href="/contact" className="block font-medium py-2 border-t pt-4 hover:text-red-600 transition-colors">
//               Contact Us
//             </Link>

//             <div className="pt-4 border-t flex flex-col gap-2">
//               <Button className="bg-red-600 hover:bg-red-700">Book Test Drive</Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   )
// }
