/* eslint-disable @next/next/no-img-element */
import React, { MutableRefObject, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'
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

export default function GameModes() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
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
    <section className="relative h-auto min-h-screen lg:h-screen">
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
      <div className="container absolute inset-0 isolate mx-auto mb-[96px] mt-[96px] px-6 md:mt-[120px] lg:max-w-[1440px]">
        <div className="mx-auto flex h-full w-full flex-col justify-center px-0 sm:px-6 lg:m-auto lg:w-[125vh]">
          <div className="text-center md:hidden">
            <h2 className="mode-title mb-2 text-[40px] font-bold leading-[48px] text-white">
              Survival Mode
            </h2>
            <p className="mb-4 text-base capitalize text-white">
              Minning resource, upgrade a great base to build up your army
            </p>
          </div>
          <div className="relative">
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
          </div>

          <div
            ref={thumbnailRef}
            className="keen-slider thumbnail mt-4 !overflow-visible"
          >
            <div className="keen-slider__slide cursor-pointer border-2 border-transparent sm:border-4">
              <img src="/mode/thumb-1.png" alt="Thumb 1" />
            </div>
            <div className="keen-slider__slide cursor-pointer border-2 border-transparent sm:border-4">
              <img src="/mode/thumb-2.png" alt="Thumb 2" />
            </div>
            <div className="keen-slider__slide cursor-pointer border-2 border-transparent sm:border-4">
              <img src="/mode/thumb-3.png" alt="Thumb 3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
