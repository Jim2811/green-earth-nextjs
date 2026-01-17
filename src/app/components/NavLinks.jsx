import Link from "next/link";
import React from "react";

const NavLinks = () => {
  return (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/all-trees">All Trees</Link>
      </li>
      <li>
        <Link href="/login">Login</Link>
      </li>
    </>
  );
};

export default NavLinks;