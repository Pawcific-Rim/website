import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const Header = () => {
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    let prevScrollY = window.pageYOffset
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset

      if (currentScrollY < 60) {
        setIsHidden(false)
        return
      }

      if (prevScrollY > currentScrollY) {
        setIsHidden(false)
      } else {
        setIsHidden(true)
      }
      prevScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
        // initial={{ y: -100 }}
        // animate={{ y: isHidden ? -100 : 0 }}
        // transition={{ duration: 0.2 }}
      >
        <div className="container mx-auto py-4 px-8 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-800">My Website</h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="text-gray-800 hover:text-gray-600">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-800 hover:text-gray-600"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-800 hover:text-gray-600"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* Spacer */}
      <div className="h-[60px]" />
    </>
  )
}

export default Header
