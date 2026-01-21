import {useEffect, useState} from "react";

import {Moon, Sun} from "lucide-react"

import {Button} from "@/components/ui/button"
import {useTheme} from "@/components/darkMode/themeProvider/ThemeProvider.tsx"

export function ModeToggle() {
    const {setTheme} = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    const handleToggle = () => {
        const isDark = document.documentElement.classList.contains("dark")
        setTheme(isDark ? "light" : "dark")
    }

    if (!mounted) {
        return (
            <Button variant="outline" size="icon" aria-label="Alternar tema">
                <Sun className="h-5 w-5"/>
            </Button>
        )
    }

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={handleToggle}
            aria-label="Alternar tema"
            className="!rounded-none "
        >
            <Sun className="h-5 w-5 text-white dark:hidden "/>
            <Moon className="h-5 w-5 hidden dark:block"/>
        </Button>
    )
}