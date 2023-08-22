"use client"
import "./globals.css"
import { useState } from "react"
import type { Metadata } from "next"
import Image from "next/image"
import { Inter } from "next/font/google"
import Link from "next/link"
import logo from "../public/images/logo.png"
import { HiMenu } from "react-icons/hi"
import { GrFormClose } from "react-icons/gr"

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
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(false)

  function handleSidebarVisibility() {
    if (sidebarVisible) {
      setSidebarVisible(false)
      console.log("set " + sidebarVisible)
    } else {
      setSidebarVisible(true)
      console.log("set " + sidebarVisible)
    }
  }
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header className='px-4 md:px-20 py-4 flex flex-row items-center justify-between bg-white navbar'>
          <Link href='/'>
            <Image
              src={logo}
              width={100}
              height={100}
              alt='Company Logo'
              className='w-24 md:w-24'
            />
          </Link>
          <nav>
            <button className='md:hidden cursor-pointer'>
              <HiMenu
                className='w-8 h-8 focus:outline-none'
                onClick={handleSidebarVisibility}
              />
            </button>
            <div
              className={`${
                sidebarVisible
                  ? "sidebar md:hidden fixed inset-0 bg-white flex flex-col p-2"
                  : "hidden"
              }`}
            >
              <button
                className='flex flex-row justify-end items-end'
                onClick={handleSidebarVisibility}
              >
                <GrFormClose className='w-12 h-12 focus:outline-none' />
              </button>
              <ul className='md:hidden flex flex-col gap-8 justify-center text-center text-base font-semibold text-gray-700'>
                <li className='active'>
                  <Link
                    href='/'
                    className='noSelect'
                    onClick={handleSidebarVisibility}
                  >
                    HOME
                  </Link>
                </li>
                <li className='nav-link'>
                  <Link href='/about' className='noSelect'>
                    ABOUT US
                  </Link>
                </li>
                <li className='nav-link'>
                  <Link href='#' className='noSelect'>
                    OUR AGENTS
                  </Link>
                </li>
                <li className='nav-link'>
                  <Link href='#' className='noSelect'>
                    PROPERTIES
                  </Link>
                </li>
                <li className='nav-link'>
                  <Link href='#' className='noSelect'>
                    GALLERY
                  </Link>
                </li>
                <li className='nav-link'>
                  <Link href='#' className='noSelect'>
                    BLOG
                  </Link>
                </li>
                <li className='nav-link'>
                  <Link href='#' className='noSelect'>
                    CONTACT US
                  </Link>
                </li>
                <li className='nav-link'>
                  <Link href='#' className='noSelect'>
                    SEARCH
                  </Link>
                </li>
              </ul>
            </div>
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
