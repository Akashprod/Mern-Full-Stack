import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center mt-8">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          This is
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              Store
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto ">
        Store is a multinational technology company founded by Jeff Bezos in
        1994, initially focusing on online book sales. It has grown into a
        dominant force in e-commerce, cloud computing, digital streaming, and
        more, with subsidiaries like Amazon Web Services (AWS). Known for its
        extensive product range, Amazon offers a wide array of goods, including
        books, electronics, fashion, and groceries, and even operates its own
        physical stores like Whole Foods Market. Amazon Prime membership
        provides benefits like faster shipping and access to streaming services.
        The company's impact extends to various sectors, including online
        advertising, artificial intelligence, and drone delivery. Amazon's
        operations extend to over 100 countries, with a large global presence.
      </p>
    </>
  );
};

export default About;
