/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useRouter } from 'next/router'
import { twMerge } from 'tailwind-merge'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'

const links = [
  {
    href: '/',
    title: 'Home',
  },
  {
    href: '/marketplace',
    title: 'Marketplace',
  },
  {
    href: '/team',
    title: 'Team',
  },
  {
    href: '/support',
    title: 'Support',
  },
]

const Header = () => {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    router.events.on('routeChangeComplete', () => {
      setIsMenuOpen(false)
    })

    return () => {
      router.events.off('routeChangeComplete', () => {
        setIsMenuOpen(false)
      })
    }
  }, [router.events])

  return (
    <>
      <header
        className={twMerge(
          'fixed left-0 right-0 top-0 z-10 bg-[#00062B] px-6 transition-all md:px-8 lg:mt-6 lg:max-h-[72px] lg:bg-transparent',
          isMenuOpen && 'h-screen'
        )}
      >
        <div className="flex w-full justify-between py-3 lg:h-[72px] lg:gap-16 lg:rounded-xl lg:bg-transparent/[0.64] lg:px-2 xl:h-[90px]">
          <Link href="/" className="flex items-center">
            <img
              src="/logo_full.png"
              alt="logo"
              className="h-auto w-24 lg:-ml-4 lg:w-40 xl:w-48"
            />
          </Link>
          <div className="flex items-center">
            <nav className="hidden gap-14 lg:inline-flex">
              {links.map(({ href, title }) => (
                <Link
                  href={href}
                  key={href}
                  className={twMerge(
                    'text-xl font-medium capitalize leading-none tracking-[0.48px] text-white hover:text-[#FFEE36] xl:text-2xl',
                    router.pathname === href && 'text-[#FED73B]'
                  )}
                >
                  {title}
                </Link>
              ))}
            </nav>
            <button
              className={twMerge(
                'ml-24 hidden items-center justify-center whitespace-nowrap rounded-lg bg-[#FED73B] px-6  py-4 text-xl font-semibold capitalize leading-none text-black hover:bg-[#FFEE36] lg:inline-flex xl:px-8 xl:py-5 xl:text-2xl'
              )}
            >
              Play Game
            </button>
          </div>

          <button className="lg:hidden" onClick={toggleMenu}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="h-8 w-8 text-white"
              xmlns="http://www.w3.org/2000/svg"
            >
              {!isMenuOpen ? (
                <>
                  <rect
                    x="4"
                    y="17"
                    width="16"
                    height="2"
                    rx="1"
                    fill="white"
                  />
                  <rect
                    x="4"
                    y="11"
                    width="16"
                    height="2"
                    rx="1"
                    fill="white"
                  />
                  <rect x="4" y="5" width="16" height="2" rx="1" fill="white" />
                </>
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                  fill="white"
                />
              )}
            </svg>
          </button>
        </div>
        <AnimatePresence
          initial={false}
          mode="wait"
          onExitComplete={() => null}
        >
          {isMenuOpen && (
            <div className="h-screen lg:hidden">
              <nav className="flex flex-col items-center justify-center py-8">
                {links.map(({ href, title }, index) => (
                  <div key={href} className="flex flex-col items-center">
                    {index !== 0 && (
                      <div className="my-6 h-[1px] w-[154px] bg-gray-100" />
                    )}
                    <Link
                      href={href}
                      className={twMerge(
                        'text-2xl capitalize leading-none tracking-[0.48px] text-white hover:text-[#FFEE36]',
                        router.pathname === href && 'text-[#FED73B]'
                      )}
                    >
                      {title}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

export default Header
