import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card.tsx"
import { Badge } from "./ui/badge.tsx"
import { motion } from "framer-motion"
import '../index.css';

const achievements = [
    { id: 1, name: "Tree Hugger", description: "Plant 10 trees", unlocked: true },
    { id: 2, name: "Beach Guardian", description: "Participate in 5 beach cleanups", unlocked: false },
    { id: 3, name: "Waste Warrior", description: "Recycle 100kg of waste", unlocked: true },
    // Add more achievements...
]

export function Achievements() {
    const [unlockedAchievements, setUnlockedAchievements] = useState(
        achievements.filter(a => a.unlocked).map(a => a.id)
    )

    const unlockAchievement = (id) => {
        if (!unlockedAchievements.includes(id)) {
            setUnlockedAchievements([...unlockedAchievements, id])
        }
    }

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold">Your Achievements</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {achievements.map(achievement => (
                    <Card key={achievement.id} className="relative overflow-hidden">
                        <CardHeader>
                            <CardTitle>{achievement.name}</CardTitle>
                            <CardDescription>{achievement.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {unlockedAchievements.includes(achievement.id) ? (
                                <Badge variant="success">Unlocked</Badge>
                            ) : (
                                <Badge variant="secondary" className="cursor-pointer" onClick={() => unlockAchievement(achievement.id)}>
                                    Lock (Click to unlock)
                                </Badge>
                            )}
                        </CardContent>
                        {unlockedAchievements.includes(achievement.id) && (
                            <motion.div
                                className="absolute inset-0 bg-green-500 opacity-20"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5 }}
                            />
                        )}
                    </Card>
                ))}
            </div>
        </div>
    )
}