import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-16 mb-36 items-center justify-between">
      <div className="lg:w-1/2 relative">
        <img src={person} alt="" className="w-full pr-16 rounded-lg" />
        <img
          src={parts}
          alt=""
          className="absolute -bottom-14 right-0 w-1/2 rounded-lg border-8 border-white"
        />
      </div>

      <div className="lg:w-1/2 mt-12 lg:mt-0">
        <h5 className="text-[#FF3811]">About Us</h5>
        <h2 className="mt-2">We are qualified & of experience in this field</h2>
        <p className="text-[#737373] mt-6">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour words which don not look even slightly believable. 
        </p>
        <p className="text-[#737373] mt-4">
        the majority have suffered alteration in some form, by injected humour words which don not look even slightly believable.  
        </p>

        <button type="button" className="px-4 py-3 font-semibold rounded bg-[var(--clr-accent)] dark:text-gray-100 hover:scale-105 duration-500 text-white mt-4">Get More info...</button>
      </div>
    </section>
  );
};

export default About;