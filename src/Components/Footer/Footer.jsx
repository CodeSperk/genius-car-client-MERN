import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"

const Footer = () => {
  return (
<footer className="px-4 divide-y bg-[var(--bg-dark)] text-[var(--clr-white)] dark:bg-[var(--clr-white)] dark:text-[var(--bg-dark)]">
	<div className="max-w-7xl mx-auto px-4 md:px-12 xl:px-[60px] py-12 md:py-20 lg:py-32 container flex items-start justify-between space-y-8 lg:flex-row lg:space-y-0">

		<div className="lg:w-1/3">
			<Link to="/" className="flex justify-center space-x-3 lg:justify-start">
				<div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-600">
					<img src={logo} alt="" />
				</div> <br />
			</Link>
		</div>

		<div className="grid grid-cols-2 justify-between text-sm gap-x-3 gap-y-8 lg:w-2/3 md:grid-cols-3">
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase dark:text-gray-900">Product</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Features</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Integrations</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Pricing</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">FAQ</a>
					</li>
				</ul>
			</div>

			<div className="space-y-3">
				<h3 className="tracking-wide uppercase dark:text-gray-900">Company</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Privacy</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Terms of Service</a>
					</li>
				</ul>
			</div>

			<div className="space-y-3">
				<h3 className="uppercase dark:text-gray-900">Developers</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Public API</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Documentation</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Guides</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</footer>

  );
};

export default Footer;