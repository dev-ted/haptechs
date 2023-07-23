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
      <div className="max-w-[500px] relative h-full">
        <Eclipse />

        <div className="absolute w-full h-full z-50 left-0 -top-10 md:top-0 md:left-2">
          <Image
            draggable={false}
            className=" object-contain w-[400px] h-[400px]"
            src={image}
            alt={title}
            width={500}
            height={500}
            style={{
              objectFit: "contain",
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

        {/* <div className="relative max-w-[300px] h-full rounded-[0.625rem]  ">
          <Image
            draggable={false}
            className="object-contain w-[300px] h-full"
            src="https://res.cloudinary.com/devtedcloud/image/upload/v1690116301/hapetch/Rectangle_8_2_xx2r1q.png"
            alt={title}
            width={200}
            height={200}
            style={{
              objectFit: "contain",
            }}
          />
          <ProductPreview />
        </div> */}
      </div>
    </div>
  );
}
