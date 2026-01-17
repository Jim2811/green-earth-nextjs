"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/api/posts")
      .then((r) => r.json())
      .then((d) => {
        setProducts(d);
      });
  }, []);
  console.log(products);

  return (
    <section className="min-h-screen bg-base-200 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-primary mb-3">
            Our Products
          </h1>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
            Explore our collection of the latest gadgets and accessories. High
            quality, best value, and designed for your lifestyle.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((p) => (
            <div
              key={p._id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300 border border-base-300"
            >
              <figure className="aspect-video overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </figure>
              <div className="card-body p-4 flex flex-col justify-between">
                <div>
                  <h2 className="card-title text-lg font-bold line-clamp-1">
                    {p.title}
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">
                    {p.description.length > 50
                      ? p.description.substring(0, 50) + "..."
                      : p.description}
                  </p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-primary font-bold text-lg">
                    ${p.price}
                  </span>
                  <Link href={`all-products/${p._id}`} className="btn btn-sm btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
