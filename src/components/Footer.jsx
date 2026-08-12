import React from 'react'

const Footer = () => {

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-center gap-4">
        
        {/* Left */}
        <div className="text-center md:text-left">
          <h1 className="text-lg font-semibold tracking-wide">
            JK Nishad
          </h1>
         
        </div>

        {/* Center */}
        

        {/* Right */}
        <div className="text-sm text-gray-500 text-center md:text-right">
          © {new Date().getFullYear()} All rights reserved
        </div>

      </div>
    </footer>
  )
}

export default Footer