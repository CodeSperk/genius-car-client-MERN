import { useState } from "react";
import banner1 from "../../../assets/images/banner/1.jpg"
import banner2 from "../../../assets/images/banner/2.jpg"
import banner3 from "../../../assets/images/banner/3.jpg"
import banner4 from "../../../assets/images/banner/4.jpg"
import banner5 from "../../../assets/images/banner/5.jpg"
import banner6 from "../../../assets/images/banner/6.jpg"

const Banner = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
      banner1,
      banner2,
      banner3,
      banner4,
      banner5,
      banner6,
    ];

  const handlePrevClick = () => {
    const prevIndex = currentImageIndex - 1;
    if (prevIndex >= 0) {
      setCurrentImageIndex(prevIndex);
    }
  }

  const handleNextClick = () => {
    const nextIndex = currentImageIndex + 1;
    if (nextIndex < images.length) {
      setCurrentImageIndex(nextIndex);
    }
  }

  return (
    <div className="relative w-full dark:text-gray-900">
      
{/* sliding images */}
            <div className="w-full h-64 md:h-[420px] lg:h-[600px]">
        <img
          className="object-cover object-center dark:bg-gray-500 w-full h-full aspect-square rounded-xl"
          src={images[currentImageIndex]}
          alt="Image"
        />
      </div>

{/* Banner contents */}
      
      <div className="absolute top-0 w-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full flex p-6 md:p-10 lg:p-20 rounded-xl items-center">
      <div className="md:w-1/2 text-white space-y-4">
        <h1 className="text-white">Affordable <br /> Price For Car Servicing</h1>
        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className="mt-4 flex gap-4">
        <button type="button" className="px-8 py-2 font-semibold rounded bg-[var(--clr-accent)] dark:text-gray-100 hover:scale-105 duration-500">Basic</button>
        <button type="button" className="px-8 py-2 font-semibold border rounded dark:border-gray-800 dark:text-gray-800 hover:scale-105 duration-500">Border</button>
        </div>
      </div>
      </div>

    {/* buttons */}
    <div className="absolute right-10 bottom-8 md:bottom-20 flex gap-6">
    <button
        aria-label="Slide back"
        type="button"
        className="z-30 p-2 ml-10 bg-[var(--clr-accent)] text-white rounded-full focus:outline-none focus:dark:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:dark:ring-gray-600 dark:bg-gray-50"
        onClick={handlePrevClick}
      >
        <svg
          width="8"
          height="14"
          fill="none"
          viewBox="0 0 8 14"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
        >
          <path
            d="M7 1L1 7L7 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
      <button
        aria-label="Slide forward"
        id="next"
        className="z-30 p-2 bg-[var(--clr-accent)] text-white rounded-full focus:outline-none focus:dark:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:dark:ring-gray-600 dark:bg-gray-50"
        onClick={handleNextClick}
      >
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
        >
          <path
            d="M1 1L7 7L1 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
    </div>
    </div>
  );
};

export default Banner;
