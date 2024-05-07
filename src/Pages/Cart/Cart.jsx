import { Link } from "react-router-dom";
import SharedBanner from "../../Components/Banner/SharedBanner";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Cart = () => {
  const {user} = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  console.log(bookings);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setBookings(data)
    })
  }, [url])

console.log(bookings);
const imageUrl = bookings[0]?.img;
console.log(imageUrl);
  const navigationLinks = (
    <>
      <Link to="/" className="hover:underline">
        Home
      </Link>{" "}
      / <Link>Cart</Link>
    </>
  );
  return (
    <div>
      <SharedBanner
        img={imageUrl}
        title="Cart Details"
        navigationLinks={navigationLinks}
      ></SharedBanner>

      <main className="py-16 md:py-24">



      <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Photo</th>
        <th>Service Name</th>
        <th>Date</th>
        <th>Price</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
     
     {
      bookings.map(booking => <tr key={booking._id}>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          
            <div className="avatar">
              <div className="rounded-full w-12 h-12">
                {booking.img ? <img src={booking.img} alt="Avatar Tailwind CSS Component" /> : <img src={booking.photo} alt="Avatar Tailwind CSS Component" />}
             
            </div>
            
          </div>
        </td>
        <td>
          {booking.service}
        </td>
        <td>{booking.date}</td>
        <td>{booking.price}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>)
     }
     
     
    </tbody>
  
   
    
  </table>
      </main>
      
    </div>
  );
};

export default Cart;