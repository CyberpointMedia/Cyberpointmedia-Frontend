import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`bg-white p-6 ${isOpen ? 'mobile-menu-open' : ''}`}>
        <div className='bg-[#FF561D] absolute top-0 right-0 left-0 w-full h-2'></div>
        <div className="flex lg:items-center justify-between flex-wrap flex-col lg:flex-row">
            <div className="flex items-center justify-between text-black lg:mr-32">
                <Link href="/" className="">
                    <span className="font-semibold text-xl tracking-tight">CyberPoint</span>
                </Link>
                <div className="-mr-2 flex lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-[#FF561D] inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none MenuToggle"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
        </div>
            </div>

        


        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block text-center">
            <div className="text-sm lg:flex-grow">
                <Link href="/services" className="text-black font-medium text-base hover:text-orange-400 mr-8 pr-8 relative">
                Services
                <span className='absolute top-0 right-0'>
                  <svg className='block' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.333 7.80717L8.68952 7.80717L8.68952 2L7.14018 2L7.14018 7.80717L2.49368 7.80717L2.49368 9.35272L4.04227 9.35272L4.04227 10.9021L5.5916 10.9021L5.5916 12.4506L7.14018 12.4514L7.14018 14L8.68952 14L8.68952 12.4514L10.2373 12.4514L10.2381 10.9028C10.7554 10.9029 11.2702 10.902 11.7875 10.902L11.7875 9.35269L13.333 9.35269L13.333 7.80717Z" fill="#2E2F30"/>
                  </svg>
                </span>
                </Link>
                <Link href="/" className="text-black font-medium text-base hover:text-orange-400 mr-4 relative pr-8">
                Case Studies
                </Link>
                <Link href="/about" className="text-black font-medium text-base hover:text-orange-400 mr-4 relative pr-8">
                About
                </Link>
                <Link href="/" className="text-black font-medium text-base hover:text-orange-400 mr-4 relative pr-8">
                Career
                </Link>
                <Link href="/" className="text-black font-medium text-base hover:text-orange-400 mr-4 relative pr-8">
                Blog
                </Link>
            </div>
            <div>
                <Link href="/" className="text-black font-medium text-base hover:text-orange-400 mr-3 relative border-b border-transparent hover:border-orange-400 pb-1">
                EN
                </Link>
                <Link href="/" className="text-black font-medium text-base hover:text-orange-400 mr-8 relative border-b border-[#000] hover:border-orange-400 pb-1">
                FR
                <span className='v-border'></span>
                </Link>
                <Link href="/contact" className="text-black font-medium text-base hover:text-orange-400 mr-8">
                Contact
                </Link>
            </div>
        </div>

        </div>

      {isOpen && (
        <div className="lg:hidden transition-all" id="mobile-menu">
          <div className="px-4 pt-2 pb-3 sm:px-3 h-full mt-12">
                <Link href="/" className="block font-medium text-base text-white hover:text-orange-400 px-2 py-4 border-white border-b">
                    Home
                </Link>
                <Link href="/about" className="block font-medium text-base text-white hover:text-orange-400 py-4 px-2 border-white border-b">
                    About
                </Link>
                <Link href="/" className="block font-medium text-base text-white hover:text-orange-400 py-4 px-2 border-white border-b">
                    Service
                </Link>
                <Link href="/contact" className="block font-medium text-base text-white hover:text-orange-400 py-4 px-2 border-white border-b">
                    Contact
                </Link>
            {/* Add more links as needed */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
