import { useSearchParams } from "react-router";
import paymentSuccessImage from "../../../assets/payment-successfull.png";
import Container from "../../../components/Container/Container";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentSuccess = () => {
	const [searchParams] = useSearchParams();
	const axiosSecure = useAxiosSecure();
	const [paymentInfo, setPaymentInfo] = useState({});
	const sessionId = searchParams.get("session_id");
	useEffect(() => {
		if (sessionId) {
			axiosSecure
				.patch(`/payment-success?session_id=${sessionId}`)
				.then((res) => {
					console.log(res.data);
					setPaymentInfo({
						trackingId: res.data.trackingId,
						transactionId: res.data.transactionId,
					});
				});
		}
	}, [sessionId, axiosSecure]);

	return (
		<>
			<section className="mt-4 md:mt-8 mb-7 md:mb-14 lg:mb-20">
				<div className="container">
					<Container>
						<p>Transaction ID: {paymentInfo.transactionId}</p>
						<p>Tracking ID: {paymentInfo.trackingId}</p>
						<img
							className="block w-3xl max-w-full mx-auto"
							src={paymentSuccessImage}
							alt=""
						/>
					</Container>
				</div>
			</section>
		</>
	);
};

export default PaymentSuccess;
