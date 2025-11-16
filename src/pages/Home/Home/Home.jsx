import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import FAQSection from "../FAQSection/FAQSection";
import Features from "../Features/Features";
import Priority from "../Priority/Priority";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";
import Works from "../Works/Works";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
	return (
		<div>
			<Banner />
			<Works />
			<Services />
			<Brands />
			<Features />
			<Priority />
			<Reviews reviewsPromise={reviewsPromise} />
			<FAQSection />
		</div>
	);
};

export default Home;
