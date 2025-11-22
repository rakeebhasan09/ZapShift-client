import paymentCancelled from "../../../assets/Payment-Cancelled.png";
import Container from "../../../components/Container/Container";
const PaymentCancelled = () => {
	return (
		<>
			<section className="mt-4 md:mt-8 mb-7 md:mb-14 lg:mb-20">
				<div className="container">
					<Container>
						<img
							className="block w-3xl max-w-full mx-auto"
							src={paymentCancelled}
							alt=""
						/>
					</Container>
				</div>
			</section>
		</>
	);
};

export default PaymentCancelled;
