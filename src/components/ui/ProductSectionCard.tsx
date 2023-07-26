import React, { useState } from "react";
import Eclipse from "./Eclipse";
import Image from "next/image";

export default function ProductSectionCard({
  title,
  direction = "normal",
  description,
  image,
 
}: {
  title: string;
  direction: string;
  description: string;
  image: string;

}) {
  
        
  return (
    <div
      className={`relative z-0 w-full min-h-full md:py-16 flex ${
        direction === "normal" ? " md:flex-row" : " md:flex-row-reverse"
      } flex-col`}
    >
      <div className="max-w-[500px]  relative h-full">
        <Eclipse />

        <div className="  w-full h-fit ">
          <Image
            draggable={false}
            className=" object-contain absolute -top-10 lg:top-0 lg:right-20  z-50
              h-full   w-full"
            src={image}
            alt={title}
            width={500}
            height={500}
         
            style={{
              objectFit: "contain",
              width: "auto",
              height: "auto",

            }}
          />
        </div>
      </div>

      <div className="flex flex-col md:py-4 py-12">
        <h4 className=" md:text-[1.6rem] text-lg max-w-[36rem] w-full md:leading-[2.2rem] text-center font-bold ">
          {title}
        </h4>

        <p className="text-sm py-10 max-w-[40rem] w-full md:px-5 leading-[1.8rem]">
          {description}
        </p>
      </div>
    </div>
  );
}
