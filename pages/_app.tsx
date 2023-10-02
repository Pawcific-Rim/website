import localFont from 'next/font/local'
import { Montserrat } from 'next/font/google'
import { useEffect } from 'react'

import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const technoRace = localFont({
  src: [
    {
      path: '../public/fonts/TechnoRace.ttf',
    },
  ],
  variable: '--font-techno-race',
})

export default function App({ Component, pageProps }: AppProps) {
  const setViewHeight = () => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }

  useEffect(() => {
    document.documentElement.style.setProperty('--animate-delay', '.5s')
    setViewHeight()
    window.addEventListener('resize', () => {
      setViewHeight()
    })
  }, [])

  return (
    <main
      className={`${montserrat.variable} ${technoRace.variable} font-montserrat`}
    >
      <Component {...pageProps} />
    </main>
  )
}
