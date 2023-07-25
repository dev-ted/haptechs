import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function Footer() {
  return (
    <footer className=" rounded-lg  bg-[#0A0909] ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center mb-4 sm:mb-0">
            <Image
              className="h-10 w-auto object-contain"
              src="https://res.cloudinary.com/devtedcloud/image/upload/v1690006884/hapetch/logo_4_zuqkvd.png"
              alt="logo"
              width={100}
              height={100}
              priority
              style={{
                objectFit: "contain",
              }}
            />
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-xs font-normal  sm:mb-0 ">
            <li>
              <Link href="/" className="mr-4  md:mr-6 ">
                Terms of use
              </Link>
            </li>
            <li>
              <Link href="/" className="mr-4  md:mr-6 ">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/" className="mr-4  md:mr-6 ">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <p className="block text-xs  w-full sm:text-center ">
          © {new Date().getFullYear()}  
           Haptechs. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
