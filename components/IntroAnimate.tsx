/* eslint-disable @next/next/no-img-element */
import { motion, useInView } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import Button from '@/components/Button'

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
        <source srcSet="/animate-intro/pc.png" />
        <Image
          src="/animate-intro/pc.png"
          alt="Heroes Background image"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          quality={80}
          priority={true}
        />
      </picture>

      <div className="container absolute inset-0 mx-auto mt-[96px] px-6 sm:mt-[120px]">
        <motion.img
          src="/animate-intro/animal1.png"
          alt="Char main"
          className={twMerge(
            'animate__animated charMain will-change-transform',
            isInView && 'animate__fadeIn animate__delay-7s'
          )}
        />
        <motion.img
          src="/animate-intro/animal2.png"
          alt="Char 1"
          className={twMerge(
            'animate__animated charLeft will-change-transform',
            isInView && 'animate__fadeIn animate__delay-7s'
          )}
        />
        <motion.img
          src="/animate-intro/animal3.png"
          alt="Char left"
          className={twMerge(
            'animate__animated charRight will-change-transform',
            isInView && 'animate__fadeIn animate__delay-7s'
          )}
        />
        <div className="relative flex flex-col items-center justify-center lg:transform">
          <h2
            className={twMerge(
              'intro-title-2 animate__animated z-10 mb-6 w-full text-[40px] font-bold capitalize leading-[48px] will-change-transform sm:text-6xl md:text-[80px] md:leading-[88px]',
              isInView && 'animate__fadeInDown animate__delay-8s'
            )}
          >
            <p className="text-center">Assemble Your</p>
            <p className="text-center">Mecha Army</p>
          </h2>
          <div
            style={{
              backgroundImage: 'url(/animate-intro/text-light.png)',
            }}
            className={twMerge(
              'animate__animated absolute h-full w-screen transform bg-cover bg-center bg-no-repeat brightness-105 filter sm:w-full lg:bg-contain',
              isInView && 'animate__fadeInDown animate__delay-7s'
            )}
          />
          <div
            className={twMerge(
              'intro-shadow animate__animated absolute inset-0 mb-6 w-full text-[40px] font-bold capitalize leading-[48px] text-transparent will-change-transform sm:text-6xl md:text-[80px] md:leading-[88px]',
              isInView && 'animate__fadeInDown animate__delay-8s'
            )}
          >
            <p className="text-center">Assemble Your</p>
            <p className="text-center">Mecha Army</p>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 mb-6 w-full -translate-x-1/2 transform px-6 sm:bottom-10 sm:mb-0 sm:px-10 lg:bottom-[72px] lg:max-w-[768px]">
          <motion.div
            className={twMerge(
              'animate__animated footer-content-mask container mx-auto overflow-hidden rounded-xl bg-black bg-opacity-50 p-6 will-change-transform',
              isInView && 'animate__slideInUp animate__delay-8s'
            )}
          >
            <div className="flex flex-col items-center justify-between space-x-0 space-y-6 sm:flex-row sm:space-x-6 sm:space-y-0">
              <p className="text-center text-white sm:text-left">
                Assemble over 100 Mecha to your Army, deadly and cute beats who
                rule this galxy - each posessing powerful abilities and
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
  )
}

export default Banner
