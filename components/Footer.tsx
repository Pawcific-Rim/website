const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400">
      <div className="container mx-auto py-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-center md:text-left">
          © 2023 My Website. All rights reserved.
        </p>
        <div className="flex mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-gray-100 px-3">
            About
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-100 px-3">
            Services
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-100 px-3">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
