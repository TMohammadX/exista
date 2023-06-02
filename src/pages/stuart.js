import { useEffect, useRef } from "react";
import Nav from "./components/Nav";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { motion } from "framer-motion";

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
        <div className="w-screen h-[300vh] bg-[#b8d3b9] font-Aboreto px-5 md:px-10 lg:px-16 grid">
          <div className="grid h-[160vh] items-end">
            <ParallaxProvider>
              <Parallax speed={-5}>
                <div className="z-0 flex items-center justify-between pb-5">
                  <h1 className="text-[3vw] font-medium">STUART</h1>
                  <div className="flex gap-2">
                    <a
                      href="https://github.com/TMohammadX/stuart"
                      className="h-[50px] w-[50px] rounded-full grid place-items-center bg-black text-white"
                      target="_blank"
                    >
                      <FiGithub />
                    </a>
                    <a
                      href="https://stuart.cf"
                      className="h-[50px] w-[50px] rounded-full grid place-items-center bg-black text-white"
                      target="_blank"
                    >
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              </Parallax>
            </ParallaxProvider>
            <div className="bg-black bg-center bg-cover w-[100%] h-[90%] min-h-[400px] z-10" />
            <motion.div className="flex justify-between -mt-[20%]">
              <div>
                <h1 className="font-medium 2xl:text-[1vw]">001</h1>
                <h2 className="font-light 2xl:text-[1vw]">Stuart</h2>
              </div>
              <div>
                <h1 className="font-medium 2xl:text-[1vw]">PROJECT FOCUS</h1>
                <h2 className="font-light 2xl:text-[1vw]">
                  Design, Copywriting, Brand Naming
                </h2>
              </div>
              <div>
                <h1 className="font-medium 2xl:text-[1vw]">SERVICES</h1>
                <h2 className="font-light 2xl:text-[1vw]">
                  Website, Strategy, Identity
                </h2>
              </div>
              <div>
                <h1 className="font-medium 2xl:text-[1vw]">DATE</h1>
                <h2 className="font-light 2xl:text-[1vw]">june 2023</h2>
              </div>
            </motion.div>
          </div>
          <div className="w-[100%] h-screen pt-[10%] grid px-10 relative">
            <h1 className="text-[4vw] leading-tight">
              CREATING UNIQUE AND <br /> STYLISH CLOTHING
            </h1>
            <div className="flex gap-10">
              <h1>OUR OBJECTIVE</h1>
              <motion.h1
                initial={{ y: "-30" }}
                animate={{ y: "0" }}
                className="w-[40%] text-[0.9vw]"
              >
                Finturity is a financial advising company providing personalized
                retirement plans for organizations and nonprofits. From brand
                naming and identity design to website design and content
                creation, we established an all-encompassing brand experience
                that inspires people to save for a better future.
              </motion.h1>
            </div>
            <button className="absolute right-[10%] top-[40%] h-[20vmin] w-[20vmin] bg-white rounded-full">
              website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
