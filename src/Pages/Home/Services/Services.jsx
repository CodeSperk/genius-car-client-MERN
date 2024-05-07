import ServiceCard from "./ServiceCard";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import useServices from "../../../Hooks/useServices";

const Services = () => {
  const services = useServices();

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