import { useState, useEffect, useContext, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router.js";
import LoadImg from "./components/LoadImg.js";
import GlobalStateContext from "../contexts/GlobalState.js";
import { Carousel } from "react-responsive-carousel";
import Nav from "./components/Nav.js";
import { motion } from "framer-motion";

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
          className="flex sm:items-center sm:justify-center w-screen h-[100%] gap-3 px-5 transition-all sm:px-40 overflow-hidden"
          ref={el}
        >
          <Nav />
          <div className="grid w-screen h-[50vh] sm:hidden place-items-center relative top-[35%] -translate-y-[35%]">
            <Carousel
              showArrows
              showStatus={false}
              showThumbs={false}
              showIndicators={false}
              infiniteLoop
              autoPlay
              interval={3000}
              transitionTime={500}
            >
              <div className="h-[40vh]">
                <Link
                  href="/"
                  className="relative transition-all duration-300 bg-black bg-left bg-cover cursor-pointer box"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <video
                    className="object-cover object-left w-full h-full bg-right "
                    autoPlay={true}
                    loop
                    muted
                  >
                    <source src="/video/ppppp.mp4"></source>
                  </video>
                  <span className="absolute w-px h-full mt-5 bg-gray-400 left-1/2 top-full"></span>
                </Link>
              </div>
              <div className="h-[40vh]">
                <Link
                  href="/"
                  className="relative w-10% transition-all duration-300 bg-left bg-cover cursor-pointer h-3/5 bg-black hover:w-1/3 hover:h-2/5  hover:grayscale-0 hover:bg-gray-500  box"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <video
                    className="object-cover object-left w-full h-full bg-right "
                    autoPlay={true}
                    loop
                    muted
                  >
                    <source src="/video/ppppp.mp4"></source>
                  </video>
                  <span className="absolute w-px h-full mt-5 bg-gray-400 left-1/2 top-full"></span>
                </Link>
              </div>
              <div className="h-[40vh]">
                <Link
                  href="/"
                  className="relative w-10% transition-all duration-300 bg-left bg-cover cursor-pointer h-3/5 bg-black hover:w-1/3 hover:h-2/5  hover:grayscale-0 hover:bg-gray-500  box"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <video
                    className="object-cover object-left w-full h-full bg-right "
                    autoPlay={true}
                    loop
                    muted
                  >
                    <source src="/video/ppppp.mp4"></source>
                  </video>
                  <span className="absolute w-px h-full mt-5 bg-gray-400 left-1/2 top-full"></span>
                </Link>
              </div>
              <div className="h-[40vh]">
                <Link
                  href="/"
                  className="relative w-10% transition-all duration-300 bg-left bg-cover cursor-pointer h-3/5 bg-black hover:w-1/3 hover:h-2/5  hover:grayscale-0 hover:bg-gray-500  box"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <video
                    className="object-cover object-left w-full h-full bg-right "
                    autoPlay={true}
                    loop
                    muted
                  >
                    <source src="/video/ppppp.mp4"></source>
                  </video>
                  <span className="absolute w-px h-full mt-5 bg-gray-400 left-1/2 top-full"></span>
                </Link>
              </div>
              <div className="h-[40vh]">
                <Link
                  href="/"
                  className="relative w-10% transition-all duration-300 bg-left bg-cover cursor-pointer h-3/5 bg-black hover:w-1/3 hover:h-2/5  hover:grayscale-0 hover:bg-gray-500  box"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <video
                    className="object-cover object-left w-full h-full bg-right "
                    autoPlay={true}
                    loop
                    muted
                  >
                    <source src="/video/ppppp.mp4"></source>
                  </video>
                  <span className="absolute w-px h-full mt-5 bg-gray-400 left-1/2 top-full"></span>
                </Link>
              </div>
              <div className="h-[40vh]">
                <Link
                  href="/"
                  className="relative w-10% transition-all duration-300 bg-left bg-cover cursor-pointer h-3/5 bg-black hover:w-1/3 hover:h-2/5  hover:grayscale-0 hover:bg-gray-500  box"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <video
                    className="object-cover object-left w-full h-full bg-right "
                    autoPlay={true}
                    loop
                    muted
                  >
                    <source src="/video/ppppp.mp4"></source>
                  </video>
                  <span className="absolute w-px h-full mt-5 bg-gray-400 left-1/2 top-full"></span>
                </Link>
              </div>
            </Carousel>
          </div>
          <Link
            href="/"
            className="hidden sm:block relative w-10% transition-all duration-300 bg-center bg-cover cursor-pointer h-3/5 bg-t hover:aspect-square  hover:w-1/3 hover:h-2/5 grayscale hover:grayscale-0 box"
          >
            <span className="absolute w-px h-full mt-5 bg-gray-400 left-1/2 top-full"></span>
          </Link>
          <Link
            href="/"
            className="hidden sm:block relative w-10% transition-all duration-300 bg-center bg-cover cursor-pointer h-3/5 bg-b hover:w-1/3 hover:min-w-[300px] hover:aspect-square hover:h-2/5 grayscale hover:grayscale-0 box"
          >
            <span className="absolute w-px h-full mt-5 bg-gray-400 left-1/2 top-full"></span>
          </Link>
          <Link
            href="/"
            className="hidden sm:block relative w-10% transition-all duration-300 bg-center bg-cover cursor-pointer h-3/5 bg-m hover:w-1/3 hover:min-w-[300px] hover:aspect-square  hover:h-2/5 grayscale hover:grayscale-0 box "
          >
            <span className="absolute w-px h-full mt-5 bg-gray-400 left-1/2 top-full"></span>
          </Link>
          <Link
            href="/"
            className="hidden sm:block relative w-10% transition-all duration-300 bg-center bg-cover cursor-pointer h-3/5 bg-r hover:w-1/3 hover:min-w-[300px] hover:aspect-square  hover:h-2/5 grayscale hover:grayscale-0 box "
          >
            <span className="absolute w-px h-full mt-5 bg-gray-400 left-1/2 top-full"></span>
          </Link>
          <Link
            href="/"
            className="hidden sm:block relative w-10% transition-all duration-300 bg-center bg-cover cursor-pointer h-3/5 bg-e hover:w-1/3 hover:min-w-[300px] hover:aspect-video  hover:h-2/5 grayscale hover:grayscale-0 box "
          >
            <span className="absolute w-px h-full mt-5 bg-gray-400 left-1/2 top-full"></span>
          </Link>
          <Link
            href="/"
            className="hidden sm:block relative w-10% transition-all duration-300 bg-center bg-cover cursor-pointer h-3/5 bg-s hover:w-1/3 hover:min-w-[300px] hover:aspect-video  hover:h-2/5 grayscale hover:grayscale-0 box "
          >
            <span className="absolute w-px h-full mt-5 bg-gray-400 left-1/2 top-full"></span>
          </Link>
        </motion.div>
      )}
    </div>
  );
}
