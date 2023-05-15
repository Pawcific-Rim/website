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

export default function Heroes() {
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    created() {
      setLoaded(true)
    },
  })
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
          priority={true}
        />
      </picture>
      <div
        ref={ref}
        className="container absolute inset-0 isolate mx-auto mb-[24px] mt-[96px] px-6 md:mb-[96px] md:mt-[120px] lg:max-w-[1440px]"
      >
        <div className="mx-auto flex h-full w-full flex-col justify-center px-0 sm:px-6 lg:m-auto lg:w-[95vh]">
          <div className="relative pb-[58px] sm:pb-[89px] lg:pb-[69px]">
            <h2
              className={twMerge(
                'animate__animated character-name z-10 mb-2 text-center text-[40px] font-bold capitalize leading-[48px] text-white will-change-transform sm:hidden',
                isInView && 'animate__fadeIn animate__delay-1s'
              )}
            >
              Shiba yukata
            </h2>
            <div
              className={twMerge(
                'animate__animated relative isolate mb-[40px]',
                isInView && 'animate__fadeIn animate__delay-1s'
              )}
            >
              <p className=" text-center text-base capitalize leading-[32px] text-white sm:hidden">
                The Strongest hero in Galaxy 109
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
              ref={sliderRef}
              className={twMerge(
                'keen-slider animate__animated',
                isInView && 'animate__fadeInDown animate__delay-1s'
              )}
            >
              <div className="keen-slider__slide">
                <img
                  className="mx-auto"
                  src="/heroes/charthumb1.png"
                  alt="Character 1"
                />
              </div>
              <div className="keen-slider__slide">
                <img
                  className="mx-auto"
                  src="/heroes/charthumb2.png"
                  alt="Character 2"
                />
              </div>
              <div className="keen-slider__slide">
                <img
                  className="mx-auto"
                  src="/heroes/charthumb3.png"
                  alt="Character 3"
                />
              </div>
              <div className="keen-slider__slide">
                <img
                  className="mx-auto"
                  src="/heroes/charthumb4.png"
                  alt="Character 4"
                />
              </div>
              <div className="keen-slider__slide">
                <img
                  className="mx-auto"
                  src="/heroes/charthumb5.png"
                  alt="Character 5"
                />
              </div>
            </div>
            <div
              className={twMerge(
                'animate__animated absolute -bottom-10 w-full px-8 text-center sm:-bottom-20 lg:-bottom-24',
                isInView && 'animate__fadeIn animate__delay-1s'
              )}
            >
              <img
                src="/heroes/light.png"
                alt="light"
                className="absolute bottom-10 left-1/2 z-0 mx-auto h-auto w-[125%] max-w-none -translate-x-1/2 transform sm:bottom-20 lg:bottom-24"
              />
              <h2 className="character-name z-10 mb-2 hidden text-[80px] font-bold capitalize leading-[88px] text-white sm:block">
                Shiba yukata
              </h2>
              <div className="relative isolate mb-[40px]">
                <p className="relative z-10 hidden text-2xl capitalize text-white sm:block">
                  The Strongest hero in Galaxy 109
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

              <img src="/heroes/base.png" alt="base" className="mx-auto" />
            </div>
          </div>

          <div
            className={twMerge(
              'animate__animated heroes-carousel-mask p-1 will-change-transform',
              isInView && 'animate__fadeInUp animate__delay-1s'
            )}
          >
            {loaded && instanceRef.current && (
              <div className="flex items-center rounded-xl bg-gradient-to-b from-[#C1A6F3] to-[#9778CD] py-4">
                <div className="w-4 sm:hidden" />
                <button
                  className="mr-4 hidden sm:block sm:max-w-[100px]"
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                >
                  <img src="/heroes/arrow-left.png" alt="Arrow left" />
                </button>

                <div
                  ref={thumbnailRef}
                  className="keen-slider thumbnail !overflow-visible"
                >
                  <div className="keen-slider__slide cursor-pointer border-2 border-transparent sm:border-4">
                    <img
                      className="h-full w-full"
                      src="/heroes/char1.png"
                      alt="Character thumb 1"
                    />
                  </div>
                  <div className="keen-slider__slide cursor-pointer border-2 border-transparent sm:border-4">
                    <img
                      className="h-full w-full"
                      src="/heroes/char2.png"
                      alt="Character thumb 2"
                    />
                  </div>
                  <div className="keen-slider__slide cursor-pointer border-2 border-transparent sm:border-4">
                    <img
                      className="h-full w-full"
                      src="/heroes/char3.png"
                      alt="Character thumb 3"
                    />
                  </div>
                  <div className="keen-slider__slide cursor-pointer border-2 border-transparent sm:border-4">
                    <img
                      className="h-full w-full"
                      src="/heroes/char4.png"
                      alt="Character thumb 4"
                    />
                  </div>
                  <div className="keen-slider__slide cursor-pointer border-2 border-transparent sm:border-4">
                    <img
                      className="h-full w-full"
                      src="/heroes/char5.png"
                      alt="Character thumb 5"
                    />
                  </div>
                </div>
                <div className="w-4 sm:hidden" />
                <button
                  className="hidden pl-4 sm:block"
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                >
                  <img src="/heroes/arrow-right.png" alt="Arrow right" />
                </button>
              </div>
            )}
          </div>
          {loaded && instanceRef.current && (
            <div className="mt-5 flex items-center justify-center sm:hidden">
              <button
                className={twMerge(
                  'animate__animated mr-6 w-[48px] will-change-transform',
                  isInView && 'animate__fadeInTopLeft animate__delay-1s'
                )}
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
              >
                <img src="/heroes/arrow-left.png" alt="Arrow left" />
              </button>
              <button
                className={twMerge(
                  'animate__animated ml-6 w-[48px] will-change-transform',
                  isInView && 'animate__fadeInTopRight animate__delay-1s'
                )}
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
              >
                <img src="/heroes/arrow-right.png" alt="Arrow right" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
