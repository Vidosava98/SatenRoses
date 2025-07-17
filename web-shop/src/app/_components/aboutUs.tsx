import React from "react";

function AboutUs() {
  return (
    <div>
      <p className="text-black text-2xl md:text-4xl lg:text-4xl font-semibold text-center my-32">
        About Us
      </p>
      <div className="flex flex-col lg:flex-row justify-center flex-wrap w-80 lg:w-full gap-32 p-4">
        <img
          src="./data/about.png"
          alt="Our main photo"
          className="w-72 h-72 rounded-full mt-48"
        />
        <div className="rounded-xl shadow-xl p-8 lg:p-8 md:p-8 min-h-80 lg:min-h-[400px] md:min-h-[400px] lg:max-h-[650px] md:max-h-[650px] w-80 md:w-xl">
          <p className="text-black text-2xl md:text-4xl lg:text-4xl font-semibold text-left p-4">
            Our story
          </p>
          <p className="text-left text-xl">
            We are a family devoted to sharing love through every handcrafted
            satin rose. Our passion blossoms in every detail. We are a family
            devoted to sharing love through every handcrafted satin rose. Our
            passion blossoms in every detail. We are a family devoted to sharing
            love through every han dcrafted satin rose. Our passion blossoms in
            every detail.
          </p>
          <img
            src="./data/logo.png"
            alt="Our main photo"
            className="w-96 max-h-72"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
