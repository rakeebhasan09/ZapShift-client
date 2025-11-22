import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Payment = () => {
	const { parcelId } = useParams();
	const axiosSecure = useAxiosSecure();
	const { isLoading, data: parcel } = useQuery({
		queryKey: ["parcels", parcelId],
		queryFn: async () => {
			const res = await axiosSecure.get(`/parcels/${parcelId}`);
			return res.data;
		},
	});

	const handlePayment = async () => {
		const paymentInfo = {
			cost: parcel.cost,
			parcelId: parcel._id,
			senderEmail: parcel.senderEmail,
			parcelName: parcel.parcelName,
		};

		const res = await axiosSecure.post(
			"/create-checkout-session",
			paymentInfo
		);

		window.location.href = res.data.url;
	};

	if (isLoading) {
		return <span className="loading loading-bars loading-xl"></span>;
	}

	return (
		<div className="p-5 md:p-10">
			<h2 className="mb-2">
				Pay your delivery charge (${parcel.cost}) for{" "}
				{parcel.parcelName}
			</h2>
			<button
				onClick={handlePayment}
				className="btn btn-primary text-secondary"
			>
				Pay Now
			</button>
		</div>
	);
};

export default Payment;
