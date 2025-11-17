import { Outlet } from "react-router";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const RootLayout = () => {
	return (
		<div className="pt-7 pb-12">
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default RootLayout;
