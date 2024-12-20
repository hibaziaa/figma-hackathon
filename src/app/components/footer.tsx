import React from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { RxInstagramLogo } from 'react-icons/rx';
import { FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="text-[#8A8FB9] font-lato bg-[#EEEFFB]">
      <div className="container pt-12 mx-auto ">
        <div className="flex flex-wrap items-start justify-around md:text-left text-center order-first">
          {/* Hekto Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-8 mb-8">
            <h2 className="font-josefin font-bold text-black tracking-widest text-lg mb-4">
              Hekto
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start mb-4">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <input
                  type="text"
                  id="footer-field"
                  placeholder="Enter Email Address"
                  name="footer-field"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-xs outline-none text-[#8A8FB9] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-[#FB2E86] border-0 py-2 px-6 focus:outline-none hover:bg-[#d1236e] rounded">
                Sign-Up
              </button>
            </div>
            <p className="text-[#8A8FB9] text-sm">
              Contact Info
              <br className="lg:block hidden" />
              17 Princess Road, London, Greater London NW1 8JR, UK
            </p>
          </div>

          {/* Categories Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8">
            <h2 className="title-font font-bold text-black tracking-widest text-lg mb-4">
              CATEGORIES
            </h2>
            <nav className="list-none">
              {['Laptops & Computers', 'Cameras & Photography', 'Smart Phones & Tablets', 'Video Games & Consoles', 'Waterproof Headphones'].map((item, index) => (
                <li key={index} className="mb-2">
                  <a href="#" className="text-[#8A8FB9] hover:text-gray-800 cursor-pointer">
                    {item}
                  </a>
                </li>
              ))}
            </nav>
          </div>

          {/* Customer Care Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8">
            <h2 className="title-font font-bold text-black tracking-widest text-lg mb-4">
              Customer Care
            </h2>
            <nav className="list-none">
              {['My Account', 'Discount', 'Returns', 'Orders History', 'Order Tracking'].map((item, index) => (
                <li key={index} className="mb-2">
                  <a href="#" className="text-[#8A8FB9] hover:text-gray-800 cursor-pointer">
                    {item}
                  </a>
                </li>
              ))}
            </nav>
          </div>

          {/* Pages Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8">
            <h2 className="title-font font-bold text-black tracking-widest text-lg mb-4">
              Pages
            </h2>
            <nav className="list-none">
              {['Blog', 'Browse the Shop', 'Category', 'Pre-Built Pages', 'Visual Composer Elements', 'WooCommerce Pages'].map((item, index) => (
                <li key={index} className="mb-2">
                  <a href="#" className="text-[#8A8FB9] hover:text-gray-800 cursor-pointer">
                    {item}
                  </a>
                </li>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-[#E7E4F8]">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <p className="text-sm text-[#8A8FB9] sm:ml-6 sm:mt-0 mt-4">
            © 2024 Hekto —
            <a
              href="https://twitter.com/knyttnev"
              rel="noopener noreferrer"
              className="text-[#8A8FB9] ml-1"
              target="_blank"
            >
              @Right Reserved
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start space-x-4">
            <a href="#" className="text-gray-900 text-3xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-900 text-3xl">
              <RxInstagramLogo />
            </a>
            <a href="#" className="text-gray-900 text-3xl">
              <FaLinkedin />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
