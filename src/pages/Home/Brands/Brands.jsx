import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amazon from "../../../assets/brands/amazon.png";
import amazon_vector from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import start_people from "../../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const brandLogos = [
	amazon,
	amazon_vector,
	casio,
	moonstar,
	randstad,
	star,
	start_people,
];

const Brands = () => {
	return (
		<section className="py-10 md:py-16 lg:py-[100px]">
			<div className="container">
				<h2 className="text-[28px] font-extrabold text-center text-secondary mb-2.5 md:mb-5 lg:mb-10">
					We've helped thousands of sales teams
				</h2>
				<Swiper
					loop={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					slidesPerView={4}
					centeredSlides={true}
					spaceBetween={30}
					grabCursor={true}
					modules={[Autoplay]}
					speed={1500}
				>
					{brandLogos.map((logo, index) => (
						<SwiperSlide key={index}>
							<img src={logo} alt="" />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default Brands;
