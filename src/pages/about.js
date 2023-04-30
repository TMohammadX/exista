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
      className="relative flex items-center justify-between w-screen border border-b-0 border-black border-solid px-36 border-t-1 h-1/5 child"
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
          className="fixed z-20 pointer-events-none h-50% w-30%"
          style={{ top: "30.9%", left: mouseX, transform: "translateY(-50%)" }}
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
        <div id="smooth-content" className="w-screen h-[calc(300vh+30vh)] ">
          <Layout title="About" />
          <section className="relative grid w-screen h-screen font-Aboreto">
            <div className="grid w-screen h-screen place-items-center">
              <h1 className="z-10 w-3/6 font-semibold leading-tight text-center text-2">
                I'm a <b className="italic font-black">Highly proficient</b>{" "}
                frontend developer with strong focus on producing high quality &
                impactful digital experiences.
              </h1>
              {/*     <img
                className="absolute h-35% left-5% top-20% z-0"
                src="/img/4.jpg"
              />
              <img
                className="absolute h-35% right-5% bottom-20% z-0"
                src="/img/3.jpg"
  />*/}
            </div>
          </section>
          <section className="relative w-screen h-90% place-items-center font-Aboreto ">
            <ImageHover src="/img/1.jpg" text="DESIGN" desc="SEAMLESS DESIGN" />
            <ImageHover src="/img/2.jpg" text="FRONTEND" desc="SMOOTH UI/UX" />
            <ImageHover
              src="/img/3.jpg"
              text="BACKEND"
              desc="SAFE TRANSACTIONS"
            />
          </section>
          <TestimonialCarousel />
          <Footer />
        </div>
      </div>
    </>
  );
}
