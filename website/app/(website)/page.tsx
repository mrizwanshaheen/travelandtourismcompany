"use client"

import Hero from "@/components/home/hero"
import FeaturedDestinations from "@/components/home/featured"
import PopularTours from "@/components/home/popular-tours"
import { motion } from "framer-motion"
import { ShieldCheck, Sparkles, Clock, CreditCard } from "lucide-react"

const reasons = [
    {
        icon: <Sparkles className="w-8 h-8 text-gold" />,
        title: "Curated Luxury",
        description: "Handpicked experiences that meet our strict standards for quality and elegance."
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-gold" />,
        title: "Verified Reliability",
        description: "Every operator is vetted personally to ensure your safety and comfort."
    },
    {
        icon: <Clock className="w-8 h-8 text-gold" />,
        title: "Seamless Support",
        description: "24/7 concierge support to handle every detail of your journey."
    },
    {
        icon: <CreditCard className="w-8 h-8 text-gold" />,
        title: "Transparent Value",
        description: "No hidden fees. Premium service at competitive market rates."
    },
]

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />

            <FeaturedDestinations />

            <section className="bg-muted/30 py-24">
                <PopularTours />
            </section>

            {/* Why Choose Us Section */}
            <section className="section-padding bg-background relative overflow-hidden">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="heading-lg mb-4">The Luxe Difference</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            We believe travel should be effortless, inspiring, and unforgettable.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {reasons.map((reason, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center p-8 rounded-2xl bg-white dark:bg-card border border-border shadow-md hover:shadow-premium hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="mx-auto mb-6 bg-gold/10 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                                    {reason.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 font-heading">{reason.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Badges Bar */}
            <section className="py-12 border-t bg-white dark:bg-black">
                <div className="container px-4 flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-grayscale duration-500">
                    {/* Placeholders for logos */}
                    <div className="text-xl font-bold tracking-widest font-heading">TRAVEL + LEISURE</div>
                    <div className="text-xl font-bold tracking-widest font-heading">CONDÉ NAST</div>
                    <div className="text-xl font-bold tracking-widest font-heading">FORBES</div>
                    <div className="text-xl font-bold tracking-widest font-heading">VOGUE</div>
                </div>
            </section>
        </div>
    )
}
