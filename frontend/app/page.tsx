import Link from "next/link"
import { Calendar, Shield, Zap, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const features = [
    {
      icon: Zap,
      title: "Instant Updates",
      description: "Event leads can update information in real-time, keeping everyone informed.",
    },
    {
      icon: Shield,
      title: "Secure Login",
      description: "Protected admin access ensures only authorized users can make changes.",
    },
    {
      icon: Users,
      title: "Easy Management",
      description: "Intuitive interface makes event management simple and efficient.",
    },
    {
      icon: Calendar,
      title: "Event Discovery",
      description: "Visitors can easily explore and discover all festival events.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Calendar className="h-4 w-4" />
              <span>Festival Management</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-indigo-600">EditEase</span>
              <br />
              Event Management
            </h1>
            <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto">Manage & explore all events for your fest</p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              Event leads can update info instantly. Visitors can explore all events seamlessly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              <Link href="/events" className="flex items-center space-x-2">
                <span>Explore Events</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-indigo-200 text-indigo-600 hover:bg-indigo-50 px-8 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 bg-transparent"
            >
              <Link href="/admin/login" className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Login as Admin</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose FestCMS?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built specifically for college festivals, our platform makes event management effortless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-200 group"
              >
                <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors">
                  <feature.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 text-lg">
            Built by <span className="font-semibold text-indigo-600">Rahul Pandey</span> for your fest 🚀
          </p>
          <div className="mt-6 flex justify-center space-x-6">
            <Link href="/events" className="text-gray-500 hover:text-indigo-600 transition-colors">
              Events
            </Link>
            <Link href="/admin/login" className="text-gray-500 hover:text-indigo-600 transition-colors">
              Admin
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
