"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full bg-white border-b border-gray-200">
      {/* Navbar container */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-20 lg:gap-4 xl:px-40 flex justify-between items-center h-[80px]">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-[#0d0e43]">Hekto</h1>
        </div>

        {/* Links */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link
            href="/"
            className="text-base font-medium text-[#0d0e43] hover:text-[#FB2E86] relative group"
          >
            Home
            <span className="absolute right-[-10px] top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100">
              <Image
                src="/images/arrowVector.png"
                alt="arrow"
                width={16}
                height={16}
              />
            </span>
          </Link>
          <div className="relative group">
            <Link
              href="/shopList"
              className="text-base font-medium text-[#0d0e43] hover:text-[#FB2E86]"
            >
              Pages
            </Link>
            {/* Dropdown Menu */}
            <div className="absolute left-0 mt-2 hidden w-48 bg-white shadow-lg group-hover:block z-50">
              <ul className="text-sm text-[#0d0e43]">
                <li className="hover:bg-gray-100">
                  <Link href="/about" className="block px-4 py-2">
                    About Us
                  </Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link href="/faqs" className="block px-4 py-2">
                    FAQs
                  </Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link href="/demo" className="block px-4 py-2">
                    Hekto Demo
                  </Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link href="/shopLeft" className="block px-4 py-2">
                    Shop Left Side Bar
                  </Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link href="/orderComplete" className="block px-4 py-2">
                    Order Completed
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Link
            href="/products"
            className="text-base font-medium text-[#0d0e43] hover:text-[#FB2E86] relative group"
          >
            Products
          </Link>
          <Link
            href="/blog"
            className="text-base font-medium text-[#0d0e43] hover:text-[#FB2E86] relative group"
          >
            Blog
          </Link>
          <Link
            href="/shopGridDefault"
            className="text-base font-medium text-[#0d0e43] hover:text-[#FB2E86] relative group"
          >
            Shop
          </Link>
          <Link
            href="/contact"
            className="text-base font-medium text-[#0d0e43] hover:text-[#FB2E86] relative group"
          >
            Contact
          </Link>
        </div>

        {/* Search bar */}
        <div className="hidden lg:flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search"
            className="w-[300px] h-[40px] px-4 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#FB2E86]"
          />
          <button className="w-[40px] h-[40px] bg-[#FB2E86] rounded-md flex justify-center items-center">
            <Image
              src="/images/searchVector.png"
              alt="search"
              width={20}
              height={20}
            />
          </button>
        </div>

        {/* Hamburger Menu for mobile */}
        <div className="lg:hidden flex items-center">
          <button onClick={handleToggleMenu}>
            <Image
              src="/images/HamburgerIcon.png"
              alt="hamburger"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu (toggled) */}
      <div
        className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} bg-white p-4`}
      >
        <Link
          href="/"
          className="block py-2 text-base font-medium text-[#0d0e43] hover:text-[#FB2E86] relative"
        >
          Home
        </Link>
        <div className="relative group">
          <Link
            href="/shopList"
            className="text-base font-medium text-[#0d0e43] hover:text-[#FB2E86]"
          >
            Pages
          </Link>
          {/* Dropdown Menu */}
          <div className="absolute left-0 mt-2 hidden w-48 bg-white shadow-lg group-hover:block z-50">
            <ul className="text-sm text-[#0d0e43]">
              <li className="hover:bg-gray-100">
                <Link href="/about" className="block px-4 py-2">
                  About Us
                </Link>
              </li>
              <li className="hover:bg-gray-100">
                <Link href="/faqs" className="block px-4 py-2">
                  FAQs
                </Link>
              </li>
              <li className="hover:bg-gray-100">
                <Link href="/demo" className="block px-4 py-2">
                  Hekto Demo
                </Link>
              </li>
              <li className="hover:bg-gray-100">
                <Link href="/shopLeft" className="block px-4 py-2">
                  Shop Left Side Bar
                </Link>
              </li>
              <li className="hover:bg-gray-100">
                <Link href="/orderComplete" className="block px-4 py-2">
                  Order Completed
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Link
          href="/products"
          className="block py-2 text-base font-medium text-[#0d0e43] hover:text-[#FB2E86] relative"
        >
          Products
        </Link>
        <Link
          href="/blog"
          className="block py-2 text-base font-medium text-[#0d0e43] hover:text-[#FB2E86] relative"
        >
          Blog
        </Link>
        <Link
          href="/shopGridDefault"
          className="block py-2 text-base font-medium text-[#0d0e43] hover:text-[#FB2E86] relative"
        >
          Shop
        </Link>
        <Link
          href="/contact"
          className="block py-2 text-base font-medium text-[#0d0e43] hover:text-[#FB2E86] relative"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
