"use client"

import { motion } from "framer-motion"
import { Search, MapPin, Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Cinematic Background with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2621&auto=format&fit=crop')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />
            </div>

            <div className="container relative z-10 text-center px-4 md:px-6 pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="heading-xl text-white mb-6 drop-shadow-lg leading-tight">
                        Experience the World <br />
                        <span className="text-gold bg-clip-text text-transparent bg-gradient-to-r from-gold-light via-gold to-gold-dark">
                            In Ultimate Luxury
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light tracking-wide">
                        Curated journeys designed for the discerning traveler. Discover destinations that define elegance.
                    </p>
                </motion.div>

                {/* Premium Search Bar */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 p-2 md:p-3 rounded-full shadow-premium flex flex-col md:flex-row items-center gap-2"
                >
                    <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 px-2">
                        <div className="flex items-center gap-3 border-b md:border-b-0 md:border-r border-white/20 py-2 md:py-0">
                            <MapPin className="text-white/70 h-5 w-5" />
                            <input
                                type="text"
                                placeholder="Destination"
                                className="w-full bg-transparent border-none outline-none text-white placeholder:text-white/70 py-2"
                            />
                        </div>
                        <div className="flex items-center gap-3 border-b md:border-b-0 md:border-r border-white/20 py-2 md:py-0">
                            <Calendar className="text-white/70 h-5 w-5" />
                            <input
                                type="text"
                                onFocus={(e) => e.target.type = 'date'}
                                onBlur={(e) => e.target.type = 'text'}
                                placeholder="Date"
                                className="w-full bg-transparent border-none outline-none text-white placeholder:text-white/70 py-2"
                            />
                        </div>
                        <div className="flex items-center gap-3 py-2 md:py-0">
                            <Users className="text-white/70 h-5 w-5" />
                            <input
                                type="number"
                                placeholder="Guests"
                                className="w-full bg-transparent border-none outline-none text-white placeholder:text-white/70 py-2 appearance-none"
                            />
                        </div>
                    </div>
                    <Button size="lg" className="w-full md:w-auto rounded-full px-8 py-6 bg-accent hover:bg-accent/90 text-white font-semibold text-lg border-none hover:shadow-lg transition-all">
                        Explore
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-12 flex justify-center gap-8 md:gap-12"
                >
                    {['4.9/5 Rating', 'Secure Payment', '24/7 Support'].map((badge, i) => (
                        <div key={i} className="flex items-center gap-2 text-white/80 text-sm font-medium tracking-wider uppercase">
                            <div className="w-2 h-2 rounded-full bg-gold animate-pulse" /> {badge}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
