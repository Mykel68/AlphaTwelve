"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, Users, BarChart2, Bell, Settings, Home, ChevronLeft, ChevronRight, Menu, X } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import User from "@/assets/user.svg"

export default function Sidebar() {
    const [activeItem, setActiveItem] = useState("Home")
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [isOpen, setIsOpen] = useState(false) // Mobile sidebar toggle

    const menuItems = [
        { icon: Home, label: "Home" },
        { icon: Calendar, label: "Events" },
        { icon: Users, label: "Speakers" },
        { icon: BarChart2, label: "Reports" },
        { icon: Bell, label: "Notifications", badge: "3" },
        { icon: Settings, label: "Messages" },
        { icon: Settings, label: "Settings" },
    ]

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark")
        } else {
            document.body.classList.remove("dark")
        }
    }, [isDarkMode])

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            {/* Desktop Sidebar */}
            <div className={`h-full p-4 flex flex-col transition-all hidden sm:block ${isCollapsed ? "w-20" : "w-64"} ${isDarkMode ? "bg-[#484554] text-white" : "bg-white text-black border-r"}`}>
                <div className={`flex ${isCollapsed ? ' justify-center' : ''}`}>
                    <div className={`h-[32px] ${isCollapsed ? 'w-[32px]' : 'w-[64px]'} text-[#2563EB] border-[#2563EB] bg-blue-200 text-xs mb-4 leading-4 font-semibold p-1 flex items-center justify-center`}>
                        {!isCollapsed ? <>Full Logo</> : null}
                    </div>
                </div>
                <nav className="flex-1">
                    {menuItems.map((item, index) => (
                        <Button
                            key={index}
                            variant="ghost"
                            className={`w-full justify-start mb-2 ${activeItem === item.label ? "text-[#8576FF] bg-[#FCF7FF] dark:bg-[#8576FF] dark:text-white" : ""} ${isCollapsed ? 'hover:rounded-full rounded-full aspect-square' : null} `}
                            onClick={() => setActiveItem(item.label)}
                        >
                            <div className="relative">
                                <item.icon className="mr-2 h-4 w-4" />
                                {item.label === "Notifications" && isCollapsed && (
                                    <span className="absolute -top-2 right-0 block h-2 w-2 rounded-full bg-red-500" />
                                )}
                            </div>
                            {!isCollapsed && item.label}
                            {item.badge && !isCollapsed && (
                                <Badge variant="outline" className="ml-2 text-xs flex items-center justify-center aspect-square w-5 text-white rounded-full bg-red-500">
                                    {item.badge}
                                </Badge>
                            )}
                        </Button>
                    ))}
                </nav>
                <div className="mt-auto">
                    <Button
                        variant="ghost"
                        className="w-full justify-start mb-4 hover:bg-transparent"
                        onClick={() => setIsCollapsed(!isCollapsed)}
                    >
                        {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <><ChevronLeft className="h-4 w-4" />Collapse</>}
                    </Button>
                    <div className="flex items-center mb-10">
                        <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode} />
                        {!isCollapsed && <span className="ml-2">{isDarkMode ? "Light Mode" : "Dark Mode"}</span>}
                    </div>
                    <div className="flex items-center mb-8">
                        <img src={User.src} alt="User Avatar" className="h-10 w-10 rounded-full" />
                        {!isCollapsed && (
                            <div className="ml-2">
                                <div className="font-xs">Radra Dev</div>
                                <div className="text-xs">rudra.devi@gmail.com</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <div className="sm:hidden flex p-3 justify-between bg-white dark:bg-[#484554] dark:text-white w-full fixed top-0 z-50">
                <div className="h-8 p-4 bg-blue-100 text-blue-600 rounded flex items-center justify-between font-semibold">
                    Full Logo
                </div>
                <Button
                    variant="ghost"
                    className="md:hidden bg-none dark:bg-transparent bg-transparent dark:hover:bg-transparent"
                    onClick={toggleSidebar}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>

                {/* Mobile Sidebar */}
                <div className={`w-full fixed dark:bg-[#484554] dark:text-white top-14 left-0 bg-white  border-gray-200 transition-all duration-300 overflow-hidden ${isOpen ? "h-[92vh]" : "h-0"}`}>
                    <div className="flex flex-col justify-between h-full">
                        <nav className="flex flex-col p-4 ">
                            {menuItems.map((item) => (
                                <Button
                                    key={item.label}
                                    variant="ghost"
                                    className={`w-full justify-start py-2 px-4 ${activeItem === item.label ? "bg-blue-50 text-blue-600 " : "text-gray-600 dark:text-white"}`}
                                    onClick={() => {
                                        setActiveItem(item.label)
                                        setIsOpen(false) // Close navbar on selection
                                    }}
                                >
                                    <item.icon className="h-5 w-5 mr-3" />
                                    {item.label}
                                    {item.badge && (
                                        <Badge variant="destructive" className="ml-auto w-3 flex items-center  justify-center rounded-full aspect-square dark:bg-red-500">
                                            {item.badge}
                                        </Badge>
                                    )}
                                </Button>
                            ))}
                        </nav>
                        <div className="p-4 ">
                            {/* Dark Mode Toggle */}
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm text-gray-600 dark:text-white">{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
                                <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode} />
                            </div>
                            {/* User Info */}
                            <div className="flex items-center">
                                <div className="flex items-center mb-2">
                                    <img src={User.src} alt="User Avatar" className="h-10 w-10 rounded-full" />
                                    <div className="ml-2">
                                        <div className="font-xs">Radra Dev</div>
                                        <div className="text-xs">rudra.devi@gmail.com</div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div >


        </>
    )
}
