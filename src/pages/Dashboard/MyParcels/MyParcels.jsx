import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyParcels = () => {
	const { user } = useAuth();
	const axiosSecure = useAxiosSecure();

	const { data: parcels = [], refetch } = useQuery({
		queryKey: ["my-parcels", user?.email],
		queryFn: async () => {
			const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
			return res.data;
		},
	});

	// Parcel Delete
	const handleParcelDelete = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				axiosSecure.delete(`/parcels/${id}`).then((res) => {
					if (res.data.deletedCount) {
						refetch();
						Swal.fire({
							title: "Deleted!",
							text: "Your Parcel has been deleted.",
							icon: "success",
						});
					}
				});
			}
		});
	};

	// Handle Payment
	const handlePayment = async (parcel) => {
		const paymentInfo = {
			cost: parcel.cost,
			parcelId: parcel._id,
			senderEmail: parcel.senderEmail,
			parcelName: parcel.parcelName,
		};
		const res = await axiosSecure.post(
			"/payment-checkout-session",
			paymentInfo
		);
		window.location.assign(res.data.url);
	};
	return (
		<div className="p-5 md:p-12">
			<h2>All of my parcels {parcels.length}</h2>
			<div className="overflow-x-auto">
				<table className="table table-zebra">
					{/* head */}
					<thead>
						<tr>
							<th>S No</th>
							<th>Name</th>
							<th>Cost</th>
							<th>Payment</th>
							<th>Delivery Status</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						{parcels.map((parcel, index) => (
							<tr key={parcel._id}>
								<th>{index + 1}</th>
								<td>{parcel.parcelName}</td>
								<td>{parcel.cost}</td>
								<td>
									{parcel.paymentStatus === "paid" ? (
										<span className="text-green-500">
											Paid
										</span>
									) : (
										// <Link
										// 	to={`/dashboard/payment/${parcel._id}`}
										// >
										// 	<button className="btn btn-sm btn-primary text-secondary">
										// 		Proceed to Pay
										// 	</button>
										// </Link>

										<button
											onClick={() =>
												handlePayment(parcel)
											}
											className="btn btn-sm btn-primary text-secondary"
										>
											Proceed to Pay
										</button>
									)}
								</td>
								<td>{parcel.deliveryStatus}</td>
								<td>
									<button className="btn btn-square">
										<FaPen />
									</button>
									<button className="btn btn-square mx-2">
										<FaEye />
									</button>
									<button
										onClick={() =>
											handleParcelDelete(parcel._id)
										}
										className="btn btn-square"
									>
										<FaTrash />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyParcels;
