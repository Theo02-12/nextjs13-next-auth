'use client'

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon } from 'lucide-react';
import { Sun } from 'lucide-react';

export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme} = useTheme();

    useEffect(() => {
        setMounted(true)
    }, [])

    if(!mounted){
        return null
    }

    return (
        <button
            className={`w-fit p-[6px] rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933]`}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
            {theme === 'light' ? <Moon /> : <Sun />}
        </button>
    )
}