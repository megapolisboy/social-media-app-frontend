import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
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

type Password = "text" | "password";

const LoginPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [passType, setPassType] = useState<Password>("password");

  const [passwordsEqual, setPasswordsEqual] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const changePassType = () => {
    if (passType === "password") {
      setPassType("text");
    } else {
      setPassType("password");
    }
  };

  const onSubmit = handleSubmit((data) => {
    if (data.password !== data.repeatPassword) {
      setPasswordsEqual(false);
      return;
    }
    setPasswordsEqual(true);
    console.log(data);
  });

  const googleSuccess = (res: CredentialResponse) => {
    console.log(res);
  };
  const googleFailure = () => {
    console.log("Google sign in was unsuccessful. Try again later");
  };

  return (
    <div className="flex flex-col items-center mx-3 m-3 overflow-hidden">
      <Header />
      <div className="flex flex-col items-center gap-3 mt-10 sm:w-96">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 bg-pink-600 text-white rounded-full p-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
        <h1 className="text-2xl font-semibold">
          {isSignup ? "Sign Up" : "Sign In"}
        </h1>
        <form onSubmit={onSubmit} className="flex flex-col gap-3 w-full">
          {isSignup && (
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
          )}
          <input
            className="textInput"
            type="email"
            placeholder="Email Address"
            aria-label="Email Address"
            {...register("email", { required: true })}
          />
          <p className="text-red-500">{errors.email && "Email is required"}</p>
          <div className="flex space-around textInput focus-within:border-2 focus-within:border-black">
            <input
              className="flex-1 outline-none"
              type={passType}
              placeholder="Password"
              aria-label="Password"
              {...register("password", { required: true })}
            />
            <button onClick={() => changePassType()}>
              {passType === "password" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                    clipRule="evenodd"
                  />
                  <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                </svg>
              )}
            </button>
          </div>
          <p className="text-red-500">
            {errors.password && "Password is required"}
          </p>
          {isSignup && (
            <div>
              <input
                className="textInput"
                type={passType}
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
            </div>
          )}
          <input
            type="submit"
            value={isSignup ? "SIGN UP" : "SIGN IN"}
            className="signInButton"
          />
          {!isSignup && (
            <GoogleLogin onSuccess={googleSuccess} onError={googleFailure} />
          )}
        </form>
        <button
          onClick={() => setIsSignup(!isSignup)}
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 self-end"
        >
          {isSignup
            ? "ALREADY HAVE AN ACCOUNT? SIGN IN"
            : "DON'T HAVE AN ACCOUNT? SIGN UP"}
        </button>
      </div>
    </div>
  );
};
export default LoginPage;
