import { useState } from "react";
import Link from "next/link";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import { MdClose } from "react-icons/md";

export default function () {
  const [isToggled, setIsToggled] = useState(false);
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
    setIsToggled(!isToggled);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <nav className="absolute z-50 flex items-center justify-between w-screen px-5 h-14 font-Aboreto sm:px-5 sm:h-14 md:px-10 md:h-20 lg:px-16 ">
      <Link href="/" className="z-50 text-xl font-bold cursor-pointer ">
        MOHAMMAD .T
      </Link>
      <div className="z-50 flex gap-5">
        <Link href="/about" className="hidden text-xs font-semibold sm:block">
          ABOUT
        </Link>
        <Link href="/contact" className="hidden text-xs font-semibold sm:block">
          CONTACT
        </Link>
        <button
          className="block text-2xl font-semibold sm:hidden"
          onClick={handleToggle}
        >
          {isToggled ? (
            <MdClose color="white" className="text-white" />
          ) : (
            <HiOutlineMenuAlt4 color="black" />
          )}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "100vh" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="absolute top-0 left-0 z-10 w-screen h-screen bg-black"
          >
            <h1>an</h1>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
