import React from "react";

const Home = () => {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="flex flex-col lg:flex-row items-center justify-between py-20 px-6 max-w-6xl mx-auto">
        
        {/* Left side text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-semibold text-yellow-100">
            Discover Your Next Great Read
          </h1>

          <p className="mt-4 text-lg text-zinc-300">
            Explore thousands of titles across fiction, learning, self-improvement, 
            and more. Find stories that inspire you and knowledge that moves you forward.
          </p>

          <button className="mt-8 text-yellow-100 text-lg font-semibold border border-yellow-100 px-8 py-2 rounded-full hover:bg-zinc-800 transition">
            Browse Books
          </button>
        </div>

        {/* Right side image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
          <img
            src="/illustration.png"
            alt="Bookshelf"
            className="max-w-[380px] lg:max-w-[480px] h-auto rounded-xl shadow-lg"
          />
        </div>
      </section>
    </div>
  );
}


export default Home;
