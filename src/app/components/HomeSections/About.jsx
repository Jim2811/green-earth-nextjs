"use client";
import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-14 mx-auto max-w-7xl bg-green-50">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-green-800">Green Earth</span>
          </h2>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
            Green Earth is a simple online platform that encourages tree
            plantation and eco-friendly living. Here you can explore a variety
            of trees to buy, plant and grow — each tree helping our planet
            breathe a little better.
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Built with modern Next.js technology, Green Earth offers a fast,
            clean, and responsive experience for every nature lover who cares
            about sustainability and growth.
          </p>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-64 sm:w-80 md:w-[400px] lg:w-[500px]">
            <Image
              src="/Images/about.png" 
              alt="About Green Earth"
              width={500}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
