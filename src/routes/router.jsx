import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import Error from "../pages/Error/Error";
import About from "../pages/About/About";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: RootLayout,
		children: [
			{
				index: true,
				Component: Home,
			},
			{
				path: "coverage",
				loader: () =>
					fetch("/servicePoints.json").then((res) => res.json()),
				Component: Coverage,
			},
			{
				path: "about-us",
				Component: About,
			},
			{
				path: "*",
				Component: Error,
			},
		],
	},
]);
