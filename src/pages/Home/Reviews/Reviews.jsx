import { use } from "react";
import reviews from "../../../assets/reviews.png";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";

const Reviews = ({ reviewsPromise }) => {
	const reviewData = use(reviewsPromise);
	return (
		<section>
			<div className="container">
				{/* Area Title */}
				<div className="max-w-[832px] mx-auto">
					<img
						className="block mx-auto mb-5 md:mb-10"
						src={reviews}
						alt=""
					/>
					<h2 className="text-secondary lg:text-[40px] font-extrabold text-center mb-4">
						What our customers are sayings
					</h2>
					<p className="text-center">
						Enhance posture, mobility, and well-being effortlessly
						with Posture Pro. Achieve proper alignment, reduce pain,
						and strengthen your body with ease!
					</p>
				</div>
				<div className="pt-10 md:pb-7 overflow-hidden">
					<Swiper
						effect={"coverflow"}
						loop={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						grabCursor={true}
						centeredSlides={true}
						slidesPerView={3}
						coverflowEffect={{
							rotate: 30,
							stretch: "50%",
							depth: 200,
							modifier: 1,
							slideShadows: true,
						}}
						pagination={true}
						modules={[EffectCoverflow, Pagination, Autoplay]}
						breakpoints={{
							0: {
								slidesPerView: 1,
							},
							768: {
								slidesPerView: 2,
							},
							1024: {
								slidesPerView: 3,
							},
						}}
						className="mySwiper overflow-hidden"
					>
						{reviewData.map((review) => (
							<SwiperSlide key={review.id}>
								<ReviewCard review={review} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default Reviews;
