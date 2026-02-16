"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    LayoutDashboard,
    Calendar,
    Map,
    Layers,
    Users,
    CreditCard,
    BarChart3,
    Settings,
    LogOut,
    Plane
} from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/" },
    { icon: Calendar, label: "Bookings", href: "/bookings" },
    { icon: Map, label: "Tours", href: "/tours" },
    { icon: Layers, label: "Categories", href: "/categories" },
    { icon: Users, label: "Customers", href: "/customers" },
    { icon: CreditCard, label: "Payments", href: "/payments" },
    { icon: BarChart3, label: "Analytics", href: "/analytics" },
    { icon: Settings, label: "Settings", href: "/settings" },
]

export function AdminSidebar() {
    const pathname = usePathname()

    return (
        <aside className="w-64 bg-sidebar border-r border-border flex flex-col h-screen sticky top-0">
            <div className="p-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <Plane className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl tracking-tight text-white">LuxeAdmin</span>
            </div>

            <nav className="flex-1 px-4 py-4 space-y-1">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 group",
                            pathname === item.href
                                ? "bg-primary text-primary-foreground font-semibold"
                                : "text-sidebar-foreground hover:bg-white/5 hover:text-white"
                        )}
                    >
                        <item.icon className={cn(
                            "w-4 h-4",
                            pathname === item.href ? "text-primary-foreground" : "text-sidebar-foreground group-hover:text-primary transition-colors"
                        )} />
                        {item.label}
                    </Link>
                ))}
            </nav>

            <div className="p-4 border-t border-border mt-auto">
                <button className="flex items-center gap-3 px-3 py-2 text-sm text-red-400 hover:text-red-300 w-full transition-colors">
                    <LogOut className="w-4 h-4" />
                    Logout
                </button>
            </div>
        </aside>
    )
}
