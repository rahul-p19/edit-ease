import Link from "next/link"
import { getAllEvents } from "@/lib/data"
import { Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function EventsPage() {
  const events = getAllEvents()

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Festival Events</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover all the exciting events happening at your college festival. Click on any event to learn more about
            rules, prizes, and registration details.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Link key={event.id} href={`/events/${event.id}`} className="group block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100">
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {event.category}
                    </span>
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{event.date}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {event.name}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>

                  <div className="flex items-center text-indigo-600 font-medium group-hover:text-indigo-700">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Want to participate?</h2>
            <p className="text-gray-600 mb-6">Registration for most events is still open. Don't miss out on the fun!</p>
            <Link
              href="/admin/login"
              className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
            >
              <span>Event Coordinator Login</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
