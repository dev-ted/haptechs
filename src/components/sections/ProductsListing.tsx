import React from 'react'
import ProductPreview from '../modals/ProductsPreview';
import Image from 'next/image';

export default function ProductsListing() {


        const products = [
          {
            id: 1,
            title: "InfinityVisor™ VR Headset",
            description:
              "Step into a world of unparalleled virtual reality experiences with InfinityVisor™ VR Headset. Immerse yourself in lifelike visuals and surround sound, as every moment comes to life with stunning clarity. Comfortable and intuitive, it's your gateway to endless virtual adventures. Elevate your reality with InfinityVisor™ VR Headset today!",
            image:
              "https://res.cloudinary.com/devtedcloud/image/upload/v1690116301/hapetch/Rectangle_8_2_xx2r1q.png",
            price: 3999.00,
          },
          {
            id: 2,
            title: "EternalReality™ VR Headset",
            description:
              "Experience a timeless journey into the realms of virtual wonder with the EternalReality™ VR Headset. As its name suggests, this cutting-edge device opens a gateway to endless adventures, captivating visuals, and immersive experiences that transcend time and space.",
            image:
              "https://res.cloudinary.com/devtedcloud/image/upload/v1690226423/hapetch/vr_vvdpiy.png",
            price: 2599.00,
          },
          {
            id: 3,
            title: "CosmicVision™ VR Headset",
            description:
              "Embark on an extraordinary journey through the cosmos with the CosmicVision™ VR Headset. Experience the wonders of space, the thrill of exploration, and the mysteries of distant galaxies from the comfort of your own reality.",
            image:
              "https://res.cloudinary.com/devtedcloud/image/upload/v1690226423/hapetch/vr2_nhn6cy.png",
            price: 2399.00,
          },
        ];
  return (
    <div className="relative w-full min-h-[400px] ">
      <div
        className="absolute  inset-x-0 -top-40 -z-0 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-gradient-orange to-gradient-pink opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center px-4 ">
        {products?.map(({ id, title, description, image, price }) => (
          <div
            key={id}
            className="relative h-48 w-80 lg:w-96rounded-[0.625rem]  "
          >
            <Image
              draggable={false}
              className="object-cover h-48 w-80 lg:w-96"
              src={image}
              alt={title}
              width={200}
              height={200}
              style={{
                objectFit: "contain",
              }}
            />
            <ProductPreview
              title={title}
              image={image}
              description={description}
              price={price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
