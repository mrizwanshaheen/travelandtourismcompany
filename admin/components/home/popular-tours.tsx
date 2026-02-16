"use client"

import { motion } from "framer-motion"
import { Star, Clock, User, MapPin } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const tours = [
    {
        id: 1,
        title: "Cinque Terre Day Trip",
        image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2666&auto=format&fit=crop",
        price: "$120",
        rating: 4.8,
        reviews: 243,
        duration: "1 Day",
        location: "Italy",
    },
    {
        id: 2,
        title: "Santorini Sunset Cruise",
        image: "https://images.unsplash.com/photo-1613395877344-13d4c79e4284?q=80&w=2669&auto=format&fit=crop",
        price: "$85",
        rating: 4.9,
        reviews: 512,
        duration: "4 Hours",
        location: "Greece",
    },
    {
        id: 3,
        title: "Swiss Alps Hiking Adventure",
        image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=2670&auto=format&fit=crop",
        price: "$250",
        rating: 4.7,
        reviews: 189,
        duration: "2 Days",
        location: "Switzerland",
    },
]

export default function PopularTours() {
    return (
        <section className="py-24 bg-muted/40">
            <div className="container px-4">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Top Rated Experiences</h2>
                        <p className="text-muted-foreground w-full md:w-2/3">Curated tours loved by travelers worldwide.</p>
                    </div>
                    <Button variant="outline" className="hidden md:inline-flex">View All Tours</Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tours.map((tour, index) => (
                        <motion.div
                            key={tour.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow border-none ring-1 ring-border/50">
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Badge className="absolute top-4 right-4 z-10 bg-white/90 text-black hover:bg-white">
                                        Best Seller
                                    </Badge>
                                    <img
                                        src={tour.image}
                                        alt={tour.title}
                                        className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                                        <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {tour.location}</span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {tour.duration}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 line-clamp-1">{tour.title}</h3>
                                    <div className="flex items-center gap-1 mb-4">
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <span className="font-medium">{tour.rating}</span>
                                        <span className="text-muted-foreground text-sm">({tour.reviews} reviews)</span>
                                    </div>
                                </CardContent>
                                <CardFooter className="p-6 pt-0 flex items-center justify-between mt-auto">
                                    <div>
                                        <span className="text-sm text-muted-foreground">From</span>
                                        <div className="text-2xl font-bold text-primary">{tour.price}</div>
                                    </div>
                                    <Button asChild>
                                        <Link href={`/tours/${tour.id}`}>Book Now</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Button variant="outline">View All Tours</Button>
                </div>
            </div>
        </section>
    )
}
