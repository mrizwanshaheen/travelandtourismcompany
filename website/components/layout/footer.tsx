import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone, Plane } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-[#0F172A] text-white pt-24 pb-12 border-t border-white/5">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center space-x-2">
                            <Plane className="h-8 w-8 text-gold" />
                            <span className="text-2xl font-bold tracking-tight">LuxeTravel</span>
                        </Link>
                        <p className="text-white/60 text-lg font-light leading-relaxed">
                            Redefining global exploration with curated luxury experiences and unparalleled service for the world's most discerning travelers.
                        </p>
                        <div className="flex space-x-6">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <Link key={i} href="#" className="text-white/40 hover:text-gold transition-colors p-2 bg-white/5 rounded-full">
                                    <Icon className="h-5 w-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-[0.3em] mb-8 text-gold">Journeys</h3>
                        <ul className="space-y-4 text-white/70 font-medium">
                            <li><Link href="#" className="hover:text-white transition-colors">Popular Destinations</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Private Collection</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Yacht Charters</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Season Specials</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Gift Cards</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-[0.3em] mb-8 text-gold">Concierge</h3>
                        <ul className="space-y-4 text-white/70 font-medium">
                            <li><Link href="#" className="hover:text-white transition-colors">Manage Booking</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Travel Documents</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Health & Safety</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Sustainability</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Contact Expert</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-[0.3em] mb-8 text-gold">Headquarters</h3>
                        <ul className="space-y-6 text-white/70 font-medium">
                            <li className="flex items-start gap-4">
                                <MapPin className="h-5 w-5 text-gold shrink-0 mt-1" />
                                <span>One Luxury Plaza, 88th Floor<br />Dubai, UAE &middot; 00000</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail className="h-5 w-5 text-gold shrink-0" />
                                <span>concierge@luxetravel.com</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone className="h-5 w-5 text-gold shrink-0" />
                                <span>+971 4 000 0000</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
                    </div>
                    <div>
                        © {new Date().getFullYear()} LuxeTravel International. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}
