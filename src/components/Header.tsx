import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import PreOrder from "@/components/ui/Button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const navigation = [
    { name: "Who we are", href: "/#about" },
    { name: "Products", href: "/#products" },
    { name: "Meet the team", href: "/#team" },
  ];
  return (
    <header className="fixed h-fit bg-transparent  inset-x-0 w-full text-white backdrop-blur-sm top-0 z-50">
      <nav
        className="flex  max-w-screen-xl mx-auto w-full items-center justify-between gap-20 py-4 "
        aria-label="navigation"
      >
        <div className="flex  items-center w-full   gap-32 lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Haptechs</span>
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

          <ul className="hidden  md:flex gap-4 lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <li key={item.name} className="text-xs">
                <Link
                  scroll={true}
                  href={item.href}
                  className="text-xs font-light  leading-6 bg-gradient-to-r from-gradient-orange to-gradient-pink bg-clip-text hover:text-transparent  "
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex px-2 md:hidden lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="relative hidden md:items-center md:justify-center md:inline-flex group">
          <PreOrder />
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden w-screen"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full backdrop-blur-sm overflow-y-auto bg-black px-2 py-2 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Haptechs</span>
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
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 "
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <ul className="space-y-2 py-6">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      onClick={() => setMobileMenuOpen(false)}
                      scroll={true}
                      href={item.href}
                      className="-mx-3 block text-white rounded-lg px-3 py-2 text-base font-semibold leading-7 "
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
