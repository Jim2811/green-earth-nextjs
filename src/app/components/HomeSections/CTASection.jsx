'use client'
import React from 'react'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-900">
          Ready to <span className="text-green-700">Grow with Green Earth?</span>
        </h2>

        <p className="text-gray-700 text-lg mb-8">
          Join our initiative to make the world greener. Explore healthy trees,
          plant more, and take a step toward a better planet.
        </p>

        <Link
          href="/login"
          className="bg-green-700 text-white font-semibold text-lg px-8 py-3 rounded-md hover:bg-green-800 transition-colors inline-block"
        >
          Get Started
        </Link>
      </div>
    </section>
  )
}