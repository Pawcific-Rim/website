/* eslint-disable @next/next/no-img-element */
import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'
import { useInView } from 'framer-motion'
import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

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
    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener('click', () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx)
        })
      })
    }

    slider.on('created', () => {
      if (!mainRef.current) return

      addClickEvents()
      mainRef.current.on('animationStarted', (main) => {
        const next = main.animator.targetIdx || 0
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
      })
    })
  }
}

export default function GameModes() {
  const [loaded, setLoaded] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '0px 0px -400px 0px' })
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    created() {
      setLoaded(true)
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel)
    },
  })

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
          priority
        />
      </picture>
      <div
        ref={ref}
        className="container absolute inset-0 isolate mx-auto mb-[96px] mt-[96px] px-6 md:mt-[120px] lg:max-w-[1440px]"
      >
        <div className="mx-auto flex h-full w-full flex-col justify-center px-0 sm:px-6 lg:m-auto xl:w-[105vh]">
          <div className="text-center lg:hidden">
            <h2 className="mb-2 font-techno-race text-[48px] font-bold leading-none text-[#79F] xs:text-[54px] sm:text-[#FED73B] md:text-8xl">
              Survival Mode
            </h2>
            <div className="relative isolate mb-8">
              <p className="text-xs capitalize text-white sm:text-base md:text-[20px]">
                Minning resource, upgrade a great base to build up your army
              </p>
            </div>
          </div>
          <div
            className={twMerge(
              'animate__animated relative will-change-transform',
              isInView && 'animate__fadeInDown'
            )}
          >
            <div ref={sliderRef} className="keen-slider">
              <div className="keen-slider__slide">
                <img
                  src="/mode/banner-1.png"
                  alt="Banner 1"
                  className="w-full"
                />
              </div>
              <div className="keen-slider__slide">
                <img
                  src="/mode/banner-2.png"
                  alt="Banner 2"
                  className="w-full"
                />
              </div>
              <div className="keen-slider__slide">
                <img
                  src="/mode/banner-3.png"
                  alt="Banner 3"
                  className="w-full"
                />
              </div>
            </div>
            <div className="absolute bottom-8 hidden w-full px-8 text-center lg:block">
              <h2 className="mb-2 font-techno-race text-[96px] font-bold leading-none text-[#FED73B]">
                Survival Mode
              </h2>
              <div className="relative isolate mb-14">
                <p className="text-[20px] capitalize leading-none text-white">
                  Minning resource, upgrade a great base to build up your army
                </p>
              </div>
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
          </div>

          <div
            ref={thumbnailRef}
            className="keen-slider thumbnail -ml-2 mt-4 !overflow-visible sm:-ml-6"
          >
            <div
              className={twMerge(
                'animate__animated keen-slider__slide ml-2 cursor-pointer border-2 border-transparent will-change-transform sm:ml-6 sm:border-4',
                isInView && 'animate__fadeInUp',
                currentSlide === 0 ? 'slide-active' : 'slide-inactive'
              )}
            >
              <img
                src="/mode/thumb-1.png"
                alt="Thumb 1"
                className="h-full w-full"
              />
            </div>
            <div
              className={twMerge(
                'animate__animated keen-slider__slide ml-2 cursor-pointer border-2 border-transparent will-change-transform sm:ml-6 sm:border-4',
                isInView && 'animate__fadeInUp animate__delay-1s',
                currentSlide === 1 ? 'slide-active' : 'slide-inactive'
              )}
            >
              <img
                src="/mode/thumb-2.png"
                alt="Thumb 2"
                className="h-full w-full"
              />
            </div>
            <div
              className={twMerge(
                'animate__animated keen-slider__slide ml-2 cursor-pointer border-2 border-transparent will-change-transform sm:ml-6 sm:border-4',
                isInView && 'animate__fadeInUp animate__delay-2s',
                currentSlide === 2 ? 'slide-active' : 'slide-inactive'
              )}
            >
              <img
                src="/mode/thumb-3.png"
                alt="Thumb 3"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
