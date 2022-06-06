import Header from "../components/Header";

const LoginPage = () => {
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
        <form className="flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              className="appearance-none bg-transparent border-2 border-gray-300 w-full text-gray-700 rounded-sm py-2 px-2 focus:outline-none"
              type="email"
              placeholder="Email Address"
              aria-label="Email Address"
            />
            <input
              className="appearance-none bg-transparent border-2 border-gray-300 w-full text-gray-700 rounded-sm py-2 px-2 focus:outline-none"
              type="email"
              placeholder="Email Address"
              aria-label="Email Address"
            />
          </div>
          <input
            className="appearance-none bg-transparent border-2 border-gray-300 w-full text-gray-700 rounded-sm py-2 px-2 focus:outline-none"
            type="email"
            placeholder="Email Address"
            aria-label="Email Address"
          />
          <input
            className="appearance-none bg-transparent border-2 border-gray-300 w-full text-gray-700 rounded-sm py-2 px-2 focus:outline-none"
            type="email"
            placeholder="Email Address"
            aria-label="Email Address"
          />
          <input
            className="appearance-none bg-transparent border-2 border-gray-300 w-full text-gray-700 rounded-sm py-2 px-2 focus:outline-none"
            type="email"
            placeholder="Email Address"
            aria-label="Email Address"
          />
          <button className="bg-blue-700 text-white rounded-sm w-full p-1 hover:bg-blue-800">
            SIGN UP
          </button>
        </form>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 self-end">
          ALREADY HAVE AN ACCOUNT? SIGN IN
        </button>
      </div>
    </div>
  );
};
export default LoginPage;
