import {
  useState,
  useEffect,
  useContext,
  useLayoutEffect,
  useRef,
} from "react";
import Link from "next/link";
import { useRouter } from "next/router.js";
import LoadImg from "./components/LoadImg.js";
import Layout from "./components/Layout";
import GlobalStateContext from "./contexts/globalState.js";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
      const { ScrollSmoother } = await import("./contexts/ScrollSmoother.js");

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
            className="hidden sm:block relative w-10% transition-all duration-300 bg-left bg-cover cursor-pointer h-3/5 bg-black hover:w-1/3 hover:h-2/5  hover:grayscale-0 hover:bg-gray-500  box"
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
          <Link
            href="/"
            className="hidden sm:block relative w-10% transition-all duration-300 bg-10% bg-cover cursor-pointer h-3/5 bg-black hover:w-1/3 hover:h-2/5  hover:grayscale-0 hover:bg-gray-500  box"
          >
            <video
              className="object-cover object-10% w-full h-full bg-right  hover:grayscale-0"
              autoPlay={true}
              loop
              muted
            >
              <source src="/video/ppppp.mp4"></source>
            </video>
            <span className="absolute w-px h-full mt-5 bg-gray-400 left-1/2 top-full"></span>
          </Link>
          <Link
            href="/"
            className="hidden sm:block relative w-10% transition-all duration-300 bg-20% bg-cover cursor-pointer h-3/5 bg-black hover:w-1/3 hover:h-2/5  hover:grayscale-0 hover:bg-gray-500  box "
          >
            <video
              className="object-cover object-20% w-full h-full bg-right  hover:grayscale-0"
              autoPlay={true}
              loop
              muted
            >
              <source src="/video/ppppp.mp4"></source>
            </video>
            <span className="absolute w-px h-full mt-5 bg-gray-400 left-1/2 top-full"></span>
          </Link>
          <Link
            href="/"
            className="hidden sm:block relative w-10% transition-all duration-300 bg-30% bg-cover cursor-pointer h-3/5 bg-black hover:w-1/3 hover:h-2/5  hover:grayscale-0 hover:bg-gray-500  box "
          >
            <video
              className="object-cover object-30% w-full h-full bg-right  hover:grayscale-0"
              autoPlay={true}
              loop
              muted
            >
              <source src="/video/ppppp.mp4"></source>
            </video>
            <span className="absolute w-px h-full mt-5 bg-gray-400 left-1/2 top-full"></span>
          </Link>
          <Link
            href="/"
            className="hidden sm:block relative w-10% transition-all duration-300 bg-40% bg-cover cursor-pointer h-3/5 bg-black hover:w-1/3 hover:h-2/5  hover:grayscale-0 hover:bg-gray-500  box "
          >
            <video
              className="object-cover object-40% w-full h-full bg-right  hover:grayscale-0"
              autoPlay={true}
              loop
              muted
            >
              <source src="/video/ppppp.mp4"></source>
            </video>
            <span className="absolute w-px h-full mt-5 bg-gray-400 left-1/2 top-full"></span>
          </Link>
          <Link
            href="/"
            className="hidden sm:block relative w-10% transition-all duration-300 bg-50% bg-cover cursor-pointer h-3/5 bg-black hover:w-1/3 hover:h-2/5  hover:grayscale-0 hover:bg-gray-500  box "
          >
            <video
              className="object-cover object-50% w-full h-full bg-right  hover:grayscale-0"
              autoPlay={true}
              loop
              muted
            >
              <source src="/video/ppppp.mp4"></source>
            </video>
            <span className="absolute w-px h-full mt-5 bg-gray-400 left-1/2 top-full"></span>
          </Link>
        </motion.div>
      )}
    </div>
  );
}
