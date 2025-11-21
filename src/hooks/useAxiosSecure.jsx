import axios from "axios";

const axiosSecure = axios.create({
	baseURL: "http://localhost:3000",
	// baseURL: "https://zap-shift-server-coral.vercel.app",
});

const useAxiosSecure = () => {
	return axiosSecure;
};

export default useAxiosSecure;
