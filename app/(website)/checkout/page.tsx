"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CreditCard, CheckCircle2, User, Mail, Phone, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function CheckoutPage() {
    const [step, setStep] = useState(1)

    return (
        <div className="container py-8 px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tight mb-8">Secure Checkout</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    {/* Step 1: Guest Info */}
                    <Card className={`${step >= 1 ? 'border-primary' : ''}`}>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                                Guest Information
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">First Name</label>
                                    <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Last Name</label>
                                    <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Email</label>
                                    <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="john@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Phone</label>
                                    <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="+1 234 567 890" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Step 2: Payment */}
                    <Card className={`${step >= 2 ? 'border-primary' : ''}`}>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                                Payment Details
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="border p-4 rounded-md flex items-center gap-2 cursor-pointer bg-primary/5 border-primary">
                                    <CreditCard className="w-5 h-5 text-primary" />
                                    <span className="font-semibold">Credit Card</span>
                                </div>
                                <div className="border p-4 rounded-md flex items-center gap-2 cursor-pointer hover:bg-muted">
                                    <span className="font-bold">PayPal</span>
                                </div>
                            </div>

                            <div className="space-y-2 pt-4">
                                <label className="text-sm font-medium">Card Number</label>
                                <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="0000 0000 0000 0000" />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Expiry</label>
                                    <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="MM/YY" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">CVC</label>
                                    <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="123" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Button size="lg" className="w-full text-lg py-6" asChild>
                        <Link href="/success">Complete Booking</Link>
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                        By clicking "Complete Booking", you agree to our Terms & Conditions.
                    </p>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <Card className="sticky top-24 bg-muted/40 border-none shadow-none">
                        <CardHeader>
                            <CardTitle>Order Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex gap-4 items-start pb-4 border-b">
                                <div className="w-16 h-16 rounded-md bg-muted overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2666&auto=format&fit=crop" alt="Tour" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-semibold line-clamp-2 text-sm">Cinque Terre Day Trip from Florence</h4>
                                    <p className="text-xs text-muted-foreground">Thu, Oct 12 • 2 Adults</p>
                                </div>
                            </div>

                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span>Category</span>
                                    <span>Adventure</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span>$240.00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Taxes & Fees</span>
                                    <span>$12.00</span>
                                </div>
                            </div>

                            <div className="pt-4 border-t flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span className="text-primary">$252.00</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
