'use client'
import React from 'react'
import Image from 'next/image'

const trees = [
  {
    id: 1,
    title: 'Mango Tree',
    price: '৳ 750',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS_7yakVKwM_w6zHNQi7MSvb_ocf9vGPv6Hg&s',
    description: 'Healthy mango sapling ready for plantation. Perfect for warm climates.',
  },
  {
    id: 2,
    title: 'Neem Tree',
    price: '৳ 550',
    image: 'https://images.echocommunity.org/bd6ad96c-5fd8-4597-a62e-18cfd9a1d34d/neem_1.png?w=200',
    description: 'Natural air purifier, easy to grow and long-lasting shade tree.',
  },
  {
    id: 3,
    title: 'Guava Tree',
    price: '৳ 600',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL7myV3B5ZCJHizQOLenqWHWFG5_tB2p-7HQ&s',
    description: 'Fast-growing fruit tree producing delicious guavas all season.',
  },
]

export default function FeaturedTrees() {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-green-900">
          Featured <span className="text-green-700">Trees</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {trees.map((tree) => (
            <div
              key={tree.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative w-full h-56">
                <Image
                  src={tree.image}
                  alt={tree.title}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px)100vw, (max-width:1280px)33vw, 400px"
                />
              </div>

              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-green-800">{tree.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{tree.description}</p>
                <p className="mt-4 font-bold text-green-700">{tree.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}