import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";
import LoginBtn from "./buttons/LoginBtn";

const Navbar = () => {
  return (
    <div className="navbar bg-green-900 text-white shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-green-800 text-white rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <NavLinks />
          </ul>
        </div>

        <Link
          href="/"
          className="btn btn-ghost normal-case text-2xl font-bold tracking-wide text-white"
        >
          Green Earth
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">
          <NavLinks />
        </ul>
      </div>

      <div className="navbar-end">
        <LoginBtn />
      </div>
    </div>
  );
};

export default Navbar;
