import { Inter } from 'next/font/google'
import './globals.css'
import StarsConvas from './components/main/StarsBackground'
import Navbar from './components/main/Navbar'
import Footer from './components/main/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Space Portfolio',
  description: 'This Is My Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsConvas/>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
