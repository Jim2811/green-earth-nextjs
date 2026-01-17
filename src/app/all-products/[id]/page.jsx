"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function SingleProductPage() {
  const [product, setProduct] = useState(null);

  const { id } = useParams();
 useEffect(()=>{
  //  const fetchProduct = fetch(`/api/posts/${id}`).then((res) => res.json())
  const fetchProduct = async ()=>{
     const fetchProduct = await fetch(`/api/posts/${id}`).then((res) => res.json())
     setProduct(fetchProduct)
  }
 })
    return (
      <section className="min-h-screen bg-base-200 py-12 px-6 flex justify-center items-center">
        <div className="max-w-6xl bg-base-100 rounded-2xl shadow-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-10 border border-base-300">
          <div className="flex justify-center items-center">
            <Image
              src={product?.thumbnailUrl}
              alt={product?.title}
              className="w-full h-auto max-h-[500px] rounded-xl object-cover shadow-md hover:scale-[1.02] transition-transform duration-300"
            />
          </div>

          <div className="flex flex-col justify-between space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3">
                {product?.title}
              </h1>
              <p className="text-gray-600 text-sm uppercase tracking-wide">
                {product?.category}
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                {product?.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-extrabold text-primary">
                  ${product?.price || 0}
                </h2>
                <p className="text-sm mt-1 text-success">
                  Published: {product?.date}
                </p>
              </div>
              <div className="flex gap-3">
                <button className="btn btn-primary px-8">Add to Cart</button>
                <button className="btn btn-outline btn-secondary px-8">
                  Buy Now
                </button>
              </div>
            </div>
            <p className="text-xs text-gray-500 border-t pt-4">
              🚚 Free shipping on orders over $100 | 💳 Secure Payment
            </p>
          </div>
        </div>
      </section>
    );
}
