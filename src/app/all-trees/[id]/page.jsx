'use client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

export default function TreeDetailsPage() {
  const { id } = useParams()
  const [tree, setTree] = useState(null)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const loadTree = async ()=> {
        const res = await fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
        const data = await res.json()
        setTree(data.plants)
        setLoading(false)
    }
    if (id) loadTree()
  }, [id])

  if (loading) {
    return (
      <main className="flex justify-center items-center min-h-screen bg-green-50">
        <p className="text-gray-600 text-lg">Loading details...</p>
      </main>
    )
  }

  if (!tree) {
    return (
      <main className="flex flex-col justify-center items-center min-h-screen bg-green-50">
        <p className="text-gray-700 text-lg">Tree not found.</p>
        <Link
          href="/all-trees"
          className="mt-4 bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800"
        >
          Back to Trees
        </Link>
      </main>
    )
  }

  return (
    <main className="bg-green-50 min-h-screen py-16">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">
        <div className="relative w-full lg:w-1/2 h-72 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={tree.image || '/Images/default-tree.jpg'}
            alt={tree.name}
            fill
            className="object-cover"
            sizes="(max-width:768px)100vw, (max-width:1280px)50vw, 600px"
            priority
          />
        </div>

        <div className="w-full lg:w-1/2 text-gray-800">
          <h1 className="text-4xl font-bold text-green-900 mb-4">{tree.name}</h1>
          <p className="text-green-700 text-xl font-semibold mb-6">
            Price: {tree.price ? `৳ ${tree.price}` : 'Not available'}
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            {tree.description ||
              'This plant adds natural beauty and freshness to your surroundings.'}
          </p>

          <ul className="text-gray-700 space-y-2 mb-8">
            <li>
              <span className="font-semibold">Scientific Name:</span>{' '}
              {tree.scientificName || 'Not specified'}
            </li>
            <li>
              <span className="font-semibold">Category:</span>{' '}
              {tree.category || 'General'}
            </li>
            <li>
              <span className="font-semibold">Sunlight:</span>{' '}
              {tree.sunlight || 'Moderate'}
            </li>
            <li>
              <span className="font-semibold">Watering:</span>{' '}
              {tree.watering || 'Regular'}
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-green-700 hover:bg-green-800 text-white px-7 py-3 rounded-md font-semibold transition">
              Add to Cart
            </button>
            <Link
              href="/all-trees"
              className="border border-green-700 text-green-700 px-7 py-3 rounded-md font-semibold hover:bg-green-100 transition text-center"
            >
              Back to All Trees
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
