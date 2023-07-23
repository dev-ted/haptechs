import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Gaming from './products-sections/Gaming';
import Social from './products-sections/Social';
import Entertaiment from './products-sections/Entertaiment';

export default function Products() {

        const services = [
          {
            name: "Gaming",
            description:
              "Elevate your gaming with our extraordinary lineup of products, designed for unparalleled joy and performance. Level up your gameplay, whether you're a hardcore gamer or a casual enthusiast. Embrace innovation and reach new heights!",
            image:
              "https://res.cloudinary.com/devtedcloud/image/upload/v1690052087/hapetch/gaming-image_a4kdb0.png",
            link: "/#gaming",
          },
          {
            name: "Social",
            description:
              "Unlock boundless connections with our innovative social products! Empowering people of all ages, our offerings foster meaningful connections, inspire authentic conversations, and transform social interactions. Join us on a journey of vibrant connections and limitless possibilities!",
            image:
              "https://res.cloudinary.com/devtedcloud/image/upload/v1690052050/hapetch/education_g7ksvz.png",
            link: "/#social",
          },
          {
            name: "Entertainment",
            description:
              "Experience captivating entertainment with our curated products! Elevate your joy, excitement, and moments with innovative offerings for movie buffs, music enthusiasts, and gaming wizards. Unleash imagination without limits!",
            image:
              "https://res.cloudinary.com/devtedcloud/image/upload/v1690052050/hapetch/entertainment_oo47e6.png",
            link: "/#entertainment",
          },
        ];
  return (
    <section className="min-h-[600px] py-10 w-full" id="products">
      <div className="max-w-screen-xl flex flex-col px-8 gap-20 mx-auto ">
        <h3 className=" text-2xl md:text-3xl font-bold text-center ">
          Marvels Unveiled. Explore Our Exquisite Product Line
        </h3>
        <div className="grid grid-cols-1 items-center lg:grid-cols-3 gap-10">
          {services.map(({ name, description, image, link }) => (
            <div
              key={name}
              className=" relative max-w-[40rem] h-full rounded-[1.6875rem]  bg-gradient-to-r p-[1px] from-gradient-orange to-gradient-pink hover:from-gradient-pink hover:to-gradient-orange transition-all duration-75 cursor-pointer "
            >
              <div className="h-full  w-full relative   bg-[#050505] rounded-[1.6875rem] p-2  flex flex-col items-center justify-center gap-2 ">
                <Image
                  draggable={false}
                  className="rounded-full w-auto aspect-auto h-[90px] object-contain"
                  src={image}
                  alt={name}
                  width={300}
                  height={300}
                  style={{
                    objectFit: "contain",
                  }}
                />

                <Link className="text-lg font-bold" href={link}>
                  {name}
                </Link>

                <p className="text-xs leading-5 text-center font-light py-2">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Gaming />
        <Social />
        <Entertaiment />
      </div>
    </section>
  );
}
