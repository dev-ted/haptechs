import Eclipse from "@/components/ui/Eclipse";
import PreOrder from "../ui/Button";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="relative py-10 overflow-hidden   bg-black text-white ">
      <div className="px-4 mx-auto  max-w-screen-xl w-full">
        <div className="grid items-center  grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-2">
          <div className=" h-full flex flex-col gap-6 py-20 md:py-36 ">
            <h1 className="text-2xl  md:text-5xl max-w-[40rem] w-full  leading-[3.625rem] font-bold  bg-gradient-to-l from-[#FA4872] from-[36.89%] to-[#FFC56D] to-[81.52%] bg-clip-text text-transparent ">
              Beyond the Horizon. Haptechs VR ,<br /> Your Odyssey Awaits!
            </h1>

            <p className="mt-4 text-sm font-light leading-5 sm:mt-8">
              Prepare to transcend the boundaries of reality and venture into
              the unknown with Haptechs VR. Our cutting-edge technology awaits,
              ready to transport you on an odyssey like no other.
            </p>
            <div className="flex items-center  gap-10 md:mt-6">
              <div className="relative  items-center justify-center inline-flex group">
                <PreOrder />
              </div>
           
            </div>
          </div>

          <div className="relative  -top-28 z-0">
            <Eclipse />

            <div className=" absolute w-full h-full z-50 left-0 -top-32 md:top-2 md:left-32">
              <Image
                draggable={false}
                className=" w-[750px] h-[600px]"
                src="https://res.cloudinary.com/devtedcloud/image/upload/q_85/v1690018851/hapetch/wepik-export-20230722093619DDhE_1_l7hzab.webp"
                alt="hero image"
                priority
                sizes="100vw"
                loading="eager"
                

                width={500}
                height={500}
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
