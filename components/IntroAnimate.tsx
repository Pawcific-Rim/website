/* eslint-disable @next/next/no-img-element */
import { motion, useTransform, motionValue, useInView } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { useEffect, useRef, useState } from 'react'

import Button from '@/components/Button'

const Banner = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [prevScrollTop, setPrevScrollTop] = useState(0)
  const elementRef = useRef(null)
  const isInView = useInView(elementRef, {
    margin: '-200px 0px -200px 0px',
  })

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current as unknown as HTMLElement
      if (!element) return

      const { top, height } = element.getBoundingClientRect()
      const maxScrollTop = Math.abs(window.innerHeight - height)

      const direction = top > prevScrollTop ? 'down' : 'up'
      const progress = Math.min(1, Math.abs(top) / maxScrollTop)

      if (direction === 'down' && top !== prevScrollTop) {
        setScrollProgress(progress)
        const child = element.firstChild as unknown as HTMLElement
        child.style.transform = `translateY(100vh) scale(${
          4 - progress * 3
        }) translateZ(0)`
      } else if (direction === 'up' && progress !== scrollProgress) {
        setScrollProgress(progress)
        const child = element.firstChild as unknown as HTMLElement
        child.style.transform = `translateY(100vh) scale(${
          4 - progress * 3
        }) translateZ(0)`
      }

      setPrevScrollTop(top)
    }

    const element = elementRef.current as unknown as HTMLElement
    const parent = element.parentElement as unknown as HTMLElement

    if (parent) {
      parent.addEventListener('scroll', handleScroll)
      return () => {
        parent.removeEventListener('scroll', handleScroll)
      }
    }
  }, [elementRef, prevScrollTop, scrollProgress])

  const titlePosition = useTransform(
    motionValue(scrollProgress),
    [0, 1],
    [-500, 0]
  )
  const characterOpacity = useTransform(
    motionValue(scrollProgress),
    [0, 0.5, 0.8, 1],
    [0, 0, 1, 1]
  )

  const descriptionPosition = useTransform(
    motionValue(scrollProgress),
    [0, 1],
    [500, 0]
  )

  return (
    <div
      ref={elementRef}
      className="relative h-[200vh] overflow-hidden bg-gradient-to-b from-[#FFEE36] to-[#FF7A40]"
    >
      <section
        className={twMerge(
          'animate h-auto min-h-screen transition-opacity will-change-transform',
          isInView ? 'pointer-events-none fixed inset-0' : 'relative'
        )}
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center bottom',
          backgroundSize: 'cover',
          backgroundImage: 'url(/animate-intro/pc.png)',
          transform: 'translateY(100vh) scale(4) translateZ(0px)',
        }}
      >
        <div className="container absolute inset-0 mx-auto mt-[96px] px-6 sm:mt-[120px]">
          <motion.img
            src="/animate-intro/animal1.png"
            alt="Char main"
            className="charMain transition-all will-change-transform"
            style={{ opacity: characterOpacity }}
          />
          <motion.img
            src="/animate-intro/animal2.png"
            alt="Char 1"
            className="charLeft transition-all"
            style={{ opacity: characterOpacity }}
          />
          <motion.img
            src="/animate-intro/animal3.png"
            alt="Char left"
            className="charRight transition-all"
            style={{ opacity: characterOpacity }}
          />
          <div className="flex flex-col items-center justify-center lg:transform">
            <motion.h2
              style={{ y: titlePosition }}
              className="intro-title-2 mb-6 w-full text-[40px] font-bold capitalize leading-[48px] transition-all sm:text-[80px] sm:leading-[88px]"
            >
              <p className="text-center">Assemble Your</p>
              <p className="text-center">Mecha Army</p>
            </motion.h2>
          </div>
          <div className="absolute bottom-6 left-1/2 mb-6 w-full -translate-x-1/2 transform px-6 sm:bottom-10 sm:mb-0 sm:px-10 lg:bottom-[72px] lg:max-w-[768px]">
            <motion.div
              style={{ y: descriptionPosition }}
              className="footer-content-mask container mx-auto overflow-hidden rounded-xl bg-black bg-opacity-50 p-6 transition-all"
            >
              <div className="flex flex-col items-center justify-between space-x-0 space-y-6 sm:flex-row sm:space-x-6 sm:space-y-0">
                <p className="text-center text-white sm:text-left">
                  Assemble over 100 Mecha to your Army, deadly and cute beats
                  who rule this galxy - each posessing powerful abilities and
                  synergies
                </p>
                <Button>
                  <p className="px-6 py-2 text-base font-bold uppercase text-black">
                    Get Them Now
                  </p>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Banner
