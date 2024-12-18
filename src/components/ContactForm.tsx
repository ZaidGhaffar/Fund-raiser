import React, { FormEvent, useState } from 'react'

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    interestedIn: ''
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your form submission logic here
  }

  return (
    <section className="py-16 px-6 max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Join Now</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div>
          <select
            value={formData.interestedIn}
            onChange={(e) => setFormData({ ...formData, interestedIn: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          >
            <option value="">Select your interest</option>
            <option value="web3">Web3 Development</option>
            <option value="blockchain">Blockchain</option>
            <option value="defi">DeFi</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-[#0A0B1C] text-white py-2 rounded-md hover:bg-opacity-90 transition-colors"
        >
          Submit
        </button>
      </form>
    </section>
  )
}

