import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUserShield } from "react-icons/fa";
import { FiShieldOff } from "react-icons/fi";
import Swal from "sweetalert2";

const UsersManagement = () => {
	const axiosSecure = useAxiosSecure();
	// Data Fetching
	const { refetch, data: users = [] } = useQuery({
		queryKey: ["users"],
		queryFn: async () => {
			const res = await axiosSecure.get(`/users`);
			return res.data;
		},
	});

	// Handle User to Admin
	const handleUpdateUserRole = (user) => {
		const updateInfo = { role: "admin" };
		axiosSecure
			.patch(`/users/${user._id}`, updateInfo)
			.then((res) => {
				if (res.data.modifiedCount) {
					refetch();
					Swal.fire({
						position: "center",
						icon: "success",
						title: `${user.displayName} marked as admin.`,
						showConfirmButton: false,
						timer: 1500,
					});
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};

	// Handle Admin to User
	const handleAdminToUser = (user) => {
		const updateInfo = { role: "user" };
		axiosSecure
			.patch(`/users/${user._id}`, updateInfo)
			.then((res) => {
				if (res.data.modifiedCount) {
					refetch();
					Swal.fire({
						position: "center",
						icon: "success",
						title: `${user.displayName} marked as user.`,
						showConfirmButton: false,
						timer: 1500,
					});
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<section className="p-5 md:p-10">
			Total users {users.length}
			<div className="overflow-x-auto">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th>SL No.</th>
							<th>Name</th>
							<th>Email</th>
							<th>Role</th>
							<th>Admin Action</th>
							<th>Other Action</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user, index) => (
							<tr key={index}>
								<td>{index + 1}</td>
								<td>
									<div className="flex items-center gap-3">
										<div className="avatar">
											<div className="mask mask-squircle h-12 w-12">
												<img
													src={user.photoURL}
													alt={user.displayName}
												/>
											</div>
										</div>
										<div>
											<div className="font-bold">
												{user.displayName}
											</div>
											<div className="text-sm opacity-50">
												United States
											</div>
										</div>
									</div>
								</td>
								<td>{user.email}</td>
								<td>{user.role}</td>
								<th>
									{user.role === "admin" ? (
										<button
											onClick={() =>
												handleAdminToUser(user)
											}
											className="btn"
										>
											<FiShieldOff />
										</button>
									) : (
										<button
											onClick={() =>
												handleUpdateUserRole(user)
											}
											className="btn ml-2.5"
										>
											<FaUserShield />
										</button>
									)}
								</th>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default UsersManagement;
