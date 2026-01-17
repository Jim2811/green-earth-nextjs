'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="hero min-h-[70vh] bg-green-50">
      <div className="hero-content flex flex-col-reverse lg:flex-row-reverse items-center gap-10 lg:gap-20 text-center lg:text-left">
        <div className="w-full sm:w-3/4 md:w-2/4 flex justify-center">
          <div className="relative w-64 sm:w-80 md:w-full max-w-sm rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://static.vecteezy.com/system/resources/thumbnails/069/715/156/small/lush-green-tree-serene-landscape-image-2023-photo.jpg"
              alt="Planting a tree banner"
              width={500}
              height={400}
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-green-900">
            Plant Trees, Grow Happiness
          </h1>

          <p className="py-4 text-sm sm:text-base md:text-lg text-gray-700">
            Green Earth helps you choose beautiful and healthy trees to plant.  
            Join us in making the planet greener and healthier for everyone.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 mt-4">
            <Link
              href="/items"
              className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-md w-full sm:w-auto transition-colors"
            >
              Explore Trees
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}