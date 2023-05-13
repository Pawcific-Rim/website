import Image from 'next/image'
import Link from 'next/link'

const SOCIALS_ICON_SIZE = 56

const Footer = () => {
  return (
    <footer
      className="flex min-h-screen flex-col bg-cover bg-center pt-[72px] lg:h-screen"
      style={{ backgroundImage: "url('/footer/bg.png')" }}
    >
      <div className="container m-auto w-full px-4 py-12">
        <div className="footer-content-mask rounded-lg bg-black bg-opacity-50 p-6 md:p-16">
          <div className="mb-8 flex flex-col items-start lg:flex-row lg:items-end">
            <div className="mb-4 w-full md:mb-0">
              <h3 className="mb-6 text-center text-2xl font-bold text-white md:text-left">
                Get the Latest Update
              </h3>
              <form className="sign-up-news-mask hidden w-fit items-center rounded-xl md:flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent px-6 py-4 text-white placeholder:text-white/60 focus:outline-none lg:w-[350px]"
                />
                <button
                  type="submit"
                  className="whitespace-nowrap rounded-xl bg-gradient-to-b from-[#FFEE36] to-[#FF7A40] px-6 py-4 font-bold uppercase text-black md:-ml-3"
                >
                  Sign Up
                </button>
              </form>
              <form className="flex w-full flex-col items-center rounded-xl md:hidden">
                <div className="sign-up-news-mask w-full">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-transparent px-6 py-4 text-white placeholder:text-white/60 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 w-full whitespace-nowrap rounded-xl bg-gradient-to-b from-[#FFEE36] to-[#FF7A40] px-6 py-4 font-bold uppercase text-black"
                >
                  Sign Up
                </button>
              </form>
            </div>
            <div className="mt-6 flex w-full justify-center md:justify-start lg:mt-0 lg:justify-end">
              <div className="flex space-x-2">
                <Link href="#" className="rounded-full bg-transparent">
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
              </div>
            </div>
          </div>
          <hr className="my-6 h-px border-t-0 bg-gradient-to-b from-[#FFEE36] to-[#FF7A40] md:my-12" />
          <div className="flex flex-col items-start justify-between gap-y-[40px] lg:flex-row lg:flex-wrap lg:gap-y-0">
            <div className="flex grow-0 flex-col">
              <Link
                href="/"
                className="leading-0 flex items-center gap-2 whitespace-nowrap bg-gradient-to-b from-[#FFEE36] to-[#FF7A40] bg-clip-text font-inter text-2xl font-semibold text-transparent"
              >
                <h1>LOGO NAME</h1>
              </Link>
              <span className="mt-8 whitespace-normal text-white">
                Copyright © 2021 UI LLC. All rights reserved.
              </span>
            </div>
            <div className="text-white xl:w-[216px]">
              <h3 className="mb-9 text-[20px] font-bold uppercase text-white">
                Start now
              </h3>
              <ul className="flex list-none flex-col space-y-6">
                <li>
                  <Link
                    href="#"
                    className="text-sm font-medium uppercase leading-4 text-white hover:text-yellow-500"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm font-medium uppercase leading-4 text-white hover:text-yellow-500"
                  >
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm font-medium uppercase leading-4 text-white hover:text-yellow-500"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm font-medium uppercase leading-4 text-white hover:text-yellow-500"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm font-medium uppercase leading-4 text-white hover:text-yellow-500"
                  >
                    Play Game
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-white xl:w-[216px]">
              <h3 className="mb-9 text-[20px] font-bold uppercase text-white">
                Documentation
              </h3>
              <ul className="flex list-none flex-col space-y-6">
                <li>
                  <Link
                    href="#"
                    className="text-sm font-medium uppercase leading-4 text-white hover:text-yellow-500"
                  >
                    Whitepaper
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm font-medium uppercase leading-4 text-white hover:text-yellow-500"
                  >
                    How to start
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm font-medium uppercase leading-4 text-white hover:text-yellow-500"
                  >
                    How to connect wallet
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-white xl:w-[216px]">
              <h3 className="mb-9 text-[20px] font-bold uppercase text-white">
                Help
              </h3>
              <ul className="flex list-none flex-col space-y-6">
                <li>
                  <Link
                    href="#"
                    className="text-sm font-medium uppercase leading-4 text-white hover:text-yellow-500"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm font-medium uppercase leading-4 text-white hover:text-yellow-500"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
