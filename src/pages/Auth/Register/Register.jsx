import { Link, useNavigate } from "react-router";
import Google from "../../Shared/Social/Google";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";

const Register = () => {
	const { userRegistration, updateUserProfile, setUser } = useAuth();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const navigate = useNavigate();

	const handleRegistration = (data) => {
		const profileImage = data.photo[0];

		userRegistration(data.email, data.password)
			.then((result) => {
				const formData = new FormData();
				formData.append("image", profileImage);
				const image_API_URL = `https://api.imgbb.com/1/upload?key=${
					import.meta.env.VITE_imageHost
				}`;
				axios.post(image_API_URL, formData).then((res) => {
					const userProfile = {
						displayName: data.name,
						photoURL: res.data.data.url,
					};
					updateUserProfile(userProfile)
						.then(() => {
							result.user.displayName = data.name;
							result.user.photoURL = res.data.data.url;
							setUser(result.user);
							navigate("/");
						})
						.catch((error) => console.log(error));
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className="max-w-[384px] mx-auto inter">
			<h2 className="text-black text-[28px] md:text-[42px] font-extrabold">
				Create an Account
			</h2>
			<p className="text-black">Register with ZapShift</p>
			{/* Form */}
			<form
				onSubmit={handleSubmit(handleRegistration)}
				className="mt-5 flex flex-col gap-3"
			>
				{/* Single Input */}
				<div>
					<label className="text-[#0F172A] font-medium mb-1.5 block">
						Photo
					</label>
					<input
						type="file"
						{...register("photo", { required: true })}
						className="file-input bg-white border border-[#CBD5E1] rounded-md outline-none w-full text-[#0F172A]"
					/>
					{errors.name?.type === "required" && (
						<p className="text-red-500">Photo is required</p>
					)}
				</div>

				{/* Single Input */}
				<div>
					<label className="text-[#0F172A] font-medium mb-1.5 block">
						Name
					</label>
					<input
						type="text"
						placeholder="Name"
						{...register("name", { required: true })}
						className="py-2 px-3 bg-white border border-[#CBD5E1] rounded-md outline-none w-full text-[#0F172A]"
					/>
					{errors.name?.type === "required" && (
						<p className="text-red-500">Name is required</p>
					)}
				</div>
				{/* Single Input */}
				<div>
					<label className="text-[#0F172A] font-medium mb-1.5 block">
						Email
					</label>
					<input
						type="email"
						placeholder="Email"
						{...register("email", { required: true })}
						className="py-2 px-3 bg-white border border-[#CBD5E1] rounded-md outline-none w-full text-[#0F172A]"
					/>
					{errors.email?.type === "required" && (
						<p className="text-red-500">Email is required</p>
					)}
				</div>
				{/* Single Input */}
				<div>
					<label className="text-[#0F172A] font-medium mb-1.5 block">
						Password
					</label>
					<input
						type="password"
						placeholder="Password"
						{...register("password", {
							required: true,
							minLength: 6,
							pattern:
								/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).*$/,
						})}
						className="py-2 px-3 bg-white border border-[#CBD5E1] rounded-md outline-none w-full text-[#0F172A]"
					/>
					{/* Required */}
					{errors.password?.type === "required" && (
						<p className="text-red-500">Password is required</p>
					)}
					{/* Length */}
					{errors.password?.type === "minLength" && (
						<p className="text-red-500">
							Password must be 6 characters or longer.
						</p>
					)}
					{/* Pattern */}
					{errors.password?.type === "pattern" && (
						<p className="text-red-500">
							Include at least one lowercase, one uppercase, one
							number, one special character.
						</p>
					)}
				</div>
				{/* Login Button */}
				<div>
					<button className="bg-primary rounded-md text-black font-medium w-full py-2.5">
						Register
					</button>
				</div>
				{/* Register page link */}
				<div>
					<p className="text-[#71717A]">
						Already have an account?{" "}
						<Link to="/login" className="text-primary">
							Login
						</Link>
					</p>
				</div>
			</form>
			{/* Social Login Button */}
			<div className="flex flex-col gap-3 mt-3">
				<div>
					<p className="text-center text-muted">Or</p>
				</div>
				<div>
					<Google />
				</div>
			</div>
		</div>
	);
};

export default Register;
