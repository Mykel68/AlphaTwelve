import RegistrationChart from "@/components/BarChart"
import Carousel from "@/components/Carousel"
import Sidebar from "@/components/Sidebar"
import StatsCard from "@/components/StatsCard"
import EventTable from "@/components/EventTable"
import MobileNavigation from "@/components/MobileNav"

export default function Page() {
  return (
    <div className="flex h-screen bg-white dark:bg-[#383544] ">
      <Sidebar />
      <main className="flex-1 p-5 sm:p-10 pt-20 sm:pt-10 overflow-x-hidden">
        <h1 className="text-[22px] font-medium leading-5 mb-6">Welcome! Here's your summary</h1>
        {/* <Summary /> */}
        <StatsCard />
        <h2 className="text-[18px] font-medium leading-3 my-6">Event Registrations per month</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <RegistrationChart />
          <Carousel />
          {/* <FeaturedEvent /> */}
        </div>
        <EventTable />
        <div className="">
          <MobileNavigation />
        </div>
        {/* <EventTable className="mt-6" /> */}
      </main>
    </div>
  )
}