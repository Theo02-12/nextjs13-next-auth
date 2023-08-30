import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './theme-provider'
// import { ThemeSwitcher } from '@/components/theme-switcher'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main>
            <a href='/extra'>test</a>
            <a href='/server'>server</a>
            <a href='/api/auth/signout'>sign out</a>
            <a href='/dashboard'>dashboard</a>
            {children}
            </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
