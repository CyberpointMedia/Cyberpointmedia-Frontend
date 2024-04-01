import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DropIcon from '@/assets/drop-arrow.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-6">
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
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
                <Link href="/" className="text-black font-medium text-base hover:text-orange-400 mr-8">
                Services <Image src={DropIcon} alt='#' className='inline-block ms-2' />
                </Link>
                <Link href="/" className="text-black font-medium text-base hover:text-orange-400 mr-8">
                Case Studies
                </Link>
                <Link href="/" className="text-black font-medium text-base hover:text-orange-400 mr-8">
                About
                </Link>
                <Link href="/" className="text-black font-medium text-base hover:text-orange-400 mr-4">
                Career
                </Link>
                <Link href="/" className="text-black font-medium text-base hover:text-orange-400 mr-8">
                Blog
                </Link>
            </div>
            <div>
                <Link href="/" className="text-black font-medium text-base hover:text-orange-400 mr-8 relative">
                EN<span className='ms-3 border-b border-[#000] inline-block'>FR</span>
                <span className='v-border'></span>
                </Link>
                <Link href="/" className="text-black font-medium text-base hover:text-orange-400 mr-8">
                Contact
                </Link>
            </div>
        </div>

        </div>

      {isOpen && (
        <div className="lg:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link href="/" className="block mt-4 font-medium text-base text-black hover:text-orange-400">
                    Home
                </Link>
                <Link href="/" className="block mt-4 font-medium text-base text-black hover:text-orange-400">
                    About
                </Link>
                <Link href="/" className="block mt-4 font-medium text-base text-black hover:text-orange-400">
                    Service
                </Link>
                <Link href="/" className="block mt-4 font-medium text-base text-black hover:text-orange-400">
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
