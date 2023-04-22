import { motion } from 'framer-motion'

const Features = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Features of My Website
        </h2>
        <div className="flex flex-wrap -mx-4">
          <motion.div
            className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Feature 1</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sed elit a tellus tristique commodo.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Feature 2</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sed elit a tellus tristique commodo.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Feature 3</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sed elit a tellus tristique commodo.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Feature 4</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sed elit a tellus tristique commodo.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Feature 5</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sed elit a tellus tristique commodo.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Feature 6</h3>
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
