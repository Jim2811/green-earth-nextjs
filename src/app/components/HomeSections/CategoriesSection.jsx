'use client'
import React from 'react'
import { GiPineTree, GiFruitTree, GiBonsaiTree } from 'react-icons/gi'
import { FaLeaf, FaSeedling, FaTree } from 'react-icons/fa'

const categories = [
  { name: 'Fruity Trees', icon: <GiFruitTree className="text-green-700 text-4xl" /> },
  { name: 'Flowering Trees', icon: <FaLeaf className="text-green-700 text-4xl" /> },
  { name: 'Shade Trees', icon: <FaTree className="text-green-700 text-4xl" /> },
  { name: 'Indoor Plants', icon: <FaSeedling className="text-green-700 text-4xl" /> },
  { name: 'Bonsai', icon: <GiBonsaiTree className="text-green-700 text-4xl" /> },
  { name: 'Evergreen', icon: <GiPineTree className="text-green-700 text-4xl" /> },
]

export default function CategoriesSection() {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-green-900">
          Explore <span className="text-green-700">Tree Categories</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all cursor-pointer flex flex-col items-center"
            >
              {cat.icon}
              <h3 className="text-base font-semibold text-green-800 mt-3">{cat.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}