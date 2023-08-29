import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import { ThemeSwitcher } from './theme-switcher'

import Link from 'next/link'
import { AreaChart } from 'lucide-react'
import { ShoppingBasket } from 'lucide-react'
const Header = () => {
    return (
        <>
            <div className='flex justify-between p-5 pe-[90px] bg-gradient-to-r from-slate-600 to-slate-200'>
                <div className=''>
                    <h1>Test</h1>
                </div>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className='w-full'>
                                    <ul className='grid p-4 lg:grid-cols-[.75fr_1fr]'>
                                        <li className='bg-gradient-to-r from-indigo-200 p-3 rounded'>
                                            <AreaChart />
                                        </li>                                    
                                        <Link href="/dashboard"  legacyBehavior passHref>
                                            <NavigationMenuLink className='p-3'>
                                                Dashboard
                                            </NavigationMenuLink>
                                        </Link>
                                    </ul>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className='mx-3'>Item two</NavigationMenuTrigger>
                            <NavigationMenuContent>
                            <div className='w-full'>
                                    <ul className='grid p-4 lg:grid-cols-[.75fr_1fr]'>
                                        <li className='bg-gradient-to-r from-indigo-200 p-3 rounded'>
                                            <ShoppingBasket />
                                        </li>                                        
                                        <Link href="/articles"  legacyBehavior passHref>
                                            <NavigationMenuLink className='p-3'>
                                                Articles
                                            </NavigationMenuLink>
                                        </Link>
                                    </ul>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                <ThemeSwitcher />
                </NavigationMenu>
            </div>
        </>
    )
}

export default Header
