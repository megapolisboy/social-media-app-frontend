import { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "../components/Header";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const LoginPage = () => {
  const [passwordsEqual, setPasswordsEqual] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();
  const onSubmit = handleSubmit((data) => {
    if (data.password !== data.repeatPassword) {
      setPasswordsEqual(false);
      return;
    }
    setPasswordsEqual(true);
    console.log(data);
  });

  return (
    <div className="flex flex-col items-center mx-3 m-3 overflow-hidden">
      <Header />
      <div className="flex flex-col items-center gap-3 mt-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 bg-pink-600 text-white rounded-full p-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
        <h1 className="text-2xl font-semibold">Sign Up</h1>
        <form onSubmit={onSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row gap-3 justify-between">
            <div>
              <input
                className="textInput"
                type="text"
                placeholder="First Name"
                aria-label="First Name"
                {...register("firstName", { required: true })}
              />
              <p className="text-red-500">
                {errors.firstName && "First name is required"}
              </p>
            </div>
            <div>
              <input
                className="textInput"
                type="text"
                placeholder="Last Name"
                aria-label="Last Name"
                {...register("lastName", { required: true })}
              />
              <p className="text-red-500">
                {errors.lastName && "Last name is required"}
              </p>
            </div>
          </div>
          <input
            className="textInput"
            type="email"
            placeholder="Email Address"
            aria-label="Email Address"
            {...register("email", { required: true })}
          />
          <p className="text-red-500">{errors.email && "Email is required"}</p>
          <input
            className="textInput"
            type="password"
            placeholder="Password"
            aria-label="Password"
            {...register("password", { required: true })}
          />
          <p className="text-red-500">
            {errors.password && "Password is required"}
          </p>
          <input
            className="textInput"
            type="password"
            placeholder="Repeat Password"
            aria-label="Repeat Password"
            {...register("repeatPassword", { required: true })}
          />
          <p className="text-red-500">
            {errors.repeatPassword && "Repeat password is required"}
          </p>
          <p className="text-red-500">
            {!passwordsEqual && "Password is not confirmed"}
          </p>
          <input
            type="submit"
            value="SIGN UP"
            className="cursor-pointer bg-blue-700 text-white rounded-sm w-full p-1 hover:bg-blue-800"
          />
        </form>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 self-end">
          ALREADY HAVE AN ACCOUNT? SIGN IN
        </button>
      </div>
    </div>
  );
};
export default LoginPage;
