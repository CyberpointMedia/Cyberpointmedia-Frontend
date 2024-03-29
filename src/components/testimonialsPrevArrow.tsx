import React from "react";
import { BsChevronLeft } from 'react-icons/bs';

const TestimonialsPrevArrow = ({ onClick }: any) => {
    return (
        <div className="absolute md:left-[45%] -bottom-[120px] transform buttonArrow" onClick={onClick}>
            <div className="prevArrow hover:bg-[#2E2F30] h-[45px] w-[45px] rounded-full grid place-items-center cursor-pointer hover:text-white">
                <BsChevronLeft />
            </div>
        </div>
    )
}

export default TestimonialsPrevArrow