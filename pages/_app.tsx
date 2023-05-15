import { Montserrat, Inter } from 'next/font/google'
import { useMount } from 'ahooks'

import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function App({ Component, pageProps }: AppProps) {
  const setViewHeight = () => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }

  useMount(() => {
    document.documentElement.style.setProperty('--animate-delay', '.5s')
    setViewHeight()
    window.addEventListener('resize', () => {
      setViewHeight()
    })
  })

  return (
    <main
      className={`${montserrat.variable} ${inter.variable} font-montserrat`}
    >
      <Component {...pageProps} />
    </main>
  )
}
