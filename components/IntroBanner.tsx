/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Button from '@/components/Button'

const SOCIALS_ICON_SIZE = 72

const IntroBanner = () => {
  const [showSocials, setShowSocials] = useState(false)

  const toggleSocials = () => {
    setShowSocials(!showSocials)
  }

  return (
    <section className="relative min-h-[812px] overflow-hidden lg:h-screen">
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
        <div className="flex flex-col items-center lg:-translate-x-16 lg:transform">
          <h1 className="intro-title mb-6 w-full max-w-[416px] text-[40px] font-bold capitalize leading-[48px] sm:max-w-[720px] sm:text-[80px] sm:leading-[88px]">
            <p className="text-left">Joint The</p>
            <p className="text-right">Furry Forces</p>
          </h1>
          <div className="relative isolate mb-6">
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
          </div>
          <Button>
            <p className="px-6 py-4 text-xl font-bold uppercase text-black">
              Get Them Now
            </p>
          </Button>
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
