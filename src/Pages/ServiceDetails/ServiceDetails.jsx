import { Link, useLoaderData } from "react-router-dom";
import SharedBanner from "../../Components/Banner/SharedBanner";

const ServiceDetails = () => {
  const service = useLoaderData();

  const navigationLinks = (
    <>
      <Link to="/" className="hover:underline">
        Home
      </Link>{" "}
      / <Link>Service Details</Link>
    </>
  );

  return (
    <main>
      <SharedBanner
        img={service.img}
        title="Service Details"
        navigationLinks={navigationLinks}
      ></SharedBanner>

      <section className="min-h-[60vh] mb-16 md:mb-24">
        <div className="flex gap-10 justify-between">
          <h2>{service.title}</h2>
          <p className="text-[var(--clr-accent)] font-bold text-2xl">
            Price : {service.price}
          </p>
        </div>
        <p>{service.description}</p>

        <Link to={`/checkout/${service._id}`}>
          <button className="px-4 py-3 font-semibold rounded bg-[var(--clr-accent)] dark:text-gray-100 hover:scale-105 duration-500 text-white mt-4">
            Book Now
          </button>
        </Link>
      </section>
    </main>
  );
};

export default ServiceDetails;
