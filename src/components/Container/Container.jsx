const Container = ({ children }) => {
	return (
		<div className="py-10 md:py-16 lg:py-20 px-5 md:px-10 lg:px-[109px] bg-white rounded-2xl lg:rounded-4xl">
			{children}
		</div>
	);
};

export default Container;
