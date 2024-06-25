
import React from 'react';
import Header from '../header';
import { motion } from 'framer-motion';
import { fadeIn } from "@/components/AnimationVariants";
import Image from 'next/image';
import EnterpriseSoftwareBigImg from '@/assets/enterprise-software-big-img.jpg';
import EnterpriseSoftwareImg from '@/assets/enterprise-oftware-img.jpg';
import FAQAccordion from "@/components/FaqAccordion";
import Footer from "@/pages/footer";
import ClientTestimonials from '@/components/Testimonials';
import LogoBrands from '@/components/LogoBrands';

const EnterpriseSoftware = () => {
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
                <div className="subtitle mb-4 flex items-center"><span className="bg-[#FF561D] w-2 h-2 inline-block mr-2"></span>Services</div>
                <h2 className="text-4xl 3xl:text-[76px] xl:text-[60px] lg:text-[48px] md:text-[30px] md:leading-[32px] text-black font-aeonik 3xl:leading-[86px] xl:leading-[70px] lg:leading-[60px] mb-[30px] leading-[42px]">
                  Automate your business processes<br className='hidden md:block' /> with our Enterprise software<br className='hidden md:block' /> development service.
                </h2>
                <p className="mb-6 text-[22px]">
                  Our enterprise software solutions will help optimize operations, manage company resources, and increase efficiency.
                </p>
                <a href="javasript:void(0);" className="uppercase rounded-full py-[10px] px-5 border border-[#2E2F30] hover:bg-[#FF561D] hover:border-[#FF561D] hover:text-white inline-block transition duration-500 mt-3">Let's Talk About Your Project</a>
            </motion.div>
        </div>
    </section>

    <section className='bg-[#DDD]'>
      <Image src={EnterpriseSoftwareBigImg} alt='' />
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
            <div className="subtitle mb-4 flex items-center"><span className="bg-[#FF561D] w-2 h-2 inline-block mr-2"></span>08 — Our Services</div>
            <h2 className="text-4xl 3xl:text-[62px] xl:text-[56px] lg:text-[48px] md:text-[30px] md:leading-[32px] text-black font-aeonik lg:leading-[65px] mb-5 leading-[42px]">Types of Enterprise Software  <br className='hidden md:block' />
            Development We offer at Cyberpoint</h2>
            <p className="mb-6 text-[22px]">Cyberpoint Media is your go-to enterprise software development company. Our services include the following:</p>
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
                  <path d="M34.9964 59.1667C34.5541 59.1665 34.1198 59.0489 33.7378 58.826C33.3559 58.6032 33.0399 58.2829 32.8221 57.898C32.6043 57.5131 32.4926 57.0773 32.4983 56.6351C32.5039 56.1928 32.6269 55.7601 32.8545 55.3809L42.8545 38.7142C43.0233 38.4325 43.246 38.1868 43.5098 37.9912C43.7736 37.7955 44.0734 37.6537 44.392 37.5739C44.7106 37.4941 45.0418 37.4779 45.3666 37.5261C45.6915 37.5743 46.0037 37.686 46.2854 37.8548C46.5671 38.0237 46.8128 38.2464 47.0085 38.5102C47.2041 38.774 47.3459 39.0737 47.4257 39.3923C47.5055 39.7109 47.5218 40.0421 47.4736 40.367C47.4254 40.6919 47.3136 41.0041 47.1448 41.2858L37.1448 57.9525C36.9222 58.3233 36.6072 58.6301 36.2307 58.8429C35.8541 59.0557 35.4289 59.1672 34.9964 59.1667Z" fill="#FF561D"/>
                  <path d="M26.6665 59.1667C26.0811 59.1679 25.514 58.9627 25.0649 58.5872L15.0649 50.2539C14.7837 50.0191 14.5575 49.7254 14.4022 49.3935C14.247 49.0616 14.1665 48.6997 14.1665 48.3333C14.1665 47.9669 14.247 47.605 14.4022 47.2732C14.5575 46.9413 14.7837 46.6476 15.0649 46.4128L25.0649 38.0794C25.5746 37.6574 26.2308 37.4546 26.8897 37.5154C27.5487 37.5762 28.1566 37.8958 28.5804 38.404C29.0042 38.9122 29.2093 39.5677 29.1508 40.2268C29.0922 40.8859 28.7748 41.495 28.2681 41.9206L20.5728 48.3333L28.2681 54.7461C28.6628 55.0751 28.9466 55.5177 29.0809 56.0137C29.2151 56.5098 29.1932 57.0351 29.0181 57.5182C28.8431 58.0014 28.5234 58.4188 28.1026 58.7138C27.6818 59.0088 27.1804 59.1669 26.6665 59.1667Z" fill="#FF561D"/>
                  <path d="M53.3331 59.1667C52.8192 59.1669 52.3177 59.0088 51.897 58.7138C51.4762 58.4188 51.1565 58.0014 50.9815 57.5182C50.8064 57.0351 50.7845 56.5098 50.9187 56.0137C51.0529 55.5177 51.3367 55.0751 51.7315 54.7461L59.4268 48.3333L51.7315 41.9206C51.478 41.7107 51.2684 41.4528 51.1148 41.1617C50.9612 40.8706 50.8665 40.5521 50.8363 40.2243C50.806 39.8966 50.8408 39.5661 50.9385 39.2518C51.0362 38.9375 51.195 38.6456 51.4058 38.3929C51.6166 38.1401 51.8752 37.9314 52.1668 37.7788C52.4585 37.6262 52.7773 37.5326 53.1052 37.5035C53.433 37.4744 53.7634 37.5103 54.0773 37.6091C54.3912 37.7079 54.6826 37.8678 54.9346 38.0794L64.9346 46.4128C65.2159 46.6476 65.4421 46.9413 65.5974 47.2732C65.7526 47.605 65.8331 47.9669 65.8331 48.3333C65.8331 48.6997 65.7526 49.0616 65.5974 49.3935C65.4421 49.7254 65.2159 50.0191 64.9346 50.2539L54.9346 58.5872C54.4856 58.9627 53.9185 59.1679 53.3331 59.1667Z" fill="#FF561D"/>
                  <path d="M69.9998 72.5H9.99984C8.45332 72.4981 6.97068 71.8829 5.87712 70.7894C4.78357 69.6958 4.16838 68.2132 4.1665 66.6667V13.3333C4.16838 11.7868 4.78357 10.3042 5.87712 9.21062C6.97068 8.11706 8.45332 7.50188 9.99984 7.5H69.9998C71.5464 7.50188 73.029 8.11706 74.1226 9.21062C75.2161 10.3042 75.8313 11.7868 75.8332 13.3333V66.6667C75.8313 68.2132 75.2161 69.6958 74.1226 70.7894C73.029 71.8829 71.5464 72.4981 69.9998 72.5ZM9.99984 12.5C9.77895 12.5004 9.56724 12.5884 9.41105 12.7445C9.25486 12.9007 9.16693 13.1124 9.1665 13.3333V66.6667C9.16693 66.8876 9.25486 67.0993 9.41105 67.2555C9.56724 67.4116 9.77895 67.4996 9.99984 67.5H69.9998C70.2207 67.4996 70.4324 67.4116 70.5886 67.2555C70.7448 67.0993 70.8327 66.8876 70.8332 66.6667V13.3333C70.8327 13.1124 70.7448 12.9007 70.5886 12.7445C70.4324 12.5884 70.2207 12.5004 69.9998 12.5H9.99984Z" fill="#444555"/>
                  <path d="M73.3332 29.1667H6.6665C6.00346 29.1667 5.36758 28.9033 4.89874 28.4344C4.4299 27.9656 4.1665 27.3297 4.1665 26.6667C4.1665 26.0036 4.4299 25.3677 4.89874 24.8989C5.36758 24.4301 6.00346 24.1667 6.6665 24.1667H73.3332C73.9962 24.1667 74.6321 24.4301 75.1009 24.8989C75.5698 25.3677 75.8332 26.0036 75.8332 26.6667C75.8332 27.3297 75.5698 27.9656 75.1009 28.4344C74.6321 28.9033 73.9962 29.1667 73.3332 29.1667Z" fill="#444555"/>
                  <path d="M16.6663 21.6667C18.5073 21.6667 19.9997 20.1743 19.9997 18.3333C19.9997 16.4924 18.5073 15 16.6663 15C14.8254 15 13.333 16.4924 13.333 18.3333C13.333 20.1743 14.8254 21.6667 16.6663 21.6667Z" fill="#444555"/>
                  <path d="M26.6663 21.6667C28.5073 21.6667 29.9997 20.1743 29.9997 18.3333C29.9997 16.4924 28.5073 15 26.6663 15C24.8254 15 23.333 16.4924 23.333 18.3333C23.333 20.1743 24.8254 21.6667 26.6663 21.6667Z" fill="#444555"/>
                  <path d="M36.6663 21.6667C38.5073 21.6667 39.9997 20.1743 39.9997 18.3333C39.9997 16.4924 38.5073 15 36.6663 15C34.8254 15 33.333 16.4924 33.333 18.3333C33.333 20.1743 34.8254 21.6667 36.6663 21.6667Z" fill="#444555"/>
                </svg>

                </div>
                <h3 className="my-5 3xl:text-4xl xl:text-3xl text-2xl font-aeonik duration-300 transition md:line-clamp-1 xl:line-clamp-none">Custom Software Development</h3>
                <p>
                  We create, design, and develop bespoke software solutions for your business needs. Tell us what your business requires and we will deliver a unique software that seamlessly integrates with the existing framework.
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
                <h3 className="my-5 3xl:text-4xl xl:text-3xl text-2xl font-aeonik duration-300 transition md:line-clamp-1 xl:line-clamp-none">Web Application Development</h3>
                <p>
                  Our team will design and implement an enterprise web application to solve your business needs. Whether you want streamlined communications, CRM, ERP, or ECM systems, we got you.
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
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M75.8337 41.6667V16.6667C75.8337 9.76334 70.237 4.16667 63.3337 4.16667C50.747 4.16667 29.2537 4.16667 16.667 4.16667C9.76366 4.16667 4.16699 9.76334 4.16699 16.6667V63.3333C4.16699 70.2367 9.76366 75.8333 16.667 75.8333H41.667C43.047 75.8333 44.167 74.7133 44.167 73.3333C44.167 71.9533 43.047 70.8333 41.667 70.8333H16.667C12.5237 70.8333 9.16699 67.4767 9.16699 63.3333V16.6667C9.16699 12.5233 12.5237 9.16667 16.667 9.16667H63.3337C67.477 9.16667 70.8337 12.5233 70.8337 16.6667V41.6667C70.8337 43.0467 71.9537 44.1667 73.3337 44.1667C74.7137 44.1667 75.8337 43.0467 75.8337 41.6667Z" fill="#444555"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M73.3337 20.8333H6.66699C5.28699 20.8333 4.16699 21.9533 4.16699 23.3333C4.16699 24.7133 5.28699 25.8333 6.66699 25.8333H73.3337C74.7137 25.8333 75.8337 24.7133 75.8337 23.3333C75.8337 21.9533 74.7137 20.8333 73.3337 20.8333Z" fill="#444555"/>
                        <path d="M42.5 17.5C43.8807 17.5 45 16.3807 45 15C45 13.6193 43.8807 12.5 42.5 12.5C41.1193 12.5 40 13.6193 40 15C40 16.3807 41.1193 17.5 42.5 17.5Z" fill="#444555"/>
                        <path d="M51.667 17.5C53.0477 17.5 54.167 16.3807 54.167 15C54.167 13.6193 53.0477 12.5 51.667 12.5C50.2863 12.5 49.167 13.6193 49.167 15C49.167 16.3807 50.2863 17.5 51.667 17.5Z" fill="#444555"/>
                        <path d="M60.834 17.5C62.2147 17.5 63.334 16.3807 63.334 15C63.334 13.6193 62.2147 12.5 60.834 12.5C59.4533 12.5 58.334 13.6193 58.334 15C58.334 16.3807 59.4533 17.5 60.834 17.5Z" fill="#444555"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M30.1732 32.5433L25.0832 47.8167C24.6466 49.1233 25.3532 50.54 26.6632 50.9767C27.9732 51.4133 29.3899 50.7067 29.8266 49.3967L34.9166 34.1233C35.3532 32.8133 34.6466 31.3967 33.3366 30.96C32.0266 30.5267 30.6099 31.2333 30.1732 32.5433Z" fill="#444555"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M36.4741 37.6467L39.7975 40.97L36.4741 44.2933C35.5008 45.27 35.5008 46.8533 36.4741 47.83C37.4508 48.8033 39.0341 48.8033 40.0108 47.83L45.1008 42.7367C46.0775 41.76 46.0775 40.1767 45.1008 39.2033L40.0108 34.11C39.0341 33.1367 37.4508 33.1367 36.4741 34.11C35.5008 35.0867 35.5008 36.67 36.4741 37.6467Z" fill="#444555"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9905 34.11L14.9005 39.2033C13.9238 40.1767 13.9238 41.76 14.9005 42.7367L19.9905 47.83C20.9671 48.8033 22.5505 48.8033 23.5271 47.83C24.5005 46.8533 24.5005 45.27 23.5271 44.2933L20.2038 40.97L23.5271 37.6467C24.5005 36.67 24.5005 35.0867 23.5271 34.11C22.5505 33.1367 20.9671 33.1367 19.9905 34.11Z" fill="#444555"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M70.9538 60.12C70.9538 54.14 66.0971 49.2867 60.1204 49.2867C54.1404 49.2867 49.2871 54.14 49.2871 60.12C49.2871 66.0967 54.1404 70.9533 60.1204 70.9533C66.0971 70.9533 70.9538 66.0967 70.9538 60.12ZM65.9538 60.12C65.9538 63.3367 63.3371 65.9533 60.1204 65.9533C56.9004 65.9533 54.2871 63.3367 54.2871 60.12C54.2871 56.9 56.9004 54.2867 60.1204 54.2867C63.3371 54.2867 65.9538 56.9 65.9538 60.12Z" fill="#FF561D"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M46.667 62.62H51.547C52.927 62.62 54.047 61.4967 54.047 60.12C54.047 58.74 52.927 57.62 51.547 57.62H46.667C45.287 57.62 44.167 58.74 44.167 60.12C44.167 61.4967 45.287 62.62 46.667 62.62Z" fill="#FF561D"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M52.4239 71.28L55.8772 67.8267C56.8506 66.8533 56.8506 65.2667 55.8772 64.2933C54.9006 63.3167 53.3172 63.3167 52.3406 64.2933L48.8872 67.7433C47.9139 68.72 47.9139 70.3033 48.8872 71.28C49.8639 72.2567 51.4472 72.2567 52.4239 71.28Z" fill="#FF561D"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M62.6201 73.3333V68.4533C62.6201 67.0733 61.4968 65.9533 60.1201 65.9533C58.7401 65.9533 57.6201 67.0733 57.6201 68.4533V73.3333C57.6201 74.7133 58.7401 75.8333 60.1201 75.8333C61.4968 75.8333 62.6201 74.7133 62.6201 73.3333Z" fill="#FF561D"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M71.2807 67.5767L67.8274 64.1233C66.854 63.15 65.2674 63.15 64.294 64.1233C63.3174 65.1 63.3174 66.6833 64.294 67.66L67.744 71.1133C68.7207 72.0867 70.304 72.0867 71.2807 71.1133C72.2574 70.1367 72.2574 68.5533 71.2807 67.5767Z" fill="#FF561D"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M73.3341 57.62H68.4541C67.0741 57.62 65.9541 58.74 65.9541 60.12C65.9541 61.4967 67.0741 62.62 68.4541 62.62H73.3341C74.7141 62.62 75.8341 61.4967 75.8341 60.12C75.8341 58.74 74.7141 57.62 73.3341 57.62Z" fill="#FF561D"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M67.744 48.8867L64.294 52.34C63.3174 53.3167 63.3174 54.9 64.294 55.8767C65.2674 56.85 66.854 56.85 67.8274 55.8767L71.2807 52.4233C72.2574 51.4467 72.2574 49.8633 71.2807 48.8867C70.304 47.9133 68.7207 47.9133 67.744 48.8867Z" fill="#FF561D"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M57.6201 46.6667V51.5467C57.6201 52.9267 58.7401 54.0467 60.1201 54.0467C61.4968 54.0467 62.6201 52.9267 62.6201 51.5467V46.6667C62.6201 45.2867 61.4968 44.1667 60.1201 44.1667C58.7401 44.1667 57.6201 45.2867 57.6201 46.6667Z" fill="#FF561D"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M48.8872 52.2567L52.3406 55.7067C53.3172 56.6833 54.9006 56.6833 55.8772 55.7067C56.8506 54.7333 56.8506 53.1467 55.8772 52.1733L52.4239 48.72C51.4472 47.7433 49.8639 47.7433 48.8872 48.72C47.9139 49.6967 47.9139 51.28 48.8872 52.2567Z" fill="#FF561D"/>
                      </svg>
                </div>
                <h3 className="my-5 3xl:text-4xl xl:text-3xl text-2xl font-aeonik duration-300 transition md:line-clamp-1 xl:line-clamp-none">Custom Application Development</h3>
                <p>
                  Do you have particular use cases or target users in mind? We specialize in designing, developing, and deploying enterprise software for specific users and use cases.
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
                    <path d="M69.5046 5.63501H42.0321C37.7621 5.63501 34.2871 9.11001 34.2871 13.38V21.4875C34.2871 25.7575 37.7621 29.2325 42.0321 29.2325H45.1221V31.9575C45.1221 33.3575 45.9046 34.605 47.1646 35.2175C47.6721 35.465 48.2146 35.585 48.7521 35.585C49.5471 35.585 50.3321 35.32 50.9896 34.805L58.0721 29.2325H69.5021C73.7721 29.2325 77.2496 25.7575 77.2496 21.4875V13.38C77.2496 9.11001 73.7746 5.63501 69.5046 5.63501ZM72.7496 21.485C72.7496 23.275 71.2946 24.73 69.5046 24.73H57.2946C56.7896 24.73 56.3021 24.9 55.9021 25.21L49.6246 30.15V26.98C49.6246 25.7375 48.6171 24.73 47.3746 24.73H42.0321C40.2421 24.73 38.7871 23.275 38.7871 21.485V13.38C38.7871 11.59 40.2421 10.135 42.0321 10.135H69.5021C71.2921 10.135 72.7471 11.59 72.7471 13.38L72.7496 21.485Z" fill="#FF561D"/>
                    <path d="M62.9626 15.1825H48.5801C47.3376 15.1825 46.3301 16.19 46.3301 17.4325C46.3301 18.675 47.3376 19.6825 48.5801 19.6825H62.9626C64.2051 19.6825 65.2126 18.675 65.2126 17.4325C65.2126 16.19 64.2051 15.1825 62.9626 15.1825Z" fill="#FF561D"/>
                    <path d="M71.0698 59.93C72.8748 58.06 73.9998 55.5275 73.9998 52.73C73.9998 47 69.3373 42.3375 63.6073 42.3375C57.8773 42.3375 53.2173 47 53.2173 52.73C53.2173 55.5275 54.3398 58.0625 56.1448 59.9325C52.4923 61.825 49.9648 65.595 49.9648 69.985V71.2875C49.9648 73.3375 51.4223 75.105 53.4273 75.4875C56.7723 76.1275 60.1973 76.4525 63.6073 76.4525C67.0198 76.4525 70.4448 76.1275 73.7898 75.4875C75.7948 75.105 77.2523 73.34 77.2523 71.2875V69.985C77.2498 65.5925 74.7223 61.82 71.0698 59.93ZM63.6048 46.835C66.8548 46.835 69.4948 49.48 69.4948 52.7275C69.4948 55.975 66.8523 58.62 63.6048 58.62C60.3573 58.62 57.7173 55.975 57.7173 52.7275C57.7173 49.48 60.3598 46.835 63.6048 46.835ZM72.7498 71.1C66.7423 72.225 60.4798 72.2275 54.4673 71.1V69.9825C54.4673 66.2 57.5423 63.12 61.3273 63.12H65.8898C69.6748 63.12 72.7498 66.1975 72.7498 69.9825V71.1Z" fill="#444555"/>
                    <path d="M37.9675 44.42H10.495C6.225 44.42 2.75 47.895 2.75 52.165V60.27C2.75 64.54 6.225 68.015 10.495 68.015H21.9275L29.01 73.5875C29.665 74.105 30.45 74.37 31.245 74.37C31.7825 74.37 32.325 74.2475 32.8325 74.0025C34.09 73.39 34.8725 72.1425 34.8725 70.7425V68.0175H37.965C42.235 68.0175 45.7125 64.5425 45.7125 60.2725V52.1675C45.7125 47.895 42.2375 44.42 37.9675 44.42ZM41.2125 60.27C41.2125 62.06 39.755 63.515 37.9675 63.515H32.625C31.3825 63.515 30.375 64.5225 30.375 65.765V68.935L24.1 63.9975C23.7025 63.685 23.2125 63.515 22.7075 63.515H10.495C8.705 63.515 7.25 62.06 7.25 60.27V52.165C7.25 50.375 8.705 48.92 10.495 48.92H37.9675C39.7575 48.92 41.2125 50.375 41.2125 52.165V60.27Z" fill="#FF561D"/>
                    <path d="M31.4225 53.9675H17.04C15.7975 53.9675 14.79 54.975 14.79 56.2175C14.79 57.46 15.7975 58.4675 17.04 58.4675H31.4225C32.665 58.4675 33.6725 57.46 33.6725 56.2175C33.6725 54.975 32.665 53.9675 31.4225 53.9675Z" fill="#FF561D"/>
                  </svg>
                </div>
                <h3 className="my-5 3xl:text-4xl xl:text-3xl text-2xl font-aeonik duration-300 transition md:line-clamp-1 xl:line-clamp-none">API Development</h3>
                <p>
                  We will create a custom API that facilitates seamless integration and data exchange within and across your business.
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
                <h3 className="my-5 3xl:text-4xl xl:text-3xl text-2xl font-aeonik duration-300 transition md:line-clamp-1 xl:line-clamp-none">Custom Enterprise <br className='hidden md:block' />Software Development</h3>
                <p>
                  Our experts will craft and deploy custom enterprise software tailored to your business's unique needs. This ensures your company is more efficient, bettering both employees' and clients' experience.
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
            <h2 className="text-4xl 3xl:text-[62px] xl:text-[56px] lg:text-[48px] md:text-[30px] md:leading-[32px] text-white font-aeonik lg:leading-[65px] leading-[42px] mb-5">Take Your Business to Next Level With Our <br className='hidden md:block' /> Enterprise Software Development</h2>
          </motion.div>

          <div className='text-center'>
            <a href="javasript:void(0);" className="uppercase rounded-full py-[10px] px-5 border hover:bg-[#2E2F30] bg-[#FF561D] text-white inline-block transition duration-500 mt-3">Talk To Experts</a>
          </div>
        </div>
      </section>
      {/* mvp development services end */}


      {/* Why build an MVP section start */}
      <section className="bg-white pt-16">
        <div className="container 3xl:container mx-auto">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <motion.div 
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}
            className="md:w-2/4 w-full mb-6 md:mb-0 -ml-8">
              <Image src={EnterpriseSoftwareImg} alt="" loading="lazy" />
            </motion.div>
            <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}
             className="md:w-2/4 w-full 2xl:ms-32 xl:ms-24 lg:ms-16 md:ms-12">
              <div className="subtitle mb-4 flex items-center"><span className="bg-[#FF561D] w-2 h-2 inline-block mr-2"></span>02 — Our Services</div>
              <h2 className="text-4xl 3xl:text-[62px] xl:text-[56px] lg:text-[48px] md:text-[30px] md:leading-[32px] text-black font-aeonik lg:leading-[65px] mb-[30px] leading-[42px]">Cyberpoint Leading the <br className='hidden md:block' />Way in Enterprise <br className='hidden md:block' />Software Development</h2>
              <p className="mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ipsum ligula, cursus at facilisis id, ultricies id orci. Vestibulum sed vulputate eros, non condimentum eros. Sed lobortis ex quam, nec rutrum urna tempus eget. 
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ipsum ligula, cursus at facilisis id, ultricies id orci. Vestibulum sed vulputate eros, non condimentum eros. Sed lobortis ex quam, nec rutrum urna tempus eget. Ut mattis mauris hendrerit, pharetra mauris hendrerit, finibus massa. 
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
            <h2 className="text-4xl 3xl:text-[62px] xl:text-[56px] lg:text-[48px] md:text-[30px] md:leading-[32px] text-black font-aeonik lg:leading-[65px] mb-5 leading-[42px]">Why Cyberpoint Media for Enterprise <br className='hidden xl:block' /> Software Development</h2>
            <p className="mb-6 text-[22px]">This is why you should choose Cyberpoint Media as your go-to SaaS application development company:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-16">
          <motion.div 
                  variants={fadeIn("up", 0.1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: true, amount: 0.1}}
                  className="bg-white md:p-12 p-8 xl:ps-28 lg:ps-24 md:mb-[0px] lg:mb-[1px] mb-[1px] md:mr-[1px] 3xl:h-60 xl:h-72 lg:h-96">
                    <div className='relative'>
                      <div className="text-[#FF561D] lg:absolute lg:top-2/4 text-4xl lg:-left-16 mb-4 lg:mb-0">01</div>
                      <h6 className="text-[#2E2F30] 3xl:text-[32px] lg:text-[26px] text-xl font-aeonik mb-4">Customization Expertise</h6>
                      <p>
                        We tailor the software solutions to match the unique workflows of your enterprise.
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
                  <h6 className="text-[#2E2F30] 3xl:text-[32px] lg:text-[26px] text-xl font-aeonik mb-4">Scalability</h6>
                  <p>
                    Businesses are constantly growing and so should the custom enterprise software.  We develop software that grows with your business demands.
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
                  <div className="text-[#FF561D] lg:absolute lg:top-2/4 text-4xl lg:-left-16 mb-4 lg:mb-0">03</div>
                  <h6 className="text-[#2E2F30] 3xl:text-[32px] lg:text-[26px] text-xl font-aeonik mb-4">Security Focus</h6>
                  <p>
                    We prioritize the security of all our software solutions to safeguard sensitive enterprise data.
                  </p>
                </div>
            </motion.div>           
          </div>
        </div>
      </section>

      <section className="bg-[#2E2F30] py-16 text-white">
        <div className="container mx-auto 3xl:container">
          <motion.div 
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: true, amount: 0.1}}
          className="text-center mx-auto max-w-6xl">
            <div className="subtitle mb-4 justify-center flex items-center"><span className="bg-[#FF561D] w-2 h-2 inline-block mr-2"></span>08 — Our Solution</div>
            <h2 className="text-4xl 3xl:text-[62px] xl:text-[56px] lg:text-[48px] md:text-[30px] md:leading-[32px] font-aeonik lg:leading-[65px] leading-[42px] mb-5">Our Enterprise Solutions</h2>
            <p className='text-[22px]'>
              Here are our comprehensive enterprise solutions:
            </p>
          </motion.div>
          {/* service box start */}
          <div className="grid grid-cols-1 md:grid-cols-3 mt-16 text-center 3xl:gap-7 gap-4">
            <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}
            className="xl:py-8 3xl:px-12 p-4">
                <div className="service_icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 80 80" fill="none">
                    <g clip-path="url(#clip0_1550_2748)">
                      <path d="M40.0002 47.0588H32.9414V70.5883H37.6473V61.1765H40.0002C41.2978 61.1765 42.3532 62.232 42.3532 63.5294V70.5883H47.0591V63.5294C47.0591 61.7228 46.3762 60.0734 45.2559 58.8235C46.3762 57.5737 47.0591 55.9242 47.0591 54.1177C47.0591 50.2256 43.8926 47.0588 40.0002 47.0588ZM37.6473 56.4706V51.7647H40.0002C41.2978 51.7647 42.3532 52.8203 42.3532 54.1177C42.3532 55.4152 41.2978 56.4706 40.0002 56.4706H37.6473Z" fill="#FF561D"/>
                      <path d="M56.4705 61.1765H58.8235C62.7159 61.1765 65.8823 58.0101 65.8823 54.1177C65.8823 50.2256 62.7159 47.0588 58.8235 47.0588H51.7646V70.5883H56.4705V61.1765ZM56.4705 51.7647H58.8235C60.121 51.7647 61.1764 52.8203 61.1764 54.1177C61.1764 55.4152 60.121 56.4706 58.8235 56.4706H56.4705V51.7647Z" fill="#FF561D"/>
                      <path d="M16.4707 70.5883H28.2354V65.8824H21.1766V61.1765H25.8825V56.4706H21.1766V51.7647H28.2354V47.0588H16.4707V70.5883Z" fill="#FF561D"/>
                      <path d="M75.2941 37.6471V28.7512L66.8847 26.6488C66.4147 25.1862 65.8256 23.7641 65.1233 22.3978L69.5835 14.9641L60.3304 5.7109L52.8965 10.1711C51.5302 9.46871 50.1082 8.87953 48.6455 8.40957L46.5431 0H33.4569L31.3547 8.40957C29.8921 8.87953 28.47 9.46871 27.1037 10.1711L19.6698 5.7109L10.4168 14.9641L14.877 22.398C14.1746 23.7642 13.5854 25.1865 13.1156 26.6489L4.70588 28.7512V37.6471H0V80H80V37.6471H75.2941ZM9.41177 32.4254L16.9082 30.5512L17.2657 29.2115C18.2855 25.3893 19.9227 23.0904 20.3187 22.3208L16.3423 15.6935L20.3992 11.6365L27.0267 15.613L28.227 14.9178C31.65 12.9354 34.434 12.4664 35.2569 12.2024L37.1313 4.70588H42.8687L44.7427 12.2024C45.5572 12.4635 48.3482 12.9346 51.7727 14.9178L52.973 15.613L59.6005 11.6365L63.6576 15.6935L59.6809 22.3209C60.0678 23.0722 61.7142 25.3884 62.7341 29.2115L63.0916 30.5512L70.5882 32.4253V37.6471H51.5258C53.0195 30.3369 47.4014 23.5294 40 23.5294C32.5983 23.5294 26.9807 30.3373 28.4742 37.6471H9.41177V32.4254ZM32.9412 35.2941C32.9412 31.402 36.1076 28.2353 40 28.2353C43.8924 28.2353 47.0588 31.402 47.0588 35.2941C47.0588 36.0984 46.9209 36.8947 46.6547 37.6471H33.3453C33.0791 36.8947 32.9412 36.0984 32.9412 35.2941ZM75.2941 75.2941H4.70588V42.3529H75.2941V75.2941Z" fill="white"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_1550_2748">
                        <rect width="80" height="80" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3 className="my-5 3xl:text-4xl lg:text-3xl text-2xl font-aeonik">ERP Systems</h3>
                <p>
                  Our enterprise resource planning (ERP) systems provide efficient resource planning and management. It transforms your business by supporting automation in finance processes, supply chain, human resources, and service delivery.
                </p>
            </motion.div>

            <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}
            className="xl:py-8 3xl:px-12 p-4">
                <div className="service_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 80 80" fill="none">
                        <g clip-path="url(#clip0_1550_2736)">
                          <path d="M62.9315 9.00415C58.4978 9.00415 54.8906 12.6113 54.8906 17.0452C54.8906 18.3096 55.1923 19.57 55.7628 20.6904L58.8259 19.1304C58.4958 18.4819 58.3281 17.7802 58.3281 17.0452C58.3281 14.5068 60.3933 12.4416 62.9315 12.4416C65.47 12.4416 67.5351 14.5068 67.5351 17.0452C67.5351 18.6285 66.7362 20.0821 65.3978 20.9333L67.2429 23.8336C69.5782 22.3478 70.9726 19.8102 70.9726 17.0452C70.9724 12.6113 67.3654 9.00415 62.9315 9.00415Z" fill="#FF561D"/>
                          <path d="M59.3283 28.2664C59.3269 28.2593 59.3254 28.2523 59.3242 28.2453C59.14 27.3431 58.3695 26.6767 57.45 26.625C56.5317 26.574 55.6898 27.1487 55.4055 28.0245C55.3991 28.0442 55.3931 28.064 55.3875 28.084L52.9244 36.7241L50.3702 28.0667C50.3641 28.0462 50.3578 28.026 50.351 28.0059C50.0578 27.1325 49.2138 26.5637 48.2913 26.627C47.3719 26.6887 46.6083 27.3637 46.4344 28.2687C46.433 28.2751 46.4319 28.2814 46.4308 28.2878L44.0139 41.6777C43.8454 42.6119 44.466 43.5058 45.4 43.6744C46.3349 43.8432 47.2282 43.2224 47.3967 42.2883L48.7575 34.7488L51.0045 42.3649C51.0105 42.3852 51.0169 42.4054 51.0236 42.4254C51.3016 43.2541 52.0739 43.809 52.9473 43.809H52.9572C53.8348 43.8047 54.6067 43.241 54.8777 42.4063C54.8841 42.3866 54.8902 42.3666 54.8958 42.3466L57.0651 34.737L58.5115 42.3054C58.69 43.238 59.5911 43.8485 60.5223 43.671C61.4548 43.4927 62.0662 42.5926 61.8879 41.6602L59.3283 28.2664Z" fill="#FF561D"/>
                          <path d="M20.1907 43.8091C22.0846 43.8091 23.7846 43.1866 25.1071 42.0088C25.3665 41.7777 25.6127 41.5238 25.8388 41.254C26.4488 40.5268 26.3535 39.4426 25.6262 38.8327C24.8985 38.2229 23.8144 38.318 23.2048 39.0454C23.0852 39.1879 22.9559 39.3215 22.8207 39.4418C22.1279 40.0588 21.243 40.3716 20.1906 40.3716C17.3474 40.3716 15.0343 38.0585 15.0343 35.2154C15.0343 32.3723 17.3474 30.0592 20.1906 30.0592C21.224 30.0592 22.2205 30.3632 23.0723 30.9388C23.859 31.4702 24.9273 31.2632 25.4585 30.4768C25.9899 29.6903 25.783 28.6218 24.9965 28.0904C23.5741 27.1296 21.9123 26.6218 20.1904 26.6218C15.4518 26.6218 11.5967 30.477 11.5967 35.2155C11.5967 39.9541 15.452 43.8091 20.1907 43.8091Z" fill="#FF561D"/>
                          <path d="M40.5491 31.9137C40.5491 28.9956 38.0844 26.6216 35.0547 26.6216H31.4009L31.4007 26.6217C31.3993 26.6217 31.3979 26.6216 31.3965 26.6216C30.4473 26.6216 29.6777 27.3911 29.6777 28.3403V42.0903C29.6777 43.0395 30.4473 43.809 31.3965 43.809C32.3457 43.809 33.1152 43.0395 33.1152 42.0903V38.1981L37.5402 43.2257C37.8799 43.6118 38.3543 43.8089 38.8311 43.8089C39.2344 43.8089 39.6394 43.6678 39.966 43.3803C40.6785 42.7531 40.7477 41.6671 40.1207 40.9546L36.6261 36.9842C38.8922 36.3314 40.5491 34.3059 40.5491 31.9137ZM35.0546 33.7684C34.6076 33.7684 33.8463 33.7716 33.1352 33.775C33.1318 33.0808 33.1268 30.785 33.1248 30.0591H35.0546C36.1696 30.0591 37.1116 30.9084 37.1116 31.9137C37.1116 32.9191 36.1696 33.7684 35.0546 33.7684Z" fill="#FF561D"/>
                          <path d="M79.1407 19.6251L77.8643 18.8881C77.9393 18.2766 77.9772 17.6604 77.9772 17.0451C77.9772 16.4298 77.9394 15.8134 77.8643 15.202L79.1407 14.4651C79.5354 14.2371 79.8235 13.8618 79.9415 13.4214C80.0594 12.9812 79.9977 12.512 79.7697 12.1171L75.6188 4.92779C75.1441 4.10577 74.0934 3.82389 73.271 4.29873L71.994 5.03607C71.0077 4.28983 69.9402 3.67295 68.8024 3.19186V1.71874C68.8024 0.769528 68.0329 0 67.0837 0H58.7819C57.8326 0 57.0631 0.769528 57.0631 1.71874V3.19186C55.9253 3.67295 54.858 4.28967 53.8716 5.03623L52.5944 4.29873C52.1997 4.07092 51.7305 4.0092 51.2902 4.12702C50.8499 4.24498 50.4744 4.53311 50.2464 4.92779L46.0957 12.1175C45.6211 12.9396 45.9028 13.9907 46.7247 14.4653L48.001 15.2021C47.926 15.8137 47.888 16.4301 47.888 17.0452C47.888 17.4573 47.9058 17.8698 47.9396 18.2812H11.8352C7.91596 18.2812 4.72754 21.4696 4.72754 25.3888V52.8856H8.16503V25.3888C8.16503 23.3651 9.81142 21.7187 11.8352 21.7187H61.6822C63.7057 21.7187 65.3521 23.3651 65.3521 25.3888V58.967H30.7545V62.4044H68.1009V66.6232C68.1009 68.9494 66.2084 70.8419 63.8821 70.8419H27.9504V74.2794H63.8821C68.1038 74.2794 71.5384 70.8449 71.5384 66.6232V60.6857C71.5384 59.7365 70.7688 58.967 69.8196 58.967H68.7898V30.9036C69.9323 30.4219 71.0038 29.8035 71.9938 29.0543L73.271 29.7918C73.6657 30.0197 74.1349 30.0814 74.5752 29.9635C75.0155 29.8455 75.391 29.5574 75.619 29.1627L79.7699 21.973C80.2443 21.151 79.9629 20.0999 79.1407 19.6251ZM74.2935 14.659C74.4569 15.442 74.5398 16.2446 74.5398 17.0451C74.5398 17.8454 74.4569 18.6482 74.2935 19.4312C74.1418 20.1577 74.4737 20.8996 75.1166 21.2709L75.9337 21.7426L73.5015 25.9554L72.6816 25.4819C72.038 25.1104 71.2285 25.1946 70.6751 25.6905C70.089 26.2158 69.4585 26.6743 68.7901 27.0655V25.3888C68.7901 21.4696 65.6017 18.2812 61.6826 18.2812H51.3924C51.3486 17.8704 51.3258 17.4576 51.3258 17.0452C51.3258 16.2452 51.4086 15.4424 51.5722 14.6592C51.7241 13.9326 51.392 13.1906 50.7491 12.8195L49.932 12.3478L52.3641 8.13513L53.1841 8.60856C53.828 8.98028 54.6373 8.8959 55.1906 8.39997C56.3953 7.32028 57.7836 6.51794 59.3169 6.01545C60.0231 5.7842 60.5004 5.12529 60.5004 4.38217V3.43749H65.3648V4.38217C65.3648 5.12514 65.8423 5.7842 66.5482 6.01545C68.0817 6.51794 69.4701 7.32028 70.6746 8.39981C71.2279 8.89575 72.0373 8.98028 72.6812 8.6084L73.501 8.13513L75.9332 12.3478L75.1162 12.8195C74.4737 13.1904 74.1418 13.9324 74.2935 14.659Z" fill="white"/>
                          <path d="M46.5801 52.5408C47.5294 52.5408 48.2989 51.7712 48.2989 50.822C48.2989 49.8728 47.5294 49.1033 46.5801 49.1033H36.7588C35.8096 49.1033 35.04 49.8728 35.04 50.822C35.04 51.7712 35.8096 52.5408 36.7588 52.5408H46.5801Z" fill="white"/>
                          <path d="M59.9899 52.5408C60.9391 52.5408 61.7086 51.7712 61.7086 50.822C61.7086 49.8728 60.9391 49.1033 59.9899 49.1033H53.4551C52.5059 49.1033 51.7363 49.8728 51.7363 50.822C51.7363 51.7712 52.5059 52.5408 53.4551 52.5408H59.9899Z" fill="white"/>
                          <path d="M16.3465 47.3069C7.33294 47.3069 0 54.6398 0 63.6534C0 72.6669 7.33294 79.9997 16.3465 79.9997C25.3601 79.9997 32.693 72.6668 32.693 63.6534C32.693 54.64 25.3599 47.3069 16.3465 47.3069ZM29.1375 61.9346H18.0651V50.8622C23.8104 51.6303 28.3694 56.1894 29.1375 61.9346ZM3.43749 63.6534C3.43749 57.1184 8.31981 51.7056 14.6278 50.8622V63.6534C14.6278 64.0359 14.7554 64.4076 14.9904 64.7095L22.8476 74.7988C20.9368 75.9177 18.716 76.5624 16.3463 76.5624C9.2284 76.5622 3.43749 70.7713 3.43749 63.6534ZM25.5582 72.6848L19.8634 65.3721H29.1375C28.7594 68.2004 27.4638 70.7415 25.5582 72.6848Z" fill="#FF561D"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_1550_2736">
                            <rect width="80" height="80" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                </div>
                <h3 className="my-5 3xl:text-4xl lg:text-3xl text-2xl font-aeonik">CRM Software</h3>
                <p>
                  We help you streamline the customer experience, from the first lead to turning them into a loyal client. Our software solutions are customer-centric to enhance relations through timely communication, sales delivery, and engagement.
                </p>
            </motion.div>

            <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}
            className="xl:py-8 3xl:px-12 p-4">
                <div className="service_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 80 80" fill="none">
                        <path d="M17.5 4.16651C14.259 4.16248 11.1279 5.34147 8.69439 7.48219C6.26092 9.62292 4.6924 12.5782 4.28325 15.7933C3.87409 19.0085 4.65243 22.2624 6.47217 24.9444C8.2919 27.6264 11.0279 29.552 14.1667 30.3598V53.3332C14.1667 53.9962 14.4301 54.6321 14.8989 55.1009C15.3678 55.5698 16.0036 55.8332 16.6667 55.8332C17.3297 55.8332 17.9656 55.5698 18.4345 55.1009C18.9033 54.6321 19.1667 53.9962 19.1667 53.3332V30.6665C22.5253 30.2454 25.597 28.5595 27.7559 25.9524C29.9147 23.3453 30.9983 20.0132 30.7858 16.6349C30.5733 13.2567 29.0807 10.0865 26.6122 7.77051C24.1437 5.45447 20.8849 4.16679 17.5 4.16985V4.16651ZM17.5 25.8332C15.8518 25.8332 14.2407 25.3444 12.8703 24.4288C11.4999 23.5131 10.4318 22.2116 9.80103 20.6889C9.1703 19.1662 9.00527 17.4906 9.32681 15.8741C9.64836 14.2576 10.442 12.7727 11.6075 11.6073C12.7729 10.4419 14.2578 9.64818 15.8743 9.32664C17.4908 9.00509 19.1663 9.17012 20.6891 9.80085C22.2118 10.4316 23.5133 11.4997 24.4289 12.8701C25.3446 14.2405 25.8334 15.8517 25.8334 17.4998C25.8334 19.71 24.9554 21.8296 23.3926 23.3924C21.8298 24.9552 19.7102 25.8332 17.5 25.8332ZM65.8334 51.0865V21.6665C65.8316 19.2359 64.8653 16.9054 63.1466 15.1867C61.4279 13.468 59.0973 12.5016 56.6667 12.4998H41.6667C41.0036 12.4998 40.3678 12.7632 39.8989 13.2321C39.4301 13.7009 39.1667 14.3368 39.1667 14.9998C39.1667 15.6629 39.4301 16.2988 39.8989 16.7676C40.3678 17.2365 41.0036 17.4998 41.6667 17.4998H56.6667C57.7712 17.5016 58.83 17.9412 59.611 18.7222C60.392 19.5032 60.8316 20.562 60.8334 21.6665V51.0865C57.7983 51.7061 55.1013 53.4305 53.2654 55.9255C51.4294 58.4205 50.5853 61.5083 50.8967 64.5903C51.208 67.6723 52.6526 70.5289 54.9505 72.6064C57.2483 74.6838 60.2357 75.834 63.3334 75.834C66.431 75.834 69.4184 74.6838 71.7162 72.6064C74.0141 70.5289 75.4587 67.6723 75.7701 64.5903C76.0814 61.5083 75.2373 58.4205 73.4014 55.9255C71.5654 53.4305 68.8685 51.7061 65.8334 51.0865ZM63.3334 70.8332C61.85 70.8332 60.4 70.3933 59.1666 69.5692C57.9332 68.7451 56.9719 67.5738 56.4043 66.2033C55.8366 64.8329 55.6881 63.3249 55.9775 61.87C56.2669 60.4151 56.9812 59.0788 58.0301 58.0299C59.079 56.981 60.4153 56.2667 61.8702 55.9773C63.325 55.6879 64.833 55.8364 66.2035 56.4041C67.5739 56.9717 68.7453 57.933 69.5694 59.1664C70.3935 60.3998 70.8334 61.8498 70.8334 63.3332C70.8316 65.3218 70.0408 67.2284 68.6347 68.6345C67.2286 70.0407 65.3219 70.8314 63.3334 70.8332Z" fill="white"/>
                        <path d="M51.6003 21.4132C51.8615 21.6205 52.0785 21.8778 52.2387 22.1701C52.399 22.4624 52.4991 22.7839 52.5333 23.1155C52.5674 23.4471 52.5349 23.7821 52.4377 24.101C52.3404 24.4198 52.1804 24.716 51.967 24.9721C51.7536 25.2282 51.4911 25.439 51.195 25.5922C50.8989 25.7453 50.5752 25.8377 50.2429 25.8639C49.9105 25.8901 49.5763 25.8496 49.2599 25.7447C48.9435 25.6398 48.6512 25.4727 48.4003 25.2533L38.4003 16.9199C38.1185 16.6856 37.8916 16.3921 37.736 16.0603C37.5803 15.7285 37.4996 15.3664 37.4996 14.9999C37.4996 14.6334 37.5803 14.2714 37.736 13.9395C37.8916 13.6077 38.1185 13.3142 38.4003 13.0799L48.4003 4.74658C48.6512 4.52709 48.9435 4.35999 49.2599 4.25512C49.5763 4.15024 49.9105 4.10971 50.2429 4.1359C50.5752 4.1621 50.8989 4.25449 51.195 4.40764C51.4911 4.5608 51.7536 4.77162 51.967 5.02771C52.1804 5.2838 52.3404 5.57999 52.4377 5.89884C52.5349 6.21769 52.5674 6.55278 52.5333 6.88438C52.4991 7.21597 52.399 7.53739 52.2387 7.82972C52.0785 8.12205 51.8615 8.37938 51.6003 8.58659L43.9037 14.9999L51.6003 21.4132ZM29.167 63.3333C29.167 65.8055 28.4339 68.2223 27.0604 70.2779C25.6868 72.3335 23.7346 73.9357 21.4505 74.8817C19.1665 75.8278 16.6531 76.0754 14.2284 75.5931C11.8036 75.1107 9.57632 73.9202 7.82816 72.1721C6.08001 70.4239 4.8895 68.1966 4.40718 65.7719C3.92487 63.3471 4.17241 60.8338 5.1185 58.5497C6.0646 56.2656 7.66676 54.3134 9.72237 52.9399C11.778 51.5664 14.1947 50.8333 16.667 50.8333C19.9811 50.8368 23.1585 52.1549 25.5019 54.4983C27.8454 56.8418 29.1635 60.0191 29.167 63.3333ZM24.167 63.3333C24.167 61.8499 23.7271 60.3998 22.903 59.1665C22.0789 57.9331 20.9076 56.9718 19.5371 56.4042C18.1667 55.8365 16.6587 55.688 15.2038 55.9774C13.749 56.2668 12.4126 56.9811 11.3637 58.03C10.3148 59.0788 9.6005 60.4152 9.31111 61.8701C9.02172 63.3249 9.17024 64.8329 9.7379 66.2034C10.3056 67.5738 11.2669 68.7452 12.5002 69.5693C13.7336 70.3934 15.1836 70.8333 16.667 70.8333C18.6556 70.8315 20.5622 70.0407 21.9683 68.6346C23.3745 67.2285 24.1652 65.3218 24.167 63.3333Z" fill="#FF561D"/>
                      </svg>
                </div>
                <h3 className="my-5 3xl:text-4xl lg:text-3xl text-2xl font-aeonik">Workflow Automation</h3>
                <p>
                  Digital transformation in business includes automating tasks that don't need manual input. We deliver workflow automation software that makes work easier and increases productivity.
                </p>
            </motion.div>
          </div>
          {/* service box end */}

          <div className='text-center mt-10'>
            <a href="javasript:void(0);" className="uppercase rounded-full py-[10px] px-5 border hover:bg-[#2E2F30] bg-[#FF561D] text-white inline-block transition duration-500 mt-3 border-[#FF561D] hover:border-white">Talk To Experts</a>
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
            <p className="mb-6 text-[22px]">We offer our Saas application development services to a wide range of industries, including:</p>
          </motion.div>
          {/* service box start */}
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-16">
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
                <h3 className="my-5 3xl:text-[32px] xl:text-[26px] text-2xl font-aeonik duration-300 transition md:line-clamp-1 xl:line-clamp-none">Healthcare</h3>
                <p>
                  We design and develop custom software solutions for the healthcare sector, from electronic health records, appointment scheduling software, and hospital management systems to patient management apps.
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
                      <g clip-path="url(#clip0_1550_2373)">
                        <path d="M58.3882 26.958C56.2286 24.7998 52.7152 24.7998 50.5557 26.958L39.1973 38.3095C38.3278 36.3799 36.3855 35.0333 34.1345 35.0333H16.373C12.6217 35.0333 9.09474 36.492 6.44056 39.141L0.40287 45.0063C-0.115995 45.5103 -0.127942 46.3394 0.376048 46.8583C0.880038 47.3771 1.70917 47.389 2.22792 46.8851C2.24127 46.872 8.27322 41.0128 8.28528 41.0006C10.4455 38.8415 13.3178 37.6526 16.373 37.6526H34.1346C38.0057 37.7931 38.0282 43.3697 34.1346 43.5075H20.9258C20.2025 43.5075 19.6161 44.0939 19.6161 44.8172C19.6161 45.5406 20.2024 46.1269 20.9258 46.1269H34.1346C36.8318 46.1269 39.0933 44.2236 39.5849 41.6255L52.4072 28.8107C54.2136 26.9876 57.4066 28.2884 57.3913 30.8731C57.3913 31.6521 57.0878 32.3846 56.5364 32.9355L38.9537 50.5079C37.4088 52.0521 35.3546 52.9109 33.1787 52.9268H7.26243C6.98191 52.9268 6.70889 53.0169 6.48331 53.1836L0.530653 57.5894C-0.0507567 58.0197 -0.17327 58.8398 0.257049 59.4212C0.690178 60.0063 1.51275 60.1225 2.08889 59.695L7.69462 55.5463H33.1886C36.0659 55.5254 38.771 54.3941 40.8056 52.3608L58.3883 34.7884C60.5366 32.7279 60.5378 29.0184 58.3882 26.958Z" fill="#2C2D36"/>
                        <path d="M32.385 30.5077C23.9599 30.5077 17.1055 23.6532 17.1055 15.2281C17.8737 -5.01443 46.8996 -5.00881 47.6646 15.2283C47.6646 23.6532 40.8102 30.5077 32.385 30.5077ZM32.385 2.56791C25.4041 2.56791 19.7249 8.2472 19.7249 15.2281C20.3613 32.0007 44.4115 31.996 45.0454 15.228C45.0452 8.2472 39.366 2.56791 32.385 2.56791Z" fill="#2C2D36"/>
                        <path d="M33.9365 14.0754C32.7288 13.6297 31.6035 13.1449 31.2458 12.9884C31.0099 12.7931 31.0182 12.524 31.0344 12.4112C31.0575 12.249 31.1764 11.8524 31.7758 11.6718C33.1377 11.262 34.4079 12.2617 34.4448 12.2911C35.8158 13.3458 37.4067 11.4413 36.1231 10.2798C36.0622 10.2286 35.1028 9.4386 33.6946 9.10233V8.07397C33.6946 7.35061 33.1082 6.76416 32.3848 6.76416C31.6614 6.76416 31.075 7.35061 31.075 8.07397V9.14871C28.2416 9.88098 27.4019 13.6125 29.8795 15.2302C30.2199 15.4195 31.255 15.8613 33.0297 16.533C33.3567 16.6536 34.4137 17.1019 34.2876 17.8081C34.1935 18.3352 33.5443 18.8803 32.621 18.8803C31.6534 18.8803 30.7228 18.491 30.1318 17.8387C29.6459 17.3027 28.8178 17.2623 28.2818 17.7478C27.7458 18.2337 27.7051 19.062 28.1908 19.5979C28.9491 20.4347 29.9564 21.0238 31.0751 21.3075V22.3827C31.0751 23.1061 31.6616 23.6925 32.3849 23.6925C33.1083 23.6925 33.6947 23.1061 33.6947 22.3827V21.3798C37.4273 20.4823 38.4533 15.7417 33.9365 14.0754Z" fill="#FF561D"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1550_2373">
                          <rect width="60" height="60" fill="white"/>
                        </clipPath>
                      </defs>
                  </svg>

                </div>
                <h3 className="my-5 3xl:text-[32px] xl:text-[26px] text-2xl font-aeonik duration-300 transition md:line-clamp-1 xl:line-clamp-none">Finance & Banking</h3>
                <p>
                  Enterprise software has transformed the finance and banking industry. Our experts design and develop secure software solutions for financial management, banking operations, and customer relationship management.
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
                  <path d="M48.75 35.6904H11.25C10.877 35.6904 10.5194 35.8386 10.2556 36.1023C9.99191 36.366 9.84375 36.7237 9.84375 37.0967V56.2498C9.84375 56.6228 9.99191 56.9805 10.2556 57.2442C10.5194 57.5079 10.877 57.6561 11.25 57.6561H48.75C49.123 57.6561 49.4806 57.5079 49.7444 57.2442C50.0081 56.9805 50.1562 56.6228 50.1562 56.2498V37.0967C50.1562 36.7237 50.0081 36.366 49.7444 36.1023C49.4806 35.8386 49.123 35.6904 48.75 35.6904ZM27.6562 38.5029H32.3438V54.8436H27.6562V38.5029ZM24.8438 54.8436H20.1562V38.5029H24.8438V54.8436ZM35.1562 38.5029H39.8438V54.8436H35.1562V38.5029ZM12.6562 38.5029H17.3438V54.8436H12.6562V38.5029ZM47.3438 54.8436H42.6562V38.5029H47.3438V54.8436Z" fill="#FF5C01"/>
                  <path d="M56.25 57.6562H3.75C3.37704 57.6562 3.01935 57.5081 2.75563 57.2444C2.49191 56.9806 2.34375 56.623 2.34375 56.25V3.75C2.34375 3.37704 2.49191 3.01935 2.75563 2.75563C3.01935 2.49191 3.37704 2.34375 3.75 2.34375H20.8875C21.2605 2.34375 21.6181 2.49191 21.8819 2.75563C22.1456 3.01935 22.2938 3.37704 22.2938 3.75V21.3281L37.7812 10.8562C37.9913 10.7113 38.2376 10.6275 38.4925 10.6142C38.7474 10.601 39.001 10.6588 39.225 10.7812C39.4504 10.9002 39.6393 11.0782 39.7714 11.2961C39.9035 11.5141 39.9739 11.7639 39.975 12.0187V21.3281L55.4625 10.8562C55.6726 10.7113 55.9188 10.6275 56.1738 10.6142C56.4287 10.601 56.6823 10.6588 56.9062 10.7812C57.1323 10.8994 57.3218 11.0772 57.454 11.2953C57.5862 11.5135 57.6561 11.7637 57.6562 12.0187V56.25C57.6562 56.623 57.5081 56.9806 57.2444 57.2444C56.9806 57.5081 56.623 57.6562 56.25 57.6562ZM5.15625 54.8438H54.8438V14.6625L39.375 25.1344C39.1637 25.2772 38.9175 25.3599 38.6628 25.3735C38.4081 25.3872 38.1544 25.3313 37.929 25.2119C37.7037 25.0924 37.515 24.914 37.3833 24.6955C37.2516 24.4771 37.1817 24.2269 37.1813 23.9719V14.6625L21.675 25.1344C21.4637 25.2772 21.2175 25.3599 20.9628 25.3735C20.7081 25.3872 20.4544 25.3313 20.229 25.2119C20.0037 25.0924 19.815 24.914 19.6833 24.6955C19.5515 24.4771 19.4817 24.2269 19.4813 23.9719V5.15625H5.15625V54.8438Z" fill="#2C2D36"/>
                </svg>
                </div>
                <h3 className="my-5 3xl:text-[32px] xl:text-[26px] text-2xl font-aeonik duration-300 transition md:line-clamp-1 xl:line-clamp-none">Manufacturing</h3>
                <p>
                  We help manufacturing companies streamline operations with custom enterprise software like ERP systems, workflow automation, supply chain management, and inventory management.
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
                  <path d="M55.0219 17.2369C53.9494 15.8156 52.3144 15 50.5313 15H16.5881L15.4969 8.45062C15.045 5.72625 12.7125 3.75 9.94875 3.75H5.625C4.58813 3.75 3.75 4.59 3.75 5.625C3.75 6.66 4.58813 7.5 5.625 7.5H9.94875C10.8694 7.5 11.6475 8.15812 11.7975 9.0675L13.1456 17.1544L16.4081 40.2319C16.8356 42.9956 19.1719 45 21.9675 45H45.1763C47.6756 45 49.8994 43.3219 50.5856 40.92L55.9425 22.17C56.43 20.4563 56.0944 18.6581 55.0219 17.2369ZM52.335 21.1406L46.9781 39.8906C46.7513 40.6912 46.0088 41.2519 45.1763 41.2519H21.9675C21.0356 41.2519 20.2575 40.5825 20.1187 39.6844L17.16 18.7519H50.5313C51.1238 18.7519 51.6694 19.0238 52.0294 19.4981C52.3856 19.9725 52.4981 20.5706 52.335 21.1406Z" fill="#2C2D36"/>
                  <path d="M18.75 52.5C18.75 50.4281 20.4281 48.75 22.5 48.75C24.5719 48.75 26.25 50.4281 26.25 52.5C26.25 54.5719 24.5719 56.25 22.5 56.25C20.4281 56.25 18.75 54.5719 18.75 52.5ZM45 56.25C47.0719 56.25 48.75 54.5719 48.75 52.5C48.75 50.4281 47.0719 48.75 45 48.75C42.9281 48.75 41.25 50.4281 41.25 52.5C41.25 54.5719 42.9281 56.25 45 56.25Z" fill="#FF561D"/>
                </svg>
                </div>
                <h3 className="my-5 3xl:text-[32px] xl:text-[26px] text-2xl font-aeonik duration-300 transition md:line-clamp-1 xl:line-clamp-none">E-commerce & Retail</h3>
                <p>
                  Our developers have partnered with retail and E-commerce businesses to build online shopping platforms, custom relationship solutions, and inventory management systems. We have developed cutting-edge SaaS, PaaS, and on-premise platforms for our clients.
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
                  <path d="M2.5 41C1.12 41 0 39.8628 0 38.4615V21.5385C0 20.1372 1.12 19 2.5 19C3.88 19 5 20.1372 5 21.5385V38.4615C5 39.8628 3.88 41 2.5 41Z" fill="#FF561D"/>
                  <path d="M57.9664 18.8628L38.1329 7.89625C33.5628 5.36792 28.1134 5.36792 23.5433 7.89625L1.22081 20.2419C0.468083 20.6575 0 21.4478 0 22.3043C0 23.1607 0.46492 23.951 1.22081 24.3666L9.48817 28.9384V44.3413C9.48817 50.2922 20.5545 53 30.8365 53C41.1186 53 52.1849 50.2922 52.1849 44.3413V28.9384L57.9664 25.7425C59.2188 25.0467 60 23.7274 60 22.3011C60 20.8748 59.222 19.5555 57.9632 18.8597L57.9664 18.8628ZM47.4503 44.3004C47.1214 45.3961 41.5139 48.2802 30.8397 48.2802C20.1655 48.2802 14.5612 45.3961 14.2354 44.3445V31.5643L23.5433 36.7123C25.83 37.9749 28.3348 38.6077 30.8397 38.6077C33.3446 38.6077 35.8495 37.978 38.1361 36.7123L47.4472 31.5643V44.3004H47.4503ZM35.8305 32.5845C32.7057 34.313 28.9737 34.313 25.8489 32.5845L7.25845 22.3011L25.8489 12.0178C28.9737 10.2892 32.7057 10.2892 35.8305 12.0178L54.421 22.3011L35.8305 32.5845Z" fill="#2C2D36"/>
                </svg>
                </div>
                <h3 className="my-5 3xl:text-[32px] xl:text-[26px] text-2xl font-aeonik duration-300 transition md:line-clamp-1 xl:line-clamp-none">Education</h3>
                <p>
                  Education software solutions are our forte. We create online learning platforms, virtual classrooms, student information systems, and administrative tools.
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
                    <g clip-path="url(#clip0_1550_1723)">
                      <path d="M6.52229 7C5.94575 7 5.39282 7.2286 4.98514 7.63552C4.57746 8.04244 4.34843 8.59434 4.34843 9.16981C4.34843 9.74528 4.57746 10.2972 4.98514 10.7041C5.39282 11.111 5.94575 11.3396 6.52229 11.3396H6.5362C1.94234 17.0954 -0.367457 24.338 0.0476172 31.6853C0.462691 39.0326 3.57357 45.9701 8.78658 51.1739C9.19432 51.5809 9.74732 51.8095 10.3239 51.8095C10.9006 51.8095 11.4536 51.5809 11.8613 51.1739C12.269 50.7669 12.4981 50.2149 12.4981 49.6394C12.4981 49.0638 12.269 48.5119 11.8613 48.1049C7.4763 43.7285 4.82805 37.9147 4.40665 31.7395C3.98525 25.5643 5.81922 19.4457 9.56917 14.5162C9.60094 15.0818 9.85303 15.6125 10.2716 15.9951C10.6902 16.3776 11.242 16.5816 11.8092 16.5635C12.3764 16.5453 12.9141 16.3065 13.3072 15.898C13.7004 15.4896 13.918 14.9438 13.9134 14.3774V9.16981C13.9134 8.59434 13.6844 8.04244 13.2767 7.63552C12.869 7.2286 12.3161 7 11.7396 7H6.52229ZM51.2134 8.82611C51.0115 8.6246 50.7718 8.46475 50.5081 8.3557C50.2443 8.24664 49.9616 8.19051 49.6761 8.19051C49.3905 8.19051 49.1078 8.24664 48.844 8.3557C48.5803 8.46475 48.3406 8.6246 48.1387 8.82611C47.9368 9.02763 47.7767 9.26685 47.6674 9.53014C47.5581 9.79343 47.5019 10.0756 47.5019 10.3606C47.5019 10.6456 47.5581 10.9278 47.6674 11.1911C47.7767 11.4544 47.9368 11.6936 48.1387 11.8951C52.523 16.2719 55.1708 22.0856 55.5922 28.2606C56.0136 34.4356 54.1801 40.554 50.4308 45.4838C50.3991 44.9182 50.147 44.3875 49.7284 44.0049C49.3098 43.6224 48.758 43.4184 48.1908 43.4365C47.6236 43.4547 47.0859 43.6935 46.6928 44.102C46.2996 44.5104 46.082 45.0562 46.0866 45.6226V50.8302C46.0866 52.0279 47.0605 53 48.2604 53H53.4777C54.0543 53 54.6072 52.7714 55.0149 52.3645C55.4225 51.9576 55.6516 51.4057 55.6516 50.8302C55.6516 50.2547 55.4225 49.7028 55.0149 49.2959C54.6072 48.889 54.0543 48.6604 53.4777 48.6604H53.4638C58.0577 42.9046 60.3675 35.662 59.9524 28.3147C59.5373 20.9674 56.4264 14.0299 51.2134 8.82611Z" fill="#2C2D36"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M24.2059 5.20022L15.6053 27.8273H23.0065C23.3193 27.8273 23.6284 27.893 23.9134 28.0199C24.1985 28.1468 24.4529 28.332 24.6597 28.5633C24.8666 28.7946 25.0212 29.0666 25.1132 29.3613C25.2053 29.656 25.2327 29.9667 25.1937 30.2726L22.6361 50.4578L43.1147 25.2185H37.1175C36.768 25.2186 36.4234 25.1368 36.1123 24.9797C35.8011 24.8227 35.5323 24.595 35.328 24.3154C35.1236 24.0358 34.9897 23.7122 34.9371 23.3715C34.8845 23.0308 34.9148 22.6826 35.0256 22.3557L40.5359 6.06287C40.6018 5.86684 40.6196 5.65819 40.5877 5.45407C40.5559 5.24995 40.4753 5.05621 40.3527 4.88878C40.2301 4.72135 40.0689 4.58502 39.8824 4.49101C39.6959 4.397 39.4895 4.34799 39.28 4.34801H25.4512C25.1814 4.34855 24.918 4.43003 24.6963 4.58162C24.4745 4.73322 24.3047 4.94776 24.2095 5.19675L24.2059 5.20022ZM20.082 3.66624C20.4929 2.58945 21.227 1.66173 22.1862 1.00672C23.1455 0.351714 24.2844 0.000538128 25.4512 2.00667e-07H39.28C40.1885 -0.000238474 41.0841 0.212438 41.8929 0.620496C42.7017 1.02855 43.4005 1.62031 43.9318 2.34697C44.4631 3.07364 44.8116 3.91441 44.9486 4.79997C45.0856 5.68552 45.0072 6.59051 44.7198 7.44032L40.1761 20.8705H44.0319C44.7789 20.8712 45.5105 21.0797 46.1428 21.4718C46.775 21.864 47.2824 22.424 47.6065 23.0875C47.9306 23.7511 48.0585 24.4913 47.9753 25.2232C47.8921 25.9552 47.6014 26.6491 47.1363 27.2255L21.1968 59.1852C20.8966 59.5546 20.4824 59.8174 20.0169 59.9335C19.5515 60.0497 19.0603 60.0129 18.6181 59.8287C18.1758 59.6445 17.8066 59.323 17.5665 58.913C17.3265 58.5031 17.2287 58.027 17.288 57.5573L20.5053 32.1753H14.9668C14.3252 32.1756 13.6931 32.0223 13.1248 31.7287C12.5565 31.4351 12.069 31.0099 11.704 30.4896C11.3391 29.9693 11.1076 29.3695 11.0295 28.7416C10.9514 28.1137 11.029 27.4765 11.2556 26.8846L20.082 3.66624Z" fill="#FF5C01"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_1550_1723">
                        <rect width="60" height="60" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3 className="my-5 3xl:text-[32px] xl:text-[26px] text-2xl font-aeonik duration-300 transition md:line-clamp-1 xl:line-clamp-none">Energy & Utilities</h3>
                <p>
                  We support the transformation of the energy and utilities industry by creating infrastructure monitoring, sustainability initiatives, and supply chain management systems.
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
                    <g clip-path="url(#clip0_1550_1735)">
                      <path d="M59.4946 33.7592L53.5329 23.3518C52.8503 22.1679 51.5779 21.431 50.2148 21.431H37.5725V18.0726C37.5725 15.9625 35.855 14.2471 33.747 14.2471H28.8946C27.894 14.2471 27.0826 15.0585 27.0826 16.0592C27.0826 17.0598 27.894 17.8712 28.8946 17.8712H33.747C33.8537 17.8712 33.9483 17.9659 33.9483 18.0726V45.8357H21.7792C20.7966 43.6008 18.5698 42.0323 15.9745 42.0323C13.3792 42.0323 11.1524 43.6008 10.1698 45.8357H3.8255C3.71678 45.8357 3.62416 45.743 3.62416 45.6343V32.0236C3.62416 31.0229 2.81275 30.2115 1.81208 30.2115C0.811409 30.2115 0 31.0229 0 32.0236V45.6343C0 47.7444 1.71745 49.4598 3.8255 49.4598H9.73893C10.2564 52.4397 12.8456 54.7169 15.9725 54.7169C19.0993 54.7169 21.6866 52.4397 22.206 49.4598C28.3832 49.4598 34.5604 49.4578 40.7396 49.4578C41.257 52.4397 43.8463 54.7169 46.9732 54.7169C50.1 54.7169 52.6893 52.4377 53.2067 49.4578H56.1745C58.2846 49.4578 60 47.7404 60 45.6323V35.6598C60 34.9974 59.8248 34.343 59.4946 33.7592ZM50.3899 25.1578L55.0369 33.3122H47.4564C47.3497 33.3122 47.255 33.2175 47.255 33.1108V25.0571H50.2148C50.2873 25.0571 50.3537 25.0954 50.3899 25.1578ZM15.9725 51.0947C14.4745 51.0947 13.2544 49.8766 13.2544 48.3766C13.2544 46.8766 14.4725 45.6585 15.9725 45.6585C17.4725 45.6585 18.6906 46.8766 18.6906 48.3766C18.6906 49.8766 17.4705 51.0947 15.9725 51.0947ZM46.9732 51.0947C45.4752 51.0947 44.255 49.8766 44.255 48.3766C44.255 46.8766 45.4732 45.6585 46.9732 45.6585C48.4732 45.6585 49.6913 46.8766 49.6913 48.3766C49.6913 49.8766 48.4711 51.0947 46.9732 51.0947ZM56.1745 45.8337H52.7758C51.7933 43.6008 49.5664 42.0323 46.9732 42.0323C44.3799 42.0323 42.153 43.5988 41.1705 45.8337H37.5725V25.0571H43.6309V33.1108C43.6309 35.2209 45.3483 36.9363 47.4564 36.9363H56.3758V45.6323C56.3758 45.7451 56.2873 45.8337 56.1745 45.8337Z" fill="#2C2D36"/>
                      <path d="M10.1597 32.4746C10.6651 32.8531 11.255 33.0424 11.847 33.0424C12.4369 33.0424 13.0268 32.8531 13.5302 32.4746C16.5866 30.1813 23.6919 24.0968 23.6919 17.1263C23.6919 10.5947 18.3765 5.2793 11.847 5.2793C5.31544 5.2793 0 10.5947 0 17.1263C0 24.0907 7.10537 30.1813 10.1597 32.4746ZM11.845 8.90547C16.3772 8.90547 20.0638 12.592 20.0638 17.1263C20.0638 21.3162 15.9081 26.0337 11.845 29.2008C7.78188 26.0316 3.62416 21.3142 3.62416 17.1263C3.62416 12.592 7.31074 8.90547 11.845 8.90547Z" fill="#FF5C01"/>
                      <path d="M11.8451 18.763C12.8426 18.763 13.6511 17.9544 13.6511 16.9569C13.6511 15.9595 12.8426 15.1509 11.8451 15.1509C10.8477 15.1509 10.0391 15.9595 10.0391 16.9569C10.0391 17.9544 10.8477 18.763 11.8451 18.763Z" fill="#FF5C01"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_1550_1735">
                        <rect width="60" height="60" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3 className="my-5 3xl:text-[32px] xl:text-[26px] text-2xl font-aeonik duration-300 transition md:line-clamp-1 xl:line-clamp-none">Transportation & Logistics</h3>
                <p>
                  We have worked with multiple transportation and logistics clients to develop custom software that optimizes their business operations. These include supply chain management, fleet tracking, and route optimization solutions.
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
                        <g clip-path="url(#clip0_1550_2315)">
                          <path d="M54.6886 25.773C55.3978 25.773 55.9727 25.1981 55.9727 24.4889C55.9727 23.7798 55.3978 23.2049 54.6886 23.2049H50.3833V20.2604H54.6886C55.3978 20.2604 55.9727 19.6855 55.9727 18.9764C55.9727 18.2672 55.3978 17.6923 54.6886 17.6923H50.3833V15.8991C50.3833 15.5587 50.2483 15.2323 50.0076 14.9915L46.6322 11.6132C46.3915 11.3721 46.0646 11.2367 45.7239 11.2367H43.9303V6.93541C43.9303 6.22627 43.3554 5.65137 42.6462 5.65137C41.9371 5.65137 41.3622 6.22627 41.3622 6.93541V11.2367H38.4171V6.93541C38.4171 6.22627 37.8422 5.65137 37.133 5.65137C36.4239 5.65137 35.849 6.22627 35.849 6.93541V11.2367H31.6232V13.8048H45.1917L47.8153 16.4307V43.5687L45.1922 46.1916H31.623V48.7597H35.8488V53.0643C35.8488 53.7735 36.4237 54.3484 37.1329 54.3484C37.842 54.3484 38.4169 53.7735 38.4169 53.0643V48.7597H41.3621V53.0643C41.3621 53.7735 41.937 54.3484 42.6461 54.3484C43.3553 54.3484 43.9302 53.7735 43.9302 53.0643V48.7597H45.7237C46.0643 48.7597 46.3909 48.6244 46.6316 48.3836L50.007 45.0086C50.2479 44.7677 50.3832 44.4411 50.3832 44.1005V42.304H54.6886C55.3978 42.304 55.9727 41.7291 55.9727 41.02C55.9727 40.3108 55.3978 39.7359 54.6886 39.7359H50.3833V36.7948H54.6886C55.3978 36.7948 55.9727 36.2198 55.9727 35.5107C55.9727 34.8016 55.3978 34.2267 54.6886 34.2267H50.3833V31.2822H54.6886C55.3978 31.2822 55.9727 30.7073 55.9727 29.9982C55.9727 29.289 55.3978 28.7141 54.6886 28.7141H50.3833V25.773H54.6886Z" fill="#2C2D36"/>
                          <path d="M43.3047 42.9661H31.623V40.398H42.0207V19.6023H31.623V17.0342H43.3047C44.0139 17.0342 44.5888 17.6091 44.5888 18.3182V41.682C44.5888 42.3912 44.014 42.9661 43.3047 42.9661Z" fill="#2C2D36"/>
                          <path d="M22.1416 28.7144H31.6227V31.2824H22.1416V28.7144Z" fill="#2C2D36"/>
                          <path d="M19.1668 34.2573C16.8203 34.2573 14.9111 32.3469 14.9111 29.9986C14.9111 27.6522 16.8202 25.7432 19.1668 25.7432C21.5152 25.7432 23.4259 27.6522 23.4259 29.9986C23.426 32.3469 21.5152 34.2573 19.1668 34.2573ZM19.1668 28.3113C18.2362 28.3113 17.4792 29.0681 17.4792 29.9986C17.4792 30.9308 18.2362 31.6892 19.1668 31.6892C20.0991 31.6892 20.8578 30.9308 20.8578 29.9986C20.8579 29.0683 20.0993 28.3113 19.1668 28.3113Z" fill="#FF5C01"/>
                          <path d="M31.4416 23.9338H26.3377C25.9972 23.9338 25.6706 23.7985 25.4299 23.5578L21.2832 19.4118L23.099 17.5957L26.8695 21.3657H31.4416V23.9338Z" fill="#2C2D36"/>
                          <path d="M20.0883 20.6567C18.9979 20.6568 17.9075 20.2416 17.0775 19.4116C17.0774 19.4115 17.0776 19.4118 17.0775 19.4116C16.2732 18.6075 15.8301 17.5381 15.8301 16.4009C15.8301 15.2636 16.2731 14.1943 17.0775 13.39C18.7376 11.73 21.439 11.73 23.0992 13.39C23.9036 14.1942 24.3466 15.2636 24.3466 16.4009C24.3466 17.5382 23.9036 18.6075 23.0992 19.4118C22.2691 20.2416 21.1786 20.6566 20.0883 20.6567ZM20.0883 14.7119C19.1673 14.7119 18.3982 15.4807 18.3982 16.4009C18.3982 16.8522 18.574 17.2765 18.8932 17.5957C19.5522 18.2546 20.6244 18.2546 21.2833 17.5957C21.6026 17.2765 21.7784 16.8522 21.7784 16.4009C21.7784 15.4808 21.005 14.7119 20.0883 14.7119Z" fill="#FF5C01"/>
                          <path d="M23.0997 42.4045L21.2832 40.5892L25.4297 36.4398C25.6704 36.1989 25.9972 36.0635 26.3379 36.0635H31.4419V38.6316H26.8701L23.0997 42.4045Z" fill="#2C2D36"/>
                          <path d="M20.0888 47.8523C18.9983 47.8523 17.9077 47.4373 17.0774 46.607C16.2744 45.8063 15.8309 44.7388 15.8301 43.6022C15.8291 42.464 16.2721 41.3938 17.0775 40.5888C18.7375 38.9287 21.439 38.9287 23.0993 40.5888C23.9045 41.3939 24.3474 42.4641 24.3466 43.6022C24.3458 44.7388 23.9023 45.8064 23.098 46.6084C22.2685 47.4375 21.1788 47.8523 20.0888 47.8523ZM20.0883 41.9106C19.1681 41.9106 18.3976 42.681 18.3982 43.6005C18.3984 44.0503 18.5739 44.4727 18.8918 44.7897C19.5521 45.4501 20.6246 45.4499 21.2832 44.7911C21.6026 44.4727 21.778 44.0503 21.7783 43.6005C21.779 42.679 21.009 41.9106 20.0883 41.9106Z" fill="#FF5C01"/>
                          <path d="M25.7361 0C22.528 0 19.7363 2.14996 18.8536 5.14844C16.4307 5.41249 14.188 6.49261 12.453 8.24942C10.4724 10.2546 9.3817 12.9116 9.3817 15.7305C9.3817 17.0939 9.64411 18.4447 10.1477 19.7017C8.53236 20.5789 7.14524 21.8254 6.08882 23.3591C4.74011 25.3173 4.02734 27.6131 4.02734 29.9984C4.02734 34.3535 6.38941 38.2634 10.1469 40.2984C9.64388 41.5529 9.3817 42.9027 9.3817 44.2662C9.3817 47.0852 10.4724 49.7421 12.453 51.7474C14.1879 53.504 16.4308 54.5841 18.8535 54.8483C19.736 57.8486 22.5279 60 25.7361 60C29.6904 60 32.9074 56.7833 32.9074 52.8295V7.17047C32.9073 3.21665 29.6904 0 25.7361 0ZM30.3392 52.8295C30.3392 55.3673 28.2743 57.4319 25.736 57.4319C23.8976 57.4319 22.2732 56.3316 21.5424 54.7263C22.3529 54.5692 23.1436 54.3162 23.9057 53.9666C25.0791 53.4279 26.1282 52.6907 27.0243 51.7754C27.5204 51.2687 27.5117 50.4558 27.005 49.9597C26.4982 49.4635 25.6851 49.4723 25.1891 49.979C24.5135 50.6691 23.7212 51.2254 22.8344 51.6326C21.8988 52.0618 20.9072 52.2998 19.8867 52.3417C15.5074 52.2677 11.9497 48.6522 11.9497 44.2661C11.9497 42.8798 12.3058 41.5139 12.9795 40.3161C13.1607 39.994 13.1943 39.6093 13.0716 39.2605C12.9489 38.9119 12.6818 38.6329 12.3389 38.4951C8.84976 37.0937 6.59532 33.7584 6.59532 29.9982C6.59532 26.2372 8.84952 22.9033 12.338 21.5051C12.6811 21.3676 12.9483 21.0889 13.0711 20.7404C13.1942 20.3918 13.161 20.0072 12.9801 19.6849C12.3061 18.4834 11.9497 17.1159 11.9497 15.7304C11.9497 11.3443 15.5073 7.72879 19.8866 7.65479C20.9007 7.69646 21.8932 7.93494 22.8341 8.36381C23.7224 8.77167 24.5141 9.32848 25.187 10.0188C25.6551 10.499 26.4999 10.5326 27.003 10.0422C27.5108 9.54712 27.5211 8.7342 27.0261 8.22642C26.1319 7.30914 25.082 6.57012 23.9024 6.0286C23.1384 5.68039 22.3488 5.42837 21.5422 5.27136C22.2731 3.66747 23.8975 2.56809 25.7361 2.56809C28.2743 2.56809 30.3393 4.63272 30.3393 7.17047V52.8295H30.3392Z" fill="#FF5C01"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_1550_2315">
                            <rect width="60" height="60" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                </div>
                <h3 className="my-5 3xl:text-[32px] xl:text-[26px] text-2xl font-aeonik duration-300 transition md:line-clamp-1 xl:line-clamp-none">Technology & IT</h3>
                <p>
                  We will help you bring something new to the technology and IT sector with our custom software solutions. Our experts deliver project management, system integration, collaboration tools, and more.
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
                      <g clip-path="url(#clip0_1550_2364)">
                        <path d="M36.8965 58.5672H23.034C22.7306 58.5673 22.4301 58.5076 22.1498 58.3915C21.8694 58.2754 21.6147 58.1053 21.4002 57.8907C21.1856 57.6761 21.0154 57.4214 20.8993 57.1411C20.7833 56.8607 20.7236 56.5602 20.7236 56.2568V40.0839C20.7236 37.6329 21.6973 35.2822 23.4304 33.5491C25.1636 31.816 27.5142 30.8423 29.9653 30.8423C32.4163 30.8423 34.767 31.816 36.5001 33.5491C38.2333 35.2822 39.2069 37.6329 39.2069 40.0839V56.2568C39.2071 56.5603 39.1475 56.8608 39.0314 57.1412C38.9154 57.4216 38.7452 57.6763 38.5306 57.8909C38.316 58.1055 38.0613 58.2757 37.7809 58.3917C37.5005 58.5078 37.2 58.5674 36.8965 58.5672ZM25.3445 53.9464H34.5861V40.0839C34.5861 38.8584 34.0993 37.6831 33.2327 36.8165C32.3661 35.9499 31.1908 35.4631 29.9653 35.4631C28.7398 35.4631 27.5644 35.9499 26.6979 36.8165C25.8313 37.6831 25.3445 38.8584 25.3445 40.0839V53.9464Z" fill="#FF5C01"/>
                        <path d="M50.7591 58.5671H9.17165C7.94656 58.5657 6.77204 58.0784 5.90578 57.2122C5.03951 56.3459 4.55222 55.1714 4.55082 53.9463V27.6495C4.54728 26.7903 4.785 25.9474 5.23693 25.2166C5.68887 24.4859 6.33687 23.8967 7.10718 23.5161L27.8986 13.1192C28.5408 12.8009 29.2479 12.6353 29.9647 12.6353C30.6816 12.6353 31.3887 12.8009 32.0309 13.1192L52.8258 23.5161C53.5955 23.8972 54.2429 24.4866 54.6944 25.2173C55.1459 25.9479 55.3834 26.7906 55.3799 27.6495V53.9463C55.3783 55.1713 54.891 56.3457 54.0247 57.212C53.1585 58.0782 51.9841 58.5655 50.7591 58.5671ZM29.9654 17.2527L9.17165 27.6495V53.9463H50.7591V27.6495L29.9654 17.2527Z" fill="#232323"/>
                        <path d="M55.3819 29.4187C54.664 29.4183 53.9563 29.2498 53.3152 28.9269L29.9651 17.253L6.61725 28.9269C5.9127 29.2791 5.12982 29.4453 4.34294 29.4099C3.55606 29.3744 2.7913 29.1384 2.12128 28.7243C1.45126 28.3101 0.898205 27.7316 0.514637 27.0437C0.13107 26.3557 -0.0702826 25.5811 -0.0703025 24.7934V16.2106C-0.0722068 15.2978 0.196966 14.4051 0.703087 13.6455C1.20921 12.8859 1.92948 12.2937 2.77259 11.944L28.1871 1.35535C28.7505 1.12077 29.3548 1 29.9651 1C30.5753 1 31.1796 1.12077 31.743 1.35535L57.1575 11.944C58.0006 12.2938 58.7208 12.886 59.2269 13.6455C59.733 14.4051 60.0022 15.2978 60.0004 16.2106V24.7934C59.999 26.0185 59.5121 27.1931 58.6465 28.06C57.7809 28.9269 56.607 29.4155 55.3819 29.4187ZM29.9651 12.6344C30.6818 12.634 31.3889 12.8001 32.0306 13.1196L55.3796 24.7934V16.2106L29.9651 5.61966L4.55052 16.2083V24.7934L27.8983 13.1195C28.5405 12.8002 29.2479 12.6341 29.9651 12.6344Z" fill="#232323"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1550_2364">
                          <rect width="60" height="60" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                </div>
                <h3 className="my-5 3xl:text-[32px] xl:text-[26px] text-2xl font-aeonik duration-300 transition md:line-clamp-1 xl:line-clamp-none">Telecommunications</h3>
                <p>
                  We create high-technology software solutions in telecommunications, including customer support apps, network management tools, billing systems, and APIs.
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
                    <path d="M55.5947 25.1315C55.5697 24.8743 55.4662 24.6273 55.302 24.4281L46.6193 14.0088C46.3743 13.7148 46.0115 13.5449 45.629 13.5449H38.2128C37.5009 13.5449 37.5945 14.0137 37.5945 14.7256C37.5945 15.4375 37.5009 16.123 38.2128 16.123H45.0253L51.5596 23.9643H8.44062L14.975 16.123H21.7873C22.4993 16.123 22.226 15.516 22.226 14.804C22.226 14.092 22.4993 13.5449 21.7873 13.5449H14.3711C13.9885 13.5449 13.6258 13.7148 13.3808 14.0088L4.69812 24.4281C4.50781 24.6586 4.39977 24.9541 4.39941 25.2534V33.3572C4.39941 34.0691 4.97656 34.6463 5.68848 34.6463H6.1359V58.7109C6.1359 59.4228 6.71305 59.9999 7.42496 59.9999H52.5751C53.287 59.9999 53.8641 59.4228 53.8641 58.7109V34.6463H54.3117C55.0236 34.6463 55.6007 34.0691 55.6007 33.3572V25.2534C55.6009 25.2126 55.5985 25.1719 55.5947 25.1315ZM53.0227 32.0682H6.97742V26.5424H53.0227V32.0682ZM51.286 57.4218H8.71402V34.6463H51.286V57.4218Z" fill="#2C2D36"/>
                    <path d="M31.0417 9.2617H28.9579C28.6473 9.2617 28.3945 9.00904 28.3945 8.69838C28.3945 8.38783 28.6472 8.13518 28.9579 8.13518H32.8939C33.6059 8.13518 34.183 7.55803 34.183 6.84611C34.183 6.1342 33.6059 5.55705 32.8939 5.55705H31.2888V4.75244C31.2888 4.04053 30.7117 3.46338 29.9998 3.46338C29.2879 3.46338 28.7107 4.04053 28.7107 4.75244V5.56771C27.0937 5.69428 25.8164 7.04955 25.8164 8.69838C25.8164 10.4305 27.2256 11.8398 28.9579 11.8398H31.0417C31.3522 11.8398 31.6049 12.0925 31.6049 12.4031C31.6049 12.7137 31.3522 12.9663 31.0417 12.9663H27.1055C26.3936 12.9663 25.8164 13.5435 25.8164 14.2554C25.8164 14.9673 26.3936 15.5445 27.1055 15.5445H28.7107V16.1969C28.7107 16.9088 29.2879 17.4859 29.9998 17.4859C30.7117 17.4859 31.2888 16.9088 31.2888 16.1969V15.5338C32.9058 15.4072 34.183 14.052 34.183 12.4031C34.183 10.671 32.7738 9.2617 31.0417 9.2617Z" fill="#2C2D36"/>
                    <path d="M29.9998 21.1012C24.1822 21.1012 19.4492 16.3683 19.4492 10.5506C19.4492 4.73297 24.1822 0 29.9998 0C35.8175 0 40.5505 4.73297 40.5505 10.5506C40.5505 16.3683 35.8174 21.1012 29.9998 21.1012ZM29.9998 2.57812C25.6038 2.57812 22.0273 6.15457 22.0273 10.5506C22.0273 14.9467 25.6038 18.5231 29.9998 18.5231C34.3959 18.5231 37.9723 14.9467 37.9723 10.5506C37.9723 6.15457 34.3958 2.57812 29.9998 2.57812Z" fill="#FF561D"/>
                    <path d="M30.0005 56.0665C29.6577 56.0665 29.3291 55.93 29.0871 55.6871L20.7918 47.3596C18.2277 44.7854 18.2358 40.6052 20.8099 38.0411C22.0537 36.8021 23.7046 36.1201 25.4597 36.1201C25.4642 36.1201 25.4684 36.1201 25.4728 36.1202C27.1732 36.1235 28.774 36.7663 30.0005 37.9342C32.5738 35.4855 36.6594 35.5193 39.191 38.0412C41.7652 40.6052 41.7733 44.7854 39.2091 47.3596L30.9137 55.6871C30.6719 55.93 30.3433 56.0665 30.0005 56.0665ZM25.4598 38.6984C24.3913 38.6984 23.3865 39.1134 22.6295 39.8677C21.0625 41.4285 21.0576 43.9732 22.6184 45.5401L30.0005 52.9508L37.3826 45.54C38.9433 43.9731 38.9384 41.4284 37.3716 39.8675C35.8046 38.3067 33.2599 38.3118 31.6991 39.8786L30.9137 40.667C30.6719 40.9098 30.3431 41.0463 30.0005 41.0463C29.6578 41.0463 29.329 40.9098 29.0871 40.667L28.3017 39.8784C27.5456 39.1194 26.5392 38.7002 25.4678 38.6982C25.4652 38.6984 25.4625 38.6984 25.4598 38.6984Z" fill="#FF561D"/>
                    <path d="M41.5769 21.1011H18.4229C17.7109 21.1011 17.1338 20.5239 17.1338 19.812C17.1338 19.1001 17.7109 18.5229 18.4229 18.5229H41.5769C42.2888 18.5229 42.8659 19.1001 42.8659 19.812C42.8659 20.524 42.2888 21.1011 41.5769 21.1011Z" fill="#2C2D36"/>
                  </svg>
                </div>
                <h3 className="my-5 3xl:text-[32px] xl:text-[26px] text-2xl font-aeonik duration-300 transition md:line-clamp-1 xl:line-clamp-none">Non-profit & Social Impact</h3>
                <p>
                  Our portfolio includes non-profit and social impact enterprise tools from fundraisers to donor management and program administrative systems.
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
                    <h2 className="text-4xl 3xl:text-[62px] xl:text-[56px] lg:text-[48px] md:text-[30px] md:leading-[32px] text-white font-aeonik lg:leading-[65px] mb-5 leading-[42px]">Our Approach to enterprise software development</h2>
                    <p className="mb-6 text-[22px] text-white">Our enterprise software development methodology includes the following:</p>
                </motion.div>

                <div className='3xl:w-[62%] md:w-3/5 xl:ps-16 md:ps-8 w-full'>
                    <motion.div 
                        variants={fadeIn("up", 0.1)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: true, amount: 0.1}}
                        className="bg-[#3A3B3D] md:p-12 p-8 md:ps-28 text-white mb-3">
                          <h6 className="md:text-4xl text-3xl font-aeonik relative mb-5"><div className="text-[#FF561D] md:absolute md:top-0 text-4xl md:-left-16 mb-3 md:mb-0">01</div>Requirement Analysis</h6>
                          <p>
                            The first step is to analyze your enterprise to identify the challenges you want to address, the goals, and viability. We also conduct research to identify user needs and how the software will integrate with existing systems.
                          </p>
                    </motion.div>

                    <motion.div 
                        variants={fadeIn("up", 0.1)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: true, amount: 0.1}}
                        className="bg-[#3A3B3D] md:p-12 p-8 md:ps-28 text-white mb-3">
                          <h6 className="md:text-4xl text-3xl font-aeonik relative mb-5"><div className="text-[#FF561D] md:absolute md:top-0 text-4xl md:-left-16 mb-3 md:mb-0">02</div>Solution Design</h6>
                          <p>
                            Next, we design a roadmap that forms the basis of a scalable and efficient software solution. This is also the stage where we brainstorm suitable UX/UI design that caters to the desired user experience and application features.
                          </p>
                    </motion.div>

                    <motion.div 
                        variants={fadeIn("up", 0.1)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: true, amount: 0.1}}
                        className="bg-[#3A3B3D] md:p-12 p-8 md:ps-28 text-white mb-0">
                          <h6 className="md:text-4xl text-3xl font-aeonik relative mb-5"><div className="text-[#FF561D] md:absolute md:top-0 text-4xl md:-left-16 mb-3 md:mb-0">03</div>Development & Testing</h6>
                          <p>
                            Lastly, we develop your enterprise software. Upon completion, we test its functionality and security, ensuring you get software that fulfills all your business needs.
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

  export default EnterpriseSoftware;