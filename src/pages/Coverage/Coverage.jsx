import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
import { useRef } from "react";

const Coverage = () => {
	const position = [25.0166667, 90.0166667];
	const servicePoints = useLoaderData();
	const mapRef = useRef(null);

	const handleSearch = (e) => {
		e.preventDefault();
		const location = e.target.location.value;
		const district = servicePoints.find((c) =>
			c.district.toLowerCase().includes(location.toLowerCase())
		);
		if (district) {
			const coord = [district.latitude, district.longitude];

			// Fly To The Location
			mapRef.current.flyTo(coord, 14);
		}
	};

	return (
		<section className="mt-4 lg:mt-8 mb-8 md:mb-16 lg:mb-32">
			<div className="container">
				<div className="py-10 md:py-16 lg:py-20 px-5 md:px-10 lg:px-[109px] bg-white rounded-2xl lg:rounded-4xl">
					<div className="flex flex-col gap-12">
						{/* Title */}
						<h3 className="text-[25px] md:text-[40px] lg:text-[56px] text-secondary font-extrabold leading-[100%]">
							We are available in 64 districts
						</h3>
						{/* Search Box */}
						<form onSubmit={handleSearch}>
							<div className="flex items-center w-full max-w-md bg-[rgba(203,213,225,0.30)] rounded-full overflow-hidden">
								<input
									type="text"
									placeholder="Search here"
									name="location"
									className="flex-1 px-4 py-2 text-gray-700 outline-none"
								/>
								<button className="bg-lime-300 hover:bg-lime-400 text-[#1F1F1F] px-6 py-2 rounded-full transition-colors text-[20px] font-bold duration-200">
									Search
								</button>
							</div>
						</form>
						{/* Divider */}
						<div className="divider"></div>
						{/* Sub title */}
						<h2 className="text-secondary text-[30px] font-extrabold leading-[100%]">
							We deliver almost all over Bangladesh
						</h2>
						{/* Map Box */}
						<div>
							<MapContainer
								center={position}
								zoom={10}
								scrollWheelZoom={false}
								className="h-[450px]"
								ref={mapRef}
							>
								<TileLayer
									attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
									url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
								/>
								{servicePoints.map((servicePoint, index) => (
									<Marker
										key={index}
										position={[
											servicePoint.latitude,
											servicePoint.longitude,
										]}
									>
										<Popup>
											{servicePoint.district} <br />{" "}
											{servicePoint.covered_area.join(
												", "
											)}
										</Popup>
									</Marker>
								))}
							</MapContainer>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Coverage;
