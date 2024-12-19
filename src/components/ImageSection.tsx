import React from 'react'

export const ImageSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="mt-10 lg:mt-0">
            <img
              className="rounded-lg shadow-xl"
              src="/placeholder.svg?height=400&width=600"
              alt="Web3 Accelerator"
            />
          </div>
          <div className="mt-10 lg:mt-0">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Indosian lacks a specialised Web3 Accelerator
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              We are building a comprehensive platform to help scale protocols, networks, and communities in the Web3 space. Our goal is to support and accelerate Web3 projects in the region, providing resources, expertise, and community engagement opportunities.
            </p>
            <div className="mt-8">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

