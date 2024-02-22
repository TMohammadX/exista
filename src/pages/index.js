import { useState, useEffect, useContext, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router.js";
import LoadImg from "./components/LoadImg.js";
import GlobalStateContext from "../contexts/GlobalState.js";
import { Carousel } from "react-responsive-carousel";
import Nav from "./components/Nav.js";
import { motion } from "framer-motion";
import BackgroundMusic from "./components/BackgroundMusic.js";

export default function Home() {
  const router = useRouter();
  const el = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(false);
  const { isFirstMount, setIsFirstMount } = useContext(GlobalStateContext);



  useEffect(() => {
    const loadGsap = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const { ScrollSmoother } = await import("../contexts/ScrollSmoother.js");

      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

      const q = gsap.utils.selector(el);

      let smoother = ScrollSmoother.create({
        smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
        effects: true, // looks for data-speed and data-lag attributes on elements
      });

      return () => {
        smoother.kill();
      };
    };

    loadGsap();
  }, []);

  if (!GlobalStateContext) {
    // Handle the case when the context value is not available
    return null;
  }

  useEffect(() => {
    if (router.pathname === "/" && isFirstMount) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 5000);
      setIsFirstMount(false);
    }
  }, [isFirstMount]);

  return (
    <div className="relative grid w-screen h-screen overflow-hidden place-items-center font-Aboreto">
      {loading ? (
        <LoadImg />
      ) : (
 
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-center w-screen h-[100vh] gap-3 px-5 transition-all px-40 overflow-hidden main-container"
          ref={el}
        >
          <Nav />


          {/* <div className="grid sm:hidden place-items-center">
            <div className="text-center">
              <h1 className="grid items-center pb-5 text-center place-items-center">
                Desktop or larger screen required for project viewing.
              </h1>
              <Link href="/contact" className="">
                <span className="h-[50px] w-[100px] bg-black">Contact</span>
              </Link>
            </div>
      </div> */}
          
          <Link
            href="https://github.com/TMohammadX/stuart"
            className="hidden sms:block relative w-10% transition-all duration-300 bg-center bg-cover cursor-pointer h-3/5 bg-t hover:aspect-square grayscale hover:grayscale-0 box"
            target="_blank"
          >
            <span className="absolute w-px h-full mt-5 bg-gray-400 left-1/2 top-full"></span>
          </Link>
          <Link
            // href="https://github.com/TMohammadX/gfx"
            href=""
            className="hidden sms:block relative w-10% transition-all duration-300 bg-center bg-cover cursor-pointer h-3/5 bg-b hover:aspect-square grayscale hover:grayscale-0 box"
            target="_blank"
          >
            <span className="absolute w-px h-full mt-5 bg-gray-400 left-1/2 top-full"></span>
          </Link>
          <Link
            href="https://github.com/TMohammadX/anhur-entreprises"
            className="hidden sms:block relative w-10% transition-all duration-300 bg-center bg-cover cursor-pointer h-3/5 bg-m hover:aspect-square grayscale hover:grayscale-0 box "
            target="_blank"
          >
            <span className="absolute w-px h-full mt-5 bg-gray-400 left-1/2 top-full"></span>
          </Link>
          <Link
            href="/"
            className="hidden sms:block relative w-10% transition-all duration-300 bg-center bg-cover cursor-pointer h-3/5 bg-r hover:aspect-square grayscale hover:grayscale-0 box "
          >
            <span className="absolute w-px h-full mt-5 bg-gray-400 left-1/2 top-full"></span>
          </Link>
          <Link
            href="/"
            className="hidden sms:block relative w-10% transition-all duration-300 bg-center bg-cover cursor-pointer h-3/5 bg-e hover:aspect-video grayscale hover:grayscale-0 box "
          >
            <span className="absolute w-px h-full mt-5 bg-gray-400 left-1/2 top-full"></span>
          </Link>
          <Link
            href="https://github.com/TMohammadX/mobile-login"
            className="hidden sms:block relative w-10% transition-all duration-300 bg-center bg-cover cursor-pointer h-3/5 bg-s hover:aspect-video grayscale hover:grayscale-0 box "
            target="_blank"
          >
            <span className="absolute w-px h-full mt-5 bg-gray-400 left-1/2 top-full"></span>
          </Link>

          <motion.div className="grid absolute gap-y-4 gap-x-4 px sms:hidden m-0 px-5 grid-cols-3 grid-rows-2 w-screen	top-[15%]">
            <motion.div className=" w-[100%] col-span-2 h-[20vh] bg-gray-400 rounded-ss-[50px]	rounded-ee-[50px] rounded"></motion.div>
            <motion.div className="  w-[100%] col-span-1 h-[20vh] bg-black rounded-ss-[20%]	rounded-ee-[20%] rounded"></motion.div>
            <motion.div className="  w-[100%] col-span-1  h-[20vh] bg-black rounded-ss-[20%]	rounded-ee-[20%] rounded"></motion.div>
            <motion.div className="  w-full col-span-2 h-[20vh] bg-gray-400 rounded-ss-[50px]	rounded-ee-[50px] rounded"></motion.div>
   
          </motion.div>

          <motion.div className="grid w-screen place-items-center sms:hidden absolute bottom-0">
          <h1 className=" sm:hidden z-30 absolute text-[15vw] font-thin text-black block rotate-[-0deg] animatessss top-[-15vh]">
              <span className="h-[50%]"> GET IN TOUCH · GET IN TOUCH ·</span>
              <span className="h-[50%]"> GET IN TOUCH · GET IN TOUCH ·</span>
              <span className="h-[50%]"> GET IN TOUCH · GET IN TOUCH ·</span>
              <span className="h-[50%]"> GET IN TOUCH · GET IN TOUCH ·</span>
              <span className="h-[50%]"> GET IN TOUCH · GET IN TOUCH ·</span>
              <span className="h-[50%]"> GET IN TOUCH · GET IN TOUCH ·</span>
              <span className="h-[50%]"> GET IN TOUCH · GET IN TOUCH ·</span>
              <span className="h-[50%]"> GET IN TOUCH · GET IN TOUCH ·</span>
              <span className="h-[50%]"> GET IN TOUCH · GET IN TOUCH ·</span>
              <span className="h-[50%]"> GET IN TOUCH · GET IN TOUCH ·</span>
              <span className="h-[50%]"> GET IN TOUCH · GET IN TOUCH ·</span>
              <span className="h-[50%]"> GET IN TOUCH · GET IN TOUCH ·</span>
            </h1>
            <button className="w-[60%] h-[10vh] border-[1px] border-black rounded-[100%] mb-[10%]">CLICK</button>
          </motion.div>

        </motion.div>
        
      )}
    </div>
  );
}
