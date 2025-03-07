"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-teal-600 text-white shadow-md z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image src="/mysite.jpg" alt="Logo" width={150} height={50} intrinsic="true" className="object-contain" priority />
          </Link>
        </div>

        {/* Desktop Navigation (Visible on MD and larger screens) */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/home" className="hover:underline font-medium">Home</Link>
          <Link href="/aboutus" className="hover:underline font-medium">About</Link>
          <Link href="/contact" className="hover:underline font-medium">Contact</Link>
        </nav>

        {/* Mobile Dropdown Menu (Visible on small screens) */}
        <div className="md:hidden relative">
          <button
            className="text-white focus:outline-none"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <FaBars size={24} />
          </button>

          {/* Dropdown Menu (Only on Mobile) */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-black shadow-lg rounded-lg overflow-hidden">
              <Link href="/home" className="block px-4 py-2 hover:bg-gray-200">
                Home
              </Link>
              <Link href="/aboutus" className="block px-4 py-2 hover:bg-gray-200">
                About
              </Link>
              <Link href="/contact" className="block px-4 py-2 hover:bg-gray-200">
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
