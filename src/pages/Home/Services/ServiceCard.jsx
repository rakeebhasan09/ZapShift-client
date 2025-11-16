import heartIcon from "../../../assets/hear-icon.png";
const ServiceCard = ({ title, description }) => {
	return (
		<div className="bg-white hover:bg-primary transition-colors duration-200 rounded-xl md:rounded-2xl lg:rounded-3xl p-5 md:p-6 lg:p-8">
			<div className="flex flex-col gap-4">
				{/* Icon Div */}
				<div className="bg-[linear-gradient(180deg,#EEEDFC_0%,rgba(238,237,252,0)_100%)] p-4 lg:p-6 rounded-full w-[88px] h-[88px] mx-auto">
					<img src={heartIcon} alt="" />
				</div>

				{/* Title Div */}
				<h2 className="text-secondary text-[24px] font-bold text-center">
					{title}
				</h2>

				{/* Describtion Div */}
				<p className="font-medium">{description}</p>
			</div>
		</div>
	);
};

export default ServiceCard;
