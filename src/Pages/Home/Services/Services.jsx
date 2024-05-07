import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
    .then(res=> res.json())
    .then(data=>{
      setServices(data);
    })
  },[])
  return (
    <section>
{/* service header */}
      <SectionHeader small="Services" title="Our Services Area" description="The majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable."></SectionHeader>
      
      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-6 md:gap-8 lg:gap-10">
        {
          services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
        }
      </div>
    </section>
  );
};

export default Services;