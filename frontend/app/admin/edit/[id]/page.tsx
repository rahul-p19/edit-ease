"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { getEventById } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Save, X, Plus, Trash2 } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"
import type { Event } from "@/lib/data"

interface EditEventPageProps {
  params: {
    id: string
  }
}

export default function EditEventPage({ params }: EditEventPageProps) {
  const router = useRouter()
  const { toast } = useToast()
  const [event, setEvent] = useState<Event | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const eventData = getEventById(params.id)
    if (eventData) {
      setEvent(eventData)
    }
  }, [params.id])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate save process
    setTimeout(() => {
      toast({
        title: "Event Updated Successfully",
        description: "The event information has been saved.",
      })
      setIsLoading(false)
      router.push("/admin/events")
    }, 1000)
  }

  const addRule = () => {
    if (event) {
      setEvent({
        ...event,
        rules: [...event.rules, ""],
      })
    }
  }

  const removeRule = (index: number) => {
    if (event) {
      setEvent({
        ...event,
        rules: event.rules.filter((_, i) => i !== index),
      })
    }
  }

  const updateRule = (index: number, value: string) => {
    if (event) {
      const newRules = [...event.rules]
      newRules[index] = value
      setEvent({
        ...event,
        rules: newRules,
      })
    }
  }

  const addPrize = () => {
    if (event) {
      setEvent({
        ...event,
        prizes: [...event.prizes, ""],
      })
    }
  }

  const removePrize = (index: number) => {
    if (event) {
      setEvent({
        ...event,
        prizes: event.prizes.filter((_, i) => i !== index),
      })
    }
  }

  const updatePrize = (index: number, value: string) => {
    if (event) {
      const newPrizes = [...event.prizes]
      newPrizes[index] = value
      setEvent({
        ...event,
        prizes: newPrizes,
      })
    }
  }

  const addCoordinator = () => {
    if (event) {
      setEvent({
        ...event,
        coordinators: [...event.coordinators, { name: "", contact: "", email: "" }],
      })
    }
  }

  const removeCoordinator = (index: number) => {
    if (event) {
      setEvent({
        ...event,
        coordinators: event.coordinators.filter((_, i) => i !== index),
      })
    }
  }

  const updateCoordinator = (index: number, field: string, value: string) => {
    if (event) {
      const newCoordinators = [...event.coordinators]
      newCoordinators[index] = { ...newCoordinators[index], [field]: value }
      setEvent({
        ...event,
        coordinators: newCoordinators,
      })
    }
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Event Not Found</h1>
          <Link href="/admin/events" className="text-indigo-600 hover:text-indigo-700">
            Back to Events
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/admin/events"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Back to Events</span>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Edit Event</h1>
          <p className="text-gray-600 mt-2">Update event information and details</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Event Name</Label>
                  <Input
                    id="name"
                    value={event.name}
                    onChange={(e) => setEvent({ ...event, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Input
                    id="category"
                    value={event.category}
                    onChange={(e) => setEvent({ ...event, category: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  value={event.date}
                  onChange={(e) => setEvent({ ...event, date: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="description">Short Description</Label>
                <Textarea
                  id="description"
                  value={event.description}
                  onChange={(e) => setEvent({ ...event, description: e.target.value })}
                  rows={3}
                  required
                />
              </div>

              <div>
                <Label htmlFor="fullDescription">Full Description</Label>
                <Textarea
                  id="fullDescription"
                  value={event.fullDescription}
                  onChange={(e) => setEvent({ ...event, fullDescription: e.target.value })}
                  rows={5}
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Rules */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Rules & Guidelines</CardTitle>
                <Button type="button" onClick={addRule} size="sm" variant="outline">
                  <Plus className="h-4 w-4 mr-1" />
                  Add Rule
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {event.rules.map((rule, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={rule}
                    onChange={(e) => updateRule(index, e.target.value)}
                    placeholder={`Rule ${index + 1}`}
                  />
                  <Button
                    type="button"
                    onClick={() => removeRule(index)}
                    size="sm"
                    variant="outline"
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Prizes */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Prizes & Recognition</CardTitle>
                <Button type="button" onClick={addPrize} size="sm" variant="outline">
                  <Plus className="h-4 w-4 mr-1" />
                  Add Prize
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {event.prizes.map((prize, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={prize}
                    onChange={(e) => updatePrize(index, e.target.value)}
                    placeholder={`Prize ${index + 1}`}
                  />
                  <Button
                    type="button"
                    onClick={() => removePrize(index)}
                    size="sm"
                    variant="outline"
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Coordinators */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Event Coordinators</CardTitle>
                <Button type="button" onClick={addCoordinator} size="sm" variant="outline">
                  <Plus className="h-4 w-4 mr-1" />
                  Add Coordinator
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {event.coordinators.map((coordinator, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-medium">Coordinator {index + 1}</h4>
                    <Button
                      type="button"
                      onClick={() => removeCoordinator(index)}
                      size="sm"
                      variant="outline"
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div>
                      <Label>Name</Label>
                      <Input
                        value={coordinator.name}
                        onChange={(e) => updateCoordinator(index, "name", e.target.value)}
                        placeholder="Coordinator name"
                      />
                    </div>
                    <div>
                      <Label>Contact</Label>
                      <Input
                        value={coordinator.contact}
                        onChange={(e) => updateCoordinator(index, "contact", e.target.value)}
                        placeholder="Phone number"
                      />
                    </div>
                    <div>
                      <Label>Email</Label>
                      <Input
                        type="email"
                        value={coordinator.email}
                        onChange={(e) => updateCoordinator(index, "email", e.target.value)}
                        placeholder="Email address"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-end">
            <Button type="button" variant="outline" asChild>
              <Link href="/admin/events">
                <X className="h-4 w-4 mr-2" />
                Cancel
              </Link>
            </Button>
            <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700" disabled={isLoading}>
              <Save className="h-4 w-4 mr-2" />
              {isLoading ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
