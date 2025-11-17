import { Link } from "react-router";
import errorImage from "../../assets/error.png";

const Error = () => {
	return (
		<section className="mt-4 md:mt-8 mb-10 md:mb-20 lg:mb-32">
			<div className="container">
				<div className="py-10 md:py-16 lg:py-20 px-5 md:px-10 lg:px-[109px] bg-white rounded-2xl lg:rounded-4xl">
					<img className="block mx-auto" src={errorImage} alt="" />
					<div className="text-center">
						<Link to="/">
							<button className="py-4 px-8 bg-primary rounded-xl text-[20px] text-[#1F1F1F] font-bold">
								Go Home
							</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Error;
