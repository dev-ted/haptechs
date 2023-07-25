import * as React from "react";

import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog, { ModalDialogProps } from "@mui/joy/ModalDialog";
import Image from "next/image";
import PreOrder from "../ui/Button";


export default function ProductPreview({title,image,description,price} : {title:string,image:string,description:string,price:number}) {
  const [layout, setLayout] = React.useState<
    ModalDialogProps["layout"] | undefined
  >(undefined);
  return (
    <React.Fragment>
      <button
        onClick={() => {
          setLayout("center");
        }}
        className="absolute lg:top-0 top-4 right-0 max-w-[10.8125rem] py-1 px-5 rounded-[5px] cursor-pointer bg-black border border-gradient-pink text-xs font-light text-center "
      >
        Preview
      </button>
      <Modal open={!!layout} onClose={() => setLayout(undefined)}>
        <ModalDialog
          className="max-w-screen-lg  lg:h-fit h-screen rounded-md p-3 shadow-md"
          aria-labelledby="layout-modal-title"
          aria-describedby="layout-modal-description"
          layout={layout}
          color="neutral"
          size="lg"
          variant="soft"
          sx={{
            bgcolor: "#000",
          }}
        >
          <ModalClose
            variant="outlined"
            sx={{
              top: "calc(-1/4 * var(--IconButton-size))",
              right: "calc(-1/4 * var(--IconButton-size))",
              boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
              borderRadius: "50%",
              bgcolor: "background.body",
            }}
          />

          <div className="relative w-full h-full z-0  py-5 px-2 rounded-md  text-white ">
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

            <div className="flex gap-8 items-center md:flex-row flex-col  ">
              <div className="w-full">
                <Image
                  draggable={false}
                  className="object-cover h-48 w-96"
                  src={image}
                  alt={title}
                  width={500}
                  height={500}
                  priority
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>

              <div className="w-full ">
                <h5 className="text-lg lg:text-2xl  py-1 font-bold">{title}</h5>

                <span className="font-semibold italic">R {price}</span>

                <p className="text-sm  font-normal py-3">{description}</p>
                <div className="relative  items-center justify-center inline-flex group">
                  <PreOrder />
                </div>
              </div>
            </div>

            <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-gradient-orange to-gradient-pink  opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
