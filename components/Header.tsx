import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

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
          'fixed left-0 right-0 top-0 z-10 bg-gradient-to-b from-[#4836A4] to-[#A064E0] px-4 md:px-6 lg:max-h-[72px] lg:px-0',
          isMenuOpen && 'h-screen'
        )}
      >
        <div className="flex h-[72px] w-full items-center justify-between py-3 lg:container lg:mx-auto lg:justify-center lg:gap-16">
          <button className="lg:hidden" onClick={toggleMenu}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6 text-white"
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                  fill="white"
                />
              )}
            </svg>
          </button>
          <Link
            href="/"
            className="leading-0 flex items-center gap-2 whitespace-nowrap bg-gradient-to-b from-[#FFEE36] to-[#FF7A40] bg-clip-text font-inter text-2xl font-semibold text-transparent"
          >
            <h1>LOGO NAME</h1>
          </Link>
          <nav className="hidden items-center justify-between gap-[52px] lg:flex">
            {links.map(({ href, title }) => (
              <Link
                href={href}
                key={href}
                className="flex items-center font-semibold uppercase text-white hover:bg-gradient-to-b hover:from-[#FFEE36] hover:to-[#FF7A40] hover:bg-clip-text hover:text-transparent"
              >
                <span
                  className={twMerge(
                    'mr-2 inline-block h-2 w-2 rounded-full',
                    router.pathname === href
                      ? 'bg-gradient-to-b from-[#FFEE36] to-[#FF7A40]'
                      : 'bg-transparent'
                  )}
                />
                {title}
              </Link>
            ))}
          </nav>
          <button className="hidden rounded-xl bg-gradient-to-b from-[#FF7E40] to-[#FFEB37] p-1 shadow-md hover:shadow-2xl lg:block">
            <div className="back flex h-full w-full items-center justify-center whitespace-nowrap rounded-xl bg-gradient-to-b from-[#FFEE36] to-[#FF7A40] px-6 py-2 font-bold uppercase">
              Play Game
            </div>
          </button>

          {/* Hamburger spacing */}
          <div className="h-6 w-6 lg:hidden" />
        </div>
        {isMenuOpen && (
          <div className="lg:hidden">
            <nav className="flex flex-col items-start justify-center gap-12 py-8">
              {links.map(({ href, title }) => (
                <Link
                  href={href}
                  key={href}
                  className="flex items-center font-semibold uppercase text-white hover:bg-gradient-to-b hover:from-[#FFEE36] hover:to-[#FF7A40] hover:bg-clip-text hover:text-transparent"
                >
                  {router.pathname === href && (
                    <span
                      className={twMerge(
                        'mr-2 inline-block h-2 w-2 rounded-full',
                        'bg-gradient-to-b from-[#FFEE36] to-[#FF7A40]'
                      )}
                    />
                  )}
                  {title}
                </Link>
              ))}
              <button className="rounded-xl bg-gradient-to-b from-[#FF7E40] to-[#FFEB37] p-1 shadow-md hover:shadow-2xl">
                <div className="back flex h-full w-full items-center justify-center whitespace-nowrap rounded-xl bg-gradient-to-b from-[#FFEE36] to-[#FF7A40] px-6 py-2 font-bold uppercase">
                  Play Game
                </div>
              </button>
            </nav>
          </div>
        )}
      </header>
      <div className="h-[72px] bg-[#A064E0]" />
    </>
  )
}

export default Header
