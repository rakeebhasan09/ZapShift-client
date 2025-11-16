import quite from "../../../assets/quite.png";
const ReviewCard = ({ review }) => {
	const { userName, review: testimonial, user_photoURL } = review;
	return (
		<div className="p-5 lg:p-8 bg-[rgb(255,255,255)] rounded-2xl lg:rounded-3xl">
			<img src={quite} alt="" />
			<p className="font-medium pb-6 border-b border-b-secondary border-dashed">
				{testimonial}
			</p>
			{/* Author Area */}
			<div className="pt-6 flex items-center gap-4">
				{/* Author Image */}
				<div>
					<img
						className="w-12 h-12 rounded-full"
						src={user_photoURL}
						alt=""
					/>
				</div>
				{/* Author Information */}
				<div>
					<h4 className="text-secondary text-[20px] font-extrabold">
						{userName}
					</h4>
					<p className="font-medium">Senior Product Designer</p>
				</div>
			</div>
		</div>
	);
};

export default ReviewCard;
