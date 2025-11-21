import { useForm, useWatch } from "react-hook-form";
import Container from "../../components/Container/Container";
import useAuth from "../../hooks/useAuth";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const SendParcel = () => {
	const {
		register,
		handleSubmit,
		control,
		reset,
		// formState: { errors },
	} = useForm();
	const { user } = useAuth();

	const axiosSecure = useAxiosSecure();

	const serviceCenters = useLoaderData();
	const regionsDuplicate = serviceCenters.map((c) => c.region);
	const regions = [...new Set(regionsDuplicate)];
	const senderHouse = useWatch({ control, name: "senderWireHouse" });
	const receiverHouse = useWatch({ control, name: "receiverWireHouse" });

	const districtByRegion = (region) => {
		const regionDistricts = serviceCenters.filter(
			(c) => c.region === region
		);
		const districts = regionDistricts.map((d) => d.district);
		return districts;
	};

	const handleSendParcel = (data) => {
		// console.log(data);
		const isDocument = data.parcelType === "Document";
		const isDistrict = data.senderRegion === data.receiverRegion;
		const parcelWeight = parseFloat(data.parcelWeight);

		let cost = 0;
		if (isDocument) {
			cost = isDistrict ? 60 : 80;
		} else {
			if (parcelWeight < 3) {
				cost = isDistrict ? 110 : 150;
			} else {
				const minCharge = isDistrict ? 110 : 150;
				const extraWeight = parcelWeight - 3;
				const extraCharge = isDistrict
					? extraWeight * 40
					: extraWeight * 40 + 40;

				cost = minCharge + extraCharge;
			}
		}

		data.cost = cost;

		Swal.fire({
			title: "Agree with the cost?",
			text: `You will be charged ${cost} taka.`,
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "I agree",
		}).then((result) => {
			if (result.isConfirmed) {
				axiosSecure.post("/parcels", data).then((res) => {
					if (res.data.insertedId) {
						Swal.fire({
							title: "Parcel Stored!",
							text: "Your Parcel has been Stored.",
							icon: "success",
						});
						reset();
					}
				});
			}
		});
	};
	return (
		<section className="mt-4 lg:mt-8 mb-6 md:mb-16 lg:mb-28">
			<div className="container inter">
				<Container>
					<h2 className="text-secondary text-[28px] md:text-[40px] lg:text-[56px] font-extrabold">
						Add Parcel
					</h2>
					<div className="divider"></div>
					{/* Parcel Details */}
					<div>
						<form
							onSubmit={handleSubmit(handleSendParcel)}
							className="flex flex-col gap-4 md:gap-[30px]"
						>
							<h2 className="text-secondary text-[22px] md:text-[28px] font-extrabold">
								Enter your parcel details
							</h2>

							{/* Radio Options */}
							<div className="flex items-center gap-6">
								<label className="flex items-center gap-2 cursor-pointer">
									<input
										type="radio"
										{...register("parcelType")}
										value="Document"
										className="w-4 h-4"
									/>
									<span className="text-secondary font-semibold">
										Document
									</span>
								</label>

								<label className="flex items-center gap-2 cursor-pointer">
									<input
										type="radio"
										{...register("parcelType")}
										value="Not-Document"
										className="w-4 h-4"
									/>
									<span className="text-secondary font-semibold">
										Not-Document
									</span>
								</label>
							</div>

							{/* Form Inputs Row */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								{/* Parcel Name */}
								<div>
									<label className="block text-sm font-medium text-[#0F172A] mb-1.5">
										Parcel Name
									</label>
									<input
										type="text"
										placeholder="Parcel Name"
										{...register("parcelName")}
										className="w-full border border-[#CBD5E1] rounded-md px-3 py-2 outline-none"
									/>
								</div>

								{/* Parcel Weight */}
								<div>
									<label className="block text-sm font-medium text-[#0F172A] mb-1.5">
										Parcel Weight (KG)
									</label>
									<input
										type="number"
										placeholder="Parcel Weight (KG)"
										{...register("parcelWeight")}
										className="w-full border border-[#CBD5E1] rounded-md px-3 py-2 outline-none"
									/>
								</div>
							</div>
							<div className="divider my-0"></div>

							{/* Sender And Reciver Details */}
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-9 lg:gap-[50px]">
								{/* Sender Details */}
								<div>
									<p className="text-secondary text-[18px] font-extrabold mb-4 lg:mb-[30px]">
										Sender Details
									</p>
									<div className="flex flex-col gap-5">
										{/* Input Row */}
										<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
											{/* Sender Name */}
											<div>
												<label className="text-[#0F172A] text-[14px] font-medium block mb-1.5">
													Sender Name
												</label>
												<input
													type="text"
													defaultValue={
														user.displayName
													}
													readOnly
													{...register("senderName")}
													className="py-2 px-3 border border-[#CBD5E1] outline-none rounded-md w-full"
												/>
											</div>
											{/* Sender Pickup Wire house */}
											<div>
												<label className="text-[#0F172A] text-[14px] font-medium block mb-1.5">
													Sender Pickup Wire house
												</label>

												<select
													defaultValue="Select wire-house"
													{...register(
														"senderWireHouse"
													)}
													className="select ring-0 outline-0 border border-[#CBD5E1] w-full"
												>
													<option disabled={true}>
														Select wire-house
													</option>
													{regions.map((r) => (
														<option
															key={r}
															value={r}
														>
															{r}
														</option>
													))}
												</select>
											</div>
										</div>
										{/* Sender Email */}
										<div>
											<label className="block text-sm font-medium text-[#0F172A] mb-1.5">
												Sender Email
											</label>
											<input
												type="text"
												defaultValue={user?.email}
												readOnly
												{...register("senderEmail")}
												className="w-full border border-[#CBD5E1] rounded-md px-3 py-2 outline-none"
											/>
										</div>
										{/* Input Row */}
										<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
											{/* Sender Name */}
											<div>
												<label className="text-[#0F172A] text-[14px] font-medium block mb-1.5">
													Address
												</label>
												<input
													type="text"
													placeholder="Address"
													{...register(
														"senderAddress"
													)}
													className="py-2 px-3 border border-[#CBD5E1] outline-none rounded-md w-full"
												/>
											</div>
											{/* Sender Pickup Wire house */}
											<div>
												<label className="text-[#0F172A] text-[14px] font-medium block mb-1.5">
													Sender Contact No
												</label>
												<input
													type="text"
													placeholder="Sender Contact No"
													{...register(
														"senderContact"
													)}
													className="py-2 px-3 border border-[#CBD5E1] outline-none rounded-md w-full"
												/>
											</div>
										</div>
										{/* Input Row */}
										<div>
											<label className="text-[#0F172A] text-[14px] font-medium block mb-1.5">
												Your Region
											</label>

											<select
												defaultValue="Select your region"
												{...register("senderRegion")}
												className="select ring-0 outline-0 border border-[#CBD5E1] w-full"
											>
												<option disabled={true}>
													Select your region
												</option>
												{districtByRegion(
													senderHouse
												).map((d) => (
													<option key={d} value={d}>
														{d}
													</option>
												))}
											</select>
										</div>
										{/* Input Row */}
										<div>
											<label className="text-[#0F172A] text-[14px] font-medium block mb-1.5">
												Pickup Instruction
											</label>
											<textarea
												rows={5}
												placeholder="Pickup Instruction"
												{...register("senderMessage")}
												className="py-2 px-3 border border-[#CBD5E1] outline-none rounded-md w-full resize-none"
											></textarea>
										</div>
									</div>
								</div>
								{/* Reciver Details */}
								<div>
									<p className="text-secondary text-[18px] font-extrabold mb-4 lg:mb-[30px]">
										Receiver Details
									</p>
									<div className="flex flex-col gap-5">
										{/* Input Row */}
										<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
											{/* Receiver Name */}
											<div>
												<label className="text-[#0F172A] text-[14px] font-medium block mb-1.5">
													Receiver Name
												</label>
												<input
													type="text"
													placeholder="Receiver Name"
													{...register(
														"receiverName"
													)}
													className="py-2 px-3 border border-[#CBD5E1] outline-none rounded-md w-full"
												/>
											</div>
											{/* Receiver Pickup Wire house */}
											<div>
												<label className="text-[#0F172A] text-[14px] font-medium block mb-1.5">
													Receiver Pickup Wire house
												</label>

												<select
													defaultValue="Select wire-house"
													{...register(
														"receiverWireHouse"
													)}
													className="select ring-0 outline-0 border border-[#CBD5E1] w-full"
												>
													<option disabled={true}>
														Select wire-house
													</option>
													{regions.map((r) => (
														<option
															key={r}
															value={r}
														>
															{r}
														</option>
													))}
												</select>
											</div>
										</div>
										{/* Receiver Email */}
										<div>
											<label className="block text-sm font-medium text-[#0F172A] mb-1.5">
												Receiver Email
											</label>
											<input
												type="text"
												placeholder="receiver@gmail.com"
												{...register("receiverEmail")}
												className="w-full border border-[#CBD5E1] rounded-md px-3 py-2 outline-none"
											/>
										</div>
										{/* Input Row */}
										<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
											{/* Receiver Address */}
											<div>
												<label className="text-[#0F172A] text-[14px] font-medium block mb-1.5">
													Receiver Address
												</label>
												<input
													type="text"
													placeholder="Address"
													{...register(
														"receiverAddress"
													)}
													className="py-2 px-3 border border-[#CBD5E1] outline-none rounded-md w-full"
												/>
											</div>
											{/* Receiver Contact No */}
											<div>
												<label className="text-[#0F172A] text-[14px] font-medium block mb-1.5">
													Receiver Contact No
												</label>
												<input
													type="text"
													placeholder="Receiver Contact No"
													{...register(
														"receiverContact"
													)}
													className="py-2 px-3 border border-[#CBD5E1] outline-none rounded-md w-full"
												/>
											</div>
										</div>
										{/* Input Row */}
										<div>
											<label className="text-[#0F172A] text-[14px] font-medium block mb-1.5">
												Receiver Region
											</label>

											<select
												defaultValue="Select Receiver region"
												{...register("receiverRegion")}
												className="select ring-0 outline-0 border border-[#CBD5E1] w-full"
											>
												<option disabled={true}>
													Select Receiver region
												</option>
												{districtByRegion(
													receiverHouse
												).map((d) => (
													<option key={d} value={d}>
														{d}
													</option>
												))}
											</select>
										</div>
										{/* Input Row */}
										<div>
											<label className="text-[#0F172A] text-[14px] font-medium block mb-1.5">
												Delivery Instruction
											</label>
											<textarea
												rows={5}
												placeholder="Delivery Instruction"
												{...register(
													"receiverInstruction"
												)}
												className="py-2 px-3 border border-[#CBD5E1] outline-none rounded-md w-full resize-none"
											></textarea>
										</div>
									</div>
								</div>
							</div>
							{/* Time Shedule */}
							<p className="text-black">
								* PickUp Time 4pm-7pm Approx.
							</p>
							{/* Button */}
							<button className="py-2 bg-primary text-black font-medium max-w-[320px] rounded-md">
								Proceed to Confirm Booking
							</button>
						</form>
					</div>
				</Container>
			</div>
		</section>
	);
};

export default SendParcel;
