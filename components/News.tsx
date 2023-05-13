/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

const NewsItem = ({
  src,
  alt,
  title,
}: {
  src: string
  alt: string
  title: string
}) => {
  return (
    <div className="flex flex-col px-2 md:px-0">
      <img src={src} alt={alt} className="h-auto w-full rounded-lg" />
      <h3 className="mt-4 text-base capitalize text-white">{title}</h3>
    </div>
  )
}

export default function News() {
  const [loaded, setLoaded] = useState(false)

  const [thumbnailRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    created() {
      setLoaded(true)
    },
    slides: {
      origin: 'center',
      perView: 1,
      spacing: 0,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: {
          perView: 3,
          spacing: 32,
        },
      },
    },
  })

  return (
    <section className="relative h-auto min-h-screen lg:h-screen lg:snap-start">
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
      <div className="container absolute inset-0 isolate mx-auto mb-[96px] mt-[96px] px-6 md:mt-[120px] lg:max-w-[1440px]">
        <div className="mx-auto flex h-full w-full flex-col justify-center lg:m-auto">
          <h2 className="news-title text-center text-[40px] font-bold capitalize leading-[48px] text-white">
            As seen in
          </h2>

          <div className="flex flex-row items-center justify-center px-8">
            <button
              className="mr-6 hidden w-[100px] lg:block"
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
            >
              <img src="/heroes/arrow-left.png" alt="Arrow left" />
            </button>
            <div
              ref={thumbnailRef}
              className="keen-slider thumbnail mt-8 !overflow-visible md:mx-0 md:!overflow-hidden"
            >
              <div className="keen-slider__slide cursor-pointer">
                <NewsItem
                  src="/news/article-1.png"
                  alt="Article 1"
                  title="MAGIC SQUARE X MONIWAR: LISTING ANNOUNCEMENT"
                />
              </div>
              <div className="keen-slider__slide cursor-pointer">
                <NewsItem
                  src="/news/article-2.png"
                  alt="Article 2"
                  title="MAGIC SQUARE X MONIWAR: LISTING ANNOUNCEMENT"
                />
              </div>
              <div className="keen-slider__slide cursor-pointer">
                <NewsItem
                  src="/news/article-3.png"
                  alt="Article 3"
                  title="MAGIC SQUARE X MONIWAR: LISTING ANNOUNCEMENT"
                />
              </div>
            </div>
            <button
              className="ml-6 hidden w-[100px] lg:block"
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
                className="mr-6 w-[48px] sm:w-[100px]"
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
              >
                <img src="/heroes/arrow-left.png" alt="Arrow left" />
              </button>
              <button
                className="ml-6 w-[48px] sm:w-[100px]"
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
