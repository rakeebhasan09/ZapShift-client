import { Outlet } from "react-router";
import Footer from "../pages/Shared/Footer/Footer";

const RootLayout = () => {
	return (
		<div>
			<Outlet />
			<Footer />
		</div>
	);
};

export default RootLayout;
