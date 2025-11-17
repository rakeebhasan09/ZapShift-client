import Container from "../../components/Container/Container";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const About = () => {
	return (
		<section className="mt-4 lg:mt-8 mb-8 md:mb-16 lg:mb-32">
			<div className="container">
				<Container>
					<div>
						{/* Title */}
						<div className="max-w-[630px]">
							<h3 className="text-[25px] md:text-[40px] lg:text-[56px] text-secondary font-extrabold">
								About Us
							</h3>
							<p className="mb-4 md:mb-8 lg:mb-12">
								Enjoy fast, reliable parcel delivery with
								real-time tracking and zero hassle. From
								personal packages to business shipments — we
								deliver on time, every time.
							</p>
						</div>
						{/* Divider */}
						<div className="divider"></div>
						{/* Tabs Area */}
						<div>
							<Tabs>
								<TabList>
									<Tab>Story</Tab>
									<Tab>Mission</Tab>
									<Tab>Success</Tab>
									<Tab>Team & Others</Tab>
								</TabList>

								<TabPanel>
									<div className="flex flex-col gap-4">
										<p>
											<strong>Story</strong> We started
											with a simple promise — to make
											parcel delivery fast, reliable, and
											stress-free. Over the years, our
											commitment to real-time tracking,
											efficient logistics, and
											customer-first service has made us a
											trusted partner for thousands.
											Whether it's a personal gift or a
											time-sensitive business delivery, we
											ensure it reaches its destination —
											on time, every time.
										</p>
										<p>
											We started with a simple promise —
											to make parcel delivery fast,
											reliable, and stress-free. Over the
											years, our commitment to real-time
											tracking, efficient logistics, and
											customer-first service has made us a
											trusted partner for thousands.
											Whether it's a personal gift or a
											time-sensitive business delivery, we
											ensure it reaches its destination —
											on time, every time.
										</p>
										<p>
											We started with a simple promise —
											to make parcel delivery fast,
											reliable, and stress-free. Over the
											years, our commitment to real-time
											tracking, efficient logistics, and
											customer-first service has made us a
											trusted partner for thousands.
											Whether it's a personal gift or a
											time-sensitive business delivery, we
											ensure it reaches its destination —
											on time, every time.
										</p>
									</div>
								</TabPanel>
								<TabPanel>
									<div className="flex flex-col gap-4">
										<p>
											<strong>Mission</strong> We started
											with a simple promise — to make
											parcel delivery fast, reliable, and
											stress-free. Over the years, our
											commitment to real-time tracking,
											efficient logistics, and
											customer-first service has made us a
											trusted partner for thousands.
											Whether it's a personal gift or a
											time-sensitive business delivery, we
											ensure it reaches its destination —
											on time, every time.
										</p>
										<p>
											We started with a simple promise —
											to make parcel delivery fast,
											reliable, and stress-free. Over the
											years, our commitment to real-time
											tracking, efficient logistics, and
											customer-first service has made us a
											trusted partner for thousands.
											Whether it's a personal gift or a
											time-sensitive business delivery, we
											ensure it reaches its destination —
											on time, every time.
										</p>
										<p>
											We started with a simple promise —
											to make parcel delivery fast,
											reliable, and stress-free. Over the
											years, our commitment to real-time
											tracking, efficient logistics, and
											customer-first service has made us a
											trusted partner for thousands.
											Whether it's a personal gift or a
											time-sensitive business delivery, we
											ensure it reaches its destination —
											on time, every time.
										</p>
									</div>
								</TabPanel>
								<TabPanel>
									<div className="flex flex-col gap-4">
										<p>
											<strong>Success</strong> We started
											with a simple promise — to make
											parcel delivery fast, reliable, and
											stress-free. Over the years, our
											commitment to real-time tracking,
											efficient logistics, and
											customer-first service has made us a
											trusted partner for thousands.
											Whether it's a personal gift or a
											time-sensitive business delivery, we
											ensure it reaches its destination —
											on time, every time.
										</p>
										<p>
											We started with a simple promise —
											to make parcel delivery fast,
											reliable, and stress-free. Over the
											years, our commitment to real-time
											tracking, efficient logistics, and
											customer-first service has made us a
											trusted partner for thousands.
											Whether it's a personal gift or a
											time-sensitive business delivery, we
											ensure it reaches its destination —
											on time, every time.
										</p>
										<p>
											We started with a simple promise —
											to make parcel delivery fast,
											reliable, and stress-free. Over the
											years, our commitment to real-time
											tracking, efficient logistics, and
											customer-first service has made us a
											trusted partner for thousands.
											Whether it's a personal gift or a
											time-sensitive business delivery, we
											ensure it reaches its destination —
											on time, every time.
										</p>
									</div>
								</TabPanel>
								<TabPanel>
									<div className="flex flex-col gap-4">
										<p>
											<strong>Team & Others</strong> We
											started with a simple promise — to
											make parcel delivery fast, reliable,
											and stress-free. Over the years, our
											commitment to real-time tracking,
											efficient logistics, and
											customer-first service has made us a
											trusted partner for thousands.
											Whether it's a personal gift or a
											time-sensitive business delivery, we
											ensure it reaches its destination —
											on time, every time.
										</p>
										<p>
											We started with a simple promise —
											to make parcel delivery fast,
											reliable, and stress-free. Over the
											years, our commitment to real-time
											tracking, efficient logistics, and
											customer-first service has made us a
											trusted partner for thousands.
											Whether it's a personal gift or a
											time-sensitive business delivery, we
											ensure it reaches its destination —
											on time, every time.
										</p>
										<p>
											We started with a simple promise —
											to make parcel delivery fast,
											reliable, and stress-free. Over the
											years, our commitment to real-time
											tracking, efficient logistics, and
											customer-first service has made us a
											trusted partner for thousands.
											Whether it's a personal gift or a
											time-sensitive business delivery, we
											ensure it reaches its destination —
											on time, every time.
										</p>
									</div>
								</TabPanel>
							</Tabs>
						</div>
					</div>
				</Container>
			</div>
		</section>
	);
};

export default About;
