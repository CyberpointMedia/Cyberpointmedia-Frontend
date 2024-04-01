import React from "react";
import { BsChevronRight } from 'react-icons/bs';

const TestimonialsNextArrow = ({ onClick }: any) => {
    return (
        <div className="absolute left-[50%] -bottom-[120px] transform buttonArrow" onClick={onClick}>
            <div className="nextArrow hover:bg-[#2E2F30] h-[45px] w-[45px] rounded-full grid place-items-center cursor-pointer hover:text-white">
                <BsChevronRight />
            </div>
        </div>
    )
}

export default TestimonialsNextArrow