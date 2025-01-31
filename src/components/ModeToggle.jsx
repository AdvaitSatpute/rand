import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import '../index.css';


export function ModeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme(); // Add resolvedTheme for initial load
    const [mounted, setMounted] = useState(false);

    // Ensures the component is only rendered on the client side
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; // Prevents flickering on initial load
    }

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
        >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
