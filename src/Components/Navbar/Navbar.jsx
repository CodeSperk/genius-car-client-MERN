import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { IoMenu } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logout successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => console.log(error.code));
  };

  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {user ? (
        <>
          <li>
            <Link to="/bookings">My Bookings</Link>
          </li>
          <li>
            <NavLink onClick={handleLogout}>Logout</NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 py-4 md:py-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden text-4xl">
            <IoMenu />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2"
          >
            {navItems}
          </ul>
        </div>

        <Link to="/" className="hidden lg:flex">
          <img src={logo} alt="" className="w-20" />
        </Link>
      </div>

      {/* navbar center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 overflow-x-hidden">
          {navItems}
        </ul>
      </div>

      <div className="navbar-end">
        <button
          type="button"
          className="px-6 py-2.5 font-semibold border rounded-md border-[var(--clr-accent)] text-[var(--clr-accent)] dark:border-gray-800 dark:text-gray-800"
        >
          Appointment
        </button>
      </div>
    </div>
  );
};

export default Navbar;
