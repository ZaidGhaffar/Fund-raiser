import React from 'react'
import petrolStationImage from '../assets/petrol-station-3.webp'

export const OpportunitiesSection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container">
        <div className="pl-4 sm:pl-8 lg:pl-12">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            Oppurtunities
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="rounded-lg overflow-hidden">
              <img
                src={petrolStationImage}
                alt="Gas Station"
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="space-y-12">
              <p className="text-gray-700 text-lg">
                Indosian lacks a specialised Web3 Accelerator to help scale protocols, networks and communities.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-4xl font-bold mb-2">~65</h3>
                  <p className="text-gray-600 text-sm">
                    Only a handful of Web3 Accelerators exist worldwide
                  </p>
                </div>
                
                <div>
                  <h3 className="text-4xl font-bold mb-2">5,000+</h3>
                  <p className="text-gray-600 text-sm">
                    There is an shortage of Founders across Web3 who are exploring Web3 patterns or are looking to make a move from Web2 to Web3
                  </p>
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-4xl font-bold">10</h3>
                  <span className="text-gray-700">Inadequate Community Engagement</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Indonesia has an extremely limited number of specialised Web3 Accelerators
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

