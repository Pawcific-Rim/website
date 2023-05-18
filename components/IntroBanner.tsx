/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { useInView } from 'framer-motion'

import Button from '@/components/Button'

import type { Dispatch, SetStateAction } from 'react'

const SOCIALS_ICON_SIZE = 72

interface Props {
  setShowPlayButton: Dispatch<SetStateAction<boolean>>
}

const IntroBanner = ({ setShowPlayButton }: Props) => {
  const [showSocials, setShowSocials] = useState(true)
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    setShowPlayButton(!isInView)
  }, [isInView, setShowPlayButton])

  const toggleSocials = () => setShowSocials(!showSocials)

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
          priority
        />
      </picture>
      <div className="container absolute inset-0 mx-auto mt-[72px] p-6 sm:pt-16 lg:mx-0">
        <div
          ref={ref}
          className="flex flex-col items-center lg:-translate-x-16 lg:transform"
        >
          <h1
            className={twMerge(
              'animate__animated intro-title mb-6 w-full max-w-[416px] text-[40px] font-bold capitalize leading-[48px] will-change-transform sm:max-w-[720px] sm:text-[80px] sm:leading-[88px]',
              isInView && 'animate__fadeInDown'
            )}
          >
            <p className="text-left">Joint The</p>
            <p className="text-right">Furry Forces</p>
          </h1>
          <div
            className={twMerge(
              'animate__animated relative isolate mb-6 will-change-transform',
              isInView && 'animate__fadeInLeft'
            )}
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
          </div>
          <div
            className={twMerge(
              'animate__animated will-change-transform',
              isInView && 'animate__fadeInUp'
            )}
          >
            <Button>
              <p className="px-6 py-4 text-xl font-bold uppercase text-black">
                Play Now
              </p>
            </Button>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-16 left-0 overflow-hidden rounded-r-xl border-2 border-l-0 border-[#A169EB] bg-[#414995]"
        style={{
          boxShadow: '0px 0px 0px 4px #5B5183',
        }}
      >
        {showSocials ? (
          <div
            onClick={toggleSocials}
            className={twMerge(
              'animate__animated flex items-center space-x-3 bg-[#414995] will-change-transform',
              isInView && 'animate__fadeInRight'
            )}
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
          </div>
        ) : (
          <div
            onClick={toggleSocials}
            className={twMerge(
              'animate__animated w-[72px] bg-[#414995] sm:w-[100px]',
              isInView && 'animate__slideInLeft'
            )}
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
