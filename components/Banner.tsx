/* eslint-disable @next/next/no-img-element */
import { motion, useTransform, useScroll } from 'framer-motion'

const Banner = () => {
  const { scrollYProgress } = useScroll()
  const spaceScale = useTransform(scrollYProgress, [0, 1], [1, 1.7])
  const shipsOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [0, 1, 0])
  const shipsScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.8, 1])

  return (
    <section className="relative h-screen overflow-hidden">
      <motion.div
        className="relative h-screen overflow-hidden"
        style={{ scale: spaceScale, originX: 'center', originY: 'center' }}
      >
        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
          alt="Space"
          className="absolute left-0 top-0 h-full w-full object-cover"
        />
        <motion.img
          src="https://static.vecteezy.com/system/resources/previews/009/394/204/original/rocket-spaceship-clipart-design-illustration-free-png.png"
          alt="Ships"
          className="absolute left-1/2 top-1/2 h-auto w-[120px] object-cover"
          style={{
            opacity: shipsOpacity,
            scale: shipsScale,
            translateX: '-50%',
            translateY: '-50%',
          }}
        />
        <div className="absolute left-0 top-0 h-full w-full bg-black opacity-50"></div>
        <div className="container mx-auto flex h-full flex-col items-center justify-center">
          <h1 className="mb-4 text-4xl font-bold text-white">
            Welcome to My Website
          </h1>
          <p className="mb-8 text-lg text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
            elit a tellus tristique commodo.
          </p>
          <a
            href="#"
            className="rounded-full bg-white px-6 py-3 font-bold text-gray-800 hover:bg-gray-800 hover:text-white"
          >
            Learn More
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Banner
