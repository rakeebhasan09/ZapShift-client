import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqData = [
	{
		question: "How does this posture corrector work?",
		answer: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
	},
	{
		question: "Is it suitable for all ages and body types?",
		answer: "Yes, posture correctors are generally designed to fit a wide range of body types and ages.",
	},
	{
		question: "Does it really help with back pain and posture improvement?",
		answer: "Many users experience reduced back pain and improved posture after consistent use.",
	},
	{
		question: "Does it have smart features like vibration alerts?",
		answer: "Some advanced models include vibration alerts when you slouch to remind you to correct posture.",
	},
	{
		question: "How will I be notified when the product is back in stock?",
		answer: "You will receive an email or SMS notification when the product becomes available.",
	},
];

const FAQSection = () => {
	const [openIndex, setOpenIndex] = useState(0);

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className="py-10 md:py-14 lg:py-20 bg-[#ECEFF1]">
			<div className="container">
				<div className="max-w-4xl mx-auto text-center">
					{/* Title */}
					<h2 className="text-4xl font-bold text-[#003C3C]">
						Frequently Asked Question (FAQ)
					</h2>

					{/* Subtitle */}
					<p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
						Enhance posture, mobility, and well-being effortlessly
						with Posture Pro. Achieve proper alignment, reduce pain,
						and strengthen your body with ease!
					</p>
				</div>

				{/* FAQ List */}
				<div className="max-w-4xl mx-auto mt-12 flex flex-col gap-4">
					{faqData.map((item, index) => {
						const isOpen = openIndex === index;

						return (
							<div
								key={index}
								className={`rounded-xl px-6 py-4 cursor-pointer transition-all duration-300 border 
              ${
					isOpen
						? "bg-[#E3F7F7] border-[#0A8C8C]"
						: "bg-white border-gray-200 shadow"
				} `}
								onClick={() => toggleFAQ(index)}
							>
								<div className="flex justify-between items-center">
									<h3
										className={`text-lg font-semibold ${
											isOpen
												? "text-[#0A8C8C]"
												: "text-gray-800"
										}`}
									>
										{item.question}
									</h3>

									<FiChevronDown
										className={`text-xl transition-transform duration-300 ${
											isOpen
												? "rotate-180 text-[#0A8C8C]"
												: "text-gray-600"
										}`}
									/>
								</div>

								{/* Answer */}
								<div
									className={`overflow-hidden transition-all duration-300 ${
										isOpen ? "max-h-40 mt-3" : "max-h-0"
									}`}
								>
									<p className="text-gray-600 leading-relaxed">
										{item.answer}
									</p>
								</div>
							</div>
						);
					})}
				</div>

				{/* More FAQ Button */}
				<div className="text-center mt-10">
					<button className="bg-lime-400 px-8 py-3 rounded-full font-semibold text-gray-900 flex items-center gap-2 mx-auto hover:bg-lime-500 transition">
						See More FAQ’s
						<span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center">
							→
						</span>
					</button>
				</div>
			</div>
		</section>
	);
};

export default FAQSection;
