import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/AnimationVariants";
import Image from "next/image";
import Link from "next/link";
import rightArrow from '@/assets/right-arrow.svg';

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#2C2D36] pt-20">
        <div className="container 3xl:container mx-auto">
          <motion.div 
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: true, amount: 0.1}}
          className="flex flex-col items-center justify-between md:flex-row mb-10 gap-4">
            <h2 className="text-4xl md:text-5xl text-white md:w-3/5 w-full font-aeonik mb-6 md:mb-0">Get industry insights and creative inspiration straight to your inbox.</h2>
            <div className="md:w-2/5 w-full">
                  <form className="">
                    <div className="relative max-w-md">
                      <input className="w-full rounded-full bg-[#3E3F49] p-4 xl:pe-36 md:pe-44 sm:pe-36 text-white" id="email" type="email" placeholder="Enter your email" />

                      <button className="sm:absolute sm:end-1 sm:top-1/2 sm:-translate-y-1/2 rounded-full bg-orange-600 px-4 md:px-8 py-3 text-xl font-medium text-white transition hover:bg-orange-700 focus:outline-none mt-5 sm:mt-0 w-full sm:w-auto">
                        Subscribe
                      </button>
                    </div>
                  </form>
            </div>
          </motion.div>
        </div>

        <hr className="border-[#3E3F49]" />

        <div className="container 3xl:container mx-auto">
          <div className="pb-6 pt-16 lg:pt-24">
            <div className="mt-8 grid grid-cols-2 xl:gap-32 md:gap-16 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
              
              <div className="col-span-2 sm:col-span-1">
                <h5 className="text-white text-base">CyberPoint</h5>
              </div>

              <div className="col-span-2 sm:col-span-1">
                    <h5 className="text-[#848484] text-base font-aeonik">Services</h5>

                    <ul className="mt-6 space-y-3">
                      <li>
                        <Link href="javascript:void(0);" className="text-white hover:text-orange-400 font-aeonik">
                          Design & Engineering
                        </Link>
                      </li>
                      <li>
                        <Link href="javascript:void(0);" className="text-white hover:text-orange-400 font-aeonik">
                          Cloud & DevOps
                        </Link>
                      </li>

                      <li>
                        <Link href="javascript:void(0);" className="text-white hover:text-orange-400 font-aeonik">
                          Digital Marketing
                        </Link>
                      </li>
                    </ul>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <h5 className="text-[#848484] text-base font-aeonik">Company</h5>

                  <ul className="mt-6 space-y-3">
                    <li>
                      <Link href="javascript:void(0);" className="text-white hover:text-orange-400 font-aeonik">
                        Projects
                      </Link>
                    </li>

                    <li>
                      <Link href="javascript:void(0);" className="text-white hover:text-orange-400 font-aeonik">
                      About Us
                      </Link>
                    </li>

                    <li>
                      <Link href="javascript:void(0);" className="text-white hover:text-orange-400 font-aeonik">
                      Careers
                      </Link>
                    </li>

                    <li>
                      <Link href="javascript:void(0);" className="text-white hover:text-orange-400 font-aeonik">
                      Blog
                      </Link>
                    </li>

                    <li>
                      <Link href="javascript:void(0);" className="text-white hover:text-orange-400 font-aeonik">
                      Contact
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <h5 className="text-[#848484] text-base font-aeonik">Offices</h5>
                  <div className="text-white font-normal space-y-3 mt-6">
                    <p className="font-aeonik">United state</p>
                    <p className="font-aeonik">447 Broadway, 2nd Floor Suite #1743, New York, New York 10013, </p>
                  </div>

                  <div className="text-white font-normal space-y-2 mt-4">
                    <p className="font-aeonik">Chandigarh</p>
                    <p className="font-aeonik">224, Level, SCO, 1, Sector 37 C, Chandigarh, 160036</p>
                  </div>

                  <div className="text-white font-normal space-y-2 mt-4">
                    <p className="font-aeonik">Gurugram</p>
                    <p className="font-aeonik">224, Level, SCO, 1, Sector 37 C, Chandigarh, 160036</p>
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <h5 className="text-[#848484] text-base font-aeonik">Follow Us</h5>

                  <ul className="mt-6 space-y-3 social_links">
                    <li>
                      <Link href="javascript:void(0);" className="text-white hover:text-orange-400 font-aeonik">
                      Facebook
                      </Link>
                    </li>

                    <li>
                      <Link href="javascript:void(0);" className="text-white hover:text-orange-400 font-aeonik">
                      Linkedin
                      </Link>
                    </li>

                    <li>
                      <Link href="javascript:void(0);" className="text-white hover:text-orange-400 font-aeonik">
                      Twitter
                      </Link>
                    </li>

                    <li>
                      <Link href="javascript:void(0);" className="text-white hover:text-orange-400 font-aeonik">
                      Instagram
                      </Link>
                    </li>

                    <li>
                      <Link href="javascript:void(0);" className="text-white hover:text-orange-400 font-aeonik">
                      Behance
                      </Link>
                    </li>

                    <li>
                      <Link href="javascript:void(0);" className="text-white hover:text-orange-400 font-aeonik">
                      Dribbble
                      </Link>
                    </li>
                  </ul>
                </div>

              
            </div>
          </div>
        </div>

        <div className="mt-8 bg-[#3E3F49] py-4">
          <div className="container 3xl:container mx-auto">
            <div className="sm:flex sm:justify-between">
              <p className="text-base text-white">© 2024 CyberPoint Media LLC | All Rights Reserved</p>

              <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end bootm-footer">
                <li>
                  <Link href="javascript:void(0);" className="text-white text-base hover:text-orange-400 font-aeonik">
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link href="javascript:void(0);" className="text-white text-base hover:text-orange-400 font-aeonik">
                    Terms & Condition
                  </Link>
                </li>

                <li>
                  <Link href="javascript:void(0);" className="text-white text-base hover:text-orange-400 font-aeonik">
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