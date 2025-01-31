import React, { useState } from 'react'
import { Input } from "./ui/input.tsx"
import { Button } from "./ui/button.tsx"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card.tsx"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select.tsx"
import '../index.css';


const activities = [
    { id: 1, name: "Headings", category: "All Categories", location: "All Locations" },
    { id: 2, name: "Plant a Tree", category: "Nature", location: "Local Park" },
    { id: 3, name: "Beach Cleanup", category: "Ocean", location: "City Beach" },
    { id: 4, name: "Recycling Drive", category: "Waste Management", location: "Community Center" },
    // Add more activities...
]

export function ActivitySearch() {
    const [searchTerm, setSearchTerm] = useState("")
    const [category, setCategory] = useState("")
    const [location, setLocation] = useState("")

    const filteredActivities = activities.filter(activity =>
        activity.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (category === "" || category === "All Categories" || activity.category === category) &&
        (location === "" || location === "All Locations" || activity.location === location))


    return (
        <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
                <Input
                    placeholder="Search activities..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-grow"
                />
                <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="w-full sm:w-[180px]">
                        <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="All Categories">All Categories</SelectItem>
                        <SelectItem value="Nature">Nature</SelectItem>
                        <SelectItem value="Ocean">Ocean</SelectItem>
                        <SelectItem value="Waste Management">Waste Management</SelectItem>
                    </SelectContent>
                </Select>
                <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger className="w-full sm:w-[180px]">
                        <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="All Locations">All Locations</SelectItem>
                        <SelectItem value="Local Park">Local Park</SelectItem>
                        <SelectItem value="City Beach">City Beach</SelectItem>
                        <SelectItem value="Community Center">Community Center</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredActivities.map(activity => (
                    activity.id === 1 ? null : (
                        <Card key={activity.id}>
                            <CardHeader>
                                <CardTitle>{activity.name}</CardTitle>
                                <CardDescription>{activity.category}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Location: {activity.location}</p>
                            </CardContent>
                            <CardFooter>
                                <Button>Join Activity</Button>
                            </CardFooter>
                        </Card>
                    )
                ))}

            </div>
        </div>
    )
}