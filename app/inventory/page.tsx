// import { Grid3X3, List } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"

// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Input } from "@/components/ui/input"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Separator } from "@/components/ui/separator"
// import { Slider } from "@/components/ui/slider"
// import { MainNav } from "@/components/main-nav"
// import { Footer } from "@/components/footer"

// export default function InventoryPage() {
//   return (
//     <div className="flex min-h-screen flex-col">
//       <MainNav />

//       <div className="container py-8">
//         <h1 className="text-3xl font-bold mb-2">Vehicle Inventory</h1>
//         <p className="text-slate-600 mb-8">Browse our selection of new and pre-owned vehicles</p>

//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Filters Sidebar */}
//           <div className="lg:w-64 shrink-0">
//             <div className="bg-white p-4 border rounded-lg sticky top-20">
//               <div className="flex items-center justify-between mb-4">
//                 <h2 className="font-semibold text-lg">Filters</h2>
//                 <Button variant="ghost" size="sm">
//                   Reset All
//                 </Button>
//               </div>

//               <Separator className="my-4" />

//               <div className="space-y-6">
//                 <div>
//                   <h3 className="font-medium mb-3">Vehicle Type</h3>
//                   <div className="space-y-2">
//                     <div className="flex items-center space-x-2">
//                       <Checkbox id="new" />
//                       <label htmlFor="new" className="text-sm">
//                         New (45)
//                       </label>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <Checkbox id="used" />
//                       <label htmlFor="used" className="text-sm">
//                         Pre-Owned (78)
//                       </label>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <Checkbox id="certified" />
//                       <label htmlFor="certified" className="text-sm">
//                         Certified Pre-Owned (32)
//                       </label>
//                     </div>
//                   </div>
//                 </div>

//                 <Separator />

//                 <div>
//                   <h3 className="font-medium mb-3">Body Style</h3>
//                   <div className="space-y-2">
//                     <div className="flex items-center space-x-2">
//                       <Checkbox id="sedan" />
//                       <label htmlFor="sedan" className="text-sm">
//                         Sedan (34)
//                       </label>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <Checkbox id="suv" />
//                       <label htmlFor="suv" className="text-sm">
//                         SUV (56)
//                       </label>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <Checkbox id="truck" />
//                       <label htmlFor="truck" className="text-sm">
//                         Truck (18)
//                       </label>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <Checkbox id="hatchback" />
//                       <label htmlFor="hatchback" className="text-sm">
//                         Hatchback (12)
//                       </label>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <Checkbox id="van" />
//                       <label htmlFor="van" className="text-sm">
//                         Van/Minivan (8)
//                       </label>
//                     </div>
//                   </div>
//                 </div>

//                 <Separator />

//                 <div>
//                   <h3 className="font-medium mb-3">Price Range</h3>
//                   <Slider defaultValue={[10000, 50000]} min={0} max={100000} step={1000} className="mb-6" />
//                   <div className="flex items-center gap-2">
//                     <Input type="number" placeholder="Min" className="h-8" />
//                     <span>-</span>
//                     <Input type="number" placeholder="Max" className="h-8" />
//                   </div>
//                 </div>

//                 <Separator />

//                 <div>
//                   <h3 className="font-medium mb-3">Year</h3>
//                   <div className="flex items-center gap-2">
//                     <Select>
//                       <SelectTrigger className="h-8">
//                         <SelectValue placeholder="From" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="2023">2023</SelectItem>
//                         <SelectItem value="2022">2022</SelectItem>
//                         <SelectItem value="2021">2021</SelectItem>
//                         <SelectItem value="2020">2020</SelectItem>
//                       </SelectContent>
//                     </Select>
//                     <span>-</span>
//                     <Select>
//                       <SelectTrigger className="h-8">
//                         <SelectValue placeholder="To" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="2023">2023</SelectItem>
//                         <SelectItem value="2022">2022</SelectItem>
//                         <SelectItem value="2021">2021</SelectItem>
//                         <SelectItem value="2020">2020</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>
//                 </div>

//                 <Separator />

//                 <div>
//                   <h3 className="font-medium mb-3">Mileage</h3>
//                   <Select>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Any Mileage" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="0-10000">0 - 10,000 miles</SelectItem>
//                       <SelectItem value="10000-30000">10,000 - 30,000 miles</SelectItem>
//                       <SelectItem value="30000-60000">30,000 - 60,000 miles</SelectItem>
//                       <SelectItem value="60000-100000">60,000 - 100,000 miles</SelectItem>
//                       <SelectItem value="100000+">100,000+ miles</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>

//                 <Separator />

//                 <Button className="w-full bg-red-600 hover:bg-red-700">Apply Filters</Button>
//               </div>
//             </div>
//           </div>

//           {/* Inventory Listing */}
//           <div className="flex-1">
//             <div className="bg-white p-4 border rounded-lg mb-6">
//               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//                 <div>
//                   <p className="text-sm text-slate-600">Showing 1-12 of 123 vehicles</p>
//                 </div>
//                 <div className="flex items-center gap-4 w-full sm:w-auto">
//                   <Select defaultValue="featured">
//                     <SelectTrigger className="w-full sm:w-[180px]">
//                       <SelectValue placeholder="Sort By" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="featured">Featured</SelectItem>
//                       <SelectItem value="price-low">Price: Low to High</SelectItem>
//                       <SelectItem value="price-high">Price: High to Low</SelectItem>
//                       <SelectItem value="year-new">Year: Newest First</SelectItem>
//                       <SelectItem value="year-old">Year: Oldest First</SelectItem>
//                       <SelectItem value="mileage-low">Mileage: Low to High</SelectItem>
//                     </SelectContent>
//                   </Select>
//                   <div className="flex border rounded-md">
//                     <Button variant="ghost" size="icon" className="rounded-none border-r">
//                       <Grid3X3 className="h-4 w-4" />
//                     </Button>
//                     <Button variant="ghost" size="icon" className="rounded-none">
//                       <List className="h-4 w-4" />
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//               {Array.from({ length: 9 }).map((_, i) => (
//                 <Card key={i} className="overflow-hidden">
//                   <Link href={`/inventory/vehicle-${i + 1}`}>
//                     <Image
//                       src="/placeholder.svg?height=200&width=300"
//                       alt={`Vehicle ${i + 1}`}
//                       width={300}
//                       height={200}
//                       className="w-full h-48 object-cover"
//                     />
//                   </Link>
//                   <CardContent className="p-4">
//                     <div className="flex justify-between items-start mb-2">
//                       <h3 className="font-bold">
//                         <Link href={`/inventory/vehicle-${i + 1}`} className="hover:text-red-600">
//                           {i % 3 === 0 ? "2023 Sedan LX" : i % 3 === 1 ? "2022 SUV EX" : "2021 Truck Sport"}
//                         </Link>
//                       </h3>
//                       <div className="text-lg font-bold text-red-600">${(25000 + i * 1500).toLocaleString()}</div>
//                     </div>
//                     <div className="text-sm text-slate-500 mb-3">{i % 3 === 0 ? "New" : `${(i + 1) * 5000} miles`}</div>
//                     <div className="grid grid-cols-2 gap-2 text-sm mb-4">
//                       <div className="flex items-center gap-1">
//                         <span className="font-medium">Engine:</span> 2.0L I-4
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <span className="font-medium">MPG:</span> 28 City/36 Hwy
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <span className="font-medium">Transmission:</span> Auto
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <span className="font-medium">Ext. Color:</span>{" "}
//                         {i % 4 === 0 ? "White" : i % 4 === 1 ? "Black" : i % 4 === 2 ? "Silver" : "Blue"}
//                       </div>
//                     </div>
//                     <div className="flex gap-2">
//                       <Button className="w-full" size="sm">
//                         View Details
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>

//             <div className="flex justify-center mt-8">
//               <div className="flex">
//                 <Button variant="outline" size="icon" className="rounded-r-none">
//                   1
//                 </Button>
//                 <Button variant="outline" size="icon" className="rounded-none border-x-0">
//                   2
//                 </Button>
//                 <Button variant="outline" size="icon" className="rounded-none">
//                   3
//                 </Button>
//                 <Button variant="outline" size="icon" className="rounded-l-none">
//                   Next
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   )
// }
