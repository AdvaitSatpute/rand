import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card.tsx"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import '../index.css';


const impactData = [
    { name: 'CO2 Saved', user: 250, community: 5000 },
    { name: 'Trees Planted', user: 5, community: 150 },
    { name: 'Waste Recycled', user: 100, community: 2000 },
]

export function ImpactDashboard() {
    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold">Your Environmental Impact</h2>
            <Card>
                <CardHeader>
                    <CardTitle>Impact Comparison</CardTitle>
                    <CardDescription>Your impact vs Community impact</CardDescription>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={impactData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="user" fill="#8884d8" name="Your Impact" />
                            <Bar dataKey="community" fill="#82ca9d" name="Community Impact" />
                        </BarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </div>
    )
}