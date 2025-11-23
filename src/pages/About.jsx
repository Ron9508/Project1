import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <h1 className="text-4xl lg:text-5xl font-semibold text-yellow-100 text-center mb-8">
          About Us
        </h1>

        {/* Intro Paragraph */}
        <p className="text-lg text-zinc-300 leading-relaxed mb-10 text-center">
          Welcome to <span className="text-yellow-200 font-semibold">BookStore</span>,
          your go-to place to discover new stories, grow your knowledge, and explore books 
          across every genre. Our mission is simple: make reading accessible, enjoyable, 
          and part of your everyday life.
        </p>

        {/* Section 1: Our Story */}
        <div className="bg-zinc-800 p-6 rounded-xl shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-yellow-200 mb-3">
            Our Story
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            Whether you're into fiction, technology, personal development, or academic 
            resources, we've curated a selection to help you grow, relax, and stay inspired.
            We believe that books can change lives — and that everyone deserves access to the
            right book at the right time.
          </p>
        </div>

        {/* Section 2: Mission */}
        <div className="bg-zinc-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-yellow-200 mb-3">
            Our Mission
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            Our mission is to support readers of all ages by offering a simple and enjoyable 
            browsing experience. We connect people with the books that matter most to them 
            and encourage continuous learning, creativity, and growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
