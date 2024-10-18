import { ArrowUp, ArrowDown, ArrowUpRight, ArrowDownRight, Info } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card" // assuming you are using your own Card component

export default function StatsCard() {
    const summaryItems = [
        { title: "Total Events", value: "100,000", change: "+5.0%" },
        { title: "Active Speakers", value: "25", change: "-5.0%" },
        { title: "Total Registrations", value: "300", change: "+5.0%" },
        { title: "Total Revenue", value: "$500,000", change: "+5.0%" },
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {summaryItems.map((item, index) => {
                const isPositiveChange = item.change.startsWith('+')
                return (
                    <Card key={index} className="">
                        <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                            <CardTitle className="text-[1rem] leading-6 font-semibold text-[#64748B] dark:text-white">{item.title}</CardTitle>
                            <Info className='h-3' />
                        </CardHeader>
                        <CardContent className='flex gap-1  '>
                            <div className="text-2xl font-semibold leading-8 text-[#334155] dark:text-white">{item.value}</div>
                            <div className="flex items-center ">
                                {/* Display the change percentage with the arrow */}
                                <div className={`text-xs font-semibold ${isPositiveChange ? 'text-green-500' : 'text-red-500'}`}>
                                    {isPositiveChange ? <ArrowUpRight className="inline mr-1 h-4" /> : <ArrowDownRight className="inline mr-1 h-4" />}

                                    {item.change}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
    )
}
