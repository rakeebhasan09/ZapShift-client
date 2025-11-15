import { Link } from "react-router";
import footerLogo from "./assets/footer-logo.png";
import facebook from "./assets/facebook-logo.png";
import linkedin from "./assets/linkedin-icon.png";
import twitter from "./assets/twitter-logo.png";
import youtube from "./assets/youtube-logo.png";

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="bg-[#0B0B0B] flex flex-col gap-8 py-10 px-5 md:py-16 md:px-12 lg:px-20 lg:py-20 xl:px-[109px] rounded-xl lg:rounded-4xl">
					{/* Footer Top */}
					<div className="max-w-[810px] mx-auto flex flex-col gap-4 items-center">
						<img src={footerLogo} alt="" />
						<p className="text-[#DADADA] text-center">
							Enjoy fast, reliable parcel delivery with real-time
							tracking and zero hassle. From personal packages to
							business shipments — we deliver on time, every time.
						</p>
					</div>
					{/* Footer Menu */}
					<div>
						<ul className="flex flex-wrap justify-center gap-5 lg:gap-6 xl:gap-9 py-4 md:py-5 xl:py-8 footer-menu-border">
							<li>
								<Link className="text-[#DADADA] font-medium">
									Services
								</Link>
							</li>
							<li>
								<Link className="text-[#DADADA] font-medium">
									Coverage
								</Link>
							</li>
							<li>
								<Link className="text-[#DADADA] font-medium">
									About Us
								</Link>
							</li>
							<li>
								<Link className="text-[#DADADA] font-medium">
									Pricing
								</Link>
							</li>
							<li>
								<Link className="text-[#DADADA] font-medium">
									Blog
								</Link>
							</li>
							<li>
								<Link className="text-[#DADADA] font-medium">
									Contact
								</Link>
							</li>
						</ul>
					</div>
					{/* Socila Icons */}
					<div>
						<ul className="flex items-center justify-center gap-5 lg:gap-6">
							<li>
								<Link>
									<img src={linkedin} alt="linkedin Icon" />
								</Link>
							</li>
							<li>
								<Link>
									<img src={twitter} alt="twitter Icon" />
								</Link>
							</li>
							<li>
								<Link>
									<img src={facebook} alt="facebook Icon" />
								</Link>
							</li>
							<li>
								<Link>
									<img src={youtube} alt="youtube Icon" />
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
