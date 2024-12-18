import React from 'react'

export const Hero: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-5xl font-bold mb-6">
        A business builder for{' '}
        <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-blue-500 bg-clip-text text-transparent">
          Globally Impactful Ideas.
        </span>
      </h1>
      <p className="text-gray-600 mb-8 max-w-2xl">
        We are in the process of creating a studio office with space to accommodate our team and a cohort of 3 startups to ideate, test & delivery with us full time.
      </p>
      <button className="bg-[#0A0B1C] text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors inline-flex items-center gap-2">
        Let's Join Now
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </section>
  )
}

