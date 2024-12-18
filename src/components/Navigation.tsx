import React from 'react'

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Position', href: '#' },
  { label: 'Solution', href: '#' },
  { label: 'Program', href: '#' }
]

export const Navigation: React.FC = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-6">
      <div className="text-xl font-bold">WintaX</div>
      <div className="flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            {item.label}
          </a>
        ))}
        <button className="bg-[#0A0B1C] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
          Let's Join Now
        </button>
      </div>
    </nav>
  )
}

