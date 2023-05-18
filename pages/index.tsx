import Head from 'next/head'
import ReactFullpage from '@fullpage/react-fullpage'
import { useState } from 'react'

import Header from '@/components/Header'
import IntroBanner from '@/components/IntroBanner'
import IntroAnimate from '@/components/IntroAnimate'
import GameModes from '@/components/GameModes'
import Heroes from '@/components/Heroes'
import News from '@/components/News'
import Footer from '@/components/Footer'

export default function Home() {
  const [showPlayButton, setShowPlayButton] = useState(false)

  return (
    <>
      <Head>
        <title>Pawcific Rim</title>
        <meta
          name="description"
          content="Pawcific Rim - Joint the Furry Forces and save the universe from Kaizu threat!"
        />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>

      <main className="relative w-full overflow-hidden">
        <Header showPlayButton={showPlayButton} />
        <ReactFullpage
          scrollOverflow
          credits={{ enabled: false }}
          scrollingSpeed={700}
          render={() => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <IntroBanner setShowPlayButton={setShowPlayButton} />
                </div>
                <div id="section2" className="section [&>div]:scrollbar-hide">
                  <IntroAnimate />
                </div>
                <div className="section">
                  <GameModes />
                </div>
                <div className="section">
                  <Heroes />
                </div>
                <div className="section">
                  <News />
                </div>
                <div className="section [&>div]:scrollbar-hide">
                  <Footer />
                </div>
              </ReactFullpage.Wrapper>
            )
          }}
        />
      </main>
    </>
  )
}
