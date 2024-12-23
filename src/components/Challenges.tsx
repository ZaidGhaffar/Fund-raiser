import React from 'react'
import VendorCart from '../assets/Vendor-cart.jpg'
interface ChallengeCard {
  title: string
  description: string
  imageUrl: string
}

const challenges: ChallengeCard[] = [
  {
    title: 'Food Selling cart shop',
    description: 'Web3 startups often struggle to find the necessary resources and support to scale their projects effectively.',
    imageUrl : VendorCart
  },
  {
    title: 'Lack of Expertise',
    description: 'Many founders lack the specialized knowledge required to navigate the complex Web3 landscape.',
    imageUrl: 'src/assets/software.jpg'
  },
  {
    title: 'Regulatory Challenges',
    description: 'The evolving regulatory environment poses significant challenges for Web3 startups, especially in emerging markets.',
    imageUrl: 'src/assets/business-management-banner.webp'
  }
]

export const Challenges: React.FC = () => {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
        Opportunities
        <svg
          className="w-5 h-5 text-purple-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {challenges.map((challenge) => (
          <div
            key={challenge.title}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={challenge.imageUrl}
              alt={challenge.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{challenge.title}</h3>
              <p className="text-gray-600">{challenge.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

