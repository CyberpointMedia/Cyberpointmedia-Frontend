
import React from 'react';
import Header from '../header';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from "@/components/AnimationVariants";
import Image from 'next/image';
import DesignEngineeringImg from '@/assets/design-and-engineering-services.jpg';
import FAQAccordion from "@/components/FaqAccordion";
import Footer from "@/pages/footer";
import LogoBrands from '@/components/LogoBrands';
import DragSlider from '@/components/DragSlider';

export default function Index() {

    return <div>
      <Header></Header>

    {/* Services start */}
    <section className="bg-white py-16 xl:h-screen flex items-center">
        <div className="container 3xl:container mx-auto">
            <motion.div 
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: true, amount: 0.1}}
                className="md:w-3/4 3xl:w-[63%] w-full">
                <div className="subtitle mb-4 flex items-center"><span className="bg-[#FF561D] w-2 h-2 inline-block mr-2"></span>Services</div>
                <h2 className="text-4xl 3xl:text-[76px] xl:text-[60px] lg:text-[48px] md:text-[30px] md:leading-[32px] text-black font-aeonik 3xl:leading-[86px] xl:leading-[70px] lg:leading-[60px] mb-[30px] leading-[42px]">Design and Engineering <br className='hidden md:block' />
Services Tailored to Your Needs.</h2>
                <p className="mb-6 text-[22px]">
                Unlock your business's full potential with our design and engineering solutions for eCommerce, web<br className='hidden md:block'/> and mobile applications, and more.
                </p>
                <a href="javasript:void(0);" className="uppercase rounded-full py-[10px] px-5 border border-[#2E2F30] hover:bg-[#FF561D] hover:border-[#FF561D] hover:text-white inline-block transition duration-500 mt-3">Let's Talk About Your Project</a>
            </motion.div>
        </div>
    </section>

    <section className='bg-[#DDD]'>
      <Image src={DesignEngineeringImg} alt='' />
    </section>

    {/* service section start */}
    <section className="bg-white py-16">
        <div className="container 3xl:container mx-auto">
          <motion.div 
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: true, amount: 0.1}}
          className="">
            <div className="subtitle mb-4 flex items-center"><span className="bg-[#FF561D] w-2 h-2 inline-block mr-2"></span>08 — Our Services</div>
            <h2 className="text-4xl 3xl:text-[62px] xl:text-[56px] lg:text-[48px] md:text-[30px] md:leading-[32px] text-black font-aeonik lg:leading-[65px] mb-5 leading-[42px]">Innovation Meets Business</h2>
            <p className="mb-6 text-[22px]">Our Design and Engineering Services include the following:</p>
          </motion.div>
          {/* service box start */}
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-16 gap-7">
            <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}
            className="bg-white 3xl:p-12 xl:p-8 p-4 service-card card-hover border-t-8 border-white duration-500 transition hover:border-[#FF561D]">
                <div className="service_icon">

                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 80 80" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M75.8333 41.6667V16.6667C75.8333 9.76334 70.2367 4.16667 63.3333 4.16667C50.7467 4.16667 29.2533 4.16667 16.6667 4.16667C9.76332 4.16667 4.16666 9.76334 4.16666 16.6667V63.3333C4.16666 70.2367 9.76332 75.8333 16.6667 75.8333H41.6667C43.0467 75.8333 44.1667 74.7133 44.1667 73.3333C44.1667 71.9533 43.0467 70.8333 41.6667 70.8333H16.6667C12.5233 70.8333 9.16666 67.4767 9.16666 63.3333V16.6667C9.16666 12.5233 12.5233 9.16667 16.6667 9.16667H63.3333C67.4767 9.16667 70.8333 12.5233 70.8333 16.6667V41.6667C70.8333 43.0467 71.9533 44.1667 73.3333 44.1667C74.7133 44.1667 75.8333 43.0467 75.8333 41.6667Z" fill="#444555"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M73.3333 20.8333H6.66666C5.28666 20.8333 4.16666 21.9533 4.16666 23.3333C4.16666 24.7133 5.28666 25.8333 6.66666 25.8333H73.3333C74.7133 25.8333 75.8333 24.7133 75.8333 23.3333C75.8333 21.9533 74.7133 20.8333 73.3333 20.8333Z" fill="#444555"/>
                        <path d="M42.5 17.5C43.8807 17.5 45 16.3807 45 15C45 13.6193 43.8807 12.5 42.5 12.5C41.1193 12.5 40 13.6193 40 15C40 16.3807 41.1193 17.5 42.5 17.5Z" fill="#444555"/>
                        <path d="M51.6667 17.5C53.0474 17.5 54.1667 16.3807 54.1667 15C54.1667 13.6193 53.0474 12.5 51.6667 12.5C50.2859 12.5 49.1667 13.6193 49.1667 15C49.1667 16.3807 50.2859 17.5 51.6667 17.5Z" fill="#444555"/>
                        <path d="M60.8333 17.5C62.214 17.5 63.3333 16.3807 63.3333 15C63.3333 13.6193 62.214 12.5 60.8333 12.5C59.4526 12.5 58.3333 13.6193 58.3333 15C58.3333 16.3807 59.4526 17.5 60.8333 17.5Z" fill="#444555"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M30.1733 32.5433L25.0833 47.8167C24.6466 49.1233 25.3533 50.54 26.6633 50.9767C27.9733 51.4133 29.39 50.7067 29.8266 49.3967L34.9166 34.1233C35.3533 32.8133 34.6466 31.3967 33.3366 30.96C32.0266 30.5267 30.61 31.2333 30.1733 32.5433Z" fill="#444555"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M36.4733 37.6467L39.7966 40.97L36.4733 44.2933C35.5 45.27 35.5 46.8533 36.4733 47.83C37.45 48.8033 39.0333 48.8033 40.01 47.83L45.1 42.7367C46.0766 41.76 46.0766 40.1767 45.1 39.2033L40.01 34.11C39.0333 33.1367 37.45 33.1367 36.4733 34.11C35.5 35.0867 35.5 36.67 36.4733 37.6467Z" fill="#444555"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.99 34.11L14.9 39.2033C13.9233 40.1767 13.9233 41.76 14.9 42.7367L19.99 47.83C20.9666 48.8033 22.55 48.8033 23.5266 47.83C24.5 46.8533 24.5 45.27 23.5266 44.2933L20.2033 40.97L23.5266 37.6467C24.5 36.67 24.5 35.0867 23.5266 34.11C22.55 33.1367 20.9666 33.1367 19.99 34.11Z" fill="#444555"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M70.9533 60.12C70.9533 54.14 66.0966 49.2867 60.12 49.2867C54.14 49.2867 49.2867 54.14 49.2867 60.12C49.2867 66.0967 54.14 70.9533 60.12 70.9533C66.0966 70.9533 70.9533 66.0967 70.9533 60.12ZM65.9533 60.12C65.9533 63.3367 63.3366 65.9533 60.12 65.9533C56.9 65.9533 54.2866 63.3367 54.2866 60.12C54.2866 56.9 56.9 54.2867 60.12 54.2867C63.3366 54.2867 65.9533 56.9 65.9533 60.12Z" fill="#FF561D"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M46.6667 62.62H51.5467C52.9267 62.62 54.0467 61.4967 54.0467 60.12C54.0467 58.74 52.9267 57.62 51.5467 57.62H46.6667C45.2867 57.62 44.1667 58.74 44.1667 60.12C44.1667 61.4967 45.2867 62.62 46.6667 62.62Z" fill="#FF561D"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M52.4233 71.28L55.8766 67.8267C56.85 66.8533 56.85 65.2667 55.8766 64.2933C54.9 63.3167 53.3166 63.3167 52.34 64.2933L48.8866 67.7433C47.9133 68.72 47.9133 70.3033 48.8866 71.28C49.8633 72.2567 51.4466 72.2567 52.4233 71.28Z" fill="#FF561D"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M62.62 73.3333V68.4533C62.62 67.0733 61.4967 65.9533 60.12 65.9533C58.74 65.9533 57.62 67.0733 57.62 68.4533V73.3333C57.62 74.7133 58.74 75.8333 60.12 75.8333C61.4967 75.8333 62.62 74.7133 62.62 73.3333Z" fill="#FF561D"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M71.28 67.5767L67.8267 64.1233C66.8533 63.15 65.2667 63.15 64.2933 64.1233C63.3167 65.1 63.3167 66.6833 64.2933 67.66L67.7433 71.1133C68.72 72.0867 70.3033 72.0867 71.28 71.1133C72.2567 70.1367 72.2567 68.5533 71.28 67.5767Z" fill="#FF561D"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M73.3333 57.62H68.4533C67.0733 57.62 65.9533 58.74 65.9533 60.12C65.9533 61.4967 67.0733 62.62 68.4533 62.62H73.3333C74.7133 62.62 75.8333 61.4967 75.8333 60.12C75.8333 58.74 74.7133 57.62 73.3333 57.62Z" fill="#FF561D"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M67.7433 48.8867L64.2933 52.34C63.3167 53.3167 63.3167 54.9 64.2933 55.8767C65.2667 56.85 66.8533 56.85 67.8267 55.8767L71.28 52.4233C72.2567 51.4467 72.2567 49.8633 71.28 48.8867C70.3033 47.9133 68.72 47.9133 67.7433 48.8867Z" fill="#FF561D"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M57.62 46.6667V51.5467C57.62 52.9267 58.74 54.0467 60.12 54.0467C61.4967 54.0467 62.62 52.9267 62.62 51.5467V46.6667C62.62 45.2867 61.4967 44.1667 60.12 44.1667C58.74 44.1667 57.62 45.2867 57.62 46.6667Z" fill="#FF561D"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M48.8866 52.2567L52.34 55.7067C53.3166 56.6833 54.9 56.6833 55.8766 55.7067C56.85 54.7333 56.85 53.1467 55.8766 52.1733L52.4233 48.72C51.4466 47.7433 49.8633 47.7433 48.8866 48.72C47.9133 49.6967 47.9133 51.28 48.8866 52.2567Z" fill="#FF561D"/>
                    </svg>

                </div>
                <h3 className="my-5 3xl:text-4xl xl:text-3xl text-2xl font-aeonik duration-300 transition md:line-clamp-1 xl:line-clamp-none">
                  <Link href="services/MVPSoftwareDevelopment">
                    MVP Software Development
                  </Link>
                </h3>
                <p className="md:line-clamp-3">We help you develop a minimum viable product to launch your idea, gather feedback, and engage early adopters.</p>
            </motion.div>

            <motion.div 
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}
            className="bg-white 3xl:p-12 xl:p-8 p-4 service-card card-hover border-t-8 border-white duration-500 transition hover:border-[#FF561D]">
                <div className="service_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 80 80" fill="none">
                      <path d="M44.15 61.0025H12.075C9.415 61.0025 7.25 58.84 7.25 56.1775V25.6H67.825V42.9525C67.825 44.195 68.8325 45.2025 70.075 45.2025C71.3175 45.2025 72.325 44.195 72.325 42.9525V14.5525C72.325 9.425 68.155 5.2525 63.025 5.2525H12.05C6.9225 5.2525 2.75 9.4225 2.75 14.5525V56.1775C2.75 61.32 6.9325 65.5025 12.075 65.5025H44.15C45.3925 65.5025 46.4 64.495 46.4 63.2525C46.4 62.01 45.3925 61.0025 44.15 61.0025ZM12.05 9.7525H63.025C65.6725 9.7525 67.825 11.905 67.825 14.5525V21.1H7.25V14.5525C7.25 11.9075 9.4025 9.7525 12.05 9.7525Z" fill="#444555"/>
                      <path d="M14.975 17.42C16.0851 17.42 16.985 16.5201 16.985 15.41C16.985 14.2999 16.0851 13.4 14.975 13.4C13.8649 13.4 12.965 14.2999 12.965 15.41C12.965 16.5201 13.8649 17.42 14.975 17.42Z" fill="#444555"/>
                      <path d="M22.055 17.42C23.1651 17.42 24.065 16.5201 24.065 15.41C24.065 14.2999 23.1651 13.4 22.055 13.4C20.9449 13.4 20.045 14.2999 20.045 15.41C20.045 16.5201 20.9449 17.42 22.055 17.42Z" fill="#444555"/>
                      <path d="M29.135 17.42C30.2451 17.42 31.145 16.5201 31.145 15.41C31.145 14.2999 30.2451 13.4 29.135 13.4C28.0249 13.4 27.125 14.2999 27.125 15.41C27.125 16.5201 28.0249 17.42 29.135 17.42Z" fill="#444555"/>
                      <path d="M74.0625 50.955L52.5075 44.3975C50.9225 43.9175 49.1975 44.345 48.0225 45.5175C46.845 46.695 46.415 48.4125 46.9 50.005L53.4575 71.5625C54.0375 73.4675 55.7 74.7175 57.69 74.745H57.76C59.72 74.745 61.385 73.55 62.015 71.685L65.08 62.5775L74.1925 59.5075C76.08 58.87 77.28 57.17 77.25 55.1825C77.22 53.1925 75.9675 51.5325 74.0625 50.955ZM63.6425 58.3175C62.32 58.765 61.265 59.82 60.82 61.14L57.7625 70.2525L51.21 48.7075L72.755 55.25L63.6425 58.3175Z" fill="#FF561D"/>
                    </svg>
                </div>
                <h3 className="my-5 3xl:text-4xl xl:text-3xl text-2xl font-aeonik duration-300 transition md:line-clamp-1 xl:line-clamp-none"><a href="javascript:void(0);">UI/UX Design</a></h3>
                <p className="md:line-clamp-3">Our UI/UX design experts will create visually appealing, user-centric, and well-performing interfaces for your digital products.</p>
            </motion.div>

            <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}
            className="bg-white 3xl:p-12 xl:p-8 p-4 service-card card-hover border-t-8 border-white duration-500 transition hover:border-[#FF561D]">
                <div className="service_icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 80 80" fill="none">
                    <path d="M54.6933 64H50.3466C49.04 64 48 62.96 48 61.7067V41.3333H54.7466C54.6133 40.4533 54.64 39.5733 54.7466 38.6667H48V18.2933C48 17.04 49.04 16 50.3466 16H54.6933C54.6133 15.12 54.6933 14.16 54.88 13.3333H50.3466C47.5733 13.3333 45.3333 15.5467 45.3333 18.2933V38.6667H41.3333V24C41.3333 23.12 40.4 22.4 39.5466 22.7467L21.0133 29.3333H14.88C9.59997 29.3333 5.30664 33.52 5.30664 38.6667C5.30664 43.8133 9.46664 47.84 14.64 47.9733V57.3333C14.64 58.08 15.2266 58.6667 15.9733 58.6667H21.3066C22.0533 58.6667 22.64 58.08 22.64 57.3333V48.56L39.52 54.5867C40.3466 54.9067 41.3333 54.24 41.3066 53.3333V41.3333H45.3066V61.7067C45.3066 64.4533 47.5466 66.6667 50.32 66.6667H54.8533C54.72 65.84 54.6133 64.9333 54.6933 64ZM20 56H17.3333V48H20V56ZM20 45.3333H14.9066C11.0933 45.3333 7.99997 42.3467 7.99997 38.6667C7.99997 34.9867 11.0933 32 14.9066 32H20V45.3333ZM32 49.0667L22.6666 45.7333V31.6L32 28.2667V49.0667ZM38.6666 51.44L34.6666 50V27.3067L38.6666 25.8933V51.44Z" fill="#444555"/>
                    <path d="M64.6667 10C66.5067 10 68 11.4933 68 13.3333C68 15.1733 66.5067 16.6667 64.6667 16.6667C62.8267 16.6667 61.3334 15.1733 61.3334 13.3333C61.3334 11.4933 62.8267 10 64.6667 10ZM64.6667 5.33333C59.1467 5.33333 54.6667 9.81333 54.6667 15.3333C54.6667 20.8533 59.1467 25.3333 64.6667 25.3333C70.1867 25.3333 74.6667 20.8533 74.6667 15.3333C74.6667 9.81333 70.1867 5.33333 64.6667 5.33333ZM69.1467 21.12C68.3734 19.7067 66.6134 18.6933 64.56 18.6933C62.5067 18.6933 60.8534 19.6267 60.0534 20.9867C58.4 19.6533 57.3334 17.6267 57.3334 15.3333C57.3334 11.28 60.6134 7.99999 64.6667 7.99999C68.72 7.99999 72 11.28 72 15.3333C72 17.68 70.8534 19.76 69.1467 21.12ZM64.6667 34.6667C66.5067 34.6667 68 36.16 68 38C68 39.84 66.5067 41.3333 64.6667 41.3333C62.8267 41.3333 61.3334 39.84 61.3334 38C61.3334 36.16 62.8267 34.6667 64.6667 34.6667ZM64.6667 30C59.1467 30 54.6667 34.48 54.6667 40C54.6667 45.52 59.1467 50 64.6667 50C70.1867 50 74.6667 45.52 74.6667 40C74.6667 34.48 70.1867 30 64.6667 30ZM69.1467 45.7867C68.3734 44.3733 66.6134 43.36 64.56 43.36C62.5067 43.36 60.8534 44.2933 60.0534 45.6533C58.4 44.32 57.3334 42.2933 57.3334 40C57.3334 35.9467 60.6134 32.6667 64.6667 32.6667C68.72 32.6667 72 35.9467 72 40C72 42.3467 70.8534 44.4267 69.1467 45.7867ZM64.6667 59.3333C66.5067 59.3333 68 60.8267 68 62.6667C68 64.5067 66.5067 66 64.6667 66C62.8267 66 61.3334 64.5067 61.3334 62.6667C61.3334 60.8267 62.8267 59.3333 64.6667 59.3333ZM64.6667 54.6667C59.1467 54.6667 54.6667 59.1467 54.6667 64.6667C54.6667 70.1867 59.1467 74.6667 64.6667 74.6667C70.1867 74.6667 74.6667 70.1867 74.6667 64.6667C74.6667 59.1467 70.1867 54.6667 64.6667 54.6667ZM69.1467 70.4533C68.3734 69.04 66.6134 68.0267 64.56 68.0267C62.5067 68.0267 60.8534 68.96 60.0534 70.32C58.4 68.9867 57.3334 66.96 57.3334 64.6667C57.3334 60.6133 60.6134 57.3333 64.6667 57.3333C68.72 57.3333 72 60.6133 72 64.6667C72 67.0133 70.8534 69.0933 69.1467 70.4533Z" fill="#FF561D"/>
                  </svg>
                </div>
                <h3 className="my-5 3xl:text-4xl xl:text-3xl text-2xl font-aeonik duration-300 transition md:line-clamp-1 xl:line-clamp-none"><a href="javascript:void(0);">SaaS Development</a></h3>
                <p className="md:line-clamp-3">Got a futuristic idea? We will bring your ideas to life with our Software As a Service (SaaS) development services.</p>
            </motion.div>

            <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}
            className="bg-white 3xl:p-12 xl:p-8 p-4 service-card card-hover border-t-8 border-white duration-500 transition hover:border-[#FF561D]">
                <div className="service_icon">

                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 80 80" fill="none">
                    <path d="M31.775 41.775C32.0093 41.5426 32.1953 41.2661 32.3222 40.9614C32.4492 40.6568 32.5145 40.33 32.5145 40C32.5145 39.6699 32.4492 39.3432 32.3222 39.0385C32.1953 38.7339 32.0093 38.4574 31.775 38.225L28.525 35L31.775 31.775C32.2458 31.3042 32.5102 30.6657 32.5102 30C32.5102 29.3342 32.2458 28.6957 31.775 28.225C31.3042 27.7542 30.6658 27.4897 30 27.4897C29.3342 27.4897 28.6958 27.7542 28.225 28.225L23.225 33.225C22.9907 33.4574 22.8047 33.7339 22.6778 34.0385C22.5509 34.3432 22.4855 34.6699 22.4855 35C22.4855 35.33 22.5509 35.6568 22.6778 35.9614C22.8047 36.2661 22.9907 36.5426 23.225 36.775L28.225 41.775C28.4574 42.0093 28.7339 42.1953 29.0386 42.3222C29.3432 42.4491 29.67 42.5145 30 42.5145C30.33 42.5145 30.6568 42.4491 30.9614 42.3222C31.2661 42.1953 31.5426 42.0093 31.775 41.775Z" fill="#FF561D"/>
                    <path d="M36.7 45C36.9656 45.0343 37.2344 45.0343 37.5 45C38.0241 45.0014 38.5354 44.838 38.9616 44.5329C39.3878 44.2279 39.7073 43.7966 39.875 43.3L44.875 28.3C45.0872 27.6701 45.0404 26.9817 44.7451 26.3863C44.5988 26.0915 44.3959 25.8284 44.148 25.6119C43.9 25.3955 43.6119 25.2301 43.3 25.125C42.6701 24.9128 41.9817 24.9596 41.3863 25.255C40.7909 25.5503 40.3372 26.0701 40.125 26.7L35.125 41.7C34.9994 42.0192 34.9408 42.3607 34.9529 42.7035C34.9649 43.0463 35.0474 43.3829 35.1951 43.6924C35.3429 44.0019 35.5527 44.2778 35.8116 44.5027C36.0705 44.7277 36.3729 44.8969 36.7 45Z" fill="#FF561D"/>
                    <path d="M48.225 41.775C48.4574 42.0093 48.7339 42.1953 49.0386 42.3222C49.3432 42.4491 49.67 42.5145 50 42.5145C50.33 42.5145 50.6568 42.4491 50.9614 42.3222C51.2661 42.1953 51.5426 42.0093 51.775 41.775L56.775 36.775C57.0093 36.5426 57.1953 36.2661 57.3222 35.9614C57.4492 35.6568 57.5145 35.33 57.5145 35C57.5145 34.6699 57.4492 34.3432 57.3222 34.0385C57.1953 33.7339 57.0093 33.4574 56.775 33.225L51.775 28.225C51.5419 27.9919 51.2652 27.807 50.9606 27.6808C50.6561 27.5547 50.3296 27.4897 50 27.4897C49.3342 27.4897 48.6958 27.7542 48.225 28.225C47.9919 28.4581 47.807 28.7348 47.6809 29.0394C47.5547 29.3439 47.4898 29.6703 47.4898 30C47.4898 30.6657 47.7542 31.3042 48.225 31.775L51.475 35L48.225 38.225C47.9907 38.4574 47.8047 38.7339 47.6778 39.0385C47.5508 39.3432 47.4855 39.6699 47.4855 40C47.4855 40.33 47.5508 40.6568 47.6778 40.9614C47.8047 41.2661 47.9907 41.5426 48.225 41.775Z" fill="#FF561D"/>
                    <path d="M70 50V17.5C70 16.1739 69.4732 14.9021 68.5355 13.9645C67.5979 13.0268 66.3261 12.5 65 12.5H15C13.6739 12.5 12.4021 13.0268 11.4645 13.9645C10.5268 14.9021 10 16.1739 10 17.5V50C8.67392 50 7.40215 50.5268 6.46447 51.4645C5.52678 52.4021 5 53.6739 5 55C5 58.3152 6.31696 61.4946 8.66117 63.8388C11.0054 66.183 14.1848 67.5 17.5 67.5H62.5C65.8152 67.5 68.9946 66.183 71.3388 63.8388C73.683 61.4946 75 58.3152 75 55C75 53.6739 74.4732 52.4021 73.5355 51.4645C72.5979 50.5268 71.3261 50 70 50ZM15 17.5H65V50H50C49.5383 50.0014 49.0861 50.1306 48.6933 50.3733C48.3006 50.616 47.9827 50.9627 47.775 51.375L45.95 55H34.05L32.225 51.375C32.0173 50.9627 31.6994 50.616 31.3067 50.3733C30.9139 50.1306 30.4617 50.0014 30 50H15V17.5ZM62.5 62.5H17.5C15.5109 62.5 13.6032 61.7098 12.1967 60.3033C10.7902 58.8968 10 56.9891 10 55H28.45L30.275 58.625C30.4827 59.0373 30.8006 59.384 31.1933 59.6267C31.5861 59.8694 32.0383 59.9986 32.5 60H47.5C47.9617 59.9986 48.4139 59.8694 48.8067 59.6267C49.1994 59.384 49.5173 59.0373 49.725 58.625L51.55 55H70C70 56.9891 69.2098 58.8968 67.8033 60.3033C66.3968 61.7098 64.4891 62.5 62.5 62.5Z" fill="#484848"/>
                  </svg>
                </div>
                <h3 className="my-5 3xl:text-4xl xl:text-3xl text-2xl font-aeonik duration-300 transition md:line-clamp-1 xl:line-clamp-none"><a href="javascript:void(0);">Enterprise Software</a></h3>
                <p className="md:line-clamp-3">Stream your business operations using our enterprise software development service. We build efficient software solutions for businesses of all sizes.</p>
            </motion.div>

            <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}
            className="bg-white 3xl:p-12 xl:p-8 p-4 service-card card-hover border-t-8 border-white duration-500 transition hover:border-[#FF561D]">
                <div className="service_icon">

                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 80 80" fill="none">
                    <path d="M59.8286 54.2857H34.4571C30.5143 54.2857 27.0857 51.6 26.1429 47.8L20.0857 23.5429C19.7143 22.0286 20.6286 20.4571 22.1714 20.0857C22.4 20.0286 22.6286 20 22.8571 20H71.4286C73 20 74.2857 21.2857 74.2857 22.8571C74.2857 23.0857 74.2572 23.3143 74.2 23.5429L68.1429 47.7714C67.2 51.6 63.7714 54.2857 59.8286 54.2857ZM26.5143 25.7143L31.6857 46.4C32 47.6857 33.1429 48.5714 34.4571 48.5714H59.8286C61.1429 48.5714 62.2857 47.6857 62.6 46.4L67.7714 25.7143H26.5143Z" fill="#444555"/>
                    <path d="M22.8571 25.7143C21.5429 25.7143 20.4 24.8286 20.0857 23.5428L17.7714 14.2857H8.57142C6.99999 14.2857 5.71428 13 5.71428 11.4286C5.71428 9.85713 6.99999 8.57141 8.57142 8.57141H20C21.3143 8.57141 22.4571 9.45713 22.7714 10.7428L25.6286 22.1714C26 23.6857 25.0857 25.2571 23.5429 25.6286C23.3143 25.6857 23.0857 25.7143 22.8571 25.7143Z" fill="#444555"/>
                    <path d="M31.4286 71.4286C28.2857 71.4286 25.7143 68.8571 25.7143 65.7143C25.7143 62.5714 28.2857 60 31.4286 60C34.5714 60 37.1429 62.5714 37.1429 65.7143C37.1429 68.8571 34.5714 71.4286 31.4286 71.4286Z" fill="#FF561D"/>
                    <path d="M62.8571 71.4286C59.7143 71.4286 57.1429 68.8571 57.1429 65.7143C57.1429 62.5714 59.7143 60 62.8571 60C66 60 68.5714 62.5714 68.5714 65.7143C68.5714 68.8571 66 71.4286 62.8571 71.4286Z" fill="#FF561D"/>
                  </svg>
                </div>
                <h3 className="my-5 3xl:text-4xl xl:text-3xl text-2xl font-aeonik duration-300 transition md:line-clamp-1 xl:line-clamp-none"><a href="javascript:void(0);">Ecommerce Development</a></h3>
                <p className="md:line-clamp-3">Let's elevate your business by developing a dynamic and scalable eCommerce website to match your company goals.</p>
            </motion.div>

            <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}
            className="bg-white 3xl:p-12 xl:p-8 p-4 service-card card-hover border-t-8 border-white duration-500 transition hover:border-[#FF561D]">
                <div className="service_icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 80 80" fill="none">
                    <path d="M47.6045 73H22.3955C16.6632 73 12 68.374 12 62.6875V17.3125C12 11.626 16.6632 7 22.3955 7H47.6045C53.3368 7 58 11.626 58 17.3125V21.3242C58 22.7482 56.8366 23.9023 55.4011 23.9023C53.9657 23.9023 52.8023 22.7482 52.8023 21.3242V17.3125C52.8023 14.4695 50.4704 12.1562 47.6045 12.1562H22.3955C19.5296 12.1562 17.1977 14.4695 17.1977 17.3125V62.6875C17.1977 65.5305 19.5296 67.8438 22.3955 67.8438H47.6045C50.4704 67.8438 52.8023 65.5305 52.8023 62.6875V57.8047C52.8023 56.3807 53.9657 55.2265 55.4011 55.2265C56.8366 55.2265 58 56.3807 58 57.8047V62.6875C58 68.374 53.3368 73 47.6045 73ZM37.5989 61.2851C37.5989 59.8611 36.4355 58.707 35 58.707C33.5645 58.707 32.4011 59.8611 32.4011 61.2851C32.4011 62.7092 33.5645 63.8633 35 63.8633C36.4355 63.8633 37.5989 62.7092 37.5989 61.2851ZM40.1977 18.7461C40.1977 17.3221 39.0343 16.168 37.5989 16.168H32.4011C30.9657 16.168 29.8023 17.3221 29.8023 18.7461C29.8023 20.1701 30.9657 21.3242 32.4011 21.3242H37.5989C39.0343 21.3242 40.1977 20.1701 40.1977 18.7461Z" fill="#444555"/>
                    <path d="M46.4102 51.0957C46.0944 52.222 44.9427 53 43.7769 53C42.0521 53 40.933 51.3455 41.4008 49.6784L47.2315 28.9043C47.5474 27.778 48.5708 27 49.7365 27C51.4613 27 52.7093 28.655 52.241 30.3221L46.4102 51.0957Z" fill="#FF561D"/>
                    <path d="M36.7894 46.1979C37.8759 47.12 38.0183 48.7603 37.1073 49.8607C36.5999 50.4736 35.8718 50.79 35.1388 50.79C34.5567 50.79 33.9715 50.5909 33.4907 50.1827L27.134 44.7846L27.1214 44.7734C25.7732 43.6141 25 41.9216 25 40.13C25 38.3384 25.7732 36.6459 27.1214 35.4866C27.1254 35.4825 27.1299 35.4789 27.134 35.4754L33.4907 30.0773C34.5772 29.1546 36.1967 29.2994 37.1073 30.3993C38.0183 31.4997 37.8759 33.14 36.7894 34.0621L30.4407 39.4536C30.1744 39.6857 30.1343 39.9766 30.1343 40.13C30.1343 40.2834 30.1744 40.5743 30.4407 40.8064L36.7894 46.1979Z" fill="#FF561D"/>
                    <path d="M65.8786 44.7734L59.6572 50.1654C59.1734 50.5848 58.5797 50.79 57.9896 50.79C57.265 50.79 56.5455 50.4813 56.0376 49.88C55.1155 48.7892 55.2419 47.148 56.3189 46.2146L62.5478 40.8161C62.8256 40.5774 62.8657 40.2839 62.8657 40.13C62.8657 39.9756 62.8251 39.6821 62.5548 39.4495L56.3189 34.0454C55.2419 33.112 55.1155 31.4708 56.0376 30.3795C56.9592 29.2887 58.5797 29.1607 59.6572 30.0946L65.8856 35.4927C67.2268 36.6459 68 38.3384 68 40.13C68 41.9216 67.2268 43.6141 65.8786 44.7734Z" fill="#FF561D"/>
                  </svg>
                </div>
                <h3 className="my-5 3xl:text-4xl xl:text-3xl text-2xl font-aeonik duration-300 transition md:line-clamp-1 xl:line-clamp-none"><a href="javascript:void(0);">Mobile App Development</a></h3>
                <p className="md:line-clamp-3">Cyberpoint is your go-to digital product design and development company for mobile apps. We will develop scalable and secure mobile apps to elevate your brand.</p>
            </motion.div>
          </div>
          {/* service box end */}
        </div>
      </section>

    {/* why choose section */}
    <section className="bg-[#EFEAE3] py-16 ">
      <div className="container 3xl:container mx-auto">
          <div className="flex flex-col justify-between md:flex-row">
                <motion.div 
                    variants={fadeIn("up", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: true, amount: 0.1}}
                    className="3xl:w-[38%] md:w-2/5 w-full mb-6 md:mb-0">
                    <div className="subtitle mb-4 flex items-center"><span className="bg-[#FF561D] w-2 h-2 inline-block mr-2"></span>08 — Why Choose</div>
                    <h2 className="text-4xl 3xl:text-[62px] xl:text-[56px] lg:text-[48px] md:text-[30px] md:leading-[32px] text-black font-aeonik lg:leading-[65px] mb-5 leading-[42px]">Why Choose Cyberpoint for Design & Engineering</h2>
                    <p className="mb-6 text-[22px]">Why choose us as your go-to design and engineering digital products company?</p>
                </motion.div>

                <div className='3xl:w-[62%] md:w-3/5 xl:ps-16 md:ps-8 w-full'>
                    <motion.div 
                        variants={fadeIn("up", 0.1)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: true, amount: 0.1}}
                        className="bg-white md:p-12 p-8 md:ps-28">
                          <h6 className="text-[#2E2F30] md:text-4xl text-3xl font-aeonik relative mb-5"><div className="text-[#FF561D] md:absolute md:top-0 text-4xl md:-left-16 mb-3 md:mb-0">01</div>Expertise and Innovation</h6>
                          <p>
                            As a digital product design firm, we capitalize on expertise and innovation. Our team is experienced, innovative, and adaptive to emerging trends.
                          </p>
                    </motion.div>

                    <motion.div 
                        variants={fadeIn("up", 0.1)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: true, amount: 0.1}}
                        className="bg-white md:p-12 p-8 md:ps-28 my-5">
                          <h6 className="text-[#2E2F30] md:text-4xl text-3xl font-aeonik relative mb-5"><div className="text-[#FF561D] md:absolute md:top-0 text-4xl md:-left-16 mb-3 md:mb-0">02</div>Client-centric Solutions</h6>
                          <p>
                            We actively listen to your product and business needs to provide a personalized solution. Our strategy also relies heavily on your feedback to ensure customer satisfaction.
                          </p>
                    </motion.div>

                    <motion.div 
                        variants={fadeIn("up", 0.1)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: true, amount: 0.1}}
                        className="bg-white md:p-12 p-8 md:ps-28">
                          <h6 className="text-[#2E2F30] md:text-4xl text-3xl font-aeonik relative mb-5"><div className="text-[#FF561D] md:absolute md:top-0 text-4xl md:-left-16 mb-3 md:mb-0">03</div>Agile Methodologies</h6>
                          <p>
                            Through our collaborative approach, we ensure your feedback matters in every step, from the design and development to testing and implementation.
                          </p>
                    </motion.div>
                </div>
            </div>
      </div>
    </section>

    {/* showcase section start */}
    <section className="section bg-white pt-16">
        <div className="container 3xl:container mx-auto">
          <div className="flex flex-col md:items-center md:justify-between md:flex-row pb-10">
            <motion.h2 className="text-4xl 3xl:text-[62px] xl:text-[56px] lg:text-[48px] md:text-[30px] md:leading-[32px] text-black xl:w-[720px] lg:w-[560px] md:w-[362px] w-full font-aeonik mb-6 md:mb-0 lg:leading-[65px] leading-[42px]" variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: true, amount: 0.1}}>Showcase of selected projects and archive</motion.h2>
            <motion.div className=""
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}>
              <div className="flex flex-col lg:flex-row uppercase lg:items-center">
                <p className="md:mr-5 mb-6 md:mb-0">Featuring</p>
                <div className="gap-3 flex items-center text-base md:text-lg">
                  <span className="py-1 px-3 rounded-full bg-[#EFEAE3]">UX-UI</span>
                  <span className="py-1 px-3 rounded-full bg-[#EFEAE3]">Visual Identity</span>
                </div>
              </div>

              <div className="flex uppercase mt-4 lg:justify-end items-center">
                <p className="mr-5">From</p>
                <div className="gap-3 flex items-center text-base md:text-lg">
                  <span className="py-1 px-3 rounded-full bg-[#EFEAE3]">2020</span>
                  <span>To</span>
                  <span className="py-1 px-3 rounded-full bg-[#EFEAE3]">2024</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
    </section>

      <section className="section bg-white min-h">
          <div className="container 3xl:container mx-auto">
              <DragSlider />
          </div>
      </section>
      {/* showcase section end */}

      {/* Methodology section start */}
      <section className="section bg-[#efeae3] pt-12 pb-16 min-h">
        <div className="container mx-auto 3xl:container">
          <motion.div 
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: true, amount: 0.1}}
          className="text-center mx-auto max-w-4xl">
            <h2 className="text-4xl 3xl:text-[62px] xl:text-[56px] lg:text-[48px] md:text-[30px] md:leading-[32px] text-black font-aeonik lg:leading-[65px] leading-[42px] mb-5">Methodology</h2>
            <p className='text-[22px]'>Our product development strategy includes collaborative ideation, thorough planning, and repetitive development. Here is our proven methodology:</p>
          </motion.div>
          {/* service box start */}
          <div className="grid grid-cols-1 md:grid-cols-3 mt-16 gap-7">
            <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}
            className="bg-white 2xl:p-12 xl:p-8 p-4">
                <div className="text-[#FF561D] 2xl:text-4xl lg:text-3xl text-2xl md:mb-12 mb-5">01</div>
                <h3 className="mb-5 3xl:text-4xl lg:text-3xl text-2xl font-aeonik"><a href="javascript:void(0);">Expertise and Innovation</a></h3>
                <p className="md:line-clamp-3 2xl:line-clamp-4">We listen to your vision and goals for the product and craft a roadmap.</p>
            </motion.div>

            <motion.div 
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}
            className="bg-white 2xl:p-12 xl:p-8 p-4">
                <div className="text-[#FF561D] 2xl:text-4xl lg:text-3xl text-2xl md:mb-12 mb-5">02</div>
                <h3 className="mb-5 3xl:text-4xl lg:text-3xl text-2xl font-aeonik"><a href="javascript:void(0);">Discovery and Planning</a></h3>
                <p className="md:line-clamp-3 2xl:line-clamp-4">Creating visually appealing designs, sharing milestones, and iterative enhancement based on your feedback.</p>
            </motion.div>

            <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}
            className="bg-white 2xl:p-12 xl:p-8 p-4">
                <div className="text-[#FF561D] 2xl:text-4xl lg:text-3xl text-2xl md:mb-12 mb-5">03</div>
                <h3 className="mb-5 3xl:text-4xl lg:text-3xl text-2xl font-aeonik"><a href="javascript:void(0);">Development and Testing</a></h3>
                <p className="md:line-clamp-3 2xl:line-clamp-4">Developing the product and testing it for functionality and quality.</p>
            </motion.div>
          </div>
          {/* service box end */}
        </div>
      </section>


    {/* company logos section start */}
        <LogoBrands />
      {/* faq section start */}
      <FAQAccordion/>

      {/* footer section start */}
      <Footer />
    </div>
  }