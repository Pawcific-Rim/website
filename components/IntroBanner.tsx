/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView, useAnimation } from 'framer-motion'

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

const IntroBanner = () => {
  const [showSocials, setShowSocials] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref)
  const controls = useAnimation()

  const toggleSocials = () => setShowSocials(!showSocials)

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
      setShowSocials(false)
    }
  }, [isInView, setShowSocials, controls])

  return (
    <section className="relative min-h-[812px] overflow-hidden lg:h-screen lg:snap-start">
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
            className="intro-title mb-6 w-full max-w-[416px] text-[40px] font-bold capitalize leading-[48px] sm:max-w-[720px] sm:text-[80px] sm:leading-[88px]"
          >
            <p className="text-left">Joint The</p>
            <p className="text-right">Furry Forces</p>
          </motion.h1>
          <motion.div
            variants={subtitleVariants}
            initial="hidden"
            animate={controls}
            className="relative isolate mb-6"
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
          <div
            onClick={toggleSocials}
            className="flex items-center space-x-3 bg-[#414995]"
          >
            <Link href="#" className="ml-12 rounded-full bg-transparent">
              <Image
                alt="Telegram"
                src="/socials/telegram.png"
                width={SOCIALS_ICON_SIZE}
                height={SOCIALS_ICON_SIZE}
              />
            </Link>
            <Link href="#" className="rounded-full bg-transparent">
              <Image
                alt="Twitter"
                src="/socials/twitter.png"
                width={SOCIALS_ICON_SIZE}
                height={SOCIALS_ICON_SIZE}
              />
            </Link>
            <Link href="#" className="rounded-full bg-transparent">
              <Image
                alt="Discord"
                src="/socials/discord.png"
                width={SOCIALS_ICON_SIZE}
                height={SOCIALS_ICON_SIZE}
              />
            </Link>
            <Link href="#" className="rounded-full bg-transparent">
              <Image
                alt="Youtube"
                src="/socials/youtube.png"
                width={SOCIALS_ICON_SIZE}
                height={SOCIALS_ICON_SIZE}
              />
            </Link>
            <img
              src="/socials/toggle-right.png"
              alt="Toggle"
              className="!ml-[28px]"
            />
          </div>
        ) : (
          <div onClick={toggleSocials} className="w-[100px] bg-[#414995]">
            <img src="/socials/toggle-left.png" alt="Toggle" className="" />
          </div>
        )}
      </div>
    </section>
  )
}

export default IntroBanner
