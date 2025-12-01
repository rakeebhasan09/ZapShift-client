import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { BsPersonCheck } from "react-icons/bs";
import { MdOutlinePersonRemoveAlt1 } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const ApproveRiders = () => {
	const axiosSecure = useAxiosSecure();
	const { refetch, data: riders = [] } = useQuery({
		queryKey: ["riders", "pending"],
		queryFn: async () => {
			const res = await axiosSecure.get("/riders");
			return res.data;
		},
	});

	const updateRiderStatus = (rider, status) => {
		const updateInfo = {
			status: status,
			email: rider.email,
		};
		axiosSecure.patch(`/riders/${rider._id}`, updateInfo).then((res) => {
			if (res.data.modifiedCount) {
				refetch();
				Swal.fire({
					position: "center",
					icon: "success",
					title: `New Rider ${status}.`,
					showConfirmButton: false,
					timer: 1500,
				});
			}
		});
	};

	// Handle Approval
	const handleApproval = (rider) => {
		updateRiderStatus(rider, "approved");
	};

	// Handle Rejection
	const handleRejection = (rider) => {
		updateRiderStatus(rider, "rejected");
	};

	// Handle Delete
	const handleDeleteRiderRequest = (id) => {
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
				axiosSecure.delete(`/riders/${id}`).then((res) => {
					if (res.data.deletedCount) {
						refetch();
						Swal.fire({
							title: "Deleted!",
							text: "Requiest has been deleted.",
							icon: "success",
						});
					}
				});
			}
		});
	};
	return (
		<section className="p-5 md:p-10">
			<h2>Pending Riders for Approval {riders.length}</h2>
			<div className="overflow-x-auto">
				<table className="table table-zebra">
					{/* head */}
					<thead>
						<tr>
							<th>SL. No</th>
							<th>Name</th>
							<th>Email</th>
							<th>Application Status</th>
							<th>Work Status</th>
							<th>District</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{riders.map((rider, idx) => (
							<tr key={idx}>
								<th>{idx + 1}</th>
								<td>{rider.name}</td>
								<td>{rider.email}</td>
								<td>{rider.status}</td>
								<td>{rider.workStatus}</td>
								<td>{rider.senderRegion}</td>
								<td>
									<button
										onClick={() => handleApproval(rider)}
										className="btn"
									>
										<BsPersonCheck className="text-[22px]" />
									</button>
									<button
										onClick={() => handleRejection(rider)}
										className="btn ml-2"
									>
										<MdOutlinePersonRemoveAlt1 className="text-[22px]" />
									</button>
									<button
										onClick={() =>
											handleDeleteRiderRequest(rider._id)
										}
										className="btn ml-2"
									>
										<FaTrashAlt className="text-[22px]" />
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

export default ApproveRiders;
