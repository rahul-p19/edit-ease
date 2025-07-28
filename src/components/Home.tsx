import React from 'react';
import { Calendar, Shield, Zap, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
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
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[85svh] flex items-center px-4 sm:px-6">
        <div className="mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-secondary/30 text-ink px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Calendar className="h-4 w-4" />
              <span>Event Management</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-primary mb-6 leading-tight">
              <span className="text-ink">EditEase</span>
              <br />
              Event Management
            </h1>
            <p className="text-xl text-ink mb-4 max-w-2xl mx-auto">Manage & explore all events for your fest</p>
            <p className="text-lg text-ink mb-12 max-w-2xl mx-auto">
              Event leads can update info instantly. Visitors can explore all events seamlessly.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to={"/events"} className="bg-secondary/30 hover:bg-secondary/40 text-ink px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center space-x-2">
              <span>Explore Events</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Choose EditEase?</h2>
            <p className="text-lg text-ink max-w-2xl mx-auto">
              Built specifically for college festivals, our platform makes event management effortless.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-tertiary/20 hover:shadow-2xl flex flex-col items-center gap-y-3"
                >
                  <div className="w-20 h-20 rounded-lg grid place-items-center">
                    <IconComponent className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
                  <p className="text-ink w-4/5 text-center text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;