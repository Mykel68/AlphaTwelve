import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface EventModalProps {
    isOpen: boolean
    onClose: () => void
    eventData: {
        name: string
        date: string
        speaker: string
        status: string
    } | null
}

export default function EventModal({ isOpen, onClose, eventData }: EventModalProps) {
    if (!eventData) return null // If no event data is selected, don't render the modal

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px] bg-gray-800 text-white p-0 overflow-hidden">
                <DialogHeader className="p-6 pb-0">
                    <DialogTitle className="text-2xl font-bold">{eventData.name}</DialogTitle>

                </DialogHeader>
                <div className="px-6 py-4">
                    <p className="text-gray-400">Event Date: {eventData.date}</p>
                    <p className="mt-4 mb-6">Speaker: {eventData.speaker}</p>
                    <div className="flex -space-x-2 mb-2">
                        <Avatar className="border-2 border-gray-800">
                            <AvatarFallback className="bg-yellow-500">{eventData.speaker[0]}</AvatarFallback>
                        </Avatar>
                    </div>
                    <p className="text-sm">
                        Speaker: {eventData.speaker}
                    </p>
                    <p className="text-sm mt-2">Status: {eventData.status}</p>
                </div>
                <DialogFooter className="bg-gray-700 px-6 py-4">
                    <div className="flex flex-col md:flex-row gap-y-3 justify-between w-full">
                        <Button variant="outline" className="bg-white dark:bg-white dark:text-black text-gray-800 hover:bg-gray-200">
                            Edit
                        </Button>
                        <Button variant="destructive" className="bg-red-500 hover:bg-red-600">
                            Delete
                        </Button>
                        <Button className="bg-[#8576FF] text-white hover:bg-purple-600">
                            Mark as completed
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
