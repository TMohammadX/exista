import { useRef, useLayoutEffect, useState } from "react";
import Layout from "./components/Layout";
import { motion, useSpring, useMotionValue } from "framer-motion";
import TestimonialCarousel from "./components/TestimonialCarousel";
import Footer from "./components/Footer";

function ImageHover({ src, text, desc }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mouseX, setMouseX] = useState(0);

  function handleMouseMove(event) {
    setMouseX(event.clientX);
  }

  return (
    <div
      className="relative flex items-center justify-between w-screen px-56 border border-b-0 border-black border-solid border-t-1 h-1/5 child"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className="text-3xl font-semibold">{text}</h1>
      <h1 className="text-sm font-semibold">{desc}</h1>
      {isHovered && (
        <motion.img
          src={src}
          alt="Image"
          className="fixed z-20 pointer-events-none h-80 w-96"
          style={{ top: "33.7%", left: mouseX, transform: "translateY(-50%)" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </div>
  );
}

export default function () {
  const el = useRef();
  const [isReady, setIsReady] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mouseX, setMouseX] = useState(0);

  function handleMouseMove(event) {
    setMouseX(event.clientX);
  }

  useLayoutEffect(() => {
    const loadGsap = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const { ScrollSmoother } = await import("./components/ScrollSmoother");

      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

      const q = gsap.utils.selector(el);

      let smoother = ScrollSmoother.create({
        smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
        effects: true, // looks for data-speed and data-lag attributes on elements
      });

      setIsReady(true);

      return () => {
        smoother.kill();
      };
    };

    loadGsap();
  }, []);

  return (
    <>
      <div ref={el}>
        <div id="smooth-content" className="w-screen h-3screen">
          <Layout title="About" />
          <section className="relative grid w-screen h-screen font-Aboreto">
            <div className="absolute w-screen -translate-y-1/2 -translate-x-1/3 left-1/2 top-2/4">
              <h2 className="text-sm italic font-semibold tracking-widest text-gray-600 mb-14">
                ABOUT ME
              </h2>
              <h1 className="w-4/6 text-4xl font-semibold">
                I'm a <b className="italic font-black">selectively skilled</b>{" "}
                product designer with strong focus on producing high quality &
                impactful digital experience.
              </h1>
            </div>
          </section>
          <section className="relative w-screen h-90% place-items-center font-Aboreto ">
            <ImageHover
              src="/img/1.jpg"
              text="DESIGN"
              desc="DESIGN DESCRIPTION"
            />
            <ImageHover
              src="/img/2.jpg"
              text="FRONTEND"
              desc="DESIGN DESCRIPTION"
            />
            <ImageHover
              src="/img/3.jpg"
              text="BACKEND"
              desc="DESIGN DESCRIPTION"
            />
          </section>
          <TestimonialCarousel />
          <Footer />
        </div>
      </div>
    </>
  );
}
