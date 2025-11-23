import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
	const { user } = useAuth();
	const axiosSecure = useAxiosSecure();
	const { data: payments = [] } = useQuery({
		queryKey: ["payments", user.email],
		queryFn: async () => {
			const res = await axiosSecure.get(`/payments?email=${user.email}`);
			return res.data;
		},
	});
	return (
		<section className="p-5 md:p-10">
			<p className="mb-4">Payment History {payments.length}</p>
			<div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Amount</th>
							<th>Transaction ID</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						{payments.map((payment, idx) => (
							<tr key={idx}>
								<th>{idx + 1}</th>
								<td>Cy Ganderton</td>
								<td>{payment.amount}tk</td>
								<td>{payment.transactionId}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default PaymentHistory;
