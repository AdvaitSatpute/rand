import React, { useState, useEffect } from 'react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card.tsx"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar.tsx"
import { Bell } from "lucide-react"
import { Button } from "./ui/button.tsx"
import { toast } from "./ui/use-toast.tsx"
import '../index.css';


const users = [
    { id: 1, name: "Alice", score: 1200, avatar: "/avatar1.png" },
    { id: 2, name: "Bob", score: 1100, avatar: "/avatar2.png" },
    { id: 3, name: "Charlie", score: 1000, avatar: "/avatar3.png" },
    // Add more users...
]

export function Leaderboard() {
    const [leaderboard, setLeaderboard] = useState(users)
    const [notifications, setNotifications] = useState([])

    useEffect(() => {
        // Simulate receiving notifications
        const interval = setInterval(() => {
            const newNotification = {
                id: Date.now(),
                message: `New eco-friendly event: ${Math.random().toString(36).substring(7)}`,
            }
            setNotifications(prev => [newNotification, ...prev])
            toast({
                title: "New Notification",
                description: newNotification.message,
            })
        }, 10000) // New notification every 10 seconds

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Leaderboard</h2>
                <Button variant="outline" className="relative">
                    <Bell className="h-4 w-4" />
                    {notifications.length > 0 && (
                        <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-600" />
                    )}
                </Button>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Top Contributors</CardTitle>
                    <CardDescription>Based on eco-friendly actions</CardDescription>
                </CardHeader>
                <CardContent>
                    {leaderboard.map((user, index) => (
                        <div key={user.id}
                             className="flex items-center space-x-4 py-2">
                            <span className="text-2xl font-bold">{index + 1}</span>
                            <Avatar>
                                <AvatarImage src={user.avatar} alt={user.name} />
                                <AvatarFallback>{user.name[0]}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <p className="text-sm font-medium leading-none">{user.name}</p>
                                <p className="text-sm text-muted-foreground">Score: {user.score}</p>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    )
}