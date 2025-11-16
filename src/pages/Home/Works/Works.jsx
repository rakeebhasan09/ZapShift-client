import { BsTruck } from "react-icons/bs";
import WorkCard from "./WorkCard";

const Works = () => {
	return (
		<section className="pb-10 md:pb-16 lg:pb-[100px]">
			<div className="container">
				<h2 className="text-[32px] text-secondary font-extrabold mb-2.5 md:mb-5 lg:mb-8">
					How it Works
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 lg:gap-6">
					<WorkCard
						title="Booking Pick & Drop"
						description="From personal packages to business shipments — we deliver on time, every time."
						icon={BsTruck}
					/>
					<WorkCard
						title="Cash On Delivery"
						description="From personal packages to business shipments — we deliver on time, every time."
						icon={BsTruck}
					/>
					<WorkCard
						title="Delivery Hub"
						description="From personal packages to business shipments — we deliver on time, every time."
						icon={BsTruck}
					/>
					<WorkCard
						title="Booking SME & Corporate"
						description="From personal packages to business shipments — we deliver on time, every time."
						icon={BsTruck}
					/>
				</div>
			</div>
		</section>
	);
};

export default Works;
