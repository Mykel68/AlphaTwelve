"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Slide1 from "@/assets/Slide1.svg"
import Slide2 from "@/assets/Slide2.svg"
import Slide3 from "@/assets/Slide3.svg"

const carouselItems = [
    {
        image: Slide1,
        title: "Latest News & Updates",
        description: "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.",
    },
    {
        image: Slide2,
        title: "Latest News & Updates",
        description: "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.",
    },
    {
        image: Slide3,
        title: "Latest News & Updates",
        description: "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.",
    },
]

export default function NewsCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isFading, setIsFading] = useState(false)
    const isPlaying = true

    const handleSlideChange = (newSlide: number) => {
        setIsFading(true) // Trigger fade-out
        setTimeout(() => {
            setCurrentSlide(newSlide)
            setIsFading(false) // Trigger fade-in after slide change
        }, 200) // Fade duration (adjust as needed)
    }

    const nextSlide = () => {
        handleSlideChange((currentSlide + 1) % carouselItems.length)
    }

    const prevSlide = () => {
        handleSlideChange((currentSlide - 1 + carouselItems.length) % carouselItems.length)
    }


    useEffect(() => {
        let intervalId: NodeJS.Timeout | null = null
        if (isPlaying) {
            intervalId = setInterval(nextSlide, 5000) // Change slide every 5 seconds
        }
        return () => {
            if (intervalId) clearInterval(intervalId)
        }
    }, [isPlaying, nextSlide])


    return (
        <div className="relative w-full max-w-3xl mx-auto">
            <div className="overflow-hidden rounded-lg">
                <div className="relative aspect-[3/2]">
                    <div
                        className={cn(
                            "transition-opacity duration-500", // Fade transition
                            isFading ? "opacity-0" : "opacity-100"
                        )}
                    >
                        <Image
                            src={carouselItems[currentSlide].image}
                            alt={carouselItems[currentSlide].title}
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h2 className="text-xl md:text-2xl text-balance font-bold mb-2">{carouselItems[currentSlide].title}</h2>
                        <p className="text-xs md:text-sm  line-clamp-2">{carouselItems[currentSlide].description}</p>
                    </div>
                </div>
            </div>
            <Button
                variant="outline"
                size="icon"
                className="absolute left-2 top-1/2 rounded-full -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={prevSlide}
            >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous slide</span>
            </Button>
            <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-1/2 rounded-full -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={nextSlide}
            >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next slide</span>
            </Button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {carouselItems.map((_, index) => (
                    <button
                        key={index}
                        className={cn(
                            "w-5 h-1 rounded-full transition-all",
                            currentSlide === index ? "bg-white" : "bg-white/50"
                        )}
                        onClick={() => handleSlideChange(index)}
                    >
                        <span className="sr-only">Go to slide {index + 1}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}
