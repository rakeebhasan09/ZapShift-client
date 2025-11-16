const FeatureCard = ({ image, title, description }) => {
	return (
		<div className="p-5 md:p-8 bg-[rgba(255,255,255,0.70)] rounded-2xl lg:rounded-3xl flex flex-col md:flex-row md:items-center">
			{/* Image Box */}
			<div className="md:pr-8 lg:pr-12 md:border-r md:border-r-secondary md:border-dashed">
				<img src={image} alt="" />
			</div>
			{/* Content Box */}
			<div className="md:pl-8 lg:pl-12 mt-5 md:mt-0">
				<h2 className="text-[20px] lg:text-[24px] font-extrabold text-secondary lg:mb-4">
					{title}
				</h2>
				<p className="font-medium">{description}</p>
			</div>
		</div>
	);
};

export default FeatureCard;
