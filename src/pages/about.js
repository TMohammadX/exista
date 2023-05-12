import { useRef, useLayoutEffect, useState, useEffect } from "react";
import Layout from "./components/Layout";
import { motion, useSpring, useMotionValue } from "framer-motion";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

// function ImageHover({ src, text, desc }) {
//   const [isHovered, setIsHovered] = useState(false);
//   const [mouseX, setMouseX] = useState(0);

//   function handleMouseMove(event) {
//     setMouseX(event.clientX);
//   }

//   return (
//     <div
//       className="relative flex items-center justify-between w-screen overflow-hidden border border-b-0 border-l-0 border-r-0 border-black border-solid px-36 border-t-1 h-1/5 child"
//       onMouseMove={handleMouseMove}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <h1 className="font-semibold sm:text-3xl">{text}</h1>
//       <h1 className="text-sm font-semibold">{desc}</h1>
//       {isHovered && (
//         <motion.div
//           src={src}
//           alt="Image"
//           className="fixed z-20 pointer-events-none h-50% w-30% bg-black overflow-hidden"
//           style={{ top: "30.45%", left: mouseX, transform: "translateY(-50%)" }}
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.8 }}
//           transition={{ duration: 0.3 }}
//         />
//       )}
//     </div>
//   );
// }

export default function () {
  const el = useRef();
  const [isReady, setIsReady] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [scroll, setScroll] = useState(false);

  function handleMouseMove(event) {
    setMouseX(event.clientX);
  }

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        // Execute your function here
        console.log("User has scrolled more than 100 pixels");
        setScroll(true);
      } else if (window.scrollY > 200) {
        setScroll(false);
        console.log("ssss");
      } else {
        setScroll(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
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
        <div id="smooth-content" className="relative w-screen h-[335vh] ">
          <Nav />
          {/* <Layout title="About" />*/}
          <section className="relative grid w-screen h-[125vh] font-Aboreto">
            <div className="flex justify-center gap-10 h-[100vh] items-center">
              <div className="w-[20%] bg-black h-[50vh] -rotate-12 mt-[7%] bg-6 "></div>
              <div className="w-[20%] bg-black h-[50vh] -rotate-[8deg] bg-6 "></div>
              <div className="w-[20%] bg-black h-[50vh] -rotate-0 mb-[2.5%] bg-6 "></div>
              <div className="w-[20%] bg-black h-[50vh] rotate-[8deg]  bg-6 "></div>
              <div className="w-[20%] bg-black h-[50vh] rotate-12 mt-[7%] bg-6 "></div>
            </div>
            <div className="z-10 -mt-32 text-5xl font-semibold leading-normal text-center sm:text-2">
              <motion.h1
                initial={{ y: "5%", opacity: 0 }}
                animate={
                  scroll ? { y: 0, opacity: 1 } : { y: "40px", opacity: 0 }
                }
                transition={{ duration: 0.5 }}
                exit={{ y: "30px", opacity: 0 }}
                className="sm:text-[2.6rem] lg:text-[3vw] overflow-hidden font-thin"
              >
                CREATING INTERACTIONS
              </motion.h1>

              <motion.h1
                initial={{ y: "5%", opacity: 0 }}
                animate={
                  scroll ? { y: 0, opacity: 1 } : { y: "40px", opacity: 0 }
                }
                transition={{ duration: 0.4, delay: 0.3 }}
                exit={{ y: "30px", opacity: 0 }}
                className="sm:text-[2.6rem] lg:text-[3vw] overflow-hidden font-thin"
              >
                BETWEEN COMPONENTS AND ELEMENTS
              </motion.h1>
            </div>
          </section>
          <section className="font-Aboreto flex w-screen h-screen mx-[10%] font-bold mt-[10%]">
            <div className="flex gap-[5%]">
              <h1>ABOUT ME</h1>
              <p className="w-1/4 text-sm font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                <br />
                <br />
                Rutrum tellus pellentesque eu tincidunt. Proin libero nunc
                consequat interdum varius sit amet. Metus vulputate eu
                scelerisque felis. Vulputate eu scelerisque felis imperdiet
                proin fermentum leo vel. Aliquet nec ullamcorper.
                <br />
                <br />
                Morem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Aliquam vestibulum morbi blandit.
              </p>
            </div>
            <div className="w-3/5 h-screen bg-1" />
          </section>
        </div>
      </div>
    </>
  );
}
