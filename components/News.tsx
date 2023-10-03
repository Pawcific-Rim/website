/* eslint-disable @next/next/no-img-element */
import React, { useRef } from 'react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { useInView } from 'framer-motion'

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
        'animate__animated will-change-transform',
        isInView && `animate__fadeInUp animate__delay-${index}s`,
        'flex items-center space-x-4 rounded-md bg-white p-1 sm:flex-col sm:bg-[#121949]/[0.8] sm:p-2'
      )}
    >
      <img src={src} alt={alt} className="h-auto w-1/2 rounded-lg sm:w-full" />
      <h3 className="line-clamp-3 text-sm capitalize text-black sm:mt-4 sm:line-clamp-2 sm:text-center sm:text-lg sm:text-white lg:text-2xl">
        {title}
      </h3>
    </div>
  )
}

export default function News() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-200px 0px -200px 0px' })

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
          priority
        />
      </picture>
      <div
        ref={ref}
        className="container absolute inset-0 isolate mx-auto mb-[96px] mt-[96px] px-6 md:mt-[120px]  lg:max-w-[1440px]"
      >
        <div className="mx-auto flex h-full w-full flex-col justify-center sm:max-w-[70vh] lg:m-auto lg:max-w-[unset]">
          <div className="relative mx-auto mb-8 flex lg:mb-14">
            <img
              src="/news/mask.png"
              alt="Mask"
              className="absolute left-0 h-full w-full"
            />
            <h2
              className={twMerge(
                'animate__animated mx-6 my-3 text-center text-2xl font-bold uppercase text-white will-change-transform sm:text-4xl sm:leading-none md:text-[42px] lg:mx-8 lg:my-4 lg:text-[68px]',
                isInView && 'animate__fadeInDown'
              )}
            >
              As seen in
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="cursor-pointer md:w-auto">
              <NewsItem
                src="/news/article-1.png"
                alt="Article 1"
                title="MAGIC SQUARE X MONIWAR: LISTING ANNOUNCEMENT"
                isInView={isInView}
                index={0}
              />
            </div>
            <div className="cursor-pointer md:w-auto">
              <NewsItem
                src="/news/article-2.png"
                alt="Article 2"
                title="MAGIC SQUARE X MONIWAR: LISTING ANNOUNCEMENT"
                isInView={isInView}
                index={1}
              />
            </div>
            <div className="cursor-pointer md:w-auto">
              <NewsItem
                src="/news/article-3.png"
                alt="Article 3"
                title="MAGIC SQUARE X MONIWAR: LISTING ANNOUNCEMENT"
                isInView={isInView}
                index={2}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
