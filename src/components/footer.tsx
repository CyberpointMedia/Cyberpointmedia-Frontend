import React from "react";
import Image from "next/image";
import Link from "next/link";
import rightArrow from '@/assets/right-arrow.svg';

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#2C2D36] pt-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-between md:flex-row mb-10">
            <h2 className="text-4xl md:text-5xl text-white md:w-3/5 w-full aeonik-trial-font mb-6 md:mb-0">Get industry insights and creative inspiration straight to your inbox.</h2>
            <div className="">
                  <form className="">
                    <div className="relative max-w-md">
                      <input className="w-full rounded-full bg-[#3E3F49] p-4 pe-36 text-white" id="email" type="email" placeholder="Enter your email" />

                      <button className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-orange-600 px-4 md:px-8 py-3 text-xl font-medium text-white transition hover:bg-orange-700 focus:outline-none">
                        Subscribe
                      </button>
                    </div>
                  </form>
            </div>
          </div>
        </div>

        <hr className="border-[#3E3F49]" />

        <div className="container mx-auto px-6">
          <div className="pb-6 pt-16 lg:pt-24">
            <div className="mt-8 grid grid-cols-2 gap-32 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
              
              <div className="col-span-2 sm:col-span-1">
                <h5 className="text-white text-base">CyberPoint</h5>
              </div>

              <div className="col-span-2 sm:col-span-1">
                    <h5 className="text-[#848484] text-base aeonik-trial-font">Services</h5>

                    <ul className="mt-6 space-y-3">
                      <li>
                        <Link href="javascript:void(0);" className="text-white hover:text-orange-400 aeonik-trial-font">
                          Design & Engineering
                        </Link>
                      </li>
                      <li>
                        <Link href="javascript:void(0);" className="text-white hover:text-orange-400 aeonik-trial-font">
                          Cloud & DevOps
                        </Link>
                      </li>

                      <li>
                        <Link href="javascript:void(0);" className="text-white hover:text-orange-400 aeonik-trial-font">
                          Digital Marketing
                        </Link>
                      </li>
                    </ul>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <h5 className="text-[#848484] text-base aeonik-trial-font">Company</h5>

                  <ul className="mt-6 space-y-3">
                    <li>
                      <Link href="javascript:void(0);" className="text-white hover:text-orange-400 aeonik-trial-font">
                        Projects
                      </Link>
                    </li>

                    <li>
                      <Link href="javascript:void(0);" className="text-white hover:text-orange-400 aeonik-trial-font">
                      About Us
                      </Link>
                    </li>

                    <li>
                      <Link href="javascript:void(0);" className="text-white hover:text-orange-400 aeonik-trial-font">
                      Careers
                      </Link>
                    </li>

                    <li>
                      <Link href="javascript:void(0);" className="text-white hover:text-orange-400 aeonik-trial-font">
                      Blog
                      </Link>
                    </li>

                    <li>
                      <Link href="javascript:void(0);" className="text-white hover:text-orange-400 aeonik-trial-font">
                      Contact
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <h5 className="text-[#848484] text-base aeonik-trial-font">Offices</h5>
                  <div className="text-white font-normal space-y-3 mt-6">
                    <p className="aeonik-trial-font">United state</p>
                    <p className="aeonik-trial-font">447 Broadway, 2nd Floor Suite #1743, New York, New York 10013, </p>
                  </div>

                  <div className="text-white font-normal space-y-2 mt-4">
                    <p className="aeonik-trial-font">Chandigarh</p>
                    <p className="aeonik-trial-font">224, Level, SCO, 1, Sector 37 C, Chandigarh, 160036</p>
                  </div>

                  <div className="text-white font-normal space-y-2 mt-4">
                    <p className="aeonik-trial-font">Gurugram</p>
                    <p className="aeonik-trial-font">224, Level, SCO, 1, Sector 37 C, Chandigarh, 160036</p>
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <h5 className="text-[#848484] text-base aeonik-trial-font">Follow Us</h5>

                  <ul className="mt-6 space-y-3 social_links">
                    <li>
                      <Link href="javascript:void(0);" className="text-white hover:text-orange-400 aeonik-trial-font">
                      Facebook
                      </Link>
                    </li>

                    <li>
                      <Link href="javascript:void(0);" className="text-white hover:text-orange-400 aeonik-trial-font">
                      Linkedin
                      </Link>
                    </li>

                    <li>
                      <Link href="javascript:void(0);" className="text-white hover:text-orange-400 aeonik-trial-font">
                      Twitter
                      </Link>
                    </li>

                    <li>
                      <Link href="javascript:void(0);" className="text-white hover:text-orange-400 aeonik-trial-font">
                      Instagram
                      </Link>
                    </li>

                    <li>
                      <Link href="javascript:void(0);" className="text-white hover:text-orange-400 aeonik-trial-font">
                      Behance
                      </Link>
                    </li>

                    <li>
                      <Link href="javascript:void(0);" className="text-white hover:text-orange-400 aeonik-trial-font">
                      Dribbble
                      </Link>
                    </li>
                  </ul>
                </div>

              
            </div>
          </div>
        </div>

        <div className="mt-8 bg-[#3E3F49] py-4">
          <div className="container mx-auto px-6">
            <div className="sm:flex sm:justify-between">
              <p className="text-base text-white">© 2024 CyberPoint Media LLC | All Rights Reserved</p>

              <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
                <li>
                  <Link href="javascript:void(0);" className="text-white text-base hover:text-orange-400 aeonik-trial-font">
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link href="javascript:void(0);" className="text-white text-base hover:text-orange-400 aeonik-trial-font">
                    Terms & Condition
                  </Link>
                </li>

                <li>
                  <Link href="javascript:void(0);" className="text-white text-base hover:text-orange-400 aeonik-trial-font">
                    Cookies Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
      </div>
      </footer>
</div>
    
  );
};

export default Footer;