/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { transition } from '@/utils/constant'

const titleVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { ...transition, delay: 0.2 } },
}

const leftButtonVariants = {
  hidden: { opacity: 0, x: -50, y: -50 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition,
  },
}

const rightButtonVariants = {
  hidden: { opacity: 0, x: 50, y: -50 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition,
  },
}

const articleVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition,
  },
}

const NewsItem = ({
  src,
  alt,
  title,
  animationController,
}: {
  src: string
  alt: string
  title: string
  animationController: any
}) => {
  return (
    <motion.div
      variants={articleVariants}
      animate={animationController}
      className="flex flex-col px-2 will-change-transform md:px-0"
    >
      <img src={src} alt={alt} className="h-auto w-full rounded-lg" />
      <h3 className="mt-4 text-base capitalize text-white">{title}</h3>
    </motion.div>
  )
}

export default function News() {
  const [loaded, setLoaded] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-200px 0px -200px 0px' })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.set('hidden')
      controls.start('visible')
    }
  }, [controls, isInView])

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
          <motion.h2
            variants={titleVariants}
            animate={controls}
            className="news-title text-center text-[40px] font-bold capitalize leading-[48px] text-white will-change-transform md:text-[80px] md:leading-[88px]"
          >
            As seen in
          </motion.h2>

          <div className="flex flex-row items-center justify-center px-8">
            <motion.button
              className="mr-6 hidden w-[100px] will-change-transform lg:block"
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              variants={leftButtonVariants}
              animate={controls}
            >
              <img src="/heroes/arrow-left.png" alt="Arrow left" />
            </motion.button>
            <div
              ref={thumbnailRef}
              className="keen-slider thumbnail mt-8 !overflow-visible md:mt-16 md:!overflow-hidden"
            >
              <div className="keen-slider__slide cursor-pointer">
                <NewsItem
                  src="/news/article-1.png"
                  alt="Article 1"
                  title="MAGIC SQUARE X MONIWAR: LISTING ANNOUNCEMENT"
                  animationController={controls}
                />
              </div>
              <div className="keen-slider__slide cursor-pointer">
                <NewsItem
                  src="/news/article-2.png"
                  alt="Article 2"
                  title="MAGIC SQUARE X MONIWAR: LISTING ANNOUNCEMENT"
                  animationController={controls}
                />
              </div>
              <div className="keen-slider__slide cursor-pointer">
                <NewsItem
                  src="/news/article-3.png"
                  alt="Article 3"
                  title="MAGIC SQUARE X MONIWAR: LISTING ANNOUNCEMENT"
                  animationController={controls}
                />
              </div>
            </div>
            <motion.button
              className="ml-6 hidden w-[100px] will-change-transform lg:block"
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              variants={rightButtonVariants}
              animate={controls}
            >
              <img src="/heroes/arrow-right.png" alt="Arrow right" />
            </motion.button>
          </div>
          {loaded && instanceRef.current && (
            <div className="mt-5 flex items-center justify-center lg:hidden">
              <motion.button
                className="mr-6 w-[48px] will-change-transform sm:w-[100px]"
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                variants={leftButtonVariants}
                animate={controls}
              >
                <img src="/heroes/arrow-left.png" alt="Arrow left" />
              </motion.button>
              <motion.button
                className="ml-6 w-[48px] will-change-transform sm:w-[100px]"
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                variants={rightButtonVariants}
                animate={controls}
              >
                <img src="/heroes/arrow-right.png" alt="Arrow right" />
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
