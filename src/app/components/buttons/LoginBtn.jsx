'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const LoginBtn = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const isLoggedIn = document.cookie.includes('loggedIn=true')
    setLoggedIn(isLoggedIn)
  }, [])

  const handleLogout = () => {
    document.cookie =
      'loggedIn=false; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;'
    setLoggedIn(false)
    window.location.reload()
  }

  return (
    <div>
      {loggedIn ? (
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-md transition-colors duration-300"
        >
          Logout
        </button>
      ) : (
        <Link
          href="/login"
          className="bg-green-700 hover:bg-green-800 text-white font-semibold px-5 py-2 rounded-md transition-colors duration-300"
        >
          Login
        </Link>
      )}
    </div>
  )
}

export default LoginBtn