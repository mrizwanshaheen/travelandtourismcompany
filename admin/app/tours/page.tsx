"use client"

import { motion } from "framer-motion"
import { Plus, Search, Edit2, Trash2, Image as ImageIcon, MapPin, DollarSign, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const tours = [
    { id: 1, title: "Vatican Museums Private Tour", price: "$290", category: "Luxury", location: "Rome, Italy", inventory: "Unlimited" },
    { id: 2, title: "Bali Villa Retreat & Spa", price: "$1,850", category: "Resort", location: "Ubud, Bali", inventory: "12 Seats" },
    { id: 3, title: "Swiss Alps Helicopter Tour", price: "$750", category: "Adventure", location: "Interlaken, Swiss", inventory: "4 Seats" },
    { id: 4, title: "Greek Island Private Yacht", price: "$4,200", category: "Yacht", location: "Mykonos, Greece", inventory: "1 Yacht" },
]

export default function ToursManagementPage() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white font-heading">Tours Inventory</h1>
                    <p className="text-muted-foreground mt-1">Add, edit and manage your travel products.</p>
                </div>
                <Button className="bg-primary text-primary-foreground font-bold rounded-lg shadow-lg shadow-primary/20 flex items-center gap-2 px-6">
                    <Plus className="w-5 h-5" /> Add New Tour
                </Button>
            </div>

            <div className="bg-card border border-border rounded-2xl shadow-xl overflow-hidden">
                <div className="p-6 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4 bg-background/30">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input placeholder="Search tours..." className="pl-10 rounded-xl bg-background/50 border-border" />
                    </div>
                    <div className="flex items-center gap-3">
                        <Badge variant="outline" className="border-border text-xs px-3 py-1 rounded-lg">Total: 48 Tours</Badge>
                        <Badge variant="outline" className="border-border text-xs px-3 py-1 rounded-lg">Active: 45</Badge>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 p-6">
                    {tours.map((tour, i) => (
                        <motion.div
                            key={tour.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            className="group relative bg-background/40 border border-border rounded-2xl p-6 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-border flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-blue-500/20 hover:text-blue-400">
                                        <Edit2 className="w-3.5 h-3.5" />
                                    </Button>
                                    <button className="h-8 w-8 rounded-lg flex items-center justify-center hover:bg-red-500/20 text-red-400">
                                        <Trash2 className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <Badge className="bg-primary/10 text-primary border-primary/20 text-[10px] uppercase font-bold px-2 py-0.5 mb-2">{tour.category}</Badge>
                                    <h4 className="text-lg font-bold text-white line-clamp-1 group-hover:text-primary transition-colors">{tour.title}</h4>
                                    <p className="text-xs text-muted-foreground flex items-center gap-1.5 mt-1">
                                        <MapPin className="w-3 h-3" /> {tour.location}
                                    </p>
                                </div>

                                <hr className="border-border/50" />

                                <div className="flex justify-between items-center text-sm font-bold">
                                    <div className="space-y-1">
                                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">Price</p>
                                        <p className="text-white">{tour.price}</p>
                                    </div>
                                    <div className="space-y-1 text-right">
                                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">Inventory</p>
                                        <p className="text-primary">{tour.inventory}</p>
                                    </div>
                                </div>

                                <div className="pt-2 grid grid-cols-2 gap-3 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                                    <button className="w-full h-10 rounded-xl bg-white/5 border border-border flex items-center justify-center gap-2 text-xs font-bold hover:bg-white/10 transition-all">
                                        <ImageIcon className="w-3.5 h-3.5" /> Gallery
                                    </button>
                                    <button className="w-full h-10 rounded-xl bg-white/5 border border-border flex items-center justify-center gap-2 text-xs font-bold hover:bg-white/10 transition-all">
                                        <Calendar className="w-3.5 h-3.5" /> Dates
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Add New Placeholder */}
                    <motion.div
                        whileHover={{ scale: 0.98 }}
                        className="border-2 border-dashed border-border rounded-2xl flex flex-col items-center justify-center p-8 gap-4 hover:border-primary/50 hover:bg-primary/5 transition-all text-muted-foreground cursor-pointer"
                    >
                        <div className="p-4 bg-white/5 rounded-full">
                            <Plus className="w-8 h-8" />
                        </div>
                        <p className="font-bold text-sm uppercase tracking-widest">Add Custom Tour</p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
