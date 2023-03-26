import React, { useState, useEffect } from "react";

const HeroSection = () => {
  return (
    <section className="bg-gray-900 bg-hero-section text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-nunito-sans text-white text-3xl font-extrabold sm:text-5xl">
            Custom Software Development for Startups and SMEs:
            <br />
            <span className="block mt-3 bg-gradient-to-r from-[#ff1d25] to-[#ED213A] bg-clip-text text-transparent">
              Building Virtual Teams for Real Success.
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl font-extralight sm:text-xl sm:leading-relaxed">
            Using code, design and almost any other IT tool to solve your
            business challenges.{" "}
            <span className="text-lz-red">Exclusively remote.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
