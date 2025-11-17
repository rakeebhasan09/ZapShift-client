import { Outlet } from "react-router";
import thumbnail from "../assets/login-reg-thum.png";
import navLogo from "../assets/Nav-logo.png";
const AuthLayout = () => {
	return (
		<div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
			<div className="bg-[#FFFFFF] pt-6 md:pt-11 pl-5 md:pl-10 xl:pl-20">
				<img src={navLogo} alt="" />
				{/* Outlet */}
				<div className="pt-10 md:pt-14 lg:pt-[66px] pr-5 md:pr-0">
					<Outlet />
				</div>
			</div>
			<div className="bg-[#FAFDF0] hidden lg:flex items-center justify-center">
				<img src={thumbnail} alt="" />
			</div>
		</div>
	);
};

export default AuthLayout;
