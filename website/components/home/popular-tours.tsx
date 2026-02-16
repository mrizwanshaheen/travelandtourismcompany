"use client"

import { motion } from "framer-motion"
import { Star, Clock, MapPin, ShieldCheck, Heart } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const tours = [
    {
        id: 1,
        title: "Vatican Museums & Sistine Chapel Private Tour",
        image: "https://images.unsplash.com/photo-1542820229-081e0c12af0b?auto=format&fit=crop&q=80&w=2673",
        price: "$290",
        rating: 4.9,
        reviews: 842,
        duration: "4 Hours",
        location: "Rome, Italy",
    },
    {
        id: 2,
        title: "Bali Luxury Villa Retreat & Spa Experience",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=2676",
        price: "$1,850",
        rating: 5.0,
        reviews: 124,
        duration: "5 Days",
        location: "Ubud, Bali",
    },
    {
        id: 3,
        title: "Scenic Helicopter Tour over Swiss Alps",
        image: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&q=80&w=2670",
        price: "$750",
        rating: 4.9,
        reviews: 215,
        duration: "45 Mins",
        location: "Interlaken, Swiss",
    },
]

export default function PopularTours() {
    return (
        <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-center mb-16 px-4 md:px-0 text-center md:text-left gap-6">
                <div>
                    <h2 className="text-sm font-bold tracking-[.3em] text-gold uppercase mb-3">Signature Experiences</h2>
                    <h3 className="text-4xl font-bold font-heading">Our Handpicked Collection</h3>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="outline" className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
                        View All Tours
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {tours.map((tour, index) => (
                    <motion.div
                        key={tour.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Card className="h-full group overflow-hidden bg-white border-border/50 shadow-premium rounded-2xl transition-all duration-500 hover:shadow-2xl">
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                                    <Badge className="bg-white/90 text-primary font-bold px-3 py-1 rounded-full shadow-sm">
                                        Luxury
                                    </Badge>
                                    {index === 0 && (
                                        <Badge className="bg-accent text-white font-bold px-3 py-1 rounded-full shadow-sm">
                                            Best Seller
                                        </Badge>
                                    )}
                                </div>
                                <button className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white hover:bg-white hover:text-red-500 transition-all">
                                    <Heart className="w-5 h-5" />
                                </button>
                                <img
                                    src={tour.image}
                                    alt={tour.title}
                                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            <CardContent className="p-8">
                                <div className="flex items-center gap-4 text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                                    <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-gold" /> {tour.location}</span>
                                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-gold" /> {tour.duration}</span>
                                </div>
                                <h4 className="text-xl font-bold mb-4 font-heading group-hover:text-primary transition-colors line-clamp-2 min-h-[3.5rem]">
                                    {tour.title}
                                </h4>
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="flex items-center gap-1">
                                        {[1, 2, 3, 4, 5].map(s => (
                                            <Star key={s} className={`w-4 h-4 ${s <= Math.floor(tour.rating) ? "fill-gold text-gold" : "text-border"}`} />
                                        ))}
                                    </div>
                                    <span className="text-sm font-bold text-foreground ml-1">{tour.rating}</span>
                                    <span className="text-muted-foreground text-xs uppercase tracking-tighter">({tour.reviews} reviews)</span>
                                </div>

                                <div className="flex items-center gap-2 p-3 bg-secondary/30 rounded-xl mb-6">
                                    <ShieldCheck className="w-4 h-4 text-primary" />
                                    <span className="text-xs font-semibold text-primary/80 tracking-wide uppercase">Instant Confirmation</span>
                                </div>
                            </CardContent>

                            <CardFooter className="px-8 pb-8 flex items-center justify-between border-t border-border/30 pt-6">
                                <div>
                                    <span className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Pricing</span>
                                    <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                                        {tour.price}
                                    </div>
                                </div>
                                <Button asChild className="rounded-full px-8 py-6 bg-primary hover:bg-primary/90 text-white font-bold shadow-lg hover:shadow-primary/30 transition-all">
                                    <Link href={`/tours/${tour.id}`}>Reserved Seat</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
