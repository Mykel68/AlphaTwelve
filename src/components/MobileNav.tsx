"use client"
import { useState } from "react"
import { Home, Calendar, Users, BarChart2, User } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
    { icon: Home, label: "Home" },
    { icon: Calendar, label: "Events" },
    { icon: Users, label: "Speakers" },
    { icon: BarChart2, label: "Reports" },
    { icon: User, label: "Profile" },
]

export default function MobileNavigation() {
    const [active, setActive] = useState("Home")

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-gray-200 py-2 md:hidden">
            <ul className="flex justify-around items-center">
                {navItems.map((item) => (
                    <li key={item.label} className="text-center">
                        <button
                            onClick={() => setActive(item.label)}
                            className={cn(
                                "flex flex-col items-center p-2  transition-colors",
                                active === item.label
                                    ? " border-t-4 border-[#8576FF] text-[#64748B] "
                                    : "text-gray-600 hover:text-gray-900"
                            )}
                        >
                            <item.icon className="w-6 h-6 mb-1" />
                            <span className={`text-xs font-medium ${active === item.label ? 'text-[#8576FF]' : null}`}>{item.label}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}