const Banner = () => {
  return (
    <div className="bg-blue-500 py-10">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Your Task Management Solution
        </h1>
        <p className="text-lg text-white">
          Organize, prioritize, and manage tasks efficiently!
        </p>
        {/* You can add more content/buttons/icons as needed */}
      </div>
    </div>
  );
};

export default Banner;
