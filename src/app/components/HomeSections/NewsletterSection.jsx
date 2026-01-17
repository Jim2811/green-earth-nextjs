'use client'
import React from 'react'

export default function NewsletterSection() {
  return (
    <section className="py-16 bg-green-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stay Connected with Green Earth
        </h2>

        <p className="mb-6 text-base md:text-lg text-green-100">
          Subscribe to get new tree arrivals, gardening tips, and special offers
          directly to your inbox.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-amber-50 sm:flex-grow rounded-md px-4 text-black placeholder-gray-500 h-12"
          />
          <button
            type="submit"
            className="bg-white text-green-800 font-semibold rounded-md px-6 h-12 cursor-pointer hover:bg-green-100 transition-colors w-full sm:w-auto"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  )
}