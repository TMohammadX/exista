import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import BackgroundMusic from "./components/BackgroundMusic";
import Layout from "./components/Layout";

export default function Home() {
  const [isVisible, setIsVisible] = useState(true); // State to manage visibility

  const handleAnimationComplete = () => {
    setIsVisible(false); // Set visibility to false when animation is complete
  };

  return (
    <div className="grid w-screen h-screen overflow-hidden place-items-center font-Aboreto">
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
          className="absolute w-2/4 -translate-x-1/2 -translate-y-1/2 bg-black h-3/5 left-1/2 top-1/2"
        >
          <video
            className="object-cover w-full h-full grayscale"
            autoPlay={true}
            loop
          >
            <source src="/video/ppp.mp4" autoPlay={true} loop></source>
          </video>
        </motion.div>
      )}
      <div className="flex items-center justify-center w-screen h-screen gap-3 px-40 transition-all ">
        <Link
          href="/"
          className="relative w-1/12 transition-all duration-300 bg-center bg-cover cursor-pointer h-3/5 bg-1 hover:w-1/3 hover:h-2/5 grayscale hover:grayscale-0 box"
        >
          <span className="absolute w-px h-full mt-5 bg-stone-400 left-1/2 top-full"></span>
        </Link>
        <Link
          href="/"
          className="relative w-1/12 transition-all duration-300 bg-center bg-cover cursor-pointer h-3/5 bg-2 hover:w-1/3 hover:h-2/5 grayscale hover:grayscale-0 box"
        >
          <span className="absolute w-px h-full mt-5 bg-stone-400 left-1/2 top-full"></span>
        </Link>
        <Link
          href="/"
          className="relative w-1/12 transition-all duration-300 bg-center bg-cover cursor-pointer h-3/5 bg-3 hover:w-1/3 hover:h-2/5 grayscale hover:grayscale-0 box"
        >
          <span className="absolute w-px h-full mt-5 bg-stone-400 left-1/2 top-full"></span>
        </Link>
        <Link
          href="/"
          className="relative w-1/12 transition-all duration-300 bg-center bg-cover cursor-pointer h-3/5 bg-4 hover:w-1/3 hover:h-2/5 grayscale hover:grayscale-0 box"
        >
          <span className="absolute w-px h-full mt-5 bg-stone-400 left-1/2 top-full"></span>
        </Link>
        <Link
          href="/"
          className="relative w-1/12 transition-all duration-300 bg-center bg-cover cursor-pointer h-3/5 bg-5 hover:w-1/3 hover:h-2/5 grayscale hover:grayscale-0 box"
        >
          <span className="absolute w-px h-full mt-5 bg-stone-400 left-1/2 top-full"></span>
        </Link>
        <Link
          href="/"
          className="relative w-1/12 transition-all duration-300 bg-center bg-cover cursor-pointer h-3/5 bg-6 hover:w-1/3 hover:h-2/5 grayscale hover:grayscale-0 box"
        >
          <span className="absolute w-px h-full mt-5 bg-stone-400 left-1/2 top-full"></span>
        </Link>
      </div>
    </div>
  );
}
