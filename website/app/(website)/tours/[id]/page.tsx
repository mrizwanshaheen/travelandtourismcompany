"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
    Star, Clock, MapPin,
    CheckCircle2, Info,
    CalendarDays, Users,
    ChevronRight, ArrowLeft,
    Share2, Heart, Shield
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const images = [
    "https://images.unsplash.com/photo-1542820229-081e0c12af0b?auto=format&fit=crop&q=80&w=2673",
    "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=2666",
    "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&q=80&w=2670",
    "https://images.unsplash.com/photo-1613395877344-13d4c79e4284?auto=format&fit=crop&q=80&w=2669",
]

export default function TourDetailPage() {
    const [selectedImage, setSelectedImage] = useState(0)
    const [adults, setAdults] = useState(2)
    const [children, setChildren] = useState(0)

    const pricePerAdult = 290
    const pricePerChild = 150
    const total = (adults * pricePerAdult) + (children * pricePerChild)

    return (
        <div className="min-h-screen bg-background pt-24 pb-20">
            <div className="container-custom">
                {/* Navigation Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight className="w-4 h-4" />
                    <Link href="/tours" className="hover:text-primary transition-colors">Tours</Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-foreground font-semibold">Vatican Museums Private Tour</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column: Gallery & Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Image Gallery */}
                        <div className="space-y-4">
                            <motion.div
                                key={selectedImage}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl"
                            >
                                <img
                                    src={images[selectedImage]}
                                    alt="Tour detail"
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute top-6 right-6 flex gap-3">
                                    <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white hover:bg-white hover:text-primary transition-all shadow-lg">
                                        <Share2 className="w-5 h-5" />
                                    </button>
                                    <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white hover:bg-white hover:text-red-500 transition-all shadow-lg">
                                        <Heart className="w-5 h-5" />
                                    </button>
                                </div>
                            </motion.div>
                            <div className="grid grid-cols-4 gap-4">
                                {images.map((img, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setSelectedImage(i)}
                                        className={`relative aspect-square rounded-2xl overflow-hidden border-2 transition-all ${selectedImage === i ? "border-primary ring-4 ring-primary/10" : "border-transparent opacity-70 hover:opacity-100"}`}
                                    >
                                        <img src={img} alt="" className="object-cover w-full h-full" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Tour Info */}
                        <div className="space-y-8">
                            <div className="flex flex-wrap items-center gap-4">
                                <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1.5 text-sm font-bold uppercase tracking-widest rounded-full">
                                    Recommended
                                </Badge>
                                <div className="flex items-center gap-1.5 text-gold font-bold">
                                    <Star className="w-5 h-5 fill-gold" />
                                    <span>4.9 (842 Reviews)</span>
                                </div>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold font-heading">
                                Vatican Museums & Sistine Chapel Private Tour
                            </h1>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-secondary/30 rounded-3xl border border-secondary">
                                <div className="space-y-1">
                                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Duration</p>
                                    <p className="font-bold flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> 4 Hours</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Group Size</p>
                                    <p className="font-bold flex items-center gap-2"><Users className="w-4 h-4 text-primary" /> Private</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Language</p>
                                    <p className="font-bold flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> English</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Free Cancellation</p>
                                    <p className="font-bold flex items-center gap-2 text-green-600"><Shield className="w-4 h-4" /> 24h Before</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold font-heading">The Experience</h2>
                                <p className="text-muted-foreground leading-relaxed text-lg font-light">
                                    Skip the notoriously long lines and step into a world of artistic brilliance. Our exclusive private tour of the Vatican Museums and Sistine Chapel offers an intimate encounter with centuries of history, theology, and unparalleled craftsmanship.
                                </p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        "Private access with expert historian",
                                        "Skip-the-line priority entry tickets",
                                        "In-depth guide to Sistine Chapel",
                                        "St. Peter's Basilica fast-track access",
                                        "Personalized itinerary at your pace",
                                        "Whisper headsets for clear hearing"
                                    ].map((feat, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                                            <span className="font-medium">{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Sticky Booking Card */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 space-y-6">
                            <Card className="rounded-[2rem] overflow-hidden border border-border shadow-premium bg-white dark:bg-card">
                                <CardContent className="p-8 space-y-8">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-1">Total Savings: $40</p>
                                            <h3 className="text-4xl font-bold text-primary font-heading">${total}</h3>
                                        </div>
                                        <Badge variant="outline" className="border-gold text-gold font-bold py-1 px-3">Best Price</Badge>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="space-y-3">
                                            <label className="text-sm font-bold flex items-center gap-2 uppercase tracking-widest text-muted-foreground">
                                                <CalendarDays className="w-4 h-4" /> Selected Date
                                            </label>
                                            <div className="p-4 bg-secondary/50 rounded-2xl border border-secondary font-bold cursor-pointer hover:border-primary transition-colors flex justify-between items-center">
                                                August 24, 2026
                                                < ChevronRight className="w-4 h-4 text-primary" />
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-2xl border border-secondary">
                                                <div>
                                                    <p className="font-bold">Adults</p>
                                                    <p className="text-sm text-muted-foreground font-medium">${pricePerAdult}/person</p>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <button onClick={() => setAdults(Math.max(1, adults - 1))} className="w-8 h-8 rounded-full border border-border flex items-center justify-center font-bold hover:bg-primary hover:text-white transition-colors">-</button>
                                                    <span className="font-bold w-4 text-center">{adults}</span>
                                                    <button onClick={() => setAdults(adults + 1)} className="w-8 h-8 rounded-full border border-border flex items-center justify-center font-bold hover:bg-primary hover:text-white transition-colors">+</button>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-2xl border border-secondary">
                                                <div>
                                                    <p className="font-bold">Children</p>
                                                    <p className="text-sm text-muted-foreground font-medium">${pricePerChild}/person</p>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <button onClick={() => setChildren(Math.max(0, children - 1))} className="w-8 h-8 rounded-full border border-border flex items-center justify-center font-bold hover:bg-primary hover:text-white transition-colors">-</button>
                                                    <span className="font-bold w-4 text-center">{children}</span>
                                                    <button onClick={() => setChildren(children + 1)} className="w-8 h-8 rounded-full border border-border flex items-center justify-center font-bold hover:bg-primary hover:text-white transition-colors">+</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <Button asChild className="w-full rounded-2xl py-8 bg-accent hover:bg-accent/90 text-white font-bold text-xl shadow-xl hover:shadow-accent/40 transition-all cursor-pointer">
                                        <Link href="/checkout">Reserve My Experience</Link>
                                    </Button>

                                    <div className="flex items-center gap-4 justify-center text-xs font-bold text-muted-foreground uppercase tracking-widest">
                                        <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5" /> Secure SSL</span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1.5 hover:text-primary cursor-help"><Info className="w-3.5 h-3.5" /> Pricing Info</span>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Need Help Card */}
                            <div className="p-8 bg-primary rounded-3xl text-white shadow-xl relative overflow-hidden group">
                                <div className="absolute top-[-20px] right-[-20px] w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                                <h4 className="text-xl font-bold mb-2 font-heading">Need Assistance?</h4>
                                <p className="text-white/80 text-sm mb-6 leading-relaxed">Our concierge team is available 24/7 to help you customize your dream journey.</p>
                                <Button variant="outline" className="w-full rounded-xl border-white/40 text-white hover:bg-white hover:text-primary font-bold transition-all">
                                    Chat with Concierge
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
