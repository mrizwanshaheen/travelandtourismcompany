"use client"

import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
    return (
        <section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop')" }}
            >
                <div className="absolute inset-0 bg-black/40 dark:bg-black/50" />
            </div>

            <div className="container relative z-10 text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg"
                >
                    Discover Your Next Adventure
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 drop-shadow-md"
                >
                    Explore the world's most beautiful destinations with premium tours and unforgettable experiences.
                </motion.p>

                {/* Search Bar */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-full shadow-2xl flex flex-col md:flex-row items-center gap-2"
                >
                    <div className="flex-1 w-full relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 h-5 w-5" />
                        <input
                            type="text"
                            placeholder="Where do you want to go?"
                            className="w-full bg-transparent border-none outline-none text-white placeholder:text-white/70 pl-12 pr-4 py-3 text-lg"
                        />
                    </div>
                    <Button size="lg" className="w-full md:w-auto rounded-full px-8 bg-accent hover:bg-accent/90 text-white font-semibold text-lg border-none">
                        Search
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
