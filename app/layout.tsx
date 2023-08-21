import "./globals.css"
import type { Metadata } from "next"
import Image from "next/image"
import { Inter } from "next/font/google"
import Link from "next/link"
import logo from "../public/images/logo.png"
import { HiMenu } from "react-icons/hi"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Reis Real Estate | Home",
  description: "A real estate website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header className='px-3 md:px-20 py-2 md:py-5 flex flex-row items-center justify-between bg-white navbar'>
          <Link href='/'>
            <Image
              src={logo}
              width={100}
              height={100}
              alt='Company Logo'
              className='w-20 md:w-24'
            />
          </Link>
          <nav>
            <button className='md:hidden cursor-pointer'>
              <HiMenu className='w-6 h-6' />
            </button>
            <ul className='hidden md:flex flex-row gap-8 justify-end text-base font-semibold text-gray-700'>
              <li className='active'>
                <Link href='/'>HOME</Link>
              </li>
              <li className='nav-link'>
                <Link href='/about'>ABOUT US</Link>
              </li>
              <li className='nav-link'>
                <Link href='#'>OUR AGENTS</Link>
              </li>
              <li className='nav-link'>
                <Link href='#'>PROPERTIES</Link>
              </li>
              <li className='nav-link'>
                <Link href='#'>GALLERY</Link>
              </li>
              <li className='nav-link'>
                <Link href='#'>BLOG</Link>
              </li>
              <li className='nav-link'>
                <Link href='#'>CONTACT US</Link>
              </li>
              <li className='nav-link'>
                <Link href='#'>SEARCH</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
