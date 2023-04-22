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
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <motion.img
          src="https://static.vecteezy.com/system/resources/previews/009/394/204/original/rocket-spaceship-clipart-design-illustration-free-png.png"
          alt="Ships"
          className="absolute top-1/2 left-1/2 w-[120px] h-auto object-cover"
          style={{
            opacity: shipsOpacity,
            scale: shipsScale,
            translateX: '-50%',
            translateY: '-50%',
          }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="container mx-auto h-full flex flex-col justify-center items-center">
          <h1 className="text-white text-4xl font-bold mb-4">
            Welcome to My Website
          </h1>
          <p className="text-white text-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
            elit a tellus tristique commodo.
          </p>
          <a
            href="#"
            className="bg-white text-gray-800 hover:bg-gray-800 hover:text-white px-6 py-3 rounded-full font-bold"
          >
            Learn More
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Banner
