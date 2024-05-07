import { LuCalendarRange, LuPhoneCall } from "react-icons/lu";
import { PiMapPinLineLight } from "react-icons/pi";

const ContactUs = () => {
  return (
    <section className="bg-[#151515] w-full text-white rounded-md px-16 py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-32">
     
     <div className='flex items-center gap-5'>
        <LuCalendarRange className='text-3xl text-[#FF3811]'/>
        <div >
          <p className='font-medium'>We are open monday-friday</p>
          <h4 className='text-white'>7:00 am - 9:30 pm</h4>
        </div>
      </div>
      <div className='flex items-center gap-5 my-4'>
        <LuPhoneCall className='text-3xl text-[#FF3811]'/>
        <div >
          <p className='font-medium'>Have a question?</p>
          <h4 className='text-white'>+2546 251 2658</h4>
        </div>
      </div>
      <div className='flex items-center gap-5'>
        <PiMapPinLineLight className='text-3xl text-[#FF3811]'/>
        <div >
          <p className='font-medium'>Need a repair? our address</p>
          <h4 className='text-white'>Liza Street, New York</h4>
        </div>
      </div>
     </section>
  );
};

export default ContactUs;