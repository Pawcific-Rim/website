import { Montserrat, Inter } from 'next/font/google'

import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${montserrat.variable} ${inter.variable} font-montserrat`}
    >
      <Component {...pageProps} />
    </main>
  )
}
