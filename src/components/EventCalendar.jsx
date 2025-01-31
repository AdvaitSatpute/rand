import React, { useState } from 'react'
import { Calendar } from "./ui/calender.tsx"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card.tsx"
import { Button } from "./ui/button.tsx"
import '../index.css';


const events = [
    { id: 1, name: "Community Tree Planting", date: new Date(2023, 9, 15) },
    { id: 2, name: "Beach Cleanup Day", date: new Date(2023, 9, 22) },
    { id: 3, name: "Recycling Workshop", date: new Date(2023, 10, 5) },
    // Add more events...
]

export function EventCalendar() {
    const [date, setDate] = useState(new Date())

    const addToCalendar = (event) => {
        // In a real app, this would integrate with the user's calendar
        console.log(`Added ${event.name} to calendar`)
    }

    const eventsOnSelectedDate = events.filter(
        event => event.date.toDateString() === date.toDateString()
    )

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold">Upcoming Events</h2>
            <div className="flex flex-col md:flex-row gap-4">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border shadow"
                />
                <Card className="flex-grow">
                    <CardHeader>
                        <CardTitle>Events on {date.toDateString()}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {eventsOnSelectedDate.length > 0 ? (
                            eventsOnSelectedDate.map(event => (
                                <div key={event.id} className="mb-2">
                                    <CardDescription>{event.name}</CardDescription>
                                    <Button onClick={() => addToCalendar(event)}>Add to Calendar</Button>
                                </div>
                            ))
                        ) : (
                            <p>No events on this date.</p>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}