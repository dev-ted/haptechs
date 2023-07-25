/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react'

export default function Team() {

  const teamsItems = [
    {
      name: "Clark Thompson",
      role: "The VR Architect",
      image:
        "https://res.cloudinary.com/devtedcloud/image/upload/v1690295009/hapetch/IMG_uorstg.png",
    },
    {
      name: "Sasha Williams",
      role: "The VR Maestro",
      image:
        "https://res.cloudinary.com/devtedcloud/image/upload/v1690295009/hapetch/IMG_1_p9l4cj.png",
    },
    {
      name: "Trevor Jackson",
      role: "The VR Maverick",
      image:
        "https://res.cloudinary.com/devtedcloud/image/upload/v1690295009/hapetch/IMG_2_ptkxgg.png",
    },
    {
      name: "Amir Patel",
      role: "The VR Engineer",
      image:
        "https://res.cloudinary.com/devtedcloud/image/upload/v1690295009/hapetch/IMG_3_vumv3g.png",
    },
  ];
  return (
    <section id="team" className="bg-black py-20 text-white ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h4 className="text-3xl font-semibold lg:leading-[5rem]  sm:text-4xl xl:text-5xl ">
            Virtual Vanguards, <br />

            Meet the VR Visionaries!
          </h4>
        </div>

        <div className="grid max-w-7xl grid-cols-1 px-5 mx-auto mt-12 text-center sm:px-0 sm:grid-cols-2 md:mt-20 gap-x-8 md:grid-cols-4 gap-y-12 lg:gap-x-16 xl:gap-x-20">
          {teamsItems?.map(({ name, role, image }) => (
            <div key = {name}>
              <img
                className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 "
                src={image}
                alt={name}
               
              />
              <p className="mt-5 text-lg font-semibold ">
                {name}
              </p>
              <p className="mt-2 text-base font-normal ">
                {role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
