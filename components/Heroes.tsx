/* eslint-disable @next/next/no-img-element */
import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { useInView } from 'framer-motion'
import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove('heroes-slide-active')
      })
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add('heroes-slide-active')
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

const SliderPlugin = (slider: KeenSliderInstance) => {
  function removeActive() {
    slider.slides.forEach((slide) => {
      slide.classList.remove('heroes-main-active')
    })
  }

  function addActive(idx: number) {
    slider.slides[idx]?.classList.add('heroes-main-active')
  }

  function addClickEvents() {
    slider.slides.forEach((slide: any, idx: number) => {
      slide.addEventListener('click', () => {
        slider.moveToIdx(idx)
      })
    })
  }

  slider.on('created', () => {
    addClickEvents()
    addActive(slider.track.details.rel)
    slider.on('animationStarted', (main: KeenSliderInstance) => {
      removeActive()
      const next = main.animator.targetIdx || 0
      addActive(main.track.absToRel(next))
    })
  })
}

export default function Heroes() {
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      loop: true,
      drag: false,
      breakpoints: {
        '(min-width: 1025px)': {
          slides: {
            origin: 'center',
            perView: 3,
            spacing: 24,
          },
        },
      },
      created() {
        setLoaded(true)
      },
    },
    [SliderPlugin]
  )

  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-200px 0px -200px 0px' })

  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 5,
        spacing: 8,
      },
      breakpoints: {
        '(min-width: 768px)': {
          slides: {
            perView: 5,
            spacing: 16,
          },
        },
      },
    },
    [ThumbnailPlugin(instanceRef)]
  )

  return (
    <section className="relative h-auto min-h-screen overflow-hidden lg:h-screen">
      <picture>
        <source srcSet="/heroes/bg.png" />
        <Image
          src="/heroes/bg.png"
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
      <div
        ref={ref}
        className="container absolute inset-0 isolate mx-auto mb-[24px] mt-[96px] px-6 md:mb-[96px] md:mt-[120px] lg:max-w-[1440px]"
      >
        <div className="mx-auto flex h-full w-full flex-col justify-center px-0 sm:px-6 lg:m-auto lg:w-[95vh] lg:max-w-[100vw] lg:justify-center">
          <div className="relative sm:pb-[68px] md:pb-[48px] lg:-ml-[17.5vh] lg:w-[130vh]">
            <h2
              className={twMerge(
                'animate__animated z-10 mb-2 text-center font-bold capitalize text-white will-change-transform sm:hidden',
                isInView && 'animate__fadeIn animate__delay-1s',
                'font-techno-race text-[40px] leading-none text-[#79F] xs:text-[54px]'
              )}
            >
              Shiba yukata
            </h2>
            <div
              className={twMerge(
                'animate__animated relative isolate sm:hidden',
                isInView && 'animate__fadeIn animate__delay-1s'
              )}
            >
              <p className="text-center text-xs text-white sm:text-base">
                Lorem ipsum dolor sit amet consectetur. Tortor id lectus
                sagittis etiam mattis velit sit non duis. Eros cursus semper
                ultrices ut. Vitae amet augue hendrerit porttitor dui
              </p>
            </div>
            <div
              ref={sliderRef}
              className={twMerge(
                'keen-slider animate__animated mt-10 xs:mt-4 ',
                isInView && 'animate__fadeInDown animate__delay-1s'
              )}
            >
              <div className="keen-slider__slide !overflow-visible">
                <div
                  className="mx-auto flex h-[240px] items-center justify-end border-8 border-transparent xs:h-[320px] md:h-[400px] md:w-[75%]"
                  style={{
                    backgroundImage: 'url(/heroes/main1.png)',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'bottom',
                  }}
                />
              </div>
              <div className="keen-slider__slide !overflow-visible">
                <div
                  className="mx-auto flex h-[240px] items-center justify-end border-8 border-transparent xs:h-[320px] md:h-[400px] md:w-[75%]"
                  style={{
                    backgroundImage: 'url(/heroes/main2.png)',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'bottom',
                  }}
                />
              </div>
              <div className="keen-slider__slide !overflow-visible">
                <div
                  className="mx-auto flex h-[240px] items-center justify-end border-8 border-transparent xs:h-[320px] md:h-[400px] md:w-[75%]"
                  style={{
                    backgroundImage: 'url(/heroes/main3.png)',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'bottom',
                  }}
                />
              </div>
              <div className="keen-slider__slide !overflow-visible">
                <div
                  className="mx-auto flex h-[240px] items-center justify-end border-8 border-transparent xs:h-[320px] md:h-[400px] md:w-[75%]"
                  style={{
                    backgroundImage: 'url(/heroes/main4.png)',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'bottom',
                  }}
                />
              </div>
              <div className="keen-slider__slide !overflow-visible">
                <div
                  className="mx-auto flex h-[240px] items-center justify-end border-8 border-transparent xs:h-[320px] md:h-[400px] md:w-[75%]"
                  style={{
                    backgroundImage: 'url(/heroes/main5.png)',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'bottom',
                  }}
                />
              </div>
            </div>
            <div
              className={twMerge(
                'animate__animated w-full px-8 text-center',
                isInView && 'animate__fadeIn animate__delay-1s'
              )}
            >
              <h2 className="z-10 mb-2 hidden font-techno-race text-[64px] font-bold capitalize leading-none text-[#79F] sm:block lg:text-[84px]">
                Shiba yukata
              </h2>
              <div className="relative isolate hidden sm:block">
                <p className="relative z-10 text-sm capitalize text-white">
                  Lorem ipsum dolor sit amet consectetur. Tortor id lectus
                  sagittis etiam mattis velit sit non duis. Eros cursus semper
                  ultrices ut. Vitae amet augue hendrerit porttitor dui
                </p>
              </div>
            </div>
          </div>

          <div
            className={twMerge(
              'animate__animated mt-4 p-1 will-change-transform sm:-mt-6',
              isInView && 'animate__fadeInUp animate__delay-1s'
            )}
          >
            {loaded && instanceRef.current && (
              <div className="relative flex items-center rounded-xl px-4 sm:px-6">
                <img
                  src="/heroes/mask.png"
                  alt="mask"
                  className="absolute left-[-28px] -z-10 mb-2 w-screen max-w-none xs:left-0 xs:w-full"
                />
                <button
                  className="w-[36px] pr-4 sm:w-[48px] lg:mt-2 lg:w-[96px]"
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                >
                  <img src="/heroes/arrow-left.svg" alt="Arrow left" />
                </button>

                <div
                  ref={thumbnailRef}
                  className="keen-slider thumbnail flex-1 !overflow-visible"
                >
                  <div className="keen-slider__slide mb-2 cursor-pointer border-2 border-transparent">
                    <img
                      className="h-full w-full"
                      src="/heroes/char1.png"
                      alt="Character thumb 1"
                    />
                  </div>
                  <div className="keen-slider__slide mb-2 cursor-pointer border-2 border-transparent">
                    <img
                      className="h-full w-full"
                      src="/heroes/char2.png"
                      alt="Character thumb 2"
                    />
                  </div>
                  <div className="keen-slider__slide mb-2 cursor-pointer border-2 border-transparent">
                    <img
                      className="h-full w-full"
                      src="/heroes/char3.png"
                      alt="Character thumb 3"
                    />
                  </div>
                  <div className="keen-slider__slide mb-2 cursor-pointer border-2 border-transparent">
                    <img
                      className="h-full w-full"
                      src="/heroes/char4.png"
                      alt="Character thumb 4"
                    />
                  </div>
                  <div className="keen-slider__slide mb-2 cursor-pointer border-2 border-transparent">
                    <img
                      className="h-full w-full"
                      src="/heroes/char5.png"
                      alt="Character thumb 5"
                    />
                  </div>
                </div>
                <button
                  className="w-[36px] pl-4 sm:w-[48px] lg:mt-2 lg:w-[96px]"
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                >
                  <img
                    src="/heroes/arrow-right.svg"
                    alt="Arrow right"
                    className="ml-auto"
                  />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
