import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUserShield } from "react-icons/fa";
import { FiShieldOff } from "react-icons/fi";
import Swal from "sweetalert2";

const UsersManagement = () => {
	const axiosSecure = useAxiosSecure();
	const [searchText, setSearchText] = useState("");

	// Data Fetching
	const { refetch, data: users = [] } = useQuery({
		queryKey: ["users", searchText],
		queryFn: async () => {
			const res = await axiosSecure.get(
				`/users?searchText=${searchText}`
			);
			return res.data;
		},
	});

	// Handle User to Admin
	const handleUpdateUserRole = (user) => {
		const updateInfo = { role: "admin" };
		axiosSecure
			.patch(`/users/${user._id}/role`, updateInfo)
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
			.patch(`/users/${user._id}/role`, updateInfo)
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
			<p>Search Text {searchText}</p>
			{/* Seacrh Input Field */}
			<div>
				<label className="input outline-none ring-0">
					<svg
						className="h-[1em] opacity-50"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
					>
						<g
							strokeLinejoin="round"
							strokeLinecap="round"
							strokeWidth="2.5"
							fill="none"
							stroke="currentColor"
						>
							<circle cx="11" cy="11" r="8"></circle>
							<path d="m21 21-4.3-4.3"></path>
						</g>
					</svg>
					<input
						type="search"
						className="grow "
						placeholder="Search User"
						onChange={(e) => setSearchText(e.target.value)}
					/>
				</label>
			</div>
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
