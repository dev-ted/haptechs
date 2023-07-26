import React from 'react'
import Eclipse from '../ui/Eclipse'
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="w-full min-h-[600px] py-10 relative z-0">
      <div className="max-w-screen-xl flex gap-10 md:flex-row flex-col md:py-20 mx-auto">
        <div className="max-w-[450px] relative h-full">
          <Eclipse />

          <div className="absolute w-full h-full z-50 px--6 -top-32 md:top-0 md:left-12">
            <Image
              draggable={false}
              className=" object-contain w-[450px] h-[500px]"
              src="https://res.cloudinary.com/devtedcloud/image/upload/v1690043533/hapetch/Rectangle_4_2_oly6ya.png"
              alt="about us image"
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

        <div className="w-full px-4 py-6 md:py-0">
          <h2 className="text-2xl md:text-4xl  font-bold">
            Unlock Your Imagination. <br />
            <span className="bg-gradient-to-l from-[#FA4872] from-[36.89%] to-[#FFC56D] to-[81.52%] bg-clip-text text-transparent">
              Haptechs
            </span>
            {`'`} Next-Gen VR Takes You There!
          </h2>

          <div className=" h-full w-full lg:ml-20 py-10 ">
            <p className="text-sm font-normal leading-[1.5rem] max-w-xl py-2">
              Founded in 2022, Haptech is a visionary startup on a mission to
              redefine the virtual reality landscape. Specializing in
              cutting-edge hardware and software development for virtual reality
              technologies, Haptech is at the forefront of innovation, pushing
              the boundaries of{` what's`} possible in the immersive realm.
            </p>
            <p className="text-sm font-normal leading-[1.5rem] max-w-xl py-2">
              With a team of tech enthusiasts and dreamers, Haptech is committed
              to creating unparalleled VR experiences that captivate the senses
              and transport users to unexplored dimensions. From mind-bending
              simulations to awe-inspiring gaming adventures, {`Haptechs'`}
              breakthrough solutions are designed to unleash the true potential
              of VR for everyone.
            </p>
            <p className="text-sm font-normal leading-[1.5rem] max-w-xl py-2">
              Embracing the spirit of exploration, Haptech envisions a world
              where virtual reality seamlessly integrates with our daily lives,
              empowering individuals to connect, create, and explore like never
              before. As we venture into uncharted territories, Haptech invites
              you to join us on this extraordinary journey into the future of
              virtual reality. The future is now, and Haptech is leading the
              charge. Are you ready to transcend reality and embrace the unseen?
              Welcome to the world of Haptech!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
