import React from 'react'

export const Navigation: React.FC = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-6">
      <div className="text-xl font-bold">WintaX</div>
      <div className="flex items-center gap-8">
        <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Home</a>
        <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Position</a>
        <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Solution</a>
        <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Program</a>
        <button className="bg-[#0A0B1C] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
          Let's Join Now
        </button>
      </div>
    </nav>
  )
}

