"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Filter, ChevronDown, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

// Mock Data
const tours = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    title: `Tour Destination ${i + 1}`,
    price: 100 + i * 20,
    rating: 4.5,
    reviews: 120,
    image: `https://source.unsplash.com/random/400x300?travel,${i}`,
    category: i % 2 === 0 ? "Adventure" : "Relaxation",
    location: "Europe"
}))

export default function ToursPage() {
    const [showFilters, setShowFilters] = useState(false)

    return (
        <div className="container py-8 px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">All Tours</h1>
                    <p className="text-muted-foreground">Explore over 200+ destinations worldwide.</p>
                </div>
                <div className="flex items-center gap-2 w-full md:w-auto">
                    <Button variant="outline" className="md:hidden" onClick={() => setShowFilters(!showFilters)}>
                        <Filter className="w-4 h-4 mr-2" /> Filters
                    </Button>
                    <div className="relative flex-1 md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 pl-9 text-sm" placeholder="Search tours..." />
                    </div>
                    <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm w-40">
                        <option>Most Popular</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar Filters */}
                <aside className={`lg:block ${showFilters ? 'block' : 'hidden'} space-y-6`}>
                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Categories</h3>
                        <div className="space-y-2">
                            {['Adventure', 'Relaxation', 'Cultural', 'Food & Drink'].map((cat) => (
                                <label key={cat} className="flex items-center space-x-2 text-sm">
                                    <input type="checkbox" className="rounded border-gray-300" />
                                    <span>{cat}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Price Range</h3>
                        <input type="range" min="0" max="1000" className="w-full" />
                        <div className="flex justify-between text-sm text-muted-foreground">
                            <span>$0</span>
                            <span>$1000+</span>
                        </div>
                    </div>
                </aside>

                {/* Grid */}
                <div className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tours.map((tour, i) => (
                        <motion.div
                            key={tour.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: i * 0.05 }}
                        >
                            <Card className="h-full group overflow-hidden hover:shadow-lg transition-all">
                                <div className="aspect-[4/3] overflow-hidden relative bg-muted">
                                    <img src={tour.image} alt={tour.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <Badge className="absolute top-2 right-2 bg-white/90 text-black">Top Rated</Badge>
                                </div>
                                <CardContent className="p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold line-clamp-1">{tour.title}</h3>
                                        <span className="font-bold text-primary">${tour.price}</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground text-xs mb-3">{tour.location}</p>
                                    <div className="flex items-center text-sm gap-1">
                                        <span className="text-yellow-500">★</span>
                                        <span>{tour.rating}</span>
                                        <span className="text-muted-foreground">({tour.reviews})</span>
                                    </div>
                                </CardContent>
                                <CardFooter className="p-4 pt-0">
                                    <Button className="w-full" asChild>
                                        <Link href={`/tours/${tour.id}`}>View Details</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
