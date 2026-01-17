'use client'
import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Rahim Uddin',
    message: 'Buying trees from Green Earth was super easy and satisfying.',
  },
  {
    name: 'Sadik Islam',
    message:
      'Their collection is beautiful, and delivery was right on time. Excellent service!',
  },
  {
    name: 'Tanvir Rahman',
    message:
      'I love how Green Earth encourages people to plant more trees every season.',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-green-900">
          What <span className="text-green-700">Customers Say</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="avatar mb-4 mx-auto">
                <div className="w-24 h-24 rounded-full ring ring-green-700 ring-offset-green-50 ring-offset-2 flex items-center justify-center bg-green-100">
                  <FaUserCircle className="text-green-600 text-6xl" />
                </div>
              </div>

              <p className="text-gray-700 italic mb-3">“{t.message}”</p>
              <h3 className="font-semibold text-green-900">{t.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}