import React from 'react'
import { ModeToggle } from './ModeToggle.jsx'
import '../index.css';


export function Header() {
    return (
        <header className="bg-green-100 dark:bg-green-800 py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-green-800 dark:text-green-100">EchoEcho</h1>
                <ModeToggle />
            </div>
        </header>
    )
}

export function Footer() {
    return (
        <footer className="bg-green-100 dark:bg-green-800 py-4 mt-8">
            <div className="container mx-auto px-4 text-center text-green-800 dark:text-green-100">
                © 2024 Eco Action Platform. All rights reserved.
            </div>
        </footer>
    )
}