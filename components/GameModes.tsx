/* eslint-disable @next/next/no-img-element */
import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'
import { motion, useInView, useAnimation } from 'framer-motion'
import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { transition } from '@/utils/constant'

function Arrow(props: { left?: boolean; onClick: (e: any) => void }) {
  return (
    <div
      onClick={props.onClick}
      className={twMerge(
        'absolute top-1/2 h-14 w-4 -translate-y-1/2 transform cursor-pointer fill-white md:h-32 md:w-8 lg:h-40 lg:w-12',
        props.left ? 'left-0' : 'right-0'
      )}
    />
  )
}

function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove('slide-active')
      })
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add('slide-active')
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener('click', () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx)
        })
      })
    }

    slider.on('created', () => {
      if (!mainRef.current) return

      addActive(slider.track.details.rel)
      addClickEvents()
      mainRef.current.on('animationStarted', (main) => {
        removeActive()
        const next = main.animator.targetIdx || 0
        addActive(main.track.absToRel(next))
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
      })
    })
  }
}

const bannerVariants = {
  hidden: {
    y: -300,
    opacity: 0,
    transition: { duration: 0.2 },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...transition,
      type: 'spring',
      damping: 20,
      duration: 1,
    },
  },
}

const getThumbnailVariants = (index: number) => ({
  hidden: {
    opacity: 0,
    y: (100 * index) / 2 + 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: index / 3 + 0.5,
    },
  },
})

export default function GameModes() {
  const [loaded, setLoaded] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '0px 0px -400px 0px' })
  const controls = useAnimation()
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    created() {
      setLoaded(true)
    },
  })

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, isInView])

  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 3,
        spacing: 8,
      },
      breakpoints: {
        '(min-width: 640px)': {
          slides: {
            perView: 3,
            spacing: 24,
          },
        },
      },
    },
    [ThumbnailPlugin(instanceRef)]
  )

  return (
    <section className="relative h-auto min-h-screen overflow-hidden lg:h-screen">
      <picture>
        {/* <source media="(max-width: 640px)" srcSet="/animate-intro/pc.png" /> */}
        {/* <source media="(max-width: 1024px)" srcSet="/animate-intro/pc.png" /> */}
        <source srcSet="/mode/bg.png" />
        <Image
          src="/mode/bg.png"
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
      <div
        ref={ref}
        className="container absolute inset-0 isolate mx-auto mb-[96px] mt-[96px] px-6 md:mt-[120px] lg:max-w-[1440px]"
      >
        <div className="mx-auto flex h-full w-full flex-col justify-center px-0 sm:px-6 lg:m-auto lg:w-[125vh]">
          <div className="text-center md:hidden">
            <h2 className="mode-title mb-2 text-[40px] font-bold leading-[48px] text-white">
              Survival Mode
            </h2>
            <p className="mb-4 text-base capitalize text-white">
              Minning resource, upgrade a great base to build up your army
            </p>
          </div>
          <motion.div
            variants={bannerVariants}
            animate={controls}
            className="relative"
          >
            <div ref={sliderRef} className="keen-slider">
              <div className="keen-slider__slide">
                <img src="/mode/banner-1.png" alt="Banner 1" />
              </div>
              <div className="keen-slider__slide">
                <img src="/mode/banner-2.png" alt="Banner 2" />
              </div>
              <div className="keen-slider__slide">
                <img src="/mode/banner-3.png" alt="Banner 3" />
              </div>
            </div>
            <div className="absolute bottom-0 hidden w-full px-8 text-center md:block">
              <h2 className="mode-title mb-2 text-[80px] font-bold leading-[88px] text-white">
                Survival Mode
              </h2>
              <p className="mb-[40px] text-2xl capitalize text-white">
                Minning resource, upgrade a great base to build up your army
              </p>
            </div>
            {loaded && instanceRef.current && (
              <>
                <Arrow
                  left
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                />

                <Arrow
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                />
              </>
            )}
          </motion.div>

          <div
            ref={thumbnailRef}
            className="keen-slider thumbnail -ml-2 mt-4 !overflow-visible sm:-ml-6"
          >
            <motion.div
              variants={getThumbnailVariants(0)}
              animate={controls}
              className="keen-slider__slide ml-2 cursor-pointer border-2 border-transparent sm:ml-6 sm:border-4"
            >
              <img
                src="/mode/thumb-1.png"
                alt="Thumb 1"
                className="h-full w-full"
              />
            </motion.div>
            <motion.div
              variants={getThumbnailVariants(1)}
              animate={controls}
              className="keen-slider__slide ml-2 cursor-pointer border-2 border-transparent sm:ml-6 sm:border-4"
            >
              <img
                src="/mode/thumb-2.png"
                alt="Thumb 2"
                className="h-full w-full"
              />
            </motion.div>
            <motion.div
              variants={getThumbnailVariants(2)}
              animate={controls}
              className="keen-slider__slide ml-2 cursor-pointer border-2 border-transparent sm:ml-6 sm:border-4"
            >
              <img
                src="/mode/thumb-3.png"
                alt="Thumb 3"
                className="h-full w-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
