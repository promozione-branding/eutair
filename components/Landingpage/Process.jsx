"use client";
import React from "react";
import Image from "next/image";

const Process = () => {
  return (
    <>
      <div className="hidden md:block my-8 lg:my-6 xl:my-7">
        <h2 className="text-3xl md:text-5xl capitalize text-center font-bold">
          complete air system solution{" "}
        </h2>
        <p className="text-center text-lg my-4">
          we don't just sell compression, we deliver complete compressed air
          solutions
        </p>

        <section
          style={{ backgroundImage: "url(/process.png)" }}
          className="hidden lg:block relative h-[50vh] lg:h-[30vh] xl:h-[50vh] w-full   bg-cover bg-center"
        ></section>
      </div>
    </>
  );
};

export default Process;
