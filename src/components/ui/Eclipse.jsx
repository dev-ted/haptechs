import Image from "next/image";


export default function Eclipse() {
  return (
  
      <div className=" relative z-50   ">
        <Image
          draggable={false}
          className="relative  w-auto h-auto bg-transparent "
          src="https://res.cloudinary.com/devtedcloud/image/upload/v1689946647/Ellipse_33_nxhp0l.svg"
          alt="eclipse"
          width={100}
          height={100}
          style={{
                  objectFit: "cover",
                  
                  
          }}
        />
      </div>
   
  );
}
