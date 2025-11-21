import { Link, NavLink } from "react-router";
import navLogo from "../../../assets/Nav-logo.png";
import { MdOutlineArrowOutward } from "react-icons/md";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
	const { user, logOut } = useAuth();
	const handleLogout = () => {
		logOut()
			.then(() => {
				console.log("Logout Successfull.");
			})
			.then((error) => {
				console.log(error);
			});
	};

	const links = (
		<>
			<li>
				<NavLink
					to="/services"
					className="font-medium hover:bg-transparent text-[#5B6A2E]"
				>
					Services
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/coverage"
					className="font-medium hover:bg-transparent text-[#5B6A2E]"
				>
					Coverage
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/about-us"
					className="font-medium hover:bg-transparent text-[#5B6A2E]"
				>
					About Us
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/send-parcel"
					className="font-medium hover:bg-transparent text-[#5B6A2E]"
				>
					Send Parcel
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/be-a-rider"
					className="font-medium hover:bg-transparent text-[#5B6A2E]"
				>
					Be a Rider
				</NavLink>
			</li>
			{user && (
				<>
					<li>
						<NavLink
							to="/dashboard/my-parcels"
							className="font-medium hover:bg-transparent text-[#5B6A2E]"
						>
							My Parcels
						</NavLink>
					</li>
				</>
			)}
		</>
	);
	return (
		<div className="container">
			<div className="navbar rounded-2xl bg-white py-3 lg:py-5 px-4 lg:px-8">
				{/* Navbar Start */}
				<div className="navbar-start">
					<div className="dropdown mr-2">
						<div tabIndex={0} role="button" className="xl:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-10 w-10"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</div>
						<ul
							tabIndex="-1"
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
						>
							{links}
						</ul>
					</div>
					<Link to="/">
						<img src={navLogo} alt="" />
					</Link>
				</div>
				{/* Menu Area */}
				<div className="navbar-center hidden xl:flex">
					<ul className="menu menu-horizontal xl:gap-1 2xl:gap-9 p-0">
						{links}
					</ul>
				</div>
				{/* Buttons Area */}
				<div className="navbar-end">
					{user ? (
						<div className="dropdown dropdown-end w-[45px] h-[45px]">
							<div
								tabIndex={0}
								role="button"
								className="btn btn-ghost btn-circle avatar w-[45px] h-[45px]"
							>
								<div className="w-[45px] h-[45px] rounded-full">
									<img
										className="rounded-full"
										alt={user.displayName}
										src={user.photoURL}
									/>
								</div>
							</div>
							<ul
								tabIndex="-1"
								className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 p-2 shadow"
							>
								<li>
									<a>{user.displayName}</a>
								</li>
								<li>
									<a>{user.email}</a>
								</li>
								<li>
									<button onClick={handleLogout}>
										Logout
									</button>
								</li>
							</ul>
						</div>
					) : (
						<div className="flex items-center lg:gap-2 2xl:gap-4">
							<Link
								to="/login"
								className="py-2 lg:py-4 px-4 lg:px-8 border border-[#DADADA] rounded-xl text-[20px] font-bold"
							>
								Sign In
							</Link>
							<div className="hidden lg:flex items-center">
								<Link
									to="/be-a-rider"
									className="py-4 px-8 border border-[#CAEB66] bg-primary rounded-xl text-[20px] text-[#1F1F1F] font-bold"
								>
									Be a rider
								</Link>
								<Link className="w-14 h-14 rounded-full bg-[#1F1F1F] flex items-center justify-center">
									<MdOutlineArrowOutward className="text-[#CAEB66] text-[32px]" />
								</Link>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
