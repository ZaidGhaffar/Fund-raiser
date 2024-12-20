import React from 'react'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { OpportunitiesSection } from './components/OpportunitiesSection'
// import { Statistics } from './components/Statistics'
import { Challenges } from './components/Challenges'
import { ContactForm } from './components/ContactForm'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <OpportunitiesSection />
        <div className="container px-4">
          {/* <Statistics /> */}
          <Challenges />
        </div>
        <ContactForm />
      </main>
    </div>
  )
}

export default App

