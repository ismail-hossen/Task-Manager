import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-[#A9D2FE]">
      <div className="hero-content flex flex-col-reverse lg:flex-row">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4">
            Your Task Management Solution
          </h1>
          <p className="text-lg lg:text-xl text-white mb-6">
            Organize, prioritize, and manage tasks efficiently!
          </p>
          <Link
            to="/dashboard"
            className="bg-white text-sky-300 py-3 px-8 rounded-full text-lg font-semibold shadow-md hover:bg-[#A9BAE6] transition duration-300 ease-in-out"
          >
            Let&apos;s Explore
          </Link>
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-psd/3d-rendering-graphic-design-element_23-2149412223.jpg?w=740&t=st=1703159794~exp=1703160394~hmac=8958dd158408cf3057c32db35584594ef79d043bfc94aa008c1f3fa3af613a78"
            className="max-w-full lg:max-w-2xl rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
