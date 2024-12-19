import React, { FormEvent, useState } from 'react'
import emailjs from '@emailjs/browser'

interface FormData {
  name: string
  phoneNumber: string
  interestedIn: string
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phoneNumber: '',
    interestedIn: ''
  })
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({
    type: null,
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const templateParams = {
        to_email: 'zaidghaffar.business@gmail.com', // Replace with your email
        from_name: formData.name,
        phone_number: formData.phoneNumber,
        interested_in: formData.interestedIn,
      }

      await emailjs.send(
        'service_a1p7xjz', // Replace with your EmailJS service ID
        'template_acowqw9', // Replace with your EmailJS template ID
        templateParams,
        'R9ZW9yL7ykNOmY-8K' // Replace with your EmailJS public key
      )

      setStatus({
        type: 'success',
        message: 'Thank you for your submission! We will contact you soon.'
      })
      setFormData({ name: '', phoneNumber: '', interestedIn: '' })
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.'
      })
    } finally {
      setIsSubmitting(false)
    }
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
          disabled={isSubmitting}
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
        {status.type && (
          <div
            className={`p-4 rounded-md ${
              status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
            }`}
          >
            {status.message}
          </div>
        )}
      </form>
    </section>
  )
}

