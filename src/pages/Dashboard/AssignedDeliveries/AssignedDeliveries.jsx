import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AssignedDeliveries = () => {
	const { user } = useAuth();
	const axiosSecure = useAxiosSecure();

	const { data: parcels = [] } = useQuery({
		queryKey: ["parcels", user.email, "rider-assigned"],
		queryFn: async () => {
			const res = await axiosSecure.get(
				`/parcels/rider?riderEmail=${user?.email}&deliveryStatus=rider-assigned`
			);
			return res.data;
		},
	});

	return (
		<section className="p-5 md:p-10">
			<p className="mb-4">Assigned Deliveries {parcels.length}</p>
			<div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th>SL No</th>
							<th>Name</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{parcels.map((parcel, index) => (
							<tr>
								<td>{index + 1}</td>
								<td>{parcel.parcelName}</td>
								<td>
									<button className="btn btn-primary text-secondary text-sm">
										Accept
									</button>
									<button className="btn btn-primary text-secondary text-sm ml-2.5">
										Reject
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default AssignedDeliveries;
