import { Link } from "react-router";
import priorityBg from "../../../assets/Priority-bg.png";
const Priority = () => {
	return (
		<section className="pt-10 pb-14 md:pt-14 md:pb-16 lg:pt-20 lg:pb-[100px]">
			<div className="container">
				<div
					style={{
						backgroundImage: `url(${priorityBg})`,
					}}
					className="bg-no-repeat bg-cover bg-center p-6 md:p-14 lg:p-20 rounded-2xl lg:rounded-3xl"
				>
					<div className="max-w-[673px]">
						<h2 className="text-[20px] mt-14 md:mt-0 md:text-[32px] lg:text-[40px] font-extrabold text-white mb-4">
							Merchant and Customer Satisfaction is Our First
							Priority
						</h2>
						<p className="max-w-[516px] text-[#DADADA]">
							We offer the lowest delivery charge with the highest
							value along with 100% safety of your product. Pathao
							courier delivers your parcels in every corner of
							Bangladesh right on time.
						</p>
					</div>
					{/* Buttons */}
					<div className="flex flex-col md:flex-row gap-4 mt-8">
						<Link className="py-4 px-8 bg-primary rounded-full inline-block text-[#1F1F1F] text-[20px] font-bold">
							Become a Merchant
						</Link>
						<Link className="py-4 px-5 md:px-8  rounded-full inline-block text-primary border broder-primary text-[20px] font-bold">
							Earn with ZapShift Courier
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Priority;
