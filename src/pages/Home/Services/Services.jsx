import ServiceCard from "./ServiceCard";

const Services = () => {
	return (
		<section>
			<div className="container">
				<div className="py-10 px-5 md:py-20 md:px-20 lg:py-[100px] lg:px-[110px] rounded-2xl md:rounded-3xl lg:rounded-4xl bg-secondary">
					{/* Title Card */}
					<div className="max-w-[718px] mx-auto">
						<h2 className="text-white text-[40px] font-extrabold text-center mb-4">
							Our Services
						</h2>
						<p className="font-medium text-[#DADADA] text-center">
							Enjoy fast, reliable parcel delivery with real-time
							tracking and zero hassle. From personal packages to
							business shipments — we deliver on time, every time.
						</p>
					</div>
					{/* Service Cards */}
					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3.5 lg:gap-6 mt-8">
						<ServiceCard
							title="Express  & Standard Delivery"
							description="We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off."
						/>
						<ServiceCard
							title="Nationwide Delivery"
							description="We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours."
						/>
						<ServiceCard
							title="Fulfillment Solution"
							description="We also offer customized service with inventory management support, online order processing, packaging, and after sales support."
						/>
						<ServiceCard
							title="Cash on Home Delivery"
							description="100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product."
						/>
						<ServiceCard
							title="Corporate Service / Contract In Logistics"
							description="Customized corporate services which includes warehouse and inventory management support."
						/>
						<ServiceCard
							title="Parcel Return"
							description="Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants."
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
