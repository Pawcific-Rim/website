/* eslint-disable @next/next/no-img-element */
import { useRef } from 'react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { useInView } from 'framer-motion'

const IntroBanner = () => {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <section className="relative h-auto min-h-screen overflow-hidden">
      <Image
        src="/intro/bg.png"
        alt="Background image"
        fill
        style={{
          objectFit: 'cover',
        }}
        className="object-[85%] sm:object-[70%] md:object-[60%]"
        quality={80}
        priority
      />
      <div className="absolute inset-0 mx-auto mt-[76px] p-6 sm:pt-16 lg:mx-0 xl:mt-[102px]">
        <div ref={ref} className="flex flex-col items-start">
          <h1
            className={twMerge(
              'animate__animated mt-16 w-full font-bold capitalize will-change-transform sm:mb-2 lg:mb-6',
              isInView && 'animate__fadeInDown'
            )}
          >
            <p className="text-shadow-small text-right text-[32px] text-white sm:text-left sm:text-[40px] lg:text-[60px]">
              Joint The
            </p>
            <p className="text-shadow-big text-right font-techno-race text-[56px] text-white sm:text-left sm:text-[80px] lg:text-[136px]">
              Furry Force
            </p>
          </h1>
          <div
            className={twMerge(
              'animate__animated relative isolate mb-6 ml-auto mt-2 will-change-transform sm:ml-0',
              isInView && 'animate__fadeInLeft'
            )}
          >
            <p className="mx-4 text-lg capitalize leading-tight text-white sm:mx-[100px] sm:text-2xl lg:mx-[120px] lg:text-3xl">
              Save the universe from Kaizu
            </p>
            <img
              src="/intro/mask.png"
              alt="Mask 1"
              className="absolute right-1/2 top-1/2 -z-10 h-[50px] w-full -translate-y-1/2 translate-x-1/2 transform lg:h-[85px]"
            />
          </div>
          <div
            className={twMerge(
              'animate__animated ml-auto mt-3 will-change-transform sm:ml-0 sm:mt-8',
              isInView && 'animate__fadeInUp'
            )}
          >
            <button
              className={twMerge(
                'inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-[#FED73B] px-6 py-5 text-xl font-semibold capitalize leading-none text-black shadow-md hover:bg-[#FFEE36]'
              )}
            >
              Play Game
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntroBanner
