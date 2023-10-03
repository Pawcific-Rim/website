/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

const SOCIALS_ICON_SIZE = 72

const JoinCommunity = () => {
  const [showSocials, setShowSocials] = useState(false)
  const toggleSocials = () => setShowSocials(!showSocials)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth <= 640)
  }, [])

  if (isMobile)
    return (
      <div
        className="absolute bottom-4 right-4 w-[calc(100%-32px)] overflow-hidden rounded-[64px] bg-[#121949]/[0.84] px-6 py-3"
        style={{
          boxShadow: '0px 6px 8px 0px rgba(18, 25, 73, 0.08)',
        }}
      >
        <div
          className={twMerge(
            'flex w-full items-center justify-between space-x-6 will-change-transform'
          )}
        >
          <p className="whitespace-nowrap text-sm uppercase text-white">
            Join Paw
            <br />
            Community
          </p>
          <div
            className={twMerge(
              'flex items-center space-x-3',
              showSocials ? 'flex' : 'hidden'
            )}
          >
            <Link
              href="#"
              className="ml-4 flex h-8 w-8 items-center rounded-full bg-[#FED73B]"
            >
              <Image
                alt="Twitter"
                src="/community/x.svg"
                width={SOCIALS_ICON_SIZE}
                height={SOCIALS_ICON_SIZE}
                className="overflow-hidden p-2"
              />
            </Link>
            <Link
              href="#"
              className="ml-4 flex h-8 w-8 items-center rounded-full bg-[#FED73B]"
            >
              <Image
                alt="telegram"
                src="/community/telegram.svg"
                width={SOCIALS_ICON_SIZE}
                height={SOCIALS_ICON_SIZE}
                className="overflow-hidden p-2"
              />
            </Link>
            <Link
              href="#"
              className="ml-4 flex h-8 w-8 items-center rounded-full bg-[#FED73B]"
            >
              <Image
                alt="youtube"
                src="/community/youtube.svg"
                width={SOCIALS_ICON_SIZE}
                height={SOCIALS_ICON_SIZE}
                className="overflow-hidden p-2"
              />
            </Link>
            <Link
              href="#"
              className="ml-4 flex h-8 w-8 items-center rounded-full bg-[#FED73B]"
            >
              <Image
                alt="discord"
                src="/community/discord.svg"
                width={SOCIALS_ICON_SIZE}
                height={SOCIALS_ICON_SIZE}
                className="overflow-hidden p-2"
              />
            </Link>
          </div>
        </div>
      </div>
    )

  return (
    <div
      className="absolute bottom-6 right-6 overflow-hidden rounded-[64px] bg-[#121949]/[0.84] px-6 py-3"
      style={{
        boxShadow: '0px 6px 8px 0px rgba(18, 25, 73, 0.08)',
      }}
    >
      <div
        onClick={toggleSocials}
        className={twMerge('flex items-center space-x-6 will-change-transform')}
      >
        <img
          src="/community/arrow.png"
          alt="Toggle"
          className={twMerge(
            'h-[40px] rotate-0 transform',
            showSocials && 'rotate-180'
          )}
        />
        <p className="whitespace-nowrap uppercase text-white">
          Join Paw
          <br />
          Community
        </p>
        <div
          className={twMerge(
            'flex items-center space-x-3',
            showSocials ? 'flex' : 'hidden'
          )}
        >
          <Link
            href="#"
            className="ml-4 flex h-[40px] w-[40px] items-center rounded-full bg-[#FED73B]"
          >
            <Image
              alt="Twitter"
              src="/community/x.svg"
              width={SOCIALS_ICON_SIZE}
              height={SOCIALS_ICON_SIZE}
              className="overflow-hidden p-2"
            />
          </Link>
          <Link
            href="#"
            className="ml-4 flex h-[40px] w-[40px] items-center rounded-full bg-[#FED73B]"
          >
            <Image
              alt="telegram"
              src="/community/telegram.svg"
              width={SOCIALS_ICON_SIZE}
              height={SOCIALS_ICON_SIZE}
              className="overflow-hidden p-2"
            />
          </Link>
          <Link
            href="#"
            className="ml-4 flex h-[40px] w-[40px] items-center rounded-full bg-[#FED73B]"
          >
            <Image
              alt="youtube"
              src="/community/youtube.svg"
              width={SOCIALS_ICON_SIZE}
              height={SOCIALS_ICON_SIZE}
              className="overflow-hidden p-2"
            />
          </Link>
          <Link
            href="#"
            className="ml-4 flex h-[40px] w-[40px] items-center rounded-full bg-[#FED73B]"
          >
            <Image
              alt="discord"
              src="/community/discord.svg"
              width={SOCIALS_ICON_SIZE}
              height={SOCIALS_ICON_SIZE}
              className="overflow-hidden p-2"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default JoinCommunity
