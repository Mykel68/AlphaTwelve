"use client"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { useEffect, useState } from "react"

export const description = "A bar chart"

const chartData = [
    { month: "January", event: 786 },
    { month: "February", event: 905 },
    { month: "March", event: 737 },
    { month: "April", event: 473 },
    { month: "May", event: 1109 },
    { month: "June", event: 584 },
    { month: "July", event: 989 },
    { month: "August", event: 460 },
    { month: "September", event: 220 },
    { month: "October", event: 975 },
    { month: "November", event: 1095 },
    { month: "December", event: 600 },
]

const chartConfig = {
    event: {
        label: "Event",
        color: "#8576FF",
    },
} satisfies ChartConfig

export default function Component() {
    const [isLargeScreen, setIsLargeScreen] = useState(false)

    // Check screen size on mount and on resize
    useEffect(() => {

        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1200) // lg breakpoint in Tailwind
        }

        handleResize() // Run on initial render
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])
    return (
        <Card className="p-0" >
            <CardContent className="p-0 md:p-6">
                <ChartContainer config={chartConfig} >
                    <BarChart data={chartData} width={600} height={300} accessibilityLayer >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />

                        {isLargeScreen && (
                            <YAxis
                                ticks={[0, 200, 400, 600, 800, 1000]}
                                domain={[0, 1000]}
                                tickFormatter={(value) => `${value}`}
                            />
                        )}
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar dataKey="event" fill="var(--color-event)" radius={8} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
