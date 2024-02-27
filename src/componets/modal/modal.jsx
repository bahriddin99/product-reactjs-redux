import React from "react";
import { Dialog } from "@headlessui/react";

export const Modal = ({children,isOpen,setIsOpen}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-[#00000070]">
        <Dialog.Panel className="w-full max-w-[500px] rounded p-5 bg-white">
          <Dialog.Title>Complete your order</Dialog.Title>
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
