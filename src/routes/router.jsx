import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import Error from "../pages/Error/Error";
import About from "../pages/About/About";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Rider from "../pages/Rider/Rider";
import SendParcel from "../pages/SendParcel/SendParcel";
import DashboardLayout from "../layouts/DashboardLayout";
import MyParcels from "../pages/Dashboard/MyParcels/MyParcels";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../pages/Dashboard/PaymentSuccess/PaymentSuccess";
import PaymentCancelled from "../pages/Dashboard/PaymentCancelled/PaymentCancelled";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import ApproveRiders from "../pages/Dashboard/ApproveRiders/ApproveRiders";
import UsersManagement from "../pages/Dashboard/UsersManagement/UsersManagement";

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
				path: "be-a-rider",
				loader: () =>
					fetch("/servicePoints.json").then((res) => res.json()),
				element: (
					<PrivateRoute>
						<Rider />
					</PrivateRoute>
				),
			},
			{
				path: "send-parcel",
				loader: () =>
					fetch("/servicePoints.json").then((res) => res.json()),
				element: (
					<PrivateRoute>
						<SendParcel />
					</PrivateRoute>
				),
			},
			{
				path: "*",
				Component: Error,
			},
		],
	},
	// Auth Layout
	{
		path: "/",
		Component: AuthLayout,
		children: [
			{
				path: "login",
				Component: Login,
			},
			{
				path: "registration",
				Component: Register,
			},
		],
	},
	// Dashboard Layout
	{
		path: "dashboard",
		element: (
			<PrivateRoute>
				<DashboardLayout />
			</PrivateRoute>
		),
		children: [
			{
				path: "my-parcels",
				Component: MyParcels,
			},
			{
				path: "payment/:parcelId",
				Component: Payment,
			},
			{
				path: "payment-success",
				Component: PaymentSuccess,
			},
			{
				path: "payment-cancelled",
				Component: PaymentCancelled,
			},
			{
				path: "payment-history",
				Component: PaymentHistory,
			},
			{
				path: "approve-riders",
				Component: ApproveRiders,
			},
			{
				path: "users-management",
				Component: UsersManagement,
			},
		],
	},
]);
