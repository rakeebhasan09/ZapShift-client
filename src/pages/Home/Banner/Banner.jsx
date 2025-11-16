import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../../assets/banner1.png";
import banner2 from "../../../assets/banner2.png";
import banner3 from "../../../assets/banner3.png";
const Banner = () => {
	return (
		<section className="container">
			<div className="pt-6 md:pt-8 pb-6 md:pb-14 lg:pb-[100px]">
				<Carousel
					autoPlay={true}
					infiniteLoop={true}
					showThumbs={false}
					showIndicators={false}
				>
					<div>
						<img src={banner1} />
					</div>
					<div>
						<img src={banner2} />
					</div>
					<div>
						<img src={banner3} />
					</div>
				</Carousel>
			</div>
		</section>
	);
};

export default Banner;
