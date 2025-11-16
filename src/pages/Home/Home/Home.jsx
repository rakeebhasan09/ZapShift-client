import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Features from "../Features/Features";
import Services from "../Services/Services";
import Works from "../Works/Works";

const Home = () => {
	return (
		<div>
			<Banner />
			<Works />
			<Services />
			<Brands />
			<Features />
		</div>
	);
};

export default Home;
