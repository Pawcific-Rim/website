/* eslint-disable @next/next/no-img-element */
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import Image from 'next/image'

const Story = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-200px 0px -200px 0px' })

  return (
    <section ref={ref} className="flex h-screen flex-col pt-[72px] lg:h-screen">
      <Image
        src="/story/bg.png"
        style={{ objectFit: 'cover' }}
        fill
        alt="Story background image"
        priority
        quality={80}
        className="-z-0"
      />
      <div className="container z-10 m-auto flex h-full w-full items-center p-4 sm:h-[fit-content] md:p-12">
        <div className="-mt-24 flex w-full flex-col md:-mt-0 lg:flex-row lg:items-center lg:space-x-2 2xl:space-x-6">
          {/* Title */}
          <div className="w-full md:max-w-[360px] 2xl:max-w-[480px]">
            <h3 className="text-center font-techno-race text-[72px] capitalize leading-none text-[#3E6FFF] md:text-left md:text-[96px] 2xl:text-[120px]">
              STORY
            </h3>
            <p className="mb-8 text-center text-2xl leading-none text-[#3E6FFF] md:text-left md:text-3xl 2xl:text-4xl">
              The Great Disaster
            </p>

            <ul className="hidden lg:block">
              <li className="mb-4 flex gap-3 md:mb-6">
                <div className="mt-[6px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    className="h-6 w-6"
                  >
                    <circle cx="5" cy="5" r="5" fill="#3E6FFF" />
                  </svg>
                </div>

                <p className="text-lg text-white 2xl:text-xl">
                  Pawcific Rim is more than just a game, it combines real-time
                  strategy, tycoon simulation, and strategic role-playing
                </p>
              </li>
              <li className="flex gap-3">
                <div className="mt-[6px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    className="h-6 w-6"
                  >
                    <circle cx="5" cy="5" r="5" fill="#3E6FFF" />
                  </svg>
                </div>

                <p className="text-lg text-white 2xl:text-xl">
                  Pawcific Rim is more than just a game, it combines real-time
                  strategy, tycoon simulation, and strategic role-playing
                </p>
              </li>
            </ul>
          </div>
          {/* Contents */}
          <div className="flex flex-col md:flex-col-reverse lg:justify-center">
            <div className="relative mb-8 md:mb-0 md:mt-8 lg:mt-0">
              <img
                src="/story/video-frame.png"
                alt="Story background image"
                className="w-full"
              />
              <div
                className="absolute left-[50%] top-[50%] overflow-hidden rounded-xl"
                style={{
                  width: 'calc(900 / 1025 * 100%)',
                  height: 'calc(490 / 605 * 100%)',
                  transform: 'translate(-50%, -52.5%)',
                }}
              >
                {isInView && (
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/EZb6PWa9OQw?si=RuntifPoDBYLejrx&autoplay=1&mute=1&rel=0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; modestbranding; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                )}
              </div>
            </div>
            <ul className="block lg:hidden">
              <li className="mb-4 flex gap-3 md:mb-6">
                <div className="mt-[6px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    className="h-[10px] w-[10px] md:h-5 md:w-5"
                  >
                    <circle cx="5" cy="5" r="5" fill="#3E6FFF" />
                  </svg>
                </div>

                <p className="text-sm leading-none text-white md:text-lg">
                  Pawcific Rim is more than just a game, it combines real-time
                  strategy, tycoon simulation, and strategic role-playing
                </p>
              </li>
              <li className="flex gap-3">
                <div className="mt-[6px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    className="h-[10px] w-[10px] md:h-5 md:w-5"
                  >
                    <circle cx="5" cy="5" r="5" fill="#3E6FFF" />
                  </svg>
                </div>

                <p className="text-sm leading-none text-white md:text-lg">
                  Pawcific Rim is more than just a game, it combines real-time
                  strategy, tycoon simulation, and strategic role-playing
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story
