"use client"

import { motion } from "framer-motion"
import { Search, Filter, MoreHorizontal, Eye, CheckCircle2, XCircle, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const bookings = [
    { id: "#BK-1029", customer: "John Doe", tour: "Vatican Private Tour", date: "Aug 24, 2026", amount: "$580", status: "Confirmed" },
    { id: "#BK-1030", customer: "Jane Smith", tour: "Bali Villa Retreat", date: "Sep 12, 2026", amount: "$1,850", status: "Pending" },
    { id: "#BK-1031", customer: "Robert Brown", tour: "Swiss Alps Helicopter", date: "Oct 05, 2026", amount: "$750", status: "Cancelled" },
    { id: "#BK-1032", customer: "Alice Johnson", tour: "Cinque Terre Day Trip", date: "Aug 28, 2026", amount: "$240", status: "Confirmed" },
    { id: "#BK-1033", customer: "Michael Wilson", tour: "Santorini Sunset Cruise", date: "Sep 15, 2026", amount: "$170", status: "Confirmed" },
]

export default function BookingsPage() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white font-heading">Booking Management</h1>
                    <p className="text-muted-foreground mt-1">Review and manage customer reservations.</p>
                </div>
                <div className="flex items-center gap-3">
                    <Button className="bg-primary text-primary-foreground font-bold rounded-lg shadow-lg shadow-primary/20">
                        Export CSV
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {[
                    { label: "Confirmed", count: "1,204", color: "text-green-400", bg: "bg-green-500/10" },
                    { label: "Pending", count: "148", color: "text-amber-400", bg: "bg-amber-500/10" },
                    { label: "Cancelled", count: "42", color: "text-red-400", bg: "bg-red-500/10" },
                    { label: "Today", count: "24", color: "text-blue-400", bg: "bg-blue-500/10" },
                ].map(item => (
                    <div key={item.label} className={`p-6 rounded-2xl border border-border bg-card shadow-sm`}>
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">{item.label}</p>
                        <div className="flex items-baseline gap-2">
                            <h3 className={`text-2xl font-bold ${item.color}`}>{item.count}</h3>
                            <span className="text-[10px] text-muted-foreground font-medium">+12% from last month</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-card border border-border rounded-2xl shadow-xl overflow-hidden">
                <div className="p-6 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4 bg-background/30">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input placeholder="Search bookings by ID, customer or tour..." className="pl-10 rounded-xl bg-background/50 border-border" />
                    </div>
                    <Button variant="outline" className="rounded-xl border-border flex items-center gap-2">
                        <Filter className="w-4 h-4" /> Filters
                    </Button>
                </div>

                <Table>
                    <TableHeader className="bg-background/50 text-xs uppercase tracking-widest font-bold">
                        <TableRow className="hover:bg-transparent border-border">
                            <TableHead className="text-muted-foreground">Booking ID</TableHead>
                            <TableHead className="text-muted-foreground">Customer</TableHead>
                            <TableHead className="text-muted-foreground">Tour</TableHead>
                            <TableHead className="text-muted-foreground">Date</TableHead>
                            <TableHead className="text-muted-foreground">Amount</TableHead>
                            <TableHead className="text-muted-foreground text-center">Status</TableHead>
                            <TableHead className="text-right text-muted-foreground">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {bookings.map((booking, i) => (
                            <TableRow key={booking.id} className="border-border hover:bg-white/5 transition-colors group">
                                <TableCell className="font-bold text-primary">{booking.id}</TableCell>
                                <TableCell className="font-medium text-white">{booking.customer}</TableCell>
                                <TableCell className="text-muted-foreground">{booking.tour}</TableCell>
                                <TableCell className="text-muted-foreground">{booking.date}</TableCell>
                                <TableCell className="font-bold text-white">{booking.amount}</TableCell>
                                <TableCell className="text-center">
                                    <Badge className={cn(
                                        "px-3 py-1 rounded-full font-bold text-[10px] uppercase border-none",
                                        booking.status === "Confirmed" ? "bg-green-500/10 text-green-400" :
                                            booking.status === "Pending" ? "bg-amber-500/10 text-amber-400" :
                                                "bg-red-500/10 text-red-400"
                                    )}>
                                        {booking.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <Button variant="ghost" size="icon" className="hover:bg-primary/20 hover:text-primary transition-all">
                                            <Eye className="w-4 h-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="hover:bg-green-500/20 hover:text-green-400">
                                            <CheckCircle2 className="w-4 h-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="hover:bg-red-500/20 hover:text-red-400">
                                            <XCircle className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <div className="p-6 border-t border-border flex items-center justify-between text-sm text-muted-foreground bg-background/30">
                    <span>Showing 5 of 1,248 bookings</span>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="rounded-lg h-8 px-4 border-border">Previous</Button>
                        <Button variant="outline" size="sm" className="rounded-lg h-8 px-4 border-border">Next</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function cn(...inputs: any) {
    return inputs.filter(Boolean).join(' ')
}
