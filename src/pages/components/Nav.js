import { useState } from "react";
import Link from "next/link";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import {GiBranchArrow, GiTargetArrows } from 'react-icons/gi'

export default function () {
  const [isToggled, setIsToggled] = useState(false);
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
    setIsToggled(!isToggled);
  };

  const handleClose = () => {
    setOpen(false);
    setIsToggled(false);
  };

  return (
    <nav className="absolute top-0 left-0 z-50 flex items-center justify-between w-screen px-5 font-Aboreto  px-10 h-20 lg:px-16">
      <Link
        href="/"
        className="z-50 text-xl font-thin cursor-pointer mix-blend-difference "
      >
        MOHAMMAD .T
      </Link>
      <div className="z-50 flex gap-5">
        <Link
          href="/about"
          className="hidden text-xs font-medium text-black sms:block mix-blend-difference "
        >
          ABOUT
        </Link>
        <Link
          href="/contact"
          className="hidden text-xs font-medium text-black sms:block mix-blend-difference "
        >
          CONTACT
        </Link>
        <button
          className="block text-2xl font-semibold sms:hidden"
          onClick={handleToggle}
        >
          {isToggled ? (
            <GiTargetArrows color="white" className="text-white rotate-180" />
          ) : (
            <GiBranchArrow  color="black" />
          )}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100vh" }}
            animate={{ x: 0 }}
            exit={{ x: "-100vh" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed top-0 left-0 z-10 grid w-screen h-[100vh] text-white bg-black place-items-center overflow-hidden"
          >
            <div className="grid text-center gap-[3vh]">
               <Link
                href="/"
                className="text-xl font-semibold"
                onClick={handleClose}
              >
                HOME
              </Link>
              <Link
                href="/about"
                className="text-xl font-semibold"
                onClick={handleClose}
              >
                ABOUT
              </Link>
              <Link
                href="/contact"
                className="text-xl font-semibold"
                onClick={handleClose}
              >
                CONTACT
        </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
