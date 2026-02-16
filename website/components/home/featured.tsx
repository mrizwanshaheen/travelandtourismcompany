"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const destinations = [
    { name: "Santorini", country: "Greece", price: "Starts from $1,200", image: "https://images.unsplash.com/photo-1613395877344-13d4c79e4284?auto=format&fit=crop&q=80&w=2670" },
    { name: "St. Moritz", country: "Switzerland", price: "Starts from $2,500", image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&q=80&w=2670" },
    { name: "Maldives", country: "South Asia", price: "Starts from $3,800", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=2670" },
    { name: "Amalfi Coast", country: "Italy", price: "Starts from $1,800", image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=2666" },
]

export default function FeaturedDestinations() {
    return (
        <section className="section-padding bg-background">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div className="max-w-xl">
                        <h2 className="heading-lg mb-4 text-gradient-gold uppercase tracking-widest text-sm font-bold">Curated Gems</h2>
                        <h3 className="text-4xl md:text-5xl font-bold font-heading">Worlds Most Exclusive Destinations</h3>
                    </div>
                    <Link href="/destinations" className="group flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300">
                        View All Destinations <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {destinations.map((dest, index) => (
                        <motion.div
                            key={dest.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Card className="group relative aspect-[3/4] overflow-hidden rounded-2xl border-none shadow-premium cursor-pointer">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-70" />
                                <img
                                    src={dest.image}
                                    alt={dest.name}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute bottom-0 p-8 z-20 w-full transform transition-transform duration-500 group-hover:-translate-y-2">
                                    <p className="text-gold font-semibold text-xs tracking-[0.2em] uppercase mb-2">{dest.country}</p>
                                    <h4 className="text-2xl font-bold text-white mb-4 font-heading">{dest.name}</h4>
                                    <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                        <span className="text-white/80 text-sm italic">{dest.price}</span>
                                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white">
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
