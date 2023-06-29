import Navbar from '@/components/Navbar'
import './globals.css'
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Ashwin Jadhav | A web develoepr',
  description: 'Ashwin Jadhav, a developer since 2020 makes websites for fun',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${rubik.className} bg-gray-50 text-black dark:bg-zinc-950 dark:text-white container mx-auto px-8 tracking-wide`}>   
            <Navbar />
            {children}
      </body>
    </html>
  )
}
