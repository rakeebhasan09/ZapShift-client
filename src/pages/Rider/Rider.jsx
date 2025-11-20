import Container from "../../components/Container/Container";
import riderImage from "../../assets/rider-image.png";

const Rider = () => {
	return (
		<section className="mt-4 md:mt-8 mb-10 md:mb-20">
			<div className="container">
				<Container>
					<div className="max-w-[629px]">
						<h2 className="text-secondary text-[28px] md:text-[40px] lg:text-[56px] font-extrabold">
							Be a Rider
						</h2>
						<p>
							Enjoy fast, reliable parcel delivery with real-time
							tracking and zero hassle. From personal packages to
							business shipments — we deliver on time, every time.
						</p>
					</div>
					<div className="divider"></div>
					<div className="mt-6 md:mt-12">
						<div className="flex flex-col-reverse xl:flex-row justify-between">
							{/* Form */}
							<div className="flex-1 w-full xl:max-w-[628px] min-w-0 mt-5 xl:mt-0">
								<h3 className="text-[28px] text-secondary font-extrabold mb-5">
									Tell us about yourself
								</h3>
								{/* Form */}
								<form className="inter flex flex-col gap-5">
									{/* Input Row */}
									<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
										{/* Name */}
										<div>
											<label className="text-[#0F172A] text-[14px] font-medium block mb-1.5">
												Your Name
											</label>
											<input
												type="text"
												placeholder="Your Name"
												className="py-2 px-3 border border-[#CBD5E1] outline-none rounded-md w-full"
											/>
										</div>
										{/* Name */}
										<div>
											<label className="text-[#0F172A] text-[14px] font-medium block mb-1.5">
												Your Age
											</label>
											<input
												type="text"
												placeholder="Your Age"
												className="py-2 px-3 border border-[#CBD5E1] outline-none rounded-md w-full"
											/>
										</div>
									</div>
									{/* Input Row */}
									<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
										{/* Your Email */}
										<div>
											<label className="text-[#0F172A] text-[14px] font-medium block mb-1.5">
												Your Email
											</label>
											<input
												type="text"
												placeholder="Your Name"
												className="py-2 px-3 border border-[#CBD5E1] outline-none rounded-md w-full"
											/>
										</div>
										{/* Your Region */}
										<div>
											<label className="text-[#0F172A] text-[14px] font-medium block mb-1.5">
												Your Region
											</label>
											<select
												defaultValue="Select your region"
												className="select ring-0 outline-0 border border-[#CBD5E1] w-full"
											>
												<option disabled={true}>
													Select your region
												</option>
												<option>Crimson</option>
												<option>Amber</option>
												<option>Velvet</option>
											</select>
										</div>
									</div>

									{/* Input Row */}
									<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
										{/* NID No */}
										<div>
											<label className="text-[#0F172A] text-[14px] font-medium block mb-1.5">
												NID No
											</label>
											<input
												type="text"
												placeholder="Your Name"
												className="py-2 px-3 border border-[#CBD5E1] outline-none rounded-md w-full"
											/>
										</div>
										{/* Contact */}
										<div>
											<label className="text-[#0F172A] text-[14px] font-medium block mb-1.5">
												Contact
											</label>
											<input
												type="text"
												placeholder="Your Age"
												className="py-2 px-3 border border-[#CBD5E1] outline-none rounded-md w-full"
											/>
										</div>
									</div>

									{/* want to work */}
									<div>
										<label className="text-[#0F172A] text-[14px] font-medium block mb-1.5">
											Which wire-house you want to work?
										</label>
										<select
											defaultValue="Select wire-house"
											className="select ring-0 outline-0 border border-[#CBD5E1] w-full"
										>
											<option disabled={true}>
												Select wire-house
											</option>
											<option>Crimson</option>
											<option>Amber</option>
											<option>Velvet</option>
										</select>
									</div>

									{/* Submit Button */}
									<button className="text-black text-[14px] font-medium bg-primary py-2">
										Submit
									</button>
								</form>
							</div>
							{/* Image */}
							<div>
								<img
									className="max-w-full block mx-auto"
									src={riderImage}
									alt=""
								/>
							</div>
						</div>
					</div>
				</Container>
			</div>
		</section>
	);
};

export default Rider;
