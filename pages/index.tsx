import Head from 'next/head'
import ReactFullpage from '@fullpage/react-fullpage'

import Header from '@/components/Header'
import IntroBanner from '@/components/IntroBanner'
import Story from '@/components/Story'
import IntroAnimate from '@/components/IntroAnimate'
import GameModes from '@/components/GameModes'
import Heroes from '@/components/Heroes'
import News from '@/components/News'
import Footer from '@/components/Footer'
import JoinCommunity from '@/components/JoinCommunity'

export default function Home() {
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
        <Header />
        <ReactFullpage
          scrollOverflow
          credits={{ enabled: false }}
          scrollingSpeed={1000}
          render={() => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <IntroBanner />
                </div>
                <div className="section">
                  <Story />
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
                <div className="section">
                  <Footer />
                </div>
              </ReactFullpage.Wrapper>
            )
          }}
        />
        <JoinCommunity />
      </main>
    </>
  )
}
