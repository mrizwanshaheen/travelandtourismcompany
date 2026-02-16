"use client"

import Hero from "@/components/home/hero"
import FeaturedDestinations from "@/components/home/featured"
import PopularTours from "@/components/home/popular-tours"
import { motion } from "framer-motion"
import { CheckCircle2, Shield, HeartHandshake, CreditCard } from "lucide-react"

const reasons = [
    {
        icon: <Shield className="w-10 h-10 text-primary" />,
        title: "Secure Booking",
        description: "We use the latest encryption technology to keep your details safe."
    },
    {
        icon: <HeartHandshake className="w-10 h-10 text-primary" />,
        title: "Best Price Guarantee",
        description: "Find a lower price? We'll match it and give you credit."
    },
    {
        icon: <CheckCircle2 className="w-10 h-10 text-primary" />,
        title: "Free Cancellation",
        description: "Flexible plans allow you to cancel up to 24 hours before your trip."
    },
    {
        icon: <CreditCard className="w-10 h-10 text-primary" />,
        title: "Easy Payment",
        description: "Pay with your preferred method securely and instantly."
    },
]

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />
            <FeaturedDestinations />
            <PopularTours />

            {/* Why Choose Us Section */}
            <section className="py-24 bg-background">
                <div className="container px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose TravelCo?</h2>
                        <p className="text-muted-foreground">We focus on the details so you can focus on the memories.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {reasons.map((reason, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center p-6 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-colors"
                            >
                                <div className="mx-auto mb-6 bg-background rounded-full p-4 w-20 h-20 flex items-center justify-center shadow-sm">
                                    {reason.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                                <p className="text-muted-foreground text-sm">{reason.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Badges */}
            <section className="py-12 border-t bg-muted/20">
                <div className="container px-4 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
                    {/* Placeholders for payment icons */}
                    <div className="text-2xl font-bold">VISA</div>
                    <div className="text-2xl font-bold">MasterCard</div>
                    <div className="text-2xl font-bold">PayPal</div>
                    <div className="text-2xl font-bold">American Express</div>
                    <div className="text-2xl font-bold">Stripe</div>
                </div>
            </section>
        </div>
    )
}
