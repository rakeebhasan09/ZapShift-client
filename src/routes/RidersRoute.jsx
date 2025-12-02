import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";

const RidersRoute = ({ children }) => {
	const { loading, user } = useAuth();
	const { role, roleLoading } = useRole();

	if (loading || !user || roleLoading) {
		return <span className="loading loading-bars loading-xl"></span>;
	}

	if (role !== "rider") {
		return <div>Access Forbidden.</div>;
	}

	return children;
};

export default RidersRoute;
