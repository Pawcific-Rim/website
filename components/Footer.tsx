/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'

const SOCIALS_ICON_SIZE = 56

const Footer = () => {
  return (
    <footer className="flex h-screen flex-col pt-[72px] lg:h-screen">
      <Image
        src="/footer/bg.png"
        style={{ objectFit: 'cover' }}
        fill
        alt="Footer background image"
        priority
        quality={80}
        className="-z-0"
      />
      <div className=" container z-10 m-auto flex h-full w-full justify-center rounded-none bg-[#121949]/[0.8] px-4 py-8 sm:h-[fit-content] sm:rounded-lg md:rounded-[48px] md:p-12">
        <div className="w-full  pr-1">
          <div className="">
            <div className="mb-8 flex flex-col items-start lg:flex-row lg:items-end">
              <div className="mb-4 w-full md:mb-0">
                <h3 className="mb-6 text-center text-2xl font-bold text-white sm:text-left ">
                  Get the Latest Update
                </h3>
                <form className="sign-up-news-mask flex w-full items-center rounded-xl">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent px-6 py-3 text-white placeholder:text-white/60 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="whitespace-nowrap rounded-xl bg-[#FED73B] px-6 py-3 font-bold uppercase text-black md:-ml-3"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
              <div className="mt-6 hidden w-full justify-center md:justify-start lg:mt-0 lg:flex lg:justify-end">
                <div className="flex space-x-3">
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
            <div className="flex flex-col items-start justify-between gap-y-[40px] lg:mt-16 lg:flex-row lg:flex-wrap lg:gap-y-0">
              <div className="flex w-full sm:justify-between lg:w-auto">
                <div className="flex w-full grow-0 flex-col items-center sm:items-start">
                  <Link
                    href="/"
                    className="leading-0 flex items-center gap-2 whitespace-nowrap bg-gradient-to-b from-[#FFEE36] to-[#FF7A40] bg-clip-text text-2xl font-semibold text-transparent"
                  >
                    <img
                      src="/logo_full.png"
                      alt="logo footer"
                      className="h-auto w-40"
                    />
                  </Link>
                  <span className="mt-6 whitespace-normal text-center text-sm text-white sm:text-left md:text-base">
                    Copyright © 2021 UI LLC. All rights reserved.
                  </span>
                </div>
                <div className="mt-10 hidden justify-end sm:flex lg:hidden">
                  <div className="flex space-x-3">
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
              <div className="flex w-full justify-between gap-2 lg:w-auto lg:gap-8">
                <div className="text-white xl:w-[216px]">
                  <h3 className="mb-3 text-[12px] font-bold uppercase text-white sm:mb-6 sm:text-[20px] md:mb-9">
                    Start now
                  </h3>
                  <ul className="flex list-none flex-col space-y-2 sm:space-y-6">
                    <li>
                      <Link
                        href="#"
                        className="text-[8px] font-medium uppercase leading-tight text-white hover:text-yellow-500 sm:text-sm"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-[8px] font-medium uppercase leading-tight text-white hover:text-yellow-500 sm:text-sm"
                      >
                        Marketplace
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-[8px] font-medium uppercase leading-tight text-white hover:text-yellow-500 sm:text-sm"
                      >
                        Team
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-[8px] font-medium uppercase leading-tight text-white hover:text-yellow-500 sm:text-sm"
                      >
                        Support
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-[8px] font-medium uppercase leading-tight text-white hover:text-yellow-500 sm:text-sm"
                      >
                        Play Game
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="text-white xl:w-[216px]">
                  <h3 className="mb-3 text-[12px] font-bold uppercase text-white sm:mb-6 sm:text-[20px] md:mb-9">
                    Documentation
                  </h3>
                  <ul className="flex list-none flex-col space-y-2 sm:space-y-6">
                    <li>
                      <Link
                        href="#"
                        className="text-[8px] font-medium uppercase leading-tight text-white hover:text-yellow-500 sm:text-sm"
                      >
                        Whitepaper
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-[8px] font-medium uppercase leading-tight text-white hover:text-yellow-500 sm:text-sm"
                      >
                        How to start
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-[8px] font-medium uppercase leading-tight text-white hover:text-yellow-500 sm:text-sm"
                      >
                        How to connect wallet
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="text-white xl:w-[216px]">
                  <h3 className="mb-3 text-[12px] font-bold uppercase text-white sm:mb-6 sm:text-[20px] md:mb-9">
                    Help
                  </h3>
                  <ul className="flex list-none flex-col space-y-2 sm:space-y-6">
                    <li>
                      <Link
                        href="#"
                        className="text-[8px] font-medium uppercase leading-tight text-white hover:text-yellow-500 sm:text-sm"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-[8px] font-medium uppercase leading-tight text-white hover:text-yellow-500 sm:text-sm"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
