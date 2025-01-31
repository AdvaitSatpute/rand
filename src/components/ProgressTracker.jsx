import React from 'react'
import { Progress } from "./ui/progress.tsx"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card.tsx"
import '../index.css';

export function ProgressTracker() {
    const goals = [
        { id: 1, name: "Plant Trees", current: 5, target: 10 },
        { id: 2, name: "Reduce Carbon Footprint", current: 250, target: 500 },
        { id: 3, name: "Recycle Waste", current: 75, target: 100 },
    ]

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold">Your Sustainability Goals</h2>
            {goals.map(goal => (
                <Card key={goal.id}>
                    <CardHeader>
                        <CardTitle>{goal.name}</CardTitle>
                        <CardDescription>
                            Progress: {goal.current} / {goal.target}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Progress value={(goal.current / goal.target) * 100} className="w-full" />
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}