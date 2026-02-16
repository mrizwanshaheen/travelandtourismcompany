"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { Star, Clock, MapPin, CheckCircle2, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function TourDetailPage() {
    const { id } = useParams()
    const [selectedDate, setSelectedDate] = useState("")
    const [guests, setGuests] = useState(1)

    // Mock Data based on ID
    const tour = {
        id,
        title: "Cinque Terre Day Trip from Florence",
        price: 120,
        rating: 4.8,
        reviews: 243,
        location: "Italy",
        duration: "12 Hours",
        description: "Experience the beauty of the Italian Riviera on this day trip to the picturesque Cinque Terre. Visit the colorful villages of Manarola, Riomaggiore, and Vernazza.",
        images: [
            "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2666&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2670&auto=format&fit=crop"
        ],
        highlights: ["Round-trip transport", "Professional guide", "Boat ride (weather permitting)", "Free time to explore"]
    }

    const [mainImage, setMainImage] = useState(tour.images[0])

    return (
        <div className="container py-8 px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Gallery */}
                    <div className="space-y-4">
                        <motion.div
                            layoutId={`image-${id}`}
                            className="aspect-video rounded-xl overflow-hidden bg-muted relative"
                        >
                            <img src={mainImage} alt={tour.title} className="w-full h-full object-cover" />
                            <Badge className="absolute top-4 left-4 bg-white/90 text-black">Best Seller</Badge>
                        </motion.div>
                        <div className="flex gap-4 overflow-x-auto pb-2">
                            {tour.images.map((img, i) => (
                                <button
                                    key={i}
                                    onClick={() => setMainImage(img)}
                                    className={`relative aspect-video w-32 rounded-lg overflow-hidden border-2 ${mainImage === img ? 'border-primary' : 'border-transparent'}`}
                                >
                                    <img src={img} alt="Gallery thumbnail" className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-2 text-primary font-semibold">
                            <MapPin className="w-5 h-5" /> {tour.location}
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{tour.title}</h1>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                            <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-500 fill-yellow-500" /> {tour.rating} ({tour.reviews} reviews)</span>
                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {tour.duration}</span>
                        </div>

                        <div className="prose dark:prose-invert max-w-none">
                            <h3 className="text-xl font-bold mb-2">About this tour</h3>
                            <p className="text-muted-foreground leading-relaxed">{tour.description}</p>

                            <h3 className="text-xl font-bold mt-6 mb-3">Highlights</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {tour.highlights.map((h, i) => (
                                    <li key={i} className="flex items-center gap-2 text-muted-foreground">
                                        <CheckCircle2 className="w-4 h-4 text-green-500" /> {h}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Sticky Booking Card */}
                <div className="lg:col-span-1">
                    <Card className="sticky top-24 shadow-xl border-t-4 border-t-primary">
                        <CardHeader>
                            <CardTitle className="flex justify-between items-center">
                                <span>From <span className="text-3xl font-bold text-primary">${tour.price}</span></span>
                                <span className="text-sm font-normal text-muted-foreground">/ person</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Select Date</label>
                                <div className="relative">
                                    <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <input
                                        type="date"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pl-9 text-sm"
                                        onChange={(e) => setSelectedDate(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Guests</label>
                                <div className="relative flex items-center">
                                    <User className="absolute left-3 h-4 w-4 text-muted-foreground" />
                                    <select
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pl-9 text-sm appearance-none"
                                        value={guests}
                                        onChange={(e) => setGuests(parseInt(e.target.value))}
                                    >
                                        {[1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Adult' : 'Adults'}</option>)}
                                    </select>
                                </div>
                            </div>

                            <div className="pt-4 border-t space-y-2">
                                <div className="flex justify-between font-medium">
                                    <span>Total</span>
                                    <span>${tour.price * guests}</span>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full text-lg py-6" size="lg" asChild>
                                <Link href="/checkout">
                                    Book Now
                                </Link>
                            </Button>
                        </CardFooter>
                        <p className="text-xs text-center pb-4 text-muted-foreground">
                            Instant Confirmation • Free Cancellation
                        </p>
                    </Card>
                </div>
            </div>
        </div>
    )
}
