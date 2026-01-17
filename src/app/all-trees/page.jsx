'use client'
import React, { useEffect, useState } from 'react'
import TreeCard from '../components/TreeCard/TreeCard'

export default function AllTrees() {
  const [trees, setTrees] = useState([])

  useEffect(() => {
    const loadTrees = async ()=> {
        const res = await fetch('https://openapi.programming-hero.com/api/plants')
        const data = await res.json()
        const plantList = data.plants
        setTrees(plantList)
    }
    loadTrees()
  }, [])

  return (
    <main className="bg-green-50 min-h-screen py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-green-900">
          All Available Trees
        </h1>

        {trees.length === 0 ? (
          <p className="text-center text-gray-600">Loading trees...</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {trees.map((tree) => (
              <TreeCard
                key={tree.id || tree._id}
                tree={{
                  name: tree.name,
                  price: tree.price || '৳ —',
                  image: tree.image,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
