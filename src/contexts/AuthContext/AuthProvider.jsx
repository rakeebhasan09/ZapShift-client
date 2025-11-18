import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

// Google Provider
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	// Email Password Registration
	const userRegistration = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// User Login
	const signInUser = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	// Google Login
	const googleLogin = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};

	// Log Out
	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	// User State Observe
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	const authInfo = {
		user,
		loading,
		setUser,
		userRegistration,
		signInUser,
		googleLogin,
		logOut,
	};
	return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
