// eslint-disable-next-line no-unused-vars
const WorkCard = ({ title, description, icon: Icon }) => {
	return (
		<div className="bg-[rgba(255,255,255,0.70)] rounded-xl md:rounded-2xl lg:rounded-3xl p-5 md:p-6 lg:p-8">
			<Icon className="text-[60px]" />
			<h3 className="mt-2 mb-2 lg:mt-6 lg:mb-4 text-secondary text-[20px] font-bold">
				{title}
			</h3>
			<p className="font-medium">{description}</p>
		</div>
	);
};

export default WorkCard;
