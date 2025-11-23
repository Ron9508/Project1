import React from "react";

const Services = () => {
  const services = [
    {
      title: "Curated Book Selection",
      desc: "Explore a wide range of books across all genres. Our team handpicks top titles to help you discover your next great read."
    },
    {
      title: "Fast & Easy Search",
      desc: "Quickly filter books by category, author, or keyword. Finding what you're looking for should always be smooth and simple."
    },
    {
      title: "Detailed Book Insights",
      desc: "Every book comes with rich details including price, author, genre, and publication year to help you make informed choices."
    },
    {
      title: "Responsive & Modern Design",
      desc: "Enjoy a smooth browsing experience across desktop, tablet, and mobile devices with our fully responsive layout."
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-yellow-200 mb-4">
          Our Services
        </h1>

        {/* Subtitle */}
        <p className="text-zinc-300 max-w-2xl mx-auto mb-12">
          We offer features that make discovering and buying books simple,
          enjoyable, and reliable.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 shadow-lg hover:shadow-xl hover:bg-zinc-750 transition"
            >
              <h2 className="text-xl font-semibold text-yellow-100 mb-2">
                {service.title}
              </h2>
              <p className="text-zinc-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
