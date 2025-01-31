import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import '../../index.css'
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function formatDate(input: string | number): string {
    const date = new Date(input)
    return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    })
}

export function absoluteUrl(path: string) {
    return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}

export function formatNumber(
    number: number,
    options: {
        decimals?: number
        style?: "currency" | "decimal" | "percent"
        currency?: string
    } = {}
) {
    const { decimals = 0, style = "decimal", currency = "USD" } = options

    const formatter = new Intl.NumberFormat("en-US", {
        style,
        currency,
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    })

    return formatter.format(number)
}

export function slugify(str: string) {
    return str
        .toLowerCase()
        .replace(/[^\w ]+/g, "")
        .replace(/ +/g, "-")
}

export function truncate(str: string, length: number) {
    return str.length > length ? `${str.substring(0, length)}...` : str
}

export function getInitials(name: string) {
    const names = name.split(" ")
    return names.map((n) => n[0]).join("")
}

export function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout | null = null

    return (...args: Parameters<T>) => {
        if (timeout) clearTimeout(timeout)
        timeout = setTimeout(() => func(...args), wait)
    }
}

export function getRandomItem<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)]
}

export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export function range(start: number, end: number): number[] {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i)
}