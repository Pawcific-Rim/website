const Heroes = () => {
  return (
    <footer className="bg-gray-800 text-gray-400">
      <div className="container mx-auto flex flex-col items-center justify-between py-8 md:flex-row">
        <p className="text-center md:text-left">
          © 2023 My Website. All rights reserved.
        </p>
        <div className="mt-4 flex md:mt-0">
          <a href="#" className="px-3 text-gray-400 hover:text-gray-100">
            About
          </a>
          <a href="#" className="px-3 text-gray-400 hover:text-gray-100">
            Services
          </a>
          <a href="#" className="px-3 text-gray-400 hover:text-gray-100">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Heroes
