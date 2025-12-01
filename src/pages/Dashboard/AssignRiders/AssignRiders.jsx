import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useRef, useState } from "react";

const AssignRiders = () => {
	const [selectedParcel, setSelectedParcel] = useState(null);

	const axiosSecure = useAxiosSecure();

	const riderModalRef = useRef();

	const { data: parcels = [] } = useQuery({
		queryKey: ["parcels", "pending-pickup"],
		queryFn: async () => {
			const res = await axiosSecure.get(
				"/parcels?deliveryStatus=pending-pickup"
			);
			return res.data;
		},
	});

	const { data: riders = [] } = useQuery({
		queryKey: ["riders", selectedParcel?.senderRegion, "available"],
		enabled: !!selectedParcel,
		queryFn: async () => {
			const res = await axiosSecure.get(
				`/riders?status=approved&senderRegion=${selectedParcel.senderRegion}&workStatus=available`
			);
			return res.data;
		},
	});

	// Assign Rider Modal Handler
	const openAssignRiderModal = (parcel) => {
		setSelectedParcel(parcel);
		riderModalRef.current.showModal();
	};

	// Assign Rider Hander
	const handleAssignRider = (rider) => {
		const riderAssignInfo = {
			riderId: rider._id,
			riderEmail: rider.email,
			riderName: rider.name,
			parcelId: selectedParcel._id,
		};
		axiosSecure.patch(``, riderAssignInfo);
	};
	return (
		<section className="p-5 md:p-10">
			Assign Riders {parcels.length}
			<div>
				<div className="overflow-x-auto">
					<table className="table table-zebra">
						{/* head */}
						<thead>
							<tr>
								<th>SL No</th>
								<th>Name</th>
								<th>Cost</th>
								<th>Created At</th>
								<th>Pickup District</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{parcels.map((parcel, index) => (
								<tr>
									<td>{index + 1}</td>
									<td>{parcel.parcelName}</td>
									<td>{parcel.cost}</td>
									<td>{parcel.created_at}</td>
									<td>{parcel.senderRegion}</td>
									<td>
										<button
											onClick={() =>
												openAssignRiderModal(parcel)
											}
											className="btn btn-primary text-base text-secondary"
										>
											Assing Rider
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
			{/* Open the modal using document.getElementById('ID').showModal() method */}
			<dialog
				ref={riderModalRef}
				className="modal modal-bottom sm:modal-middle"
			>
				<div className="modal-box max-w-4xl">
					<h3 className="font-bold text-lg">
						Available Riders {riders.length}!
					</h3>
					<div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
						<table className="table">
							{/* head */}
							<thead>
								<tr>
									<th>SL No.</th>
									<th>Name</th>
									<th>Email</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{riders &&
								riders.length > 0 &&
								riders.some((r) => r) ? (
									riders.map((rider, i) =>
										rider ? (
											<tr key={i}>
												<th>{i + 1}</th>
												<td className="whitespace-nowrap">
													{rider.name}
												</td>
												<td className="whitespace-nowrap">
													{rider.email}
												</td>
												<td className="whitespace-nowrap">
													<button
														onClick={() =>
															handleAssignRider(
																rider
															)
														}
														className="btn btn-primary text-base text-secondary"
													>
														Assign
													</button>
												</td>
											</tr>
										) : null
									)
								) : (
									<tr>
										<td colSpan="4" className="text-center">
											No Rider Found
										</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>

					<div className="modal-action">
						<form method="dialog">
							{/* if there is a button in form, it will close the modal */}
							<button className="btn">Close</button>
						</form>
					</div>
				</div>
			</dialog>
		</section>
	);
};

export default AssignRiders;
