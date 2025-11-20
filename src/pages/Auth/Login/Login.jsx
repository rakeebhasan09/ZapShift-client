import { Link, useLocation, useNavigate } from "react-router";
import Google from "../../Shared/Social/Google";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const { signInUser } = useAuth();

	const navigate = useNavigate();
	const location = useLocation();

	const handleLogin = (data) => {
		signInUser(data.email, data.password)
			.then((result) => {
				console.log(result.user);
				navigate(location?.state || "/");
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className="max-w-[384px] mx-auto inter">
			<h2 className="text-black text-[28px] md:text-[42px] font-extrabold">
				Welcome Back
			</h2>
			<p className="text-black">Login with ZapShift</p>
			{/* Form */}
			<form
				onSubmit={handleSubmit(handleLogin)}
				className="mt-5 flex flex-col gap-3"
			>
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
						{...register("password", { required: true })}
						placeholder="Password"
						className="py-2 px-3 bg-white border border-[#CBD5E1] rounded-md outline-none w-full text-[#0F172A]"
					/>
					{errors.password?.type === "required" && (
						<p className="text-red-500">Password is required</p>
					)}
				</div>
				{/* Reset Password */}
				<div>
					<Link className="text-[#71717A] underline">
						Forget Password?
					</Link>
				</div>
				{/* Login Button */}
				<div>
					<button className="bg-primary rounded-md text-black font-medium w-full py-2.5">
						Login
					</button>
				</div>
				{/* Register page link */}
				<div>
					<p className="text-[#71717A]">
						Don’t have any account?{" "}
						<Link to="/registration" className="text-primary">
							Register
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

export default Login;
