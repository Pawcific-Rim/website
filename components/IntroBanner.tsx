/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion'

import Button from '@/components/Button'

const SOCIALS_ICON_SIZE = 72

const titleVariants = {
  hidden: {
    opacity: 0,
    y: -200,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
}

const subtitleVariants = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
}

const buttonVariants = {
  hidden: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, duration: 1 },
  },
}

const socialsVariants = {
  hidden: {
    width: 0,
  },
  visible: {
    width: '100%',
  },
}

const IntroBanner = () => {
  const [showSocials, setShowSocials] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref)
  const controls = useAnimation()

  const toggleSocials = () => setShowSocials(!showSocials)

  useEffect(() => {
    if (isInView) {
      controls.set('hidden')
      controls.start('visible')
    }
  }, [isInView, setShowSocials, controls])

  return (
    <section className="relative h-auto min-h-screen overflow-hidden">
      <picture>
        <source media="(max-width: 640px)" srcSet="/intro/sp.png" />
        <source media="(max-width: 1024px)" srcSet="/intro/ipad.png" />
        <source srcSet="/intro/pc.png" />
        <Image
          src="/intro/pc.png"
          alt="Background image"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          quality={80}
          priority={true}
        />
      </picture>
      <div className="container absolute inset-0 mx-auto mt-[72px] p-6 sm:pt-16 lg:mx-0">
        <div
          ref={ref}
          className="flex flex-col items-center lg:-translate-x-16 lg:transform"
        >
          <motion.h1
            variants={titleVariants}
            initial="hidden"
            animate={controls}
            className="intro-title mb-6 w-full max-w-[416px] text-[40px] font-bold capitalize leading-[48px] will-change-transform sm:max-w-[720px] sm:text-[80px] sm:leading-[88px]"
          >
            <p className="text-left">Joint The</p>
            <p className="text-right">Furry Forces</p>
          </motion.h1>
          <motion.div
            variants={subtitleVariants}
            initial="hidden"
            animate={controls}
            className="relative isolate mb-6 will-change-transform"
          >
            <p className="mx-0 text-center text-base capitalize !leading-8 text-white sm:mx-[100px] sm:text-xl">
              Save the universe from kaizu threat!
            </p>
            <img
              src="/intro/text-mask-l.png"
              alt="Mask 1"
              className="absolute right-1/2 top-1/2 -z-10 h-[50px] w-1/2 -translate-y-1/2 transform"
            />
            <img
              src="/intro/text-mask-r.png"
              alt="Mask 2"
              className="absolute left-1/2 top-1/2 -z-10 h-[50px] w-1/2 -translate-y-1/2 transform"
            />
          </motion.div>
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate={controls}
          >
            <Button>
              <p className="px-6 py-4 text-xl font-bold uppercase text-black">
                Play Now
              </p>
            </Button>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-16 left-0 overflow-hidden rounded-r-xl border-2 border-l-0 border-[#A169EB] outline outline-4 outline-offset-0 outline-[#5B5183]">
        {showSocials ? (
          <motion.div
            onClick={toggleSocials}
            className="flex items-center space-x-3 bg-[#414995] will-change-transform"
            variants={socialsVariants}
            initial="hidden"
            animate={showSocials ? 'visible' : 'hidden'}
          >
            <Link
              href="#"
              className="ml-4 rounded-full bg-transparent sm:ml-12"
            >
              <Image
                alt="Telegram"
                src="/socials/telegram.png"
                width={SOCIALS_ICON_SIZE}
                height={SOCIALS_ICON_SIZE}
                className="h-[56px] w-[56px] sm:h-[72px] sm:w-[72px]"
              />
            </Link>
            <Link href="#" className="rounded-full bg-transparent">
              <Image
                alt="Twitter"
                src="/socials/twitter.png"
                width={SOCIALS_ICON_SIZE}
                height={SOCIALS_ICON_SIZE}
                className="h-[56px] w-[56px] sm:h-[72px] sm:w-[72px]"
              />
            </Link>
            <Link href="#" className="rounded-full bg-transparent">
              <Image
                alt="Discord"
                src="/socials/discord.png"
                width={SOCIALS_ICON_SIZE}
                height={SOCIALS_ICON_SIZE}
                className="h-[56px] w-[56px] sm:h-[72px] sm:w-[72px]"
              />
            </Link>
            <Link href="#" className="rounded-full bg-transparent">
              <Image
                alt="Youtube"
                src="/socials/youtube.png"
                width={SOCIALS_ICON_SIZE}
                height={SOCIALS_ICON_SIZE}
                className="h-[56px] w-[56px] sm:h-[72px] sm:w-[72px]"
              />
            </Link>
            <img
              src="/socials/toggle-right.png"
              alt="Toggle"
              className="!ml-[16px] h-[72px] sm:!ml-[28px] sm:h-[96px]"
            />
          </motion.div>
        ) : (
          <div
            onClick={toggleSocials}
            className="w-[72px] bg-[#414995] sm:w-[100px]"
          >
            <img
              src="/socials/toggle-left.png"
              alt="Toggle"
              className="-ml-1 h-[72px] sm:h-[96px]"
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default IntroBanner
