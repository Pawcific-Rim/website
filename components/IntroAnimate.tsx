/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion, useTransform, useScroll } from 'framer-motion'
import { useWindowSize } from 'usehooks-ts'
import Button from '@/components/Button'

const IntroAnimate = () => {
  const { scrollYProgress } = useScroll()
  const { width } = useWindowSize()
  const characterScale = width / 1920
  const bgZoom = useTransform(scrollYProgress, [0, 1], [2, 1])

  return (
    <section
      className="animate relative min-h-[812px] overflow-hidden lg:min-h-screen lg:snap-start"
      style={
        {
          '--character-scale': characterScale,
        } as React.CSSProperties
      }
    >
      <picture>
        <source media="(max-width: 640px)" srcSet="/animate-intro/pc.png" />
        <source media="(max-width: 1024px)" srcSet="/animate-intro/pc.png" />
        <source srcSet="/animate-intro/pc.png" />
        <motion.img
          src="/animate-intro/pc.png"
          alt="Animate background image"
          style={{
            objectFit: 'cover',
            objectPosition: 'center bottom',
            maxWidth: 'initial',
            position: 'absolute',
            height: '100%',
            width: '100%',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
          }}
        />
      </picture>
      <div className="container absolute inset-0 mx-auto mt-[96px] px-6 sm:mt-[120px]">
        <img
          src="/animate-intro/animal1.png"
          alt="Char main"
          className="charMain"
        />
        <img
          src="/animate-intro/animal2.png"
          alt="Char 1"
          className="charLeft"
        />
        <img
          src="/animate-intro/animal3.png"
          alt="Char left"
          className="charRight"
        />
        <div className="flex flex-col items-center justify-center lg:transform">
          <h2 className="intro-title-2 mb-6 w-full text-[40px] font-bold capitalize leading-[48px] sm:text-[80px] sm:leading-[88px]">
            <p className="text-center">Assemble Your</p>
            <p className="text-center">Mecha Army</p>
          </h2>
        </div>
        <div className="absolute bottom-6 left-1/2 w-full -translate-x-1/2 transform px-6 sm:bottom-10 sm:px-10 lg:bottom-[72px] lg:max-w-[768px]">
          <div className="footer-content-mask container mx-auto overflow-hidden rounded-xl bg-black bg-opacity-50 p-6">
            <div className="flex flex-col items-center justify-between space-x-0 space-y-6 sm:flex-row sm:space-x-6 sm:space-y-0">
              <p className="text-center text-white sm:text-left">
                Assemble over 100 Mecha to your Army, deadly and cute beats who
                rule this galxy - each posessing powerful abilities and
                synergies
              </p>
              <Button>
                <p className="px-6 py-2 text-base font-bold uppercase text-black">
                  Get Them Now
                </p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntroAnimate
