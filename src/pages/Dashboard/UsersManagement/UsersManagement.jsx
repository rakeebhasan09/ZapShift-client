import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const UsersManagement = () => {
	const axiosSecure = useAxiosSecure();
	const { data: users = [] } = useQuery({
		queryKey: ["users"],
		queryFn: async () => {
			const res = await axiosSecure.get(`/users`);
			return res.data;
		},
	});
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
							<th>Favorite Color</th>
							<th></th>
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
								<td>Purple</td>
								<th>
									<button className="btn btn-ghost btn-xs">
										details
									</button>
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
