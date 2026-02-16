"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Plane, Download, MessageSquare, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SuccessPage() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center pt-20 pb-20 px-4">
            <div className="max-w-3xl w-full text-center space-y-12">
                {/* Animated Icon */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.2
                    }}
                    className="relative inline-block"
                >
                    <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center border-4 border-dotted border-primary shadow-2xl relative z-10">
                        <CheckCircle2 className="w-16 h-16 text-primary" />
                    </div>
                    {/* Decorative flying plane animation */}
                    <motion.div
                        animate={{
                            rotate: [0, 360],
                            x: [0, 100, 0, -100, 0],
                            y: [0, -50, -100, -50, 0],
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 left-0 text-gold opacity-30"
                    >
                        <Plane className="w-8 h-8" />
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-6"
                >
                    <Badge className="bg-primary/5 text-primary border-primary/20 px-6 py-2 rounded-full font-bold uppercase tracking-[0.3em] mb-4">
                        Booking Confirmed
                    </Badge>
                    <h1 className="text-5xl md:text-6xl font-bold font-heading">
                        Your Tickets Are Ready <br />
                        <span className="text-gold">Bon Voyage!</span>
                    </h1>
                    <p className="text-muted-foreground text-xl max-w-xl mx-auto font-light leading-relaxed">
                        Your luxury journey has been reserved. Your tickets will be shared via <span className="text-foreground font-semibold">Email</span> and <span className="text-foreground font-semibold">WhatsApp</span> shortly.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    <div className="p-8 rounded-3xl bg-secondary/30 border border-secondary text-center space-y-4 shadow-sm hover:shadow-premium transition-all">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-primary">
                            <Download className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-sm tracking-wide uppercase">Tickets</h4>
                        <Link href="#" className="inline-block text-xs font-bold text-primary hover:underline">Download PDF</Link>
                    </div>

                    <div className="p-8 rounded-3xl bg-secondary/30 border border-secondary text-center space-y-4 shadow-sm hover:shadow-premium transition-all">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-primary">
                            <MessageSquare className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-sm tracking-wide uppercase">WhatsApp</h4>
                        <Link href="#" className="inline-block text-xs font-bold text-primary hover:underline">Send To Phone</Link>
                    </div>

                    <div className="p-8 rounded-3xl bg-secondary/30 border border-secondary text-center space-y-4 shadow-sm hover:shadow-premium transition-all">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-primary">
                            <ArrowRight className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-sm tracking-wide uppercase">Support</h4>
                        <Link href="#" className="inline-block text-xs font-bold text-primary hover:underline">Contact Concierge</Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="pt-12"
                >
                    <Button asChild className="rounded-full px-12 py-8 bg-black text-white font-bold text-xl hover:bg-black/90 shadow-2xl transition-all cursor-pointer">
                        <Link href="/">Back to Home</Link>
                    </Button>
                </motion.div>

                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.4em] opacity-30 mt-20">
                    LuxeTravel &middot; Established 2026
                </div>
            </div>
        </div>
    )
}

function Badge({ children, className }: { children: React.ReactNode, className?: string }) {
    return <div className={`inline-block border text-[10px] font-bold ${className}`}>{children}</div>
}
