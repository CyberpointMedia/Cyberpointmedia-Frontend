
import React from 'react';
import Header from '../header';
import { motion } from 'framer-motion';
import { fadeIn } from "@/components/AnimationVariants";
import Image from 'next/image';
import UIUXBigImg from '@/assets/ui-ux-big-img.jpg';
import UiUxImg from '@/assets/ui-ux-circle-img.svg';
import FAQAccordion from "@/components/FaqAccordion";
import Footer from "@/pages/footer";
import ClientTestimonials from '@/components/Testimonials';
import LogoBrands from '@/components/LogoBrands';

const UIUXDevelopment = () => {
    return <div>
      <Header></Header>

    {/* Services start */}
    <section className="bg-white py-16">
        <div className="container 3xl:container mx-auto">
            <motion.div 
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: true, amount: 0.1}}
                className="md:w-5/6 3xl:w-[75%] w-full">
                <div className="subtitle mb-4 flex items-center"><span className="bg-[#FF561D] w-2 h-2 inline-block mr-2"></span>UI/UX Development</div>
                <h2 className="text-4xl 3xl:text-[76px] xl:text-[60px] lg:text-[48px] md:text-[30px] md:leading-[32px] text-black font-aeonik 3xl:leading-[86px] xl:leading-[70px] lg:leading-[60px] mb-[30px] leading-[42px]">Get better user engagement, customer<br className='hidden md:block' /> satisfaction, and brand loyalty with our<br className='hidden md:block' /> exceptional UI/UX Design Services</h2>
                <p className="mb-6 text-[22px]">
                  Bring your vision to life through stunning, user-centric, and engaging user interfaces.
                </p>
                <a href="javasript:void(0);" className="uppercase rounded-full py-[10px] px-5 border border-[#2E2F30] hover:bg-[#FF561D] hover:border-[#FF561D] hover:text-white inline-block transition duration-500 mt-3">Let's Talk About Your Project</a>
            </motion.div>
        </div>
    </section>

    <section className='bg-[#DDD]'>
      <Image src={UIUXBigImg} alt='' />
    </section>

    {/* saas development service section start */}
    <section className="bg-white py-16">
        <div className="container 3xl:container mx-auto">
          <motion.div 
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: true, amount: 0.1}}
          className="md:w-3/4 3xl:w-[55%] w-full">
            <div className="subtitle mb-4 flex items-center"><span className="bg-[#FF561D] w-2 h-2 inline-block mr-2"></span>01 — UI/UX Design Services</div>
            <h2 className="text-4xl 3xl:text-[62px] xl:text-[56px] lg:text-[48px] md:text-[30px] md:leading-[32px] text-black font-aeonik lg:leading-[65px] mb-5 leading-[42px]">Strategic Framework and  <br className='hidden md:block' />
            Intuitive Designs</h2>
            <p className="mb-6 text-[22px]">What Cyberpoint UI and UX design services entail:</p>
          </motion.div>
          {/* service box start */}
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-16 gap-7">
            <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}
            className="bg-white 3xl:p-12 xl:p-8 p-4 service-card border-t-8 border-white duration-500 transition hover:border-[#FF561D]">
                <div className="service_icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 80 80" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M75.8334 41.6667V16.6667C75.8334 9.76334 70.2367 4.16667 63.3334 4.16667C50.7467 4.16667 29.2534 4.16667 16.6667 4.16667C9.76341 4.16667 4.16675 9.76334 4.16675 16.6667V63.3333C4.16675 70.2367 9.76341 75.8333 16.6667 75.8333H41.6667C43.0467 75.8333 44.1667 74.7133 44.1667 73.3333C44.1667 71.9533 43.0467 70.8333 41.6667 70.8333H16.6667C12.5234 70.8333 9.16675 67.4767 9.16675 63.3333V16.6667C9.16675 12.5233 12.5234 9.16667 16.6667 9.16667H63.3334C67.4767 9.16667 70.8334 12.5233 70.8334 16.6667V41.6667C70.8334 43.0467 71.9534 44.1667 73.3334 44.1667C74.7134 44.1667 75.8334 43.0467 75.8334 41.6667Z" fill="#444555"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M73.3334 20.8333H6.66675C5.28675 20.8333 4.16675 21.9533 4.16675 23.3333C4.16675 24.7133 5.28675 25.8333 6.66675 25.8333H73.3334C74.7134 25.8333 75.8334 24.7133 75.8334 23.3333C75.8334 21.9533 74.7134 20.8333 73.3334 20.8333Z" fill="#444555"/>
                      <path d="M42.5 17.5C43.8807 17.5 45 16.3807 45 15C45 13.6193 43.8807 12.5 42.5 12.5C41.1193 12.5 40 13.6193 40 15C40 16.3807 41.1193 17.5 42.5 17.5Z" fill="#444555"/>
                      <path d="M51.6667 17.5C53.0475 17.5 54.1667 16.3807 54.1667 15C54.1667 13.6193 53.0475 12.5 51.6667 12.5C50.286 12.5 49.1667 13.6193 49.1667 15C49.1667 16.3807 50.286 17.5 51.6667 17.5Z" fill="#444555"/>
                      <path d="M60.8335 17.5C62.2142 17.5 63.3335 16.3807 63.3335 15C63.3335 13.6193 62.2142 12.5 60.8335 12.5C59.4528 12.5 58.3335 13.6193 58.3335 15C58.3335 16.3807 59.4528 17.5 60.8335 17.5Z" fill="#444555"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M30.1735 32.5433L25.0835 47.8167C24.6468 49.1233 25.3535 50.54 26.6635 50.9767C27.9735 51.4133 29.3901 50.7067 29.8268 49.3967L34.9168 34.1233C35.3535 32.8133 34.6468 31.3967 33.3368 30.96C32.0268 30.5267 30.6101 31.2333 30.1735 32.5433Z" fill="#444555"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M36.4734 37.6467L39.7967 40.97L36.4734 44.2933C35.5001 45.27 35.5001 46.8533 36.4734 47.83C37.4501 48.8033 39.0334 48.8033 40.0101 47.83L45.1001 42.7367C46.0767 41.76 46.0767 40.1767 45.1001 39.2033L40.0101 34.11C39.0334 33.1367 37.4501 33.1367 36.4734 34.11C35.5001 35.0867 35.5001 36.67 36.4734 37.6467Z" fill="#444555"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M19.99 34.11L14.9 39.2033C13.9233 40.1767 13.9233 41.76 14.9 42.7367L19.99 47.83C20.9666 48.8033 22.55 48.8033 23.5266 47.83C24.5 46.8533 24.5 45.27 23.5266 44.2933L20.2033 40.97L23.5266 37.6467C24.5 36.67 24.5 35.0867 23.5266 34.11C22.55 33.1367 20.9666 33.1367 19.99 34.11Z" fill="#444555"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M70.9535 60.12C70.9535 54.14 66.0969 49.2867 60.1202 49.2867C54.1402 49.2867 49.2869 54.14 49.2869 60.12C49.2869 66.0967 54.1402 70.9533 60.1202 70.9533C66.0969 70.9533 70.9535 66.0967 70.9535 60.12ZM65.9535 60.12C65.9535 63.3367 63.3369 65.9533 60.1202 65.9533C56.9002 65.9533 54.2869 63.3367 54.2869 60.12C54.2869 56.9 56.9002 54.2867 60.1202 54.2867C63.3369 54.2867 65.9535 56.9 65.9535 60.12Z" fill="#FF561D"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M46.6667 62.62H51.5467C52.9267 62.62 54.0468 61.4967 54.0468 60.12C54.0468 58.74 52.9267 57.62 51.5467 57.62H46.6667C45.2867 57.62 44.1667 58.74 44.1667 60.12C44.1667 61.4967 45.2867 62.62 46.6667 62.62Z" fill="#FF561D"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M52.4234 71.28L55.8767 67.8267C56.8501 66.8534 56.8501 65.2667 55.8767 64.2934C54.9001 63.3167 53.3167 63.3167 52.3401 64.2934L48.8867 67.7434C47.9134 68.72 47.9134 70.3034 48.8867 71.28C49.8634 72.2567 51.4467 72.2567 52.4234 71.28Z" fill="#FF561D"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M62.6201 73.3333V68.4533C62.6201 67.0733 61.4968 65.9533 60.1201 65.9533C58.7401 65.9533 57.6201 67.0733 57.6201 68.4533V73.3333C57.6201 74.7133 58.7401 75.8333 60.1201 75.8333C61.4968 75.8333 62.6201 74.7133 62.6201 73.3333Z" fill="#FF561D"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M71.2802 67.5767L67.8269 64.1233C66.8535 63.15 65.2669 63.15 64.2935 64.1233C63.3169 65.1 63.3169 66.6833 64.2935 67.66L67.7435 71.1133C68.7202 72.0867 70.3035 72.0867 71.2802 71.1133C72.2569 70.1367 72.2569 68.5533 71.2802 67.5767Z" fill="#FF561D"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M73.3334 57.62H68.4534C67.0734 57.62 65.9534 58.74 65.9534 60.12C65.9534 61.4967 67.0734 62.62 68.4534 62.62H73.3334C74.7134 62.62 75.8334 61.4967 75.8334 60.12C75.8334 58.74 74.7134 57.62 73.3334 57.62Z" fill="#FF561D"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M67.7435 48.8867L64.2935 52.34C63.3169 53.3167 63.3169 54.9 64.2935 55.8767C65.2669 56.85 66.8535 56.85 67.8269 55.8767L71.2802 52.4233C72.2569 51.4467 72.2569 49.8633 71.2802 48.8867C70.3035 47.9133 68.7202 47.9133 67.7435 48.8867Z" fill="#FF561D"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M57.6201 46.6667V51.5467C57.6201 52.9267 58.7401 54.0467 60.1201 54.0467C61.4968 54.0467 62.6201 52.9267 62.6201 51.5467V46.6667C62.6201 45.2867 61.4968 44.1667 60.1201 44.1667C58.7401 44.1667 57.6201 45.2867 57.6201 46.6667Z" fill="#FF561D"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M48.8867 52.2567L52.3401 55.7067C53.3167 56.6833 54.9001 56.6833 55.8767 55.7067C56.8501 54.7333 56.8501 53.1467 55.8767 52.1733L52.4234 48.72C51.4467 47.7433 49.8634 47.7433 48.8867 48.72C47.9134 49.6967 47.9134 51.28 48.8867 52.2567Z" fill="#FF561D"/>
                  </svg>
                </div>
                <h3 className="my-5 3xl:text-4xl xl:text-3xl text-2xl font-aeonik duration-300 transition md:line-clamp-1 xl:line-clamp-none">Informational Architecture</h3>
                <p>
                  We first gather relevant information through research to develop your idea into a user-centric interface. With these ideas, we formulate the best navigation system that aligns with your business goals.
                </p>
            </motion.div>

            <motion.div 
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}
            className="bg-white 3xl:p-12 xl:p-8 p-4 service-card border-t-8 border-white duration-500 transition hover:border-[#FF561D]">
                <div className="service_icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 80 80" fill="none">
                    <path d="M52.6045 73H27.3955C21.6632 73 17 68.374 17 62.6875V17.3125C17 11.626 21.6632 7 27.3955 7H52.6045C58.3368 7 63 11.626 63 17.3125V61.3242C63 62.7482 61.8366 63.9023 60.4011 63.9023C58.9657 63.9023 57.8023 62.7482 57.8023 61.3242V17.3125C57.8023 14.4695 55.4704 12.1562 52.6045 12.1562H27.3955C24.5296 12.1562 22.1977 14.4695 22.1977 17.3125V62.6875C22.1977 65.5305 24.5296 67.8438 27.3955 67.8438H52.6045C55.4704 67.8438 57.8023 65.5305 57.8023 62.6875V57.8047C57.8023 56.3807 58.9657 55.2265 60.4011 55.2265C61.8366 55.2265 63 56.3807 63 57.8047V62.6875C63 68.374 58.3368 73 52.6045 73ZM42.5989 61.2851C42.5989 59.8611 41.4355 58.707 40 58.707C38.5645 58.707 37.4011 59.8611 37.4011 61.2851C37.4011 62.7092 38.5645 63.8633 40 63.8633C41.4355 63.8633 42.5989 62.7092 42.5989 61.2851ZM45.1977 18.7461C45.1977 17.3221 44.0343 16.168 42.5989 16.168H37.4011C35.9657 16.168 34.8023 17.3221 34.8023 18.7461C34.8023 20.1701 35.9657 21.3242 37.4011 21.3242H42.5989C44.0343 21.3242 45.1977 20.1701 45.1977 18.7461Z" fill="#444555"/>
                    <circle cx="40" cy="39" r="10" fill="#FF561D"/>
                  </svg>
                </div>
                <h3 className="my-5 3xl:text-4xl xl:text-3xl text-2xl font-aeonik duration-300 transition md:line-clamp-1 xl:line-clamp-none">Wireframes/Blueprint Design</h3>
                <p>
                  Before diving into the full-blown design process, we create several skeletal frameworks to serve as blueprints. We will discuss with the design team and other stakeholders and choose the best. This is where we test the viability, features, and likability of the wireframe.
                </p>
            </motion.div>

            <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}
            className="bg-white 3xl:p-12 xl:p-8 p-4 service-card border-t-8 border-white duration-500 transition hover:border-[#FF561D]">
                <div className="service_icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 80 80" fill="none">
                    <path d="M44.15 61.0025H12.075C9.415 61.0025 7.25 58.84 7.25 56.1775V25.6H67.825V42.9525C67.825 44.195 68.8325 45.2025 70.075 45.2025C71.3175 45.2025 72.325 44.195 72.325 42.9525V14.5525C72.325 9.425 68.155 5.2525 63.025 5.2525H12.05C6.9225 5.2525 2.75 9.4225 2.75 14.5525V56.1775C2.75 61.32 6.9325 65.5025 12.075 65.5025H44.15C45.3925 65.5025 46.4 64.495 46.4 63.2525C46.4 62.01 45.3925 61.0025 44.15 61.0025ZM12.05 9.7525H63.025C65.6725 9.7525 67.825 11.905 67.825 14.5525V21.1H7.25V14.5525C7.25 11.9075 9.4025 9.7525 12.05 9.7525Z" fill="#444555"/>
                    <path d="M14.9748 17.42C16.0849 17.42 16.9848 16.5201 16.9848 15.41C16.9848 14.2999 16.0849 13.4 14.9748 13.4C13.8648 13.4 12.9648 14.2999 12.9648 15.41C12.9648 16.5201 13.8648 17.42 14.9748 17.42Z" fill="#444555"/>
                    <path d="M22.0549 17.42C23.165 17.42 24.0649 16.5201 24.0649 15.41C24.0649 14.2999 23.165 13.4 22.0549 13.4C20.9448 13.4 20.0449 14.2999 20.0449 15.41C20.0449 16.5201 20.9448 17.42 22.0549 17.42Z" fill="#444555"/>
                    <path d="M29.135 17.42C30.2451 17.42 31.145 16.5201 31.145 15.41C31.145 14.2999 30.2451 13.4 29.135 13.4C28.0249 13.4 27.125 14.2999 27.125 15.41C27.125 16.5201 28.0249 17.42 29.135 17.42Z" fill="#444555"/>
                    <path d="M74.0626 50.955L52.5076 44.3975C50.9226 43.9175 49.1976 44.345 48.0226 45.5175C46.8451 46.695 46.4151 48.4125 46.9001 50.005L53.4576 71.5625C54.0376 73.4675 55.7001 74.7175 57.6901 74.745H57.7601C59.7201 74.745 61.3851 73.55 62.0151 71.685L65.0801 62.5775L74.1926 59.5075C76.0801 58.87 77.2801 57.17 77.2501 55.1825C77.2201 53.1925 75.9676 51.5325 74.0626 50.955ZM63.6426 58.3175C62.3201 58.765 61.2651 59.82 60.8201 61.14L57.7626 70.2525L51.2101 48.7075L72.7551 55.25L63.6426 58.3175Z" fill="#FF561D"/>
                  </svg>
                </div>
                <h3 className="my-5 3xl:text-4xl xl:text-3xl text-2xl font-aeonik duration-300 transition md:line-clamp-1 xl:line-clamp-none">Visual UI/UX Design</h3>
                <p>
                  Once all the stakeholders have given the green light for the best wireframe, our design experts move forward with the design. They'll use the information from the feedback to create intricate user interfaces that will appeal to the end users.
                </p>
            </motion.div>

            <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}
            className="bg-white 3xl:p-12 xl:p-8 p-4 service-card border-t-8 border-white duration-500 transition hover:border-[#FF561D]">
                <div className="service_icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 80 80" fill="none">
                      <path d="M77.25 40C77.25 19.46 60.5375 2.75 40 2.75C32.795 2.75 25.7925 4.82 19.75 8.7375C18.7075 9.4125 18.4125 10.8075 19.0875 11.85C19.7625 12.8925 21.155 13.1875 22.2 12.5125C24.8625 10.785 27.74 9.4675 30.745 8.5825C27.9575 12.5175 25.775 18.235 24.4925 25.1525C23.75 25.0475 23.005 24.975 22.26 24.855C21.0275 24.6475 19.8775 25.4875 19.6775 26.715C19.4775 27.9425 20.31 29.0975 21.5375 29.2975C22.2975 29.4225 23.0625 29.515 23.825 29.6225C23.425 32.8975 23.2 36.365 23.2 40C23.2 43.63 23.425 47.0925 23.8225 50.3625C19.1725 51.0325 14.595 52.035 10.0875 53.2775C8.2775 49.215 7.25 44.73 7.25 40C7.25 37.67 7.485 35.38 7.95 33.1925C8.21 31.9775 7.4325 30.7825 6.2175 30.525C5 30.2675 3.805 31.0425 3.5475 32.2575C3.02 34.75 2.75 37.355 2.75 40C2.75 60.54 19.46 77.25 40 77.25C40.2475 77.25 40.505 77.235 40.7675 77.21C60.95 76.7975 77.25 60.28 77.25 40ZM67.73 22.66C63.7025 23.73 59.605 24.565 55.4575 25.1575C54.1625 18.2675 51.9825 12.5275 49.2 8.59C56.9625 10.865 63.52 15.9475 67.73 22.66ZM40 7.25C44.2525 7.25 48.84 14.3025 51.01 25.705C43.75 26.4375 36.3775 26.4625 29.005 25.725C31.19 14.4 35.765 7.25 40 7.25ZM12.28 57.36C16.2925 56.295 20.3575 55.4075 24.485 54.815C25.7625 61.7325 27.94 67.45 30.725 71.3925C23.0025 69.105 16.48 64.04 12.28 57.36ZM49.2575 71.3975C50.1275 70.15 50.99 68.665 51.82 66.87C52.34 65.7425 51.85 64.405 50.7225 63.885C49.5825 63.3625 48.2575 63.8575 47.735 64.9825C45.4525 69.9175 42.6325 72.75 40 72.75C35.77 72.75 31.2 65.6175 29.015 54.32C32.5325 53.965 36.0675 53.715 39.6325 53.7C40.875 53.695 41.8775 52.685 41.8725 51.4425C41.8675 50.2025 40.8625 49.2025 39.6225 49.2025C39.62 49.2025 39.6175 49.2025 39.615 49.2025C35.815 49.2175 32.0475 49.4875 28.3 49.875C27.92 46.8025 27.7 43.5 27.7 40C27.7 36.515 27.9175 33.23 28.2975 30.17C32.205 30.5725 36.12 30.8 40 30.8C43.9225 30.8 47.8225 30.5925 51.6925 30.1925C52.015 32.8325 52.2275 35.635 52.275 38.61C52.295 39.8525 53.295 40.8575 54.56 40.825C55.8025 40.805 56.795 39.7825 56.7725 38.54C56.7225 35.4425 56.4975 32.48 56.1475 29.65C60.8075 28.98 65.405 28.0025 69.925 26.755C71.7275 30.81 72.75 35.285 72.75 40.0025C72.75 44.715 71.73 49.19 69.9275 53.2425C69.2575 53.06 68.57 52.8775 67.855 52.6975C66.6475 52.3875 65.425 53.1175 65.12 54.3225C64.8125 55.5275 65.5425 56.7525 66.745 57.0575C67.09 57.145 67.41 57.2325 67.7425 57.32C63.5425 64.025 57.005 69.1075 49.2575 71.3975Z" fill="#444555"/>
                      <path d="M10.2125 26.955C14.3275 26.955 17.675 23.6075 17.675 19.4925C17.675 15.3775 14.3275 12.0325 10.2125 12.0325C6.0975 12.0325 2.75 15.3775 2.75 19.4925C2.75 23.6075 6.0975 26.955 10.2125 26.955ZM10.2125 16.53C11.845 16.53 13.175 17.86 13.175 19.4925C13.175 21.125 11.845 22.455 10.2125 22.455C8.58 22.455 7.25 21.1275 7.25 19.4925C7.25 17.8575 8.58 16.53 10.2125 16.53Z" fill="#FF561D"/>
                      <path d="M53.5475 45.0325C49.4325 45.0325 46.085 48.38 46.085 52.495C46.085 56.61 49.435 59.9575 53.5475 59.9575C57.66 59.9575 61.01 56.61 61.01 52.495C61.01 48.38 57.66 45.0325 53.5475 45.0325ZM53.5475 55.4575C51.915 55.4575 50.585 54.1275 50.585 52.495C50.585 50.8625 51.9125 49.5325 53.5475 49.5325C55.1825 49.5325 56.51 50.8625 56.51 52.495C56.51 54.1275 55.18 55.4575 53.5475 55.4575Z" fill="#FF561D"/>
                  </svg>
                </div>
                <h3 className="my-5 3xl:text-4xl xl:text-3xl text-2xl font-aeonik duration-300 transition md:line-clamp-1 xl:line-clamp-none">Prototypes Development</h3>
                <p>
                  Cyberpoint is also a consultant UI UX design company. Besides the actual design, we offer expert advice on UI UX design and help create prototypes. If you're unsure what your application needs, we will develop a prototype to bring your product to life and show its functionality.
                </p>
            </motion.div>

            <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}
            className="bg-white 3xl:p-12 xl:p-8 p-4 service-card border-t-8 border-white duration-500 transition hover:border-[#FF561D]">
                <div className="service_icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 80 80" fill="none">
                      <path d="M6.2125 36.6975C9.5625 37.3375 12.9875 37.6625 16.3925 37.6625C19.7975 37.6625 23.2225 37.3375 26.575 36.6975C28.58 36.3125 30.035 34.5475 30.035 32.4975V31.195C30.035 26.8075 27.5075 23.035 23.855 21.1425C25.66 19.2725 26.7825 16.74 26.7825 13.9425C26.7825 8.21249 22.12 3.54999 16.39 3.54999C10.66 3.54999 6 8.21499 6 13.945C6 16.7425 7.1225 19.275 8.9275 21.145C5.2775 23.035 2.75 26.8075 2.75 31.1975V32.5C2.75 34.5475 4.205 36.3125 6.2125 36.6975ZM16.3925 8.05249C19.64 8.05249 22.285 10.695 22.285 13.945C22.285 17.1925 19.64 19.835 16.3925 19.835C13.145 19.835 10.5 17.1925 10.5 13.945C10.5 10.695 13.145 8.05249 16.3925 8.05249ZM7.25 31.1975C7.25 27.415 10.3275 24.335 14.1125 24.335H18.675C22.4575 24.335 25.5375 27.4125 25.5375 31.1975V32.315C19.5125 33.4425 13.27 33.4425 7.2525 32.315L7.25 31.1975Z" fill="#444555"/>
                      <path d="M69.5051 5.63501H42.0326C37.7626 5.63501 34.2876 9.11001 34.2876 13.38V21.4875C34.2876 25.7575 37.7626 29.2325 42.0326 29.2325H45.1226V31.9575C45.1226 33.3575 45.9051 34.605 47.1651 35.2175C47.6726 35.465 48.2151 35.585 48.7526 35.585C49.5476 35.585 50.3326 35.32 50.9901 34.805L58.0726 29.2325H69.5026C73.7726 29.2325 77.2501 25.7575 77.2501 21.4875V13.38C77.2501 9.11001 73.7751 5.63501 69.5051 5.63501ZM72.7501 21.485C72.7501 23.275 71.2951 24.73 69.5051 24.73H57.2951C56.7901 24.73 56.3026 24.9 55.9026 25.21L49.6251 30.15V26.98C49.6251 25.7375 48.6176 24.73 47.3751 24.73H42.0326C40.2426 24.73 38.7876 23.275 38.7876 21.485V13.38C38.7876 11.59 40.2426 10.135 42.0326 10.135H69.5026C71.2926 10.135 72.7476 11.59 72.7476 13.38L72.7501 21.485Z" fill="#FF561D"/>
                      <path d="M62.9626 15.1825H48.5801C47.3376 15.1825 46.3301 16.19 46.3301 17.4325C46.3301 18.675 47.3376 19.6825 48.5801 19.6825H62.9626C64.2051 19.6825 65.2126 18.675 65.2126 17.4325C65.2126 16.19 64.2051 15.1825 62.9626 15.1825Z" fill="#FF561D"/>
                      <path d="M71.0698 59.93C72.8748 58.06 73.9998 55.5275 73.9998 52.73C73.9998 47 69.3373 42.3375 63.6073 42.3375C57.8773 42.3375 53.2173 47 53.2173 52.73C53.2173 55.5275 54.3398 58.0625 56.1448 59.9325C52.4923 61.825 49.9648 65.595 49.9648 69.985V71.2875C49.9648 73.3375 51.4223 75.105 53.4273 75.4875C56.7723 76.1275 60.1973 76.4525 63.6073 76.4525C67.0198 76.4525 70.4448 76.1275 73.7898 75.4875C75.7948 75.105 77.2523 73.34 77.2523 71.2875V69.985C77.2498 65.5925 74.7223 61.82 71.0698 59.93ZM63.6048 46.835C66.8548 46.835 69.4948 49.48 69.4948 52.7275C69.4948 55.975 66.8523 58.62 63.6048 58.62C60.3573 58.62 57.7173 55.975 57.7173 52.7275C57.7173 49.48 60.3598 46.835 63.6048 46.835ZM72.7498 71.1C66.7423 72.225 60.4798 72.2275 54.4673 71.1V69.9825C54.4673 66.2 57.5423 63.12 61.3273 63.12H65.8898C69.6748 63.12 72.7498 66.1975 72.7498 69.9825V71.1Z" fill="#444555"/>
                      <path d="M37.9675 44.42H10.495C6.225 44.42 2.75 47.895 2.75 52.165V60.27C2.75 64.54 6.225 68.015 10.495 68.015H21.9275L29.01 73.5875C29.665 74.105 30.45 74.37 31.245 74.37C31.7825 74.37 32.325 74.2475 32.8325 74.0025C34.09 73.39 34.8725 72.1425 34.8725 70.7425V68.0175H37.965C42.235 68.0175 45.7125 64.5425 45.7125 60.2725V52.1675C45.7125 47.895 42.2375 44.42 37.9675 44.42ZM41.2125 60.27C41.2125 62.06 39.755 63.515 37.9675 63.515H32.625C31.3825 63.515 30.375 64.5225 30.375 65.765V68.935L24.1 63.9975C23.7025 63.685 23.2125 63.515 22.7075 63.515H10.495C8.705 63.515 7.25 62.06 7.25 60.27V52.165C7.25 50.375 8.705 48.92 10.495 48.92H37.9675C39.7575 48.92 41.2125 50.375 41.2125 52.165V60.27Z" fill="#FF561D"/>
                      <path d="M31.4225 53.9675H17.04C15.7975 53.9675 14.79 54.975 14.79 56.2175C14.79 57.46 15.7975 58.4675 17.04 58.4675H31.4225C32.665 58.4675 33.6725 57.46 33.6725 56.2175C33.6725 54.975 32.665 53.9675 31.4225 53.9675Z" fill="#FF561D"/>
                  </svg>
                </div>
                <h3 className="my-5 3xl:text-4xl xl:text-3xl text-2xl font-aeonik duration-300 transition md:line-clamp-1 xl:line-clamp-none">Frontend Development</h3>
                <p>
                  Once our UI/UX designers have created the designs, our web developers take up the project to implement the designs. They transform your idea fully into a digital product, such as a web or mobile application.
                </p>
            </motion.div>
          </div>
          {/* service box end */}
        </div>
      </section>

    {/* mvp development services start */}
    <section className="py-16 orange-bg">
        <div className="container mx-auto 3xl:container">
          <motion.div 
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: true, amount: 0.1}}
          className="text-center mx-auto max-w-6xl 3xl:max-w-7xl">
            <h2 className="text-4xl 3xl:text-[62px] xl:text-[56px] lg:text-[48px] md:text-[30px] md:leading-[32px] text-white font-aeonik lg:leading-[65px] leading-[42px] mb-5">Don't just adapt to the digital future. <br className='hidden md:block' />Shape it with us.</h2>
          </motion.div>

          <div className='text-center'>
            <a href="javasript:void(0);" className="uppercase rounded-full py-[10px] px-5 border hover:bg-[#2E2F30] bg-[#FF561D] text-white inline-block transition duration-500 mt-3">Talk To Experts</a>
          </div>
        </div>
      </section>
      {/* mvp development services end */}


      {/* Why build an MVP section start */}
      <section className="bg-white py-16">
        <div className="container 3xl:container mx-auto">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <motion.div 
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}
            className="md:w-2/4 w-full mb-6 md:mb-0">
              <Image src={UiUxImg} alt="About" loading="lazy" />
            </motion.div>
            <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}
             className="md:w-2/4 w-full 2xl:ms-32 xl:ms-24 lg:ms-16 md:ms-12">
              <div className="subtitle mb-4 flex items-center"><span className="bg-[#FF561D] w-2 h-2 inline-block mr-2"></span>08 — Our Services</div>
              <h2 className="text-4xl 3xl:text-[62px] xl:text-[56px] lg:text-[48px] md:text-[30px] md:leading-[32px] text-black font-aeonik lg:leading-[65px] mb-[30px] leading-[42px]">UI/UX design services <br className='hidden md:block' />the silent ambassador <br className='hidden md:block' />of your brand</h2>
              <p className="mb-6">
                Our user experience design services are aimed at showcasing the true picture of your business through impactful, branded digital interfaces tailor-made to the user. Instinctools delivers user interfaces that create a lasting impression and pull their weight to connect with the audience. <br />
                We help you reach your revenue and business goals as a one-off partner or long-term advisor that plugs into your team and helps your digital solutions evolve.
              </p>
              <div className="items-center my-8 flex flex-col sm:flex-row sm:gap-[30px] gap-5">
                <a href="javasript:void(0);" className="uppercase rounded-full py-[10px] px-5 border hover:bg-[#2E2F30] bg-[#FF561D] text-white inline-block transition duration-500 mt-3">Talk To Experts</a>
              </div>
            </motion.div>
          </div>
        </div>    
      </section>
      {/* Why build an MVP section end */}

      {/* why choose mvp development section start */}
      <section className='bg-[#efeae3] py-16'>
        <div className='container mx-auto 3xl:container'>
          <div className="md:w-3/5 3xl:w-[55%] w-full">
            <div className="subtitle mb-4 flex items-center">
              <span className="bg-[#FF561D] w-2 h-2 inline-block mr-2"></span>08 — Why Choose
            </div>
            <h2 className="text-4xl 3xl:text-[62px] xl:text-[56px] lg:text-[48px] md:text-[30px] md:leading-[32px] text-black font-aeonik lg:leading-[65px] mb-5 leading-[42px]">Why Cyberpoint for <br className='hidden xl:block' />UI/UX Design</h2>
            <p className="mb-6 text-[22px]">The following aspects make us the best UI UX design agency for your business needs:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-16">
            <div className='bg-transparent md:bg-white lg:bg-transparent'>
              <motion.div 
                  variants={fadeIn("up", 0.1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: true, amount: 0.1}}
                  className="bg-white md:p-12 p-8 xl:ps-28 lg:ps-24 md:mb-[0px] lg:mb-[1px] mb-[1px] md:mr-[1px] 3xl:h-60 xl:h-72 lg:h-96">
                    <div className='relative'>
                      <div className="text-[#FF561D] lg:absolute lg:top-2/4 text-4xl lg:-left-16 mb-4 lg:mb-0">01</div>
                      <h6 className="text-[#2E2F30] 3xl:text-[32px] lg:text-[26px] text-xl font-aeonik mb-4">Expertise</h6>
                      <p>
                        One of the aspects that sets us apart as a UI UX design services company is our portfolio. We have worked with tens of businesses to deliver innovative designs that meet the user's intent and uphold business values.
                      </p>
                    </div>
              </motion.div>

              <motion.div 
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: true, amount: 0.1}}
                className="bg-white md:p-12 p-8 xl:ps-28 lg:ps-24 relative md:mb-[0px] lg:mb-[1px] mb-[1px] md:mr-[1px] 3xl:h-60 xl:h-72 lg:h-96">
                <div className='relative'>
                <div className="text-[#FF561D] lg:absolute lg:top-2/4 text-4xl lg:-left-16 mb-4 lg:mb-0">02</div>
                  <h6 className="text-[#2E2F30] 3xl:text-[32px] lg:text-[26px] text-xl font-aeonik mb-4">Innovative Visual Designs</h6>
                  <p>
                    We utilize advanced technologies and trendy practices to develop innovative and visually appealing designs. Our goal is to bring your ideas to life in the best way possible regardless of your vision, available time, and budget.
                  </p>
                </div>
            </motion.div>
            
            </div>

            <div className='bg-transparent md:bg-white lg:bg-transparent'>
            <motion.div 
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: true, amount: 0.1}}
                className="bg-white md:p-12 p-8 xl:ps-28 lg:ps-24 relative md:mb-[0px] lg:mb-[1px] mb-[1px] md:mr-[1px] 3xl:h-60 xl:h-72 lg:h-96">
                <div className='relative'>
                  <div className="text-[#FF561D] lg:absolute lg:top-2/4 text-4xl lg:-left-16 mb-4 lg:mb-0">03</div>
                  <h6 className="text-[#2E2F30] 3xl:text-[32px] lg:text-[26px] text-xl font-aeonik mb-4">Agile Methodologies</h6>
                  <p>
                    Our project management approach centers on collaboration and constant improvement. We work as a team, keenly discussing project phases to make sure every aspect is in check. We also base our iterations on your feedback as well as other stakeholders that influence product perception.
                  </p>
                </div>
            </motion.div>

              <motion.div 
                  variants={fadeIn("up", 0.1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: true, amount: 0.1}}
                  className="bg-white md:p-12 p-8 xl:ps-28 lg:ps-24 relative md:mb-[0px] lg:mb-[1px] mb-[1px] 3xl:h-60 xl:h-72 lg:h-96">
                  <div className='relative'>
                    <div className="text-[#FF561D] lg:absolute lg:top-2/4 text-4xl lg:-left-16 mb-4 lg:mb-0">04</div>
                    <h6 className="text-[#2E2F30] 3xl:text-[32px] lg:text-[26px] text-xl font-aeonik mb-4">Scalable Designs</h6>
                    <p>
                      We create future-friendly designs that can accommodate trends and advancements. You don't have to worry about your application becoming obsolete.
                    </p>
                  </div>
              </motion.div>
            </div>            
          </div>
        </div>
      </section>

      {/* Industries section start */}
    <section className="bg-white py-16">
        <div className="container 3xl:container mx-auto">
          <motion.div 
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: true, amount: 0.1}}
          className="md:w-3/4 3xl:w-[55%] w-full">
            <div className="subtitle mb-4 flex items-center"><span className="bg-[#FF561D] w-2 h-2 inline-block mr-2"></span>05 — Industries We Serve</div>
            <h2 className="text-4xl 3xl:text-[62px] xl:text-[56px] lg:text-[48px] md:text-[30px] md:leading-[32px] text-black font-aeonik lg:leading-[65px] mb-5 leading-[42px]">Industries We Serve</h2>
            <p className="mb-6 text-[22px]">We are your technology partner gateway for scalable, responsive and secure solution.</p>
          </motion.div>
          {/* service box start */}
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-16">
            <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}
            className="bg-white 3xl:p-12 xl:p-8 p-4 inds-card">
                <div className="service_icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <path d="M55.0219 17.2369C53.9494 15.8156 52.3144 15 50.5313 15H16.5881L15.4969 8.45062C15.045 5.72625 12.7125 3.75 9.94875 3.75H5.625C4.58813 3.75 3.75 4.59 3.75 5.625C3.75 6.66 4.58813 7.5 5.625 7.5H9.94875C10.8694 7.5 11.6475 8.15812 11.7975 9.0675L13.1456 17.1544L16.4081 40.2319C16.8356 42.9956 19.1719 45 21.9675 45H45.1763C47.6756 45 49.8994 43.3219 50.5856 40.92L55.9425 22.17C56.43 20.4563 56.0944 18.6581 55.0219 17.2369ZM52.335 21.1406L46.9781 39.8906C46.7513 40.6912 46.0088 41.2519 45.1763 41.2519H21.9675C21.0356 41.2519 20.2575 40.5825 20.1187 39.6844L17.16 18.7519H50.5313C51.1238 18.7519 51.6694 19.0238 52.0294 19.4981C52.3856 19.9725 52.4981 20.5706 52.335 21.1406Z" fill="#2C2D36"/>
                    <path d="M18.75 52.5C18.75 50.4281 20.4281 48.75 22.5 48.75C24.5719 48.75 26.25 50.4281 26.25 52.5C26.25 54.5719 24.5719 56.25 22.5 56.25C20.4281 56.25 18.75 54.5719 18.75 52.5ZM45 56.25C47.0719 56.25 48.75 54.5719 48.75 52.5C48.75 50.4281 47.0719 48.75 45 48.75C42.9281 48.75 41.25 50.4281 41.25 52.5C41.25 54.5719 42.9281 56.25 45 56.25Z" fill="#FF561D"/>
                  </svg>
                </div>
                <h3 className="my-5 3xl:text-[32px] xl:text-[26px] text-2xl font-aeonik duration-300 transition md:line-clamp-1 xl:line-clamp-none">Retail & Commerce</h3>
                <p>
                  Retail digital products rely heavily on user-friendliness and visual appeal. We will partner with you to create the most intuitive UI for your retail business.
                </p>
            </motion.div>

            <motion.div 
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}
            className="bg-white 3xl:p-12 xl:p-8 p-4 border-r-md-none inds-card">
                <div className="service_icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <path d="M52.2134 10.7493C47.402 5.75023 39.634 5.75023 34.8226 10.7493L31.4437 14.2599C31.0667 14.6516 30.5464 14.873 30.0027 14.873C29.459 14.873 28.9387 14.6516 28.5617 14.2599L25.1829 10.7493C20.3714 5.75024 12.6035 5.75023 7.792 10.7493C4.50095 14.1687 3.59293 17.8541 4.15456 21.6713C4.18856 21.9023 4.22802 22.1342 4.27284 22.367C4.5254 23.6787 3.59445 25 2.25865 25C1.39224 25 0.621244 24.4276 0.438402 23.5807C0.343041 23.1391 0.26232 22.6966 0.19713 22.2535C-0.537277 17.2621 0.725565 12.3231 4.90996 7.97549C11.295 1.3415 21.6799 1.34151 28.0649 7.97549L30.0027 9.9889L31.9405 7.97549C38.3255 1.3415 48.7105 1.3415 55.0955 7.97549C59.2758 12.3188 60.5369 17.2548 59.8029 22.2439C59.0859 27.1172 56.489 31.9283 53.2019 36.3044C46.6213 45.0654 36.7672 52.741 31.1428 56.6432C30.4573 57.1189 29.5485 57.1189 28.8629 56.6434C24.3379 53.505 17.0594 47.9161 10.9578 41.2812C9.77914 39.9996 10.7169 38 12.4581 38C13.0447 38 13.6026 38.2501 14.0006 38.6811C19.3022 44.4237 25.5923 49.4072 30.0025 52.5543C35.6017 48.5571 44.217 41.6059 50.0037 33.9021C53.1047 29.7737 55.267 25.5932 55.8454 21.6616C56.4068 17.8459 55.4997 14.1637 52.2134 10.7493Z" fill="#2C2D36"/>
                    <path d="M14.2304 31.875C14.9497 31.875 15.6057 31.4635 15.9187 30.8158L17.6705 27.1904L22.3202 39.1185C22.5773 39.7779 23.1836 40.2364 23.8881 40.304C24.5926 40.3716 25.2751 40.0367 25.6528 39.4383L29.2428 33.75H40.3125C41.3481 33.75 42.1875 32.9106 42.1875 31.875C42.1875 30.8395 41.3481 30 40.3125 30H28.209C27.5654 30 26.9668 30.3301 26.6233 30.8743L24.4646 34.2947L19.6014 21.819C19.3305 21.1241 18.6734 20.6557 17.928 20.6264C17.1826 20.5973 16.4908 21.0126 16.1662 21.6843L13.054 28.125H3.75C2.71447 28.125 1.875 28.9645 1.875 30C1.875 31.0356 2.71447 31.875 3.75 31.875H14.2304Z" fill="#FF561D"/>
                  </svg>
                </div>
                <h3 className="my-5 3xl:text-[32px] xl:text-[26px] text-2xl font-aeonik duration-300 transition md:line-clamp-1 xl:line-clamp-none">Healthcare/Wellness</h3>
                <p>
                  Retail digital products rely heavily on user-friendliness and visual appeal. We will partner with you to create the most intuitive UI for your retail business.
                </p>
            </motion.div>

            <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}
            className="bg-white 3xl:p-12 xl:p-8 p-4 inds-card">
                <div className="service_icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <g clip-path="url(#clip0_1434_1480)">
                      <path d="M58.3882 26.9577C56.2286 24.7996 52.7152 24.7996 50.5557 26.9577L39.1973 38.3093C38.3278 36.3796 36.3855 35.033 34.1345 35.033H16.373C12.6217 35.033 9.09474 36.4917 6.44056 39.1407L0.40287 45.006C-0.115995 45.51 -0.127942 46.3391 0.376048 46.858C0.880038 47.3769 1.70917 47.3887 2.22792 46.8848C2.24127 46.8717 8.27322 41.0125 8.28528 41.0003C10.4455 38.8413 13.3178 37.6523 16.373 37.6523H34.1346C38.0057 37.7929 38.0282 43.3694 34.1346 43.5073H20.9258C20.2025 43.5073 19.6161 44.0936 19.6161 44.817C19.6161 45.5404 20.2024 46.1267 20.9258 46.1267H34.1346C36.8318 46.1267 39.0933 44.2234 39.5849 41.6252L52.4072 28.8104C54.2136 26.9874 57.4066 28.2882 57.3913 30.8729C57.3913 31.6519 57.0878 32.3844 56.5364 32.9352L38.9537 50.5076C37.4088 52.0518 35.3546 52.9107 33.1787 52.9265H7.26243C6.98191 52.9265 6.70889 53.0167 6.48331 53.1834L0.530653 57.5891C-0.0507567 58.0195 -0.17327 58.8396 0.257049 59.421C0.690178 60.006 1.51275 60.1222 2.08889 59.6947L7.69462 55.546H33.1886C36.0659 55.5252 38.771 54.3939 40.8056 52.3606L58.3883 34.7881C60.5366 32.7277 60.5378 29.0182 58.3882 26.9577Z" fill="#2C2D36"/>
                      <path d="M32.385 30.5077C23.9599 30.5077 17.1055 23.6532 17.1055 15.2281C17.8737 -5.01443 46.8996 -5.00881 47.6646 15.2283C47.6646 23.6532 40.8102 30.5077 32.385 30.5077ZM32.385 2.56791C25.4041 2.56791 19.7249 8.2472 19.7249 15.2281C20.3613 32.0007 44.4115 31.996 45.0454 15.228C45.0452 8.2472 39.366 2.56791 32.385 2.56791Z" fill="#2C2D36"/>
                      <path d="M33.9365 14.0751C32.7288 13.6294 31.6035 13.1447 31.2458 12.9882C31.0099 12.7928 31.0182 12.5238 31.0344 12.411C31.0575 12.2488 31.1764 11.8522 31.7758 11.6716C33.1377 11.2618 34.4079 12.2614 34.4448 12.2908C35.8158 13.3455 37.4067 11.4411 36.1231 10.2795C36.0622 10.2284 35.1028 9.43835 33.6946 9.10209V8.07373C33.6946 7.35036 33.1082 6.76392 32.3848 6.76392C31.6614 6.76392 31.075 7.35036 31.075 8.07373V9.14847C28.2416 9.88074 27.4019 13.6122 29.8795 15.23C30.2199 15.4192 31.255 15.861 33.0297 16.5328C33.3567 16.6534 34.4137 17.1016 34.2876 17.8079C34.1935 18.335 33.5443 18.8801 32.621 18.8801C31.6534 18.8801 30.7228 18.4907 30.1318 17.8385C29.6459 17.3025 28.8178 17.2621 28.2818 17.7476C27.7458 18.2334 27.7051 19.0617 28.1908 19.5977C28.9491 20.4344 29.9564 21.0236 31.0751 21.3072V22.3825C31.0751 23.1058 31.6616 23.6923 32.3849 23.6923C33.1083 23.6923 33.6947 23.1058 33.6947 22.3825V21.3795C37.4273 20.4821 38.4533 15.7415 33.9365 14.0751Z" fill="#FF561D"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_1434_1480">
                        <rect width="60" height="60" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3 className="my-5 3xl:text-[32px] xl:text-[26px] text-2xl font-aeonik duration-300 transition md:line-clamp-1 xl:line-clamp-none">Finance/Fintech</h3>
                <p>
                  Retail digital products rely heavily on user-friendliness and visual appeal. We will partner with you to create the most intuitive UI for your retail business.
                </p>
            </motion.div>

            <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}
            className="bg-white 3xl:p-12 xl:p-8 p-4 border-r-none inds-card">
                <div className="service_icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <path d="M2.5 41C1.12 41 0 39.8628 0 38.4615V21.5385C0 20.1372 1.12 19 2.5 19C3.88 19 5 20.1372 5 21.5385V38.4615C5 39.8628 3.88 41 2.5 41Z" fill="#FF561D"/>
                    <path d="M57.9664 18.8628L38.1329 7.89625C33.5628 5.36792 28.1134 5.36792 23.5433 7.89625L1.22081 20.2419C0.468083 20.6575 0 21.4478 0 22.3043C0 23.1607 0.46492 23.951 1.22081 24.3666L9.48817 28.9384V44.3413C9.48817 50.2922 20.5545 53 30.8365 53C41.1186 53 52.1849 50.2922 52.1849 44.3413V28.9384L57.9664 25.7425C59.2188 25.0467 60 23.7274 60 22.3011C60 20.8748 59.222 19.5555 57.9632 18.8597L57.9664 18.8628ZM47.4503 44.3004C47.1214 45.3961 41.5139 48.2802 30.8397 48.2802C20.1655 48.2802 14.5612 45.3961 14.2354 44.3445V31.5643L23.5433 36.7123C25.83 37.9749 28.3348 38.6077 30.8397 38.6077C33.3446 38.6077 35.8495 37.978 38.1361 36.7123L47.4472 31.5643V44.3004H47.4503ZM35.8305 32.5845C32.7057 34.313 28.9737 34.313 25.8489 32.5845L7.25845 22.3011L25.8489 12.0178C28.9737 10.2892 32.7057 10.2892 35.8305 12.0178L54.421 22.3011L35.8305 32.5845Z" fill="#2C2D36"/>
                  </svg>
                </div>
                <h3 className="my-5 3xl:text-[32px] xl:text-[26px] text-2xl font-aeonik duration-300 transition md:line-clamp-1 xl:line-clamp-none">Entertainment</h3>
                <p>
                  Retail digital products rely heavily on user-friendliness and visual appeal. We will partner with you to create the most intuitive UI for your retail business.
                </p>
            </motion.div>

            <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}
            className="bg-white 3xl:p-12 xl:p-8 p-4 border-b-none inds-card">
                <div className="service_icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <path d="M2.5 41C1.12 41 0 39.8628 0 38.4615V21.5385C0 20.1372 1.12 19 2.5 19C3.88 19 5 20.1372 5 21.5385V38.4615C5 39.8628 3.88 41 2.5 41Z" fill="#FF561D"/>
                    <path d="M57.9664 18.8628L38.1329 7.89625C33.5628 5.36792 28.1134 5.36792 23.5433 7.89625L1.22081 20.2419C0.468083 20.6575 0 21.4478 0 22.3043C0 23.1607 0.46492 23.951 1.22081 24.3666L9.48817 28.9384V44.3413C9.48817 50.2922 20.5545 53 30.8365 53C41.1186 53 52.1849 50.2922 52.1849 44.3413V28.9384L57.9664 25.7425C59.2188 25.0467 60 23.7274 60 22.3011C60 20.8748 59.222 19.5555 57.9632 18.8597L57.9664 18.8628ZM47.4503 44.3004C47.1214 45.3961 41.5139 48.2802 30.8397 48.2802C20.1655 48.2802 14.5612 45.3961 14.2354 44.3445V31.5643L23.5433 36.7123C25.83 37.9749 28.3348 38.6077 30.8397 38.6077C33.3446 38.6077 35.8495 37.978 38.1361 36.7123L47.4472 31.5643V44.3004H47.4503ZM35.8305 32.5845C32.7057 34.313 28.9737 34.313 25.8489 32.5845L7.25845 22.3011L25.8489 12.0178C28.9737 10.2892 32.7057 10.2892 35.8305 12.0178L54.421 22.3011L35.8305 32.5845Z" fill="#2C2D36"/>
                  </svg>
                </div>
                <h3 className="my-5 3xl:text-[32px] xl:text-[26px] text-2xl font-aeonik duration-300 transition md:line-clamp-1 xl:line-clamp-none">Education</h3>
                <p>
                  Retail digital products rely heavily on user-friendliness and visual appeal. We will partner with you to create the most intuitive UI for your retail business.
                </p>
            </motion.div>

            <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}
            className="bg-white 3xl:p-12 xl:p-8 p-4 border-b-none inds-card">
                <div className="service_icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <path d="M52.2134 10.7493C47.402 5.75023 39.634 5.75023 34.8226 10.7493L31.4437 14.2599C31.0667 14.6516 30.5464 14.873 30.0027 14.873C29.459 14.873 28.9387 14.6516 28.5617 14.2599L25.1829 10.7493C20.3714 5.75024 12.6035 5.75023 7.792 10.7493C4.50095 14.1687 3.59293 17.8541 4.15456 21.6713C4.18856 21.9023 4.22802 22.1342 4.27284 22.367C4.5254 23.6787 3.59445 25 2.25865 25C1.39224 25 0.621244 24.4276 0.438402 23.5807C0.343041 23.1391 0.26232 22.6966 0.19713 22.2535C-0.537277 17.2621 0.725565 12.3231 4.90996 7.97549C11.295 1.3415 21.6799 1.34151 28.0649 7.97549L30.0027 9.9889L31.9405 7.97549C38.3255 1.3415 48.7105 1.3415 55.0955 7.97549C59.2758 12.3188 60.5369 17.2548 59.8029 22.2439C59.0859 27.1172 56.489 31.9283 53.2019 36.3044C46.6213 45.0654 36.7672 52.741 31.1428 56.6432C30.4573 57.1189 29.5485 57.1189 28.8629 56.6434C24.3379 53.505 17.0594 47.9161 10.9578 41.2812C9.77914 39.9996 10.7169 38 12.4581 38C13.0447 38 13.6026 38.2501 14.0006 38.6811C19.3022 44.4237 25.5923 49.4072 30.0025 52.5543C35.6017 48.5571 44.217 41.6059 50.0037 33.9021C53.1047 29.7737 55.267 25.5932 55.8454 21.6616C56.4068 17.8459 55.4997 14.1637 52.2134 10.7493Z" fill="#2C2D36"/>
                    <path d="M14.2304 31.875C14.9497 31.875 15.6057 31.4635 15.9187 30.8158L17.6705 27.1904L22.3202 39.1185C22.5773 39.7779 23.1836 40.2364 23.8881 40.304C24.5926 40.3716 25.2751 40.0367 25.6528 39.4383L29.2428 33.75H40.3125C41.3481 33.75 42.1875 32.9106 42.1875 31.875C42.1875 30.8395 41.3481 30 40.3125 30H28.209C27.5654 30 26.9668 30.3301 26.6233 30.8743L24.4646 34.2947L19.6014 21.819C19.3305 21.1241 18.6734 20.6557 17.928 20.6264C17.1826 20.5973 16.4908 21.0126 16.1662 21.6843L13.054 28.125H3.75C2.71447 28.125 1.875 28.9645 1.875 30C1.875 31.0356 2.71447 31.875 3.75 31.875H14.2304Z" fill="#FF561D"/>
                  </svg>
                </div>
                <h3 className="my-5 3xl:text-[32px] xl:text-[26px] text-2xl font-aeonik duration-300 transition md:line-clamp-1 xl:line-clamp-none">Travel & Hospitality</h3>
                <p>
                  Retail digital products rely heavily on user-friendliness and visual appeal. We will partner with you to create the most intuitive UI for your retail business.
                </p>
            </motion.div>
          </div>
          {/* service box end */}
        </div>
    </section>
    {/* Industries section end */}


    {/* Our Approach to Saas Development section */}
    <section className="bg-[#2E2F30] py-16 ">
      <div className="container 3xl:container mx-auto">
          <div className="flex flex-col justify-between md:flex-row">
                <motion.div 
                    variants={fadeIn("up", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: true, amount: 0.1}}
                    className="3xl:w-[38%] md:w-2/5 w-full mb-6 md:mb-0">
                    <div className="subtitle mb-4 flex items-center text-white"><span className="bg-[#FF561D] w-2 h-2 inline-block mr-2"></span>05 — Methodology</div>
                    <h2 className="text-4xl 3xl:text-[62px] xl:text-[56px] lg:text-[48px] md:text-[30px] md:leading-[32px] text-white font-aeonik lg:leading-[65px] mb-5 leading-[42px]">Our Approach to UI/UX Development</h2>
                    <p className="mb-6 text-[22px] text-white">Our UI/UX design methodology includes:</p>
                </motion.div>

                <div className='3xl:w-[62%] md:w-3/5 xl:ps-16 md:ps-8 w-full'>
                    <motion.div 
                        variants={fadeIn("up", 0.1)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: true, amount: 0.1}}
                        className="bg-[#3A3B3D] md:p-12 p-8 md:ps-28 text-white mb-3">
                          <h6 className="md:text-4xl text-3xl font-aeonik relative mb-5"><div className="text-[#FF561D] md:absolute md:top-0 text-4xl md:-left-16 mb-3 md:mb-0">01</div>User Research and Analysis</h6>
                          <p>
                            UI/UX designs are user-centric. We conduct intensive user research to define several aspects. These aspects include the value of this product to the intended user, user demographic, user behavior, and preferences.
                          </p>

                          <p>
                            For the analysis, we dive into market research. Are there similar products in the market, what unique selling point (USP) can we incorporate in the design to give it an upper hand?
                          </p>
                    </motion.div>

                    <motion.div 
                        variants={fadeIn("up", 0.1)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: true, amount: 0.1}}
                        className="bg-[#3A3B3D] md:p-12 p-8 md:ps-28 text-white mb-3">
                          <h6 className="md:text-4xl text-3xl font-aeonik relative mb-5"><div className="text-[#FF561D] md:absolute md:top-0 text-4xl md:-left-16 mb-3 md:mb-0">02</div>Wireframing and Prototyping</h6>
                          <p>
                            First, we create several skeletal frameworks that show the core functionality, basic design, and application layout. We then share the wireframes with the stakeholders to get their feedback on the best pick.
                          </p>

                          <p>
                            Finally, we create a prototype based on the best wireframe. This prototype consists of the application's key elements, including navigation, core content, and calls to action.
                          </p>
                    </motion.div>

                    <motion.div 
                        variants={fadeIn("up", 0.1)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: true, amount: 0.1}}
                        className="bg-[#3A3B3D] md:p-12 p-8 md:ps-28 text-white mb-0">
                          <h6 className="md:text-4xl text-3xl font-aeonik relative mb-5"><div className="text-[#FF561D] md:absolute md:top-0 text-4xl md:-left-16 mb-3 md:mb-0">03</div>Iterative Design and Testing</h6>
                          <p>
                            For this part, we gather enough feedback from all stakeholders, including your team and early adopters. We then refine the design to create a final product that aligns with your business needs and goals.
                          </p>

                          <p>
                            Before launching the design, we test several aspects. These include the usability, the functionalities of the various user interface elements, and ensuring the user experience is satisfactory.
                          </p>
                    </motion.div>
                </div>
            </div>
      </div>
    </section>

      {/* client testimonials section start */}
      <ClientTestimonials />

    {/* company logos section start */}
        <LogoBrands />
      {/* faq section start */}
      <FAQAccordion/>

      {/* footer section start */}
      <Footer />
    </div>
  };

  export default UIUXDevelopment;