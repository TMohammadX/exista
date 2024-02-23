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
            className="absolute top-0 left-0 z-30 grid w-screen min-h-[100vh] bg-black text-white bg-black overflow-hidden"
          >
            <div className="grid justify-items-center h-[90vh] gap-[3vh] w-screen">

              {/* <motion.div className="w-[85%] p-4 h-[25vh] rounded bg-gray-500 mx-[10px] mt-[25%] css-glass">
                <h3 className="">Note!</h3>

              </motion.div> */}
                <motion.div className="grid w-screen place-items-center sms:hidden absolute bottom-0">
                <h1 className=" sm:hidden z-30 absolute text-[15vw] font-thin text-black block rotate-[-0deg] animatessss top-[-90vh] text-white">
                <span className="h-[50%]"> USE DESKTOP FOR THE FULL EXPERIENCE ·</span>
                <span className="h-[50%]"> USE DESKTOP FOR THE FULL EXPERIENCE ·</span>
                <span className="h-[50%]"> USE DESKTOP FOR THE FULL EXPERIENCE ·</span>
                <span className="h-[50%]"> USE DESKTOP FOR THE FULL EXPERIENCE ·</span>
                <span className="h-[50%]"> USE DESKTOP FOR THE FULL EXPERIENCE ·</span>
                <span className="h-[50%]"> USE DESKTOP FOR THE FULL EXPERIENCE ·</span>
              </h1>
             
              </motion.div>
              <a href='https://twitter.com/tmohammadx' className=" justify-self-center w-[60%] h-[10vh] border-[1px] -translate-x-1/2 border-gray-500 rounded-[100%] absolute left-[50%] top-[60vh] grid place-items-center ">twitter</a>
             
              <motion.div className="grid w-screen place-items-center sms:hidden absolute bottom-0">
                <h1 className=" sm:hidden z-30 absolute text-[15vw] font-thin text-black block rotate-[-0deg] animatessss top-[-25vh] text-white">
                <span className="h-[50%]"> USE DESKTOP FOR THE FULL EXPERIENCE ·</span>
                <span className="h-[50%]"> USE DESKTOP FOR THE FULL EXPERIENCE ·</span>
                <span className="h-[50%]"> USE DESKTOP FOR THE FULL EXPERIENCE ·</span>
                <span className="h-[50%]"> USE DESKTOP FOR THE FULL EXPERIENCE ·</span>
                <span className="h-[50%]"> USE DESKTOP FOR THE FULL EXPERIENCE ·</span>
                <span className="h-[50%]"> USE DESKTOP FOR THE FULL EXPERIENCE ·</span>
              </h1>
              </motion.div>

              <a href='https://github.com/TMohammadX/' className=" justify-self-center w-[60%] h-[10vh] border-[1px] -translate-x-1/2 border-gray-500 rounded-[100%] absolute left-[50%] top-[27vh] grid place-items-center">github</a>
             
              <motion.div className="grid w-screen place-items-center sms:hidden absolute bottom-0">
                <h1 className=" sm:hidden z-30 absolute text-[15vw] font-thin text-black block rotate-[-0deg] animatesr top-[-58vh] text-white">
                <span className="h-[50%]"> USE DESKTOP FOR THE FULL EXPERIENCE ·</span>
                <span className="h-[50%]"> USE DESKTOP FOR THE FULL EXPERIENCE ·</span>
                <span className="h-[50%]"> USE DESKTOP FOR THE FULL EXPERIENCE ·</span>
                <span className="h-[50%]"> USE DESKTOP FOR THE FULL EXPERIENCE ·</span>
                <span className="h-[50%]"> USE DESKTOP FOR THE FULL EXPERIENCE ·</span>
                <span className="h-[50%]"> USE DESKTOP FOR THE FULL EXPERIENCE ·</span>
              </h1>
              </motion.div>
              {/* <div className="grid justify-self-start px-10">
              <a href="/">Twitter</a>
              <a href="/">Twitter</a>
              <a href="/">Twitter</a> 
              </div> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
