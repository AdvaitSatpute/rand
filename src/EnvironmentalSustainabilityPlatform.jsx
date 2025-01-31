import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs.tsx"
import { ActivitySearch } from './components/ActivitySearch.jsx'
import { ProgressTracker } from './components/ProgressTracker.jsx'
import { ImpactDashboard } from './components/ImpactDashboard.jsx'
import { Achievements } from './components/Achievements.jsx'
import { EventCalendar } from './components/EventCalendar.jsx'
import { Leaderboard } from './components/Leaderboard.jsx'
import { Header, Footer } from './components/HeaderFooter.jsx'
import { ThemeProvider } from 'next-themes';
import './index.css'

function EnvironmentalSustainabilityPlatform() {
    const [activeTab, setActiveTab] = useState("search")

    return (<ThemeProvider attribute="class">
            <div className="min-h-screen bg-green-50 dark:bg-green-900 flex flex-col">
                <Header/>
                <main className="flex-grow container mx-auto px-4 py-8">
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
                        <TabsList className="flex w-full space-x-4 overflow-auto">
                            <TabsTrigger value="search">Search</TabsTrigger>
                            <TabsTrigger value="progress">Progress</TabsTrigger>
                            <TabsTrigger value="impact">Impact</TabsTrigger>
                            <TabsTrigger value="achievements">Achievements</TabsTrigger>
                            <TabsTrigger value="events">Events</TabsTrigger>
                            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
                        </TabsList>
                        <TabsContent value="search">
                            <ActivitySearch/>
                        </TabsContent>
                        <TabsContent value="progress">
                            <ProgressTracker/>
                        </TabsContent>
                        <TabsContent value="impact">
                            <ImpactDashboard/>
                        </TabsContent>
                        <TabsContent value="achievements">
                            <Achievements/>
                        </TabsContent>
                        <TabsContent value="events">
                            <EventCalendar/>
                        </TabsContent>
                        <TabsContent value="leaderboard">
                            <Leaderboard/>
                        </TabsContent>
                    </Tabs>
                </main>
                <Footer/>
            </div>
        </ThemeProvider>
    )
}

export default EnvironmentalSustainabilityPlatform