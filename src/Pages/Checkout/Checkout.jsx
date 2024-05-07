import { Link, useLoaderData } from "react-router-dom";
import SharedBanner from "../../Components/Banner/SharedBanner";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Checkout = () => {
  const service = useLoaderData();
  const {user} = useContext(AuthContext);
  console.log(user);
  console.log(service);

  const navigationLinks = (
    <>
      <Link to="/" className="hover:underline">
        Home
      </Link>{" "}
      / <Link to={`/details/${service._id}`} className="hover:underline">Details</Link> / <Link>Checkout</Link>
    </>
  );


  const handleBookService = event => {
    event.preventDefault();

    const form = event.target;

    const serviceName = form.service.value;
    const date = form.date.value;
    const price = form.price.value;
    const phone = form.phone.value;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const booking = {
      customerName :name,
      email: email,
      data: date,
      service: service._id,
      price:price,
      message:message,
      phone: phone,
      serviceName: serviceName,
      img: service.img
    }

    // console.log(booking);
    fetch("http://localhost:5000/bookings", {
      method:"POST",
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        Swal.fire({
          icon: "success",
          title: "Service Added  successful",
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
  }

  return (
    <div>
      <SharedBanner
        img={service.img}
        title="Check Out"
        navigationLinks={navigationLinks}
      ></SharedBanner>
      <main>
        <section className="bg-[var(--bg-light)] rounded-xl mb-16 md:mb-[100px] p-10 lg:p-20">
          <h2 className="text-center mb-8">Book Service : {service.title}</h2>

          <form
            onSubmit={handleBookService}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Service Title */}
            <div className="w-full ">
            <label className='label'>
              <span className='label-text'>Service Name</span>
            </label>
              <input
                type="text"
                name="service"
                defaultValue={service.title}
                placeholder="Name"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 outline-none py-3 px-5"
              />
            </div>

            {/* Date */}
            <div className="w-full">
            <label className='label'>
              <span className='label-text'>Date</span>
            </label>
              <input
                type="date"
                name="date"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-opacity-75 outline-none py-3 px-5"
              />
            </div>

{/* Price */}
            <div className="w-full">
            <label className='label'>
              <span className='label-text'>Due Amount</span>
            </label>
              <input
                type="text"
                name="price"
                defaultValue={"$ " + service.price}
                readOnly
                className="w-full rounded-md focus:ring focus:ring-opacity-75 outline-none py-3 px-5"
              />
            </div>

{/* Phone Number */}
            <div className="w-full">
            <label className='label'>
              <span className='label-text'>Phone Number</span>
            </label>
              <input
                type="number"
                name="phone"
                placeholder="Your Phone"
                defaultValue={user?.phoneNumber}
                className="w-full rounded-md focus:ring focus:ring-opacity-75 outline-none py-3 px-5"
              />
            </div>

{/* User Name */}
            <div className="w-full">
            <label className='label'>
              <span className='label-text'>User Name</span>
            </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                defaultValue={user?.displayName}
                className="w-full rounded-md focus:ring focus:ring-opacity-75 outline-none py-3 px-5"
              />
            </div>

{/* User Email */}
            <div className="w-full">
            <label className='label'>
              <span className='label-text'>Your Email</span>
            </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                defaultValue={user?.email}
                className="w-full rounded-md focus:ring focus:ring-opacity-75 outline-none py-3 px-5"
              />
            </div>


            <div className="md:col-span-2">
              <textarea
                name="message"
                placeholder="Your Message"
                rows={7}
                className="w-full rounded-md focus:ring focus:ring-opacity-75 outline-none p-5"
              ></textarea>
            </div>
            
            <div className="md:col-span-2">
              <input
                type="submit"
                value="Confirm Order"
                className="px-8 w-full text-white py-3 font-semibold rounded bg-[var(--clr-accent)] dark:text-gray-100 hover:rounded-full duration-400"
              />
               
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Checkout;
