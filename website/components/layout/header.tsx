"use client"

import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Menu, X, Plane, Search, User } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { name: "Destinations", href: "/destinations" },
        { name: "Tours", href: "/tours" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
    ]

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled
                    ? "bg-white/90 backdrop-blur-md shadow-sm dark:bg-black/80"
                    : "bg-transparent text-white"
                }`}
        >
            <div className="container-custom flex h-20 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    {/* Use specific colors if scrolled vs not scrolled could be tricky, 
              but typically on transparent hero we want white text, on white scrolled we want dark text.
              We can use conditional classes.
          */}
                    <Plane className={`h-8 w-8 ${isScrolled ? "text-primary" : "text-white drop-shadow-md"}`} />
                    <span className={`text-2xl font-bold tracking-tight ${isScrolled ? "text-foreground" : "text-white drop-shadow-md"}`}>
                        LuxeTravel
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium hover:text-primary transition-colors ${isScrolled ? "text-foreground" : "text-white/90 hover:text-white"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <Button variant="ghost" size="icon" className={isScrolled ? "text-foreground" : "text-white hover:bg-white/20"}>
                        <Search className="h-5 w-5" />
                    </Button>
                    <ModeToggle />
                    <Button
                        className={`rounded-full px-6 ${isScrolled
                                ? "bg-primary hover:bg-primary/90 text-white"
                                : "bg-white text-primary hover:bg-white/90"
                            }`}
                    >
                        Sign In
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center md:hidden gap-4">
                    <button
                        className={isScrolled ? "text-foreground" : "text-white"}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b"
                    >
                        <div className="container px-4 py-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium hover:text-primary transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex flex-col gap-4 mt-4">
                                <Button className="w-full rounded-full" size="lg">Sign In</Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
