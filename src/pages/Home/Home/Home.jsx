import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Features from "../Features/Features";
import Priority from "../Priority/Priority";
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
			<Priority />
		</div>
	);
};

export default Home;
