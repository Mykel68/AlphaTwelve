"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { ChevronDown, ChevronLeft, ChevronRight, Download, EllipsisVertical } from "lucide-react"
import EventModal from "./EventModal"

const events = [
    { name: "Cloud Innovation Summit", date: "2024-10-15", speaker: "Jane Doe", status: "Completed" },
    { name: "Blockchain Revolution Conference", date: "2024-11-05", speaker: "Dr. Peter Smith", status: "In Progress" },
    { name: "AI in Healthcare Symposium", date: "2024-12-01", speaker: "Dr. Aisha Malik", status: "Completed" },
    { name: "Future of Fintech Forum", date: "2024-10-25", speaker: "John Lee", status: "Completed" },
    { name: "Data Analytics in Business", date: "2024-11-12", speaker: "Rachel Moore", status: "Completed" },
    { name: "Sustainable Energy Expo", date: "2024-09-28", speaker: "Prof. Alan Green", status: "Completed" },
    { name: "Web3 Interfaces Workshop", date: "2024-10-10", speaker: "Kevin Adams", status: "In Progress" },
    { name: "Cybersecurity for Startups", date: "2024-11-19", speaker: "Emily Zhang", status: "Completed" },
    { name: "Smart Cities Forum", date: "2024-10-18", speaker: "Dr. Maria Hernandez", status: "In Progress" },
    { name: "Tech Safari Mixer", date: "2024-09-30", speaker: "Guest Panel", status: "In Progress" },
]

export default function EventTable() {
    const [currentPage, setCurrentPage] = useState(1)
    const [expandedRows, setExpandedRows] = useState({})
    const toggleRow = (index: number) => {
        setExpandedRows((prev) => ({
            ...prev,
            [index]: !prev[index as keyof typeof prev],
        }))
    }
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedEvent, setSelectedEvent] = useState(null)

    const handleRowClick = (eventData: any) => {
        setSelectedEvent(eventData)
        setIsModalOpen(true)
    }

    return (
        <div className="container mx-auto mt-10 md:p-6 bg-transparent">
            <h1 className="text-[1.125rem] font-medium leading-4 mb-6">Events History</h1>
            <div className="flex flex-col space-y-4">
                <div className="grid xl:grid-cols-2 gap-y-2">
                    <div className="flex flex-col sm:flex-row  gap-2 ">
                        <div className="relative md:mr-2">
                            <Input
                                type="search"
                                placeholder="Search..."
                                className="pl-10 pr-4 py-2 md:w-64 w-full bg-gray-100"
                            />
                            <svg
                                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                ></path>
                            </svg>
                        </div>
                        {/* <div className="flex items-center space-x-1"> */}
                        <Select>
                            <SelectTrigger className="md:w-[85px] w-full">
                                <SelectValue placeholder="Date" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="asc">Ascending</SelectItem>
                                <SelectItem value="desc">Descending</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger className="md:w-[85px] w-full">
                                <SelectValue placeholder="Status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="completed">Completed</SelectItem>
                                <SelectItem value="in-progress">In Progress</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger className="md:w-[85px] w-full">
                                <SelectValue placeholder="Name" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="asc">A-Z</SelectItem>
                                <SelectItem value="desc">Z-A</SelectItem>
                            </SelectContent>
                        </Select>
                        {/* </div> */}
                    </div>
                    <div className="flex flex-col lg:flex-row gap-2 mt-5 md:mt-0 lg:gap-0 justify-between items-start md:items-center text-sm ">
                        <span className="font-semibold text-sm leading-5 text-[#334155] dark:text-white">Displaying 100 results</span>
                        <div className="grid grid-cols-2 place-content-between md:flex items-center space-y-2 md:space-y-0 md:space-x-2 w-full">
                            <span className="dark:text-[rgb(252,247,255)]">Sort:</span>
                            <Select>
                                <SelectTrigger className="w-[115px]">
                                    <SelectValue placeholder="Most Recent" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="recent">Most Recent</SelectItem>
                                    <SelectItem value="oldest">Oldest</SelectItem>
                                </SelectContent>
                            </Select>
                            <Button variant="outline" size={"icon"}>
                                <EllipsisVertical />
                            </Button>
                            <Button variant="outline">
                                <Download className="h-4 w-full" /> Export
                            </Button>
                        </div>

                    </div>
                </div>
                <Table className="hidden lg:table">
                    <TableHeader className="bg-[#F1F5F9] dark:bg-[#6A6676] dark:hover:bg-[#6A6676] h-[3rem] ">
                        <TableRow>
                            <TableHead className="w-[300px]">Event Name</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Speaker</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {events.map((event, index) => (
                            <TableRow key={index} className="h-[3rem] dark:bg-[#484554] cursor-pointer" onClick={() => handleRowClick(event)} >
                                <TableCell className="font-medium">{event.name}</TableCell>
                                <TableCell>{event.date}</TableCell>
                                <TableCell>{event.speaker}</TableCell>
                                <TableCell >
                                    <div className="flex items-center justify-between">
                                        <div className={`    px-3 py-2 rounded-full flex items-center justify-around w-[120px] h-[28px] relative text-xs     leading-4 font-semibold ${event.status === "Completed" ? "bg-green-200 text-green-900 dark:bg-transparent dark:text-green-600 dark:border dark:border-green-600" : "bg-blue-200 text-blue-900 dark:bg-transparent dark:text-blue-600 dark:border dark:border-blue-600"}  `}                                        >
                                            <div
                                                className={`  h-2 w-2 rounded-full ${event.status === "Completed"
                                                    ? "bg-green-900 dark:bg-green-500"
                                                    : "bg-blue-900 dark:bg-blue-500"}    `}
                                            />
                                            {event.status}
                                        </div>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className="w-full lg:hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between bg-[#F1F5F9] dark:bg-[#6A6676] h-[3rem] px-4">
                        <div className="font-semibold text-[#64748B] dark:text-white ">Event Name</div>
                        <div className="font-semibold text-[#64748B] dark:text-white ">Status</div>
                    </div>

                    {/* Body */}
                    {events.map((event, index) => (
                        <div key={index} className="py-1 dark:border-[#6A6676]">
                            {/* Main Row */}
                            <div className="flex justify-between items-center h-[3rem] dark:bg-[#484554] px-4" >
                                <div className="flex items-center gap-2 text-xs font-medium">
                                    {expandedRows[index as keyof typeof expandedRows] ? (
                                        <ChevronDown className="h-4 w-4 cursor-pointer z-20" onClick={() => toggleRow(index)} />
                                    ) : (
                                        <ChevronRight className="h-4 w-4 cursor-pointer z-20" onClick={() => toggleRow(index)} />
                                    )}
                                    <span onClick={() => handleRowClick(event)}>
                                        {event.name}
                                    </span>
                                </div>
                                <div className="flex items-center hover:bg-[#F2F2F7]">
                                    <div className={`rounded-full flex items-center justify-around w-[82px] h-[20px] relative text-xs leading-4 font-semibold ${event.status === "Completed" ? "bg-green-200 text-green-900 dark:bg-transparent dark:text-green-600 dark:border dark:border-green-600" : "bg-blue-200 text-blue-900 dark:bg-transparent dark:text-blue-600 dark:border dark:border-blue-600"}`}
                                        onClick={() => handleRowClick(event)}
                                    >
                                        {event.status}
                                    </div>
                                </div>

                            </div>

                            {/* Expanded Row (only visible on small screens when expanded) */}
                            {expandedRows[index as keyof typeof expandedRows] && (
                                <div className="dark:bg-transparent px-4 py-2 flex justify-between items-center bg-[#FCF7FF]">
                                    <div className="text-[#334155] dark:text-white ">{event.speaker}</div>
                                    <div className="text-[#334155] dark:text-white "> {event.date}</div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center space-x-2">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="bg-[#E2E8F0] text-[#64748B] "
                        >
                            <ChevronLeft className="h-4 w-4 " />
                        </Button>
                        <Button
                            variant={currentPage === 1 ? "default" : "outline"}
                            size="sm"
                            className="rounded-full h-5 w-5 bg-[#8576FF] hover:bg-[#8576FF]/80 text-white"
                            onClick={() => setCurrentPage(1)}

                        >
                            1
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => setCurrentPage(2)}  >
                            2
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => setCurrentPage(3)}>
                            3
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="dark:bg-[#484554] dark:hover:bg-white text-[#8576FF]"
                            onClick={() => setCurrentPage((prev) => prev + 1)}
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                    <div className="flex items-center space-x-2 ">
                        <span className="text-sm text-gray-500 dark:text-white hidden md:block">Show:</span>
                        <Select defaultValue="10">
                            <SelectTrigger className="md:w-[100px]">
                                <SelectValue placeholder="10 rows" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="10">10 rows</SelectItem>
                                <SelectItem value="20">20 rows</SelectItem>
                                <SelectItem value="50">50 rows</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>
            <EventModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                eventData={selectedEvent}
            />
        </div>
    )
}