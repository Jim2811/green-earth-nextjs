'use client'
import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaTwitter, FaLeaf } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-green-900 text-green-100 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <FaLeaf className="text-2xl text-green-400" />
            <h2 className="text-2xl font-bold">Green Earth</h2>
          </div>
          <p className="text-sm text-green-200 leading-relaxed">
            Promoting sustainability and greenery by making tree planting simple,
            accessible and rewarding for everyone.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-green-100">Quick Links</h3>
          <ul className="space-y-2 text-green-200">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/items" className="hover:text-white">All Trees</Link></li>
            <li><Link href="/login" className="hover:text-white">Login</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-green-100">Contact Us</h3>
          <ul className="text-green-200 text-sm space-y-1">
            <li>Email: info@greenearth.com</li>
            <li>Phone: +880 1234 567 890</li>
            <li>Address: Dhaka, Bangladesh</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-green-100">Follow Us</h3>
          <div className="flex gap-4 text-green-300 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram" className="hover:text-white"><FaInstagram /></a>
            <a href="#" aria-label="Twitter" className="hover:text-white"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-green-800 pt-4 text-center text-green-300 text-sm">
        <p>© {new Date().getFullYear()} Green Earth. All rights reserved.</p>
      </div>
    </footer>
  )
}
