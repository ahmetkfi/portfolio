import Navigation from '@/components/Navigation/Navigation'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Aboutme from '@/components/Aboutme'
import Portfoilio from '@/components/Portfoilio'
import { useRef } from 'react'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'kocyigit',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}){  
  return (
    <html lang="en">
      <body className={inter.className}>
      <header>
        <nav>
          <Navigation/>
        </nav>
      </header>
      <main>
           {children}
      </main>
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  )
}
