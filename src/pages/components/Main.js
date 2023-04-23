import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function () {
  const [isVisible, setIsVisible] = useState(true); // State to manage visibility

  const handleAnimationComplete = () => {
    setIsVisible(false); // Set visibility to false when animation is complete
  };

  return (
    <div className="h-screen w-screen grid place-items-center font-Aboreto overflow-hidden">
      {isVisible && (
        <motion.div
          initial={{ width: "110vw", height: "110vh" }}
          animate={{
            zIndex: "10",
            width: "50%",
            height: "60%",
          }}
          exit={{ opacity: 0 }}
          transition={{
            type: "tween",
            duration: 5,
          }}
          onAnimationComplete={handleAnimationComplete}
          className="h-3/5 w-2/4 bg-black absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <video className="grayscale h-full w-full object-cover" autoPlay>
            <source src="/video/ppp.mp4" autoPlay></source>
          </video>
        </motion.div>
      )}
      <div className="flex gap-3 items-center transition-all w-screen h-screen justify-center px-40 ">
        <Link
          href="/"
          className="w-1/12 h-3/5 bg-1 bg-center bg-cover hover:w-1/3 hover:h-2/5 transition-all duration-300 relative grayscale hover:grayscale-0 cursor-pointer box"
        >
          <span className="h-full w-px bg-stone-400 absolute left-1/2 top-full mt-5"></span>
        </Link>
        <Link
          href="/"
          className="w-1/12 h-3/5  bg-2 bg-center bg-cover hover:w-1/3 hover:h-2/5 transition-all duration-300 relative grayscale hover:grayscale-0 cursor-pointer box"
        >
          <span className="h-full w-px bg-stone-400 absolute left-1/2 top-full mt-5"></span>
        </Link>
        <Link
          href="/"
          className="w-1/12 h-3/5  bg-3 bg-center bg-cover hover:w-1/3 hover:h-2/5 transition-all duration-300 relative grayscale hover:grayscale-0 cursor-pointer box"
        >
          <span className="h-full w-px bg-stone-400 absolute left-1/2 top-full mt-5"></span>
        </Link>
        <Link
          href="/"
          className="w-1/12 h-3/5  bg-4 bg-center bg-cover hover:w-1/3 hover:h-2/5 transition-all duration-300 relative grayscale hover:grayscale-0 cursor-pointer box"
        >
          <span className="h-full w-px bg-stone-400 absolute left-1/2 top-full mt-5"></span>
        </Link>
        <Link
          href="/"
          className="w-1/12 h-3/5  bg-5 bg-center bg-cover hover:w-1/3 hover:h-2/5 transition-all duration-300 relative grayscale hover:grayscale-0 cursor-pointer box"
        >
          <span className="h-full w-px bg-stone-400 absolute left-1/2 top-full mt-5"></span>
        </Link>
        <Link
          href="/"
          className="w-1/12 h-3/5  bg-6 bg-center bg-cover hover:w-1/3 hover:h-2/5 transition-all duration-300 relative grayscale hover:grayscale-0 cursor-pointer box"
        >
          <span className="h-full w-px bg-stone-400 absolute left-1/2 top-full mt-5"></span>
        </Link>
      </div>
    </div>
  );
}
