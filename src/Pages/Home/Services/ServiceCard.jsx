import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ServiceCard = ({ service }) => {
  const {_id, img, title, price } = service;
  return (
    <div>
      <div className="p-8 text-left space-y-5 bg-slate-50 shadow-sm shadow-[var(--clr-accent)] rounded-md flex flex-col justify-between">
        <img src={img} alt="" className="w-full rounded-md h-48" />
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="text-[#FF3811] flex items-center justify-between text-lg font-semibold">
          <p>Price: ${price}</p>
          <Link to={`/details/${_id}`}>
            <AiOutlineArrowRight className="cursor-pointer hover:scale-150 duration-500" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
