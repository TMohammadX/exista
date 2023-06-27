import { useEffect, useRef } from "react";
import Nav from "./components/Nav";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { motion } from "framer-motion";
import Link from "next/link";

export default function () {
  const el = useRef();

  useEffect(() => {
    const loadGsap = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const { ScrollSmoother } = await import("../contexts/ScrollSmoother");

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

  return (
    <div ref={el}>
      <div id="smooth-content">
        <Nav />
        <div className="w-screen h-screen bg-[#b8d3b9] font-Aboreto px-5 md:px-10 lg:px-16 grid">
          <div className="flex items-center justify-center w-screen h-[100%] gap-3 px-5">
            <Link
              href="/stuart"
              className="hidden sm:block relative w-10% transition-all duration-300 bg-center bg-cover cursor-pointer h-3/5 bg-t hover:aspect-square grayscale hover:grayscale-0 box"
            >
              <span className="absolute w-px h-full mt-5 bg-gray-400 left-1/2 top-full"></span>
            </Link>
            <Link
              href="/stuart"
              className="hidden sm:block relative w-10% transition-all duration-300 bg-center invisible bg-cover cursor-pointer h-3/5 bg-t hover:aspect-square grayscale hover:grayscale-0 box"
            >
              <span className="absolute w-px h-full mt-5 bg-gray-400 left-1/2 top-full"></span>
            </Link>
            <Link
              href="/stuart"
              className="hidden sm:block relative w-10% transition-all duration-300 bg-center invisible bg-cover cursor-pointer h-3/5 bg-t hover:aspect-square grayscale hover:grayscale-0 box"
            >
              <span className="absolute w-px h-full mt-5 bg-gray-400 left-1/2 top-full"></span>
            </Link>
            <Link
              href="/stuart"
              className="hidden sm:block relative w-10% transition-all duration-300 bg-center invisible bg-cover cursor-pointer h-3/5 bg-t hover:aspect-square grayscale hover:grayscale-0 box"
            >
              <span className="absolute w-px h-full mt-5 bg-gray-400 left-1/2 top-full"></span>
            </Link>
            <Link
              href="/stuart"
              className="hidden sm:block relative w-10% transition-all duration-300 bg-center invisible bg-cover cursor-pointer h-3/5 bg-t hover:aspect-square grayscale hover:grayscale-0 box"
            >
              <span className="absolute w-px h-full mt-5 bg-gray-400 left-1/2 top-full"></span>
            </Link>
            <Link
              href="/stuart"
              className="hidden sm:block relative w-10% transition-all duration-300 bg-center invisible bg-cover cursor-pointer h-3/5 bg-t hover:aspect-square grayscale hover:grayscale-0 box"
            >
              <span className="absolute w-px h-full mt-5 bg-gray-400 left-1/2 top-full"></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
