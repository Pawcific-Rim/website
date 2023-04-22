import { motion } from 'framer-motion'

const Features = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Features of My Website
        </h2>
        <div className="-mx-4 flex flex-wrap">
          <motion.div
            className="mb-8 w-full px-4 md:w-1/2 lg:w-1/3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="rounded-lg bg-white p-8 shadow-md">
              <h3 className="mb-4 text-xl font-bold">Feature 1</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sed elit a tellus tristique commodo.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="mb-8 w-full px-4 md:w-1/2 lg:w-1/3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="rounded-lg bg-white p-8 shadow-md">
              <h3 className="mb-4 text-xl font-bold">Feature 2</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sed elit a tellus tristique commodo.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="mb-8 w-full px-4 md:w-1/2 lg:w-1/3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="rounded-lg bg-white p-8 shadow-md">
              <h3 className="mb-4 text-xl font-bold">Feature 3</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sed elit a tellus tristique commodo.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="mb-8 w-full px-4 md:w-1/2 lg:w-1/3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="rounded-lg bg-white p-8 shadow-md">
              <h3 className="mb-4 text-xl font-bold">Feature 4</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sed elit a tellus tristique commodo.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="mb-8 w-full px-4 md:w-1/2 lg:w-1/3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="rounded-lg bg-white p-8 shadow-md">
              <h3 className="mb-4 text-xl font-bold">Feature 5</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sed elit a tellus tristique commodo.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="mb-8 w-full px-4 md:w-1/2 lg:w-1/3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="rounded-lg bg-white p-8 shadow-md">
              <h3 className="mb-4 text-xl font-bold">Feature 6</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sed elit a tellus tristique commodo.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Features
