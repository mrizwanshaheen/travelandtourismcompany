"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    ShieldCheck,
    Lock,
    CreditCard,
    MapPin,
    Calendar,
    User,
    CheckCircle2,
    ChevronLeft,
    ArrowRight,
    Info
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const steps = ["Guest Info", "Payment", "Confirm"]

export default function CheckoutPage() {
    const [currentStep, setCurrentStep] = useState(0)

    return (
        <div className="min-h-screen bg-background pt-24 pb-20">
            <div className="container-custom max-w-6xl">
                {/* Progress Bar */}
                <div className="flex items-center justify-center gap-4 mb-12">
                    {steps.map((step, i) => (
                        <div key={step} className="flex items-center gap-4">
                            <div className={`flex items-center gap-2 transition-all ${currentStep >= i ? "text-primary" : "text-muted-foreground"}`}>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 transition-all ${currentStep > i ? "bg-primary text-white border-primary" :
                                        currentStep === i ? "border-primary text-primary ring-4 ring-primary/10" : "border-border"
                                    }`}>
                                    {currentStep > i ? <CheckCircle2 className="w-6 h-6" /> : (i + 1)}
                                </div>
                                <span className="font-bold text-sm uppercase tracking-widest hidden md:inline">{step}</span>
                            </div>
                            {i < steps.length - 1 && <div className={`w-12 h-0.5 ${currentStep > i ? "bg-primary" : "bg-border"}`} />}
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Form Area */}
                    <div className="lg:col-span-2 space-y-8">
                        <AnimatePresence mode="wait">
                            {currentStep === 0 ? (
                                <motion.div
                                    key="step0"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="space-y-8"
                                >
                                    <div className="space-y-2">
                                        <h2 className="text-3xl font-bold font-heading">Guest Information</h2>
                                        <p className="text-muted-foreground">Please enter your details as they appear on your passport.</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest ml-1">First Name</label>
                                            <Input placeholder="John" className="rounded-xl p-6 bg-secondary/30 border-secondary focus:border-primary transition-all" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest ml-1">Last Name</label>
                                            <Input placeholder="Doe" className="rounded-xl p-6 bg-secondary/30 border-secondary focus:border-primary transition-all" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest ml-1">Email Address</label>
                                            <Input type="email" placeholder="john@example.com" className="rounded-xl p-6 bg-secondary/30 border-secondary focus:border-primary transition-all" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest ml-1">WhatsApp Number</label>
                                            <Input placeholder="+1 (555) 000-0000" className="rounded-xl p-6 bg-secondary/30 border-secondary focus:border-primary transition-all" />
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 pt-6">
                                        <Button className="rounded-xl px-12 py-7 bg-primary text-white font-bold text-lg hover:shadow-xl hover:shadow-primary/20" onClick={() => setCurrentStep(1)}>
                                            Continue to Payment <ArrowRight className="w-5 h-5 ml-2" />
                                        </Button>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="space-y-8"
                                >
                                    <div className="space-y-2 text-center py-12">
                                        <div className="mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                                            <Lock className="w-10 h-10 text-primary" />
                                        </div>
                                        <h2 className="text-3xl font-bold font-heading">Secure Payment</h2>
                                        <p className="text-muted-foreground max-w-md mx-auto">Your payment is encrypted and processed via our secure banking partner (Stripe Ready).</p>
                                    </div>

                                    {/* Mock Payment UI */}
                                    <div className="p-8 border-2 border-primary/20 bg-primary/5 rounded-[2rem] space-y-6">
                                        <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-primary/30 shadow-sm">
                                            <div className="flex items-center gap-4">
                                                <CreditCard className="w-6 h-6 text-primary" />
                                                <span className="font-bold">Pay with Credit/Debit Card</span>
                                            </div>
                                            <Badge className="bg-primary text-white">Active</Badge>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <Input placeholder="Card Number" className="col-span-2 rounded-xl p-6" disabled />
                                            <Input placeholder="MM/YY" className="rounded-xl p-6" disabled />
                                            <Input placeholder="CVC" className="rounded-xl p-6" disabled />
                                        </div>

                                        <div className="flex items-start gap-3 p-4 bg-white/40 rounded-xl text-xs font-medium border border-border/50">
                                            <Info className="w-4 h-4 text-primary shrink-0" />
                                            <p>By clicking "Complete Booking", you agree to our terms of service and cancellation policy. Your card will be charged the total amount below.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-6">
                                        <button onClick={() => setCurrentStep(0)} className="flex items-center gap-2 font-bold text-muted-foreground hover:text-primary transition-colors">
                                            <ChevronLeft className="w-5 h-5" /> Back to Info
                                        </button>
                                        <Button asChild className="rounded-xl px-12 py-7 bg-accent text-white font-bold text-lg hover:shadow-xl hover:shadow-accent/40 transition-all cursor-pointer">
                                            <Link href="/success">Complete My Booking</Link>
                                        </Button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Checkout Summary Card */}
                    <div className="lg:col-span-1">
                        <Card className="rounded-[2.5rem] border border-border shadow-premium overflow-hidden sticky top-28 bg-white dark:bg-card">
                            <div className="aspect-[16/6] relative">
                                <img src="https://images.unsplash.com/photo-1542820229-081e0c12af0b?auto=format&fit=crop&q=80&w=2673" alt="" className="object-cover w-full h-full" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                <div className="absolute bottom-4 left-6">
                                    <p className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-1">Your Selection</p>
                                    <h4 className="text-white font-bold text-lg font-heading">Vatican Private Tour</h4>
                                </div>
                            </div>
                            <CardContent className="p-8 space-y-8">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="flex items-center gap-2 font-medium text-muted-foreground"><Calendar className="w-4 h-4" /> Date</span>
                                        <span className="font-bold">Aug 24, 2026</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="flex items-center gap-2 font-medium text-muted-foreground"><User className="w-4 h-4" /> Guests</span>
                                        <span className="font-bold">2 Adults, 0 Child</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="flex items-center gap-2 font-medium text-muted-foreground"><MapPin className="w-4 h-4" /> Location</span>
                                        <span className="font-bold">Rome, Italy</span>
                                    </div>
                                </div>

                                <hr className="border-border/50" />

                                <div className="space-y-4 font-bold">
                                    <div className="flex justify-between text-muted-foreground font-medium">
                                        <span>Subtotal</span>
                                        <span>$580.00</span>
                                    </div>
                                    <div className="flex justify-between text-muted-foreground font-medium">
                                        <span>Service Fee</span>
                                        <span>$0.00</span>
                                    </div>
                                    <div className="flex justify-between text-2xl font-heading text-primary pt-2">
                                        <span>Total</span>
                                        <span>$580.00</span>
                                    </div>
                                </div>

                                <div className="p-4 bg-green-500/5 rounded-2xl border border-green-500/20 text-green-600 flex items-center gap-3">
                                    <ShieldCheck className="w-5 h-5 shrink-0" />
                                    <span className="text-xs font-bold uppercase tracking-wide">Best Price Guaranteed</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
