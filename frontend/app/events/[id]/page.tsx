import { notFound } from "next/navigation"
import { getEventById } from "@/lib/data"
import Link from "next/link"
import { ArrowLeft, Calendar, Trophy, Users, Phone, Mail, Clock } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface EventDetailPageProps {
  params: {
    id: string
  }
}

export default function EventDetailPage({ params }: EventDetailPageProps) {
  const event = getEventById(params.id)

  if (!event) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/events"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Back to Events</span>
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Event Header */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="relative h-64 sm:h-80">
            <Image src={event.image || "/placeholder.svg"} alt={event.name} fill className="object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
              <div className="p-6 text-white">
                <div className="flex items-center mb-2">
                  <span className="bg-indigo-600 px-3 py-1 rounded-full text-sm font-medium mr-3">
                    {event.category}
                  </span>
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{event.date}</span>
                  </div>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold mb-2">{event.name}</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Event</h2>
              <p className="text-gray-600 leading-relaxed">{event.fullDescription}</p>
            </div>

            {/* Rules */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Users className="h-6 w-6 mr-2 text-indigo-600" />
                Rules & Guidelines
              </h2>
              <ul className="space-y-3">
                {event.rules.map((rule, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-gray-600">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prizes */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Trophy className="h-6 w-6 mr-2 text-yellow-500" />
                Prizes & Recognition
              </h2>
              <div className="space-y-3">
                {event.prizes.map((prize, index) => (
                  <div key={index} className="flex items-center p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <Trophy className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{prize}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Event Info */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Event Information</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-3 text-indigo-600" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-3 text-indigo-600" />
                  <span>Last updated: {event.lastUpdated}</span>
                </div>
              </div>
            </div>

            {/* Coordinators */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Event Coordinators</h3>
              <div className="space-y-4">
                {event.coordinators.map((coordinator, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">{coordinator.name}</h4>
                    <div className="space-y-1">
                      <div className="flex items-center text-sm text-gray-600">
                        <Phone className="h-4 w-4 mr-2" />
                        <a href={`tel:${coordinator.contact}`} className="hover:text-indigo-600">
                          {coordinator.contact}
                        </a>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Mail className="h-4 w-4 mr-2" />
                        <a href={`mailto:${coordinator.email}`} className="hover:text-indigo-600">
                          {coordinator.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Ready to Participate?</h3>
              <p className="text-indigo-100 mb-4 text-sm">
                Contact the coordinators for registration details and more information.
              </p>
              <Button asChild className="w-full bg-white text-indigo-600 hover:bg-gray-100">
                <Link href="/events">Explore More Events</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
