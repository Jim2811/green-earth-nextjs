'use client'
import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLeaf } from 'react-icons/fa'

export default function ContactPage() {
  return (
    <main className="bg-green-50 min-h-screen pt-16 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            Contact <span className="text-green-700">Green Earth</span>
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Have a question, idea, or just want to talk about trees? We’d love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white shadow-md rounded-lg p-8 border border-green-100">
            <h2 className="text-2xl font-semibold text-green-800 mb-6 flex items-center gap-2">
              <FaLeaf /> Get in Touch
            </h2>

            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-green-700 text-lg" />
                <span>+880 1234 567 890</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-green-700 text-lg" />
                <span>info@greenearth.com</span>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-green-700 text-lg" />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Our team is dedicated to growing a greener future. Send us your message through the form, 
              or connect via email for collaborations, volunteering, and eco‑campaign ideas.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-8 border border-green-100">
            <h2 className="text-2xl font-semibold text-green-800 mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-green-900 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-green-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-700 text-gray-800"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-green-900 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-green-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-700 text-gray-800"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-green-900 mb-1">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full border border-green-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-700 text-gray-800"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-700 text-white rounded-md py-3 font-semibold hover:bg-green-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
