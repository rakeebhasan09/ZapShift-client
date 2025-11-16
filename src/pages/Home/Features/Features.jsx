import FeatureCard from "./FeatureCard";
import traking from "../../../assets/tracking.png";
import delivery from "../../../assets/delivery.png";

const Features = () => {
	return (
		<section>
			<div className="container">
				<div className="flex flex-col gap-6 py-10 md:py-16 lg:py-20 border-t border-t-secondary border-b border-b-seconborder border-dashed">
					<FeatureCard
						image={traking}
						title="Live Parcel Tracking"
						description="Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind."
					/>
					<FeatureCard
						image={delivery}
						title="100% Safe Delivery"
						description="We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time."
					/>
					<FeatureCard
						image={delivery}
						title="24/7 Call Center Support"
						description="Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us."
					/>
				</div>
			</div>
		</section>
	);
};

export default Features;
