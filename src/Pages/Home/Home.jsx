import { useState } from "react";
import Banner from "./Banner/Banner";
import About from "./About/About";
import Services from "./Services/Services";
import ContactUs from "./ContactUs/ContactUs";

const Home = () => {
  const [dark, setDark] = useState(false);

  console.log(dark);

  return (
    <div>
      <header>
        <Banner></Banner>
      </header>
      <main>
        <About></About>
        <Services></Services>
        <ContactUs></ContactUs>
      </main>





      <div className="border-2 border-[var(--clr-accent)] text-[var(--clr-accent)] w-fit fixed bottom-24 right-10 px-2 rounded-md uppercase cursor-pointer font-bold text-sm" onClick={() => setDark(!dark)}>
        {
          dark? "light" : "dark"
        }
      </div>
    </div>
  );
};

export default Home;