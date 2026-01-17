'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function TreeCard({ tree }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <div className="relative w-full h-56">
        <Image
          src={tree.image}
          alt={tree.name}
          fill
          className="object-cover"
          sizes="(max-width:768px)100vw, (max-width:1280px)33vw, 400px"
        />
      </div>

      <div className="p-5 text-center flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-green-800">{tree.name}</h3>
          <p className="mt-2 font-bold text-green-700">$ {tree.price}</p>
        </div>
        <Link
          href={`/all-trees/${tree.id}`}
          className="mt-4 inline-block bg-green-700 text-white px-5 py-2 rounded-md hover:bg-green-800 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}