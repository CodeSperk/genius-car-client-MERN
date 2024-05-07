import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import loginImg from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";


const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const {loginUser, googleLogin} = useAuth();
  
  const handleLogin = event => {
    event.preventDefault();
  
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  
    loginUser(email, password)
    .then(result => {
      Swal.fire({
        icon: "success",
        title: "Login successful",
        showConfirmButton: false,
        timer: 1500
      });
    })
    .catch(error => console.log(error));
    
  }

  const handleGoogleLogin = () => {
    googleLogin()
    .then(result => {
      Swal.fire({
        icon: "success",
        title: "Login successful",
        showConfirmButton: false,
        timer: 1500
      });
    })
    .catch(error => console.log(error.code));
  }

  return (
    <section className="md:flex justify-between items-center gap-20 pb-16 md:pb-24">
      <div className="hidden md:flex max-w-96">
        <img src={loginImg} alt="" />
      </div>
      
      {/* form */}
      <div className="w-full max-w-md mx-auto p-8 md:p-12 xl:p-16 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800 border-2">
	<h1 className="text-2xl font-bold text-center">Login</h1>

	<form onSubmit={handleLogin} className="space-y-6 pt-4">
		<div className="space-y-2 text-sm">
			<label htmlFor="email" className="block dark:text-gray-600 font-bold">Email</label>
			<input type="email" name="email"  placeholder="Your email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 outline-none border " />
		</div>

		<div className=" space-y-2 text-sm">
			<label htmlFor="password" className="block dark:text-gray-600 font-bold">Password</label>
      <div className="relative">
			<input type={showPass? "text" :"password"} name="password" id="password" placeholder="Your password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 border outline-0 focus:dark:border-violet-600" />
      <span onClick={() => setShowPass(!showPass)} className="absolute top-3 right-2 text-xl text-[var(--clr-accent)] cursor-pointer">
              {
                showPass? <BsEyeSlashFill></BsEyeSlashFill> : <BsEyeFill></BsEyeFill>
              }
            </span>
      </div>
		</div>
    <button type="submit" className="px-8 w-full text-white py-3 font-semibold rounded bg-[var(--clr-accent)] dark:text-gray-100 hover:rounded-full duration-400 mt-10">Login</button>
	</form>
  
	<div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
		<p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
	</div>
	<div className="flex justify-center space-x-4 py-2">
		<button aria-label="Log in with Google" className="p-2.5 rounded-full bg-[var(--bg-light)] hover:text-[var(--clr-accent)] border-2 hover:border-[var(--clr-accent)]">
    <FaFacebookF />
		</button>
		<button aria-label="Log in with Google" className="p-2.5 rounded-full bg-[var(--bg-light)] hover:text-[var(--clr-accent)] border-2 hover:border-[var(--clr-accent)]">
    <FaLinkedinIn />
		</button>
		<button aria-label="Log in with Google" className="p-2.5 rounded-full bg-[var(--bg-light)] hover:text-[var(--clr-accent)] border-2 hover:border-[var(--clr-accent)]" onClick={handleGoogleLogin}>
    <FaGoogle />
		</button>
	</div>
	<p className="text-xs text-center sm:px-6 dark:text-gray-600">Don't have an account?
		<Link to="/register" rel="noopener noreferrer" href="#" className="underline dark:text-gray-800 ml-2 font-bold text-[var(--clr-accent)]">Sign up</Link>
	</p>
</div>
    </section>
  );
};

export default Login;