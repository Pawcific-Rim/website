/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { useInView } from 'framer-motion'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

const NewsItem = ({
  src,
  alt,
  title,
  index,
  isInView,
}: {
  src: string
  alt: string
  title: string
  index: number
  isInView: boolean
}) => {
  return (
    <div
      className={twMerge(
        'animate__animated flex flex-col will-change-transform md:px-0',
        isInView && `animate__fadeInUp animate__delay-${index}s`
      )}
    >
      <img src={src} alt={alt} className="h-auto w-full rounded-lg" />
      <h3 className="mt-4 text-base capitalize text-white">{title}</h3>
    </div>
  )
}

export default function News() {
  const [loaded, setLoaded] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-200px 0px -200px 0px' })

  const [thumbnailRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    created() {
      setLoaded(true)
    },
    slides: {
      perView: 1.3,
      spacing: 16,
    },
    mode: 'free',
    loop: false,
    breakpoints: {
      '(min-width: 640px)': {
        loop: true,
        mode: 'snap',
        slides: {
          perView: 3,
          spacing: 32,
        },
      },
    },
  })

  return (
    <section className="relative h-auto min-h-screen overflow-hidden lg:h-screen">
      <picture>
        <source srcSet="/news/bg.png" />
        <Image
          src="/news/bg.png"
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
        <div className="mx-auto flex h-full w-full flex-col justify-center lg:m-auto">
          <h2
            className={twMerge(
              'news-title animate__animated text-center text-[40px] font-bold capitalize leading-[48px] text-white will-change-transform md:text-[80px] md:leading-[88px]',
              isInView && 'animate__fadeInDown'
            )}
          >
            As seen in
          </h2>

          <div className="flex flex-row items-center justify-center">
            <button
              className={twMerge(
                'animate__animated mr-6 hidden w-[100px] will-change-transform lg:block',
                isInView && 'animate__fadeInTopLeft'
              )}
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
            >
              <img src="/heroes/arrow-left.png" alt="Arrow left" />
            </button>
            <div
              ref={thumbnailRef}
              className="keen-slider thumbnail mt-8 !overflow-visible md:mt-16 md:!overflow-hidden"
            >
              <div className="keen-slider__slide cursor-pointer md:w-auto">
                <NewsItem
                  src="/news/article-1.png"
                  alt="Article 1"
                  title="MAGIC SQUARE X MONIWAR: LISTING ANNOUNCEMENT"
                  isInView={isInView}
                  index={0}
                />
              </div>
              <div className="keen-slider__slide cursor-pointer md:w-auto">
                <NewsItem
                  src="/news/article-2.png"
                  alt="Article 2"
                  title="MAGIC SQUARE X MONIWAR: LISTING ANNOUNCEMENT"
                  isInView={isInView}
                  index={1}
                />
              </div>
              <div className="keen-slider__slide cursor-pointer md:w-auto">
                <NewsItem
                  src="/news/article-3.png"
                  alt="Article 3"
                  title="MAGIC SQUARE X MONIWAR: LISTING ANNOUNCEMENT"
                  isInView={isInView}
                  index={2}
                />
              </div>
            </div>
            <button
              className={twMerge(
                'animate__animated ml-6 hidden w-[100px] will-change-transform lg:block',
                isInView && 'animate__fadeInTopRight'
              )}
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
            >
              <img src="/heroes/arrow-right.png" alt="Arrow right" />
            </button>
          </div>
          {loaded && instanceRef.current && (
            <div className="mt-5 flex items-center justify-center lg:hidden">
              <button
                className={twMerge(
                  'animate__animated mr-6 w-[48px] will-change-transform sm:w-[100px]',
                  isInView && 'animate__fadeInTopLeft'
                )}
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
              >
                <img src="/heroes/arrow-left.png" alt="Arrow left" />
              </button>
              <button
                className={twMerge(
                  'animate__animated ml-6 w-[48px] will-change-transform sm:w-[100px]',
                  isInView && 'animate__fadeInTopRight'
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
