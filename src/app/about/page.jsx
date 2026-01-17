'use client'
import React from 'react'
import Image from 'next/image'
import { FaLeaf, FaHandsHelping, FaGlobeAmericas } from 'react-icons/fa'

export default function AboutPage() {
  return (
    <main className="bg-green-50 min-h-screen">
      <section className="py-20 text-center bg-green-800 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Green Earth</h1>
          <p className="text-lg md:text-xl text-green-100">
            Together we plant, grow, and nurture a greener world.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 relative h-72 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/Images/about.png"
            alt="Planting illustration"
            fill
            className="object-cover"
            sizes="(max-width:768px)100vw, (max-width:1280px)50vw, 600px"
          />
        </div>

        <div className="w-full lg:w-1/2 text-gray-700">
          <h2 className="text-3xl font-bold text-green-900 mb-4">Our Mission</h2>
          <p className="mb-4 text-lg leading-relaxed">
            Green Earth started with a simple goal — making nature accessible for everyone. We believe each tree planted is an investment in a healthier future. Our platform lets you discover, buy and care for trees from the comfort of your home.
          </p>
          <p className="text-lg leading-relaxed">
            By connecting you directly with nurseries and eco enthusiasts, we encourage sustainable living and community‑driven reforestation.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-10">
            Our Core Values
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 rounded-lg border border-green-100 shadow-sm hover:shadow-md transition">
              <FaLeaf className="text-green-700 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600">
                We promote environmentally responsible plantation and eco‑friendly practices for every tree enthusiast.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-green-100 shadow-sm hover:shadow-md transition">
              <FaHandsHelping className="text-green-700 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                We bring people together through collective tree planting and environmental awareness campaigns.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-green-100 shadow-sm hover:shadow-md transition">
              <FaGlobeAmericas className="text-green-700 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
              <p className="text-gray-600">
                Every contribution adds up — helping to restore forests, combat climate change, and create a sustainable earth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-800 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join Our Green Mission Today
        </h2>
        <p className="mb-8 text-green-100 text-lg">
          Be a part of a community bringing real change to our planet!
        </p>
        <a
          href="/items"
          className="bg-white text-green-800 font-semibold px-8 py-3 rounded-md hover:bg-green-100 transition-colors inline-block"
        >
          Explore Trees
        </a>
      </section>
    </main>
  )
}
