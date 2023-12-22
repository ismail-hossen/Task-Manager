const Section = () => {
  const userTypes = [
    {
      type: "Developers",
      benefit: "Access to coding resources and tutorials.",
    },
    {
      type: "Corporate Professionals",
      benefit: "Networking opportunities and business insights.",
    },
    {
      type: "Bankers",
      benefit: "Financial industry updates and best practices.",
    },
  ];

  return (
    <section className="bg-sky-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Who can benefit from this website?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {userTypes.map((user, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center"
            >
              <h3 className="text-xl font-semibold mb-4">{user.type}</h3>
              <p className="text-gray-600">{user.benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;
