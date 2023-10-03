/* eslint-disable @next/next/no-img-element */
import { motion, useInView } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { useRef } from 'react'
import Image from 'next/image'

const Banner = () => {
  const elementRef = useRef(null)
  const isInView = useInView(elementRef, {
    margin: '-200px 0px -200px 0px',
  })

  return (
    <section
      ref={elementRef}
      className={twMerge(
        'animate__animated relative h-auto min-h-screen origin-top overflow-hidden lg:h-screen',
        isInView && 'animate__zoomScaleDown'
      )}
    >
      <picture>
        <source srcSet="/animate-intro/bg.png" />
        <Image
          src="/animate-intro/bg.png"
          alt="Heroes Background image"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          quality={80}
          priority
        />
      </picture>

      <div className="container absolute inset-0 mx-auto mt-[96px] px-6 sm:mt-[120px]">
        <motion.img
          src="/animate-intro/animal1.png"
          alt="Char main"
          className={twMerge(
            'animate__animated charMain will-change-transform',
            isInView && 'animate__fadeIn animate__delay-6s'
          )}
        />
        <motion.img
          src="/animate-intro/animal2.png"
          alt="Char 1"
          className={twMerge(
            'animate__animated charLeft will-change-transform',
            isInView && 'animate__fadeIn animate__delay-6s'
          )}
        />
        <motion.img
          src="/animate-intro/animal3.png"
          alt="Char left"
          className={twMerge(
            'animate__animated charRight will-change-transform',
            isInView && 'animate__fadeIn animate__delay-6s'
          )}
        />
        <div className="relative flex flex-col items-center justify-center overflow-visible pb-6 lg:transform">
          <h2
            className={twMerge(
              'intro-title-2 animate__animated z-10 w-full text-[40px] font-bold capitalize leading-[52px] will-change-transform sm:text-6xl md:text-[80px] md:leading-[88px]',
              isInView && 'animate__fadeInDown animate__delay-7s'
            )}
          >
            <p className="text-center font-techno-race">Assemble Your</p>
            <p className="text-center font-techno-race">Mecha Army</p>
          </h2>
          <div className="absolute flex h-full w-[780px] transform items-center sm:w-[1186px] md:w-[1584px]">
            <img
              src="/animate-intro/text-light.png"
              alt="Text light"
              className={twMerge(
                'animate__animated overflow-visible object-cover brightness-125 filter',
                isInView && 'animate__fadeInDown animate__delay-6s'
              )}
            />
          </div>
          <div
            className={twMerge(
              'intro-shadow animate__animated absolute inset-0 w-full text-[40px] font-bold capitalize leading-[52px] will-change-transform sm:text-6xl md:text-[80px] md:leading-[88px]',
              isInView && 'animate__fadeInDown animate__delay-7s__1'
            )}
          >
            <p className="text-center font-techno-race">Assemble Your</p>
            <p className="text-center font-techno-race">Mecha Army</p>
          </div>
        </div>
        <div className="absolute bottom-16 left-1/2 mb-8 w-full -translate-x-1/2 transform px-6 sm:px-10 md:bottom-10 md:mb-0 lg:bottom-[72px] lg:max-w-[768px]">
          <motion.div
            className={twMerge(
              'animate__animated container mx-auto overflow-hidden rounded-xl bg-black bg-opacity-50 p-3 will-change-transform md:p-6',
              isInView && 'animate__fadeInUp animate__delay-7s',
              'rounded-xl border-4 border-solid border-[#FED73B]'
            )}
          >
            <div className="flex flex-col items-center justify-between space-x-0 space-y-3 sm:flex-row sm:space-x-6 sm:space-y-0">
              <p className="text-center text-xs text-white sm:text-left sm:text-sm md:text-base">
                Assemble over 100 Mecha to your Army, deadly and cute beats who
                rule this galxy - each posessing powerful abilities and
                synergies
              </p>
              <button
                className={twMerge(
                  'px-4 py-3 md:px-6 md:py-5',
                  'inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-[#FED73B]  text-xl font-semibold capitalize leading-none text-black shadow-md hover:bg-[#FFEE36]'
                )}
              >
                Get Them Now
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Banner
