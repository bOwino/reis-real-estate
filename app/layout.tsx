import "./globals.css"
import type { Metadata } from "next"
import Image from "next/image"
import { Inter } from "next/font/google"
import Link from "next/link"
import logo from "../public/images/logo.png"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Reis Real Estate",
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
        <header className='px-20 py-5 flex flex-row items-center justify-between bg-white navbar'>
          <Link href='/'>
            <Image src={logo} width={120} height={120} alt='Company Logo' />
          </Link>
          <nav>
            <ul className='flex flex-row gap-8 justify-end text-base font-normal'>
              <li>
                <Link href='/'>HOME</Link>
              </li>
              <li>
                <Link href='/about'>ABOUT US</Link>
              </li>
              <li>
                <Link href='#'>OUR AGENTS</Link>
              </li>
              <li>
                <Link href='#'>PROPERTIES</Link>
              </li>
              <li>
                <Link href='#'>GALLERY</Link>
              </li>
              <li>
                <Link href='#'>BLOG</Link>
              </li>
              <li>
                <Link href='#'>CONTACT US</Link>
              </li>
              <li>
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
