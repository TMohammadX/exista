import { useRef, useState, useEffect } from "react";
import Layout from "./components/Layout";
import { motion } from "framer-motion";
import Nav from "./components/Nav";
import { useInView } from "react-intersection-observer";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export default function () {
  const el = useRef();
  const [isReady, setIsReady] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [scroll, setScroll] = useState(false);
  const [ref, inView] = useInView();
  const images = ["/img/2.jpg", "/img/2.jpg", "/img/2.jpg", "/img/2.jpg"];

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
      const { ScrollSmoother } = await import("./contexts/ScrollSmoother");

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
        <div id="smooth-content" className="relative w-screen min-h-[200vh] ">
          <Nav />
          <Layout title="About" />
          <ParallaxProvider>
            <Parallax speed={10}>
              <section className="relative grid w-screen h-[130vh] font-Aboreto">
                <div className="relative h-screen">
                  <div className="absolute left-0 flex animates">
                    <div className="flex justify-around w-[50%]">
                      <div className="w-[20vw] bg-m bg-cover bg-center h-[60vh]" />
                      <div className="w-[20vw] bg-e bg-cover bg-center h-[60vh]" />
                      <div className="w-[20vw] bg-t bg-cover bg-center h-[60vh]" />
                      <div className="w-[20vw] bg-s bg-cover bg-center h-[60vh]" />
                      <div className="w-[20vw] bg-r bg-cover bg-center h-[60vh]" />
                      <div className="w-[20vw] bg-b bg-cover bg-center h-[60vh]" />
                      <div className="w-[20vw] bg-m bg-cover bg-center h-[60vh]" />
                      <div className="w-[20vw] bg-e bg-cover bg-center h-[60vh]" />
                      <div className="w-[20vw] bg-t bg-cover bg-center h-[60vh]" />
                      <div className="w-[20vw] bg-s bg-cover bg-center h-[60vh]" />
                    </div>
                    <div className="flex justify-around w-[50%]">
                      <div className="w-[20vw] bg-r bg-cover bg-center h-[60vh]" />
                      <div className="w-[20vw] bg-b bg-cover bg-center h-[60vh]" />
                      <div className="w-[20vw] bg-m bg-cover bg-center h-[60vh]" />
                      <div className="w-[20vw] bg-e bg-cover bg-center h-[60vh]" />
                      <div className="w-[20vw] bg-t bg-cover bg-center h-[60vh]" />
                      <div className="w-[20vw] bg-s bg-cover bg-center h-[60vh]" />
                      <div className="w-[20vw] bg-r bg-cover bg-center h-[60vh]" />
                      <div className="w-[20vw] bg-b bg-cover bg-center h-[60vh]" />
                      <div className="w-[20vw] bg-m bg-cover bg-center h-[60vh]" />
                      <div className="w-[20vw] bg-e bg-cover bg-center h-[60vh]" />
                    </div>
                  </div>
                </div>

                <div className="z-50 text-5xl font-semibold leading-normal text-center sm:text-2">
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
                    transition={{ duration: 0.5, delay: 0.2 }}
                    exit={{ y: "30px", opacity: 0 }}
                    className="sm:text-[2.6rem] lg:text-[3vw] overflow-hidden font-thin"
                  >
                    BETWEEN COMPONENTS AND ELEMENTS
                  </motion.h1>
                </div>
              </section>
            </Parallax>
          </ParallaxProvider>
          <section className="font-Aboreto flex w-screen h-screen font-bold mt-[10%] justify-center">
            <div className="flex gap-[10%] w-[50%]">
              <h1 className="text-[0.9vw] font-thin">ABOUT ME</h1>
              <motion.div
                className="w-[50%] text-[0.9vw] font-medium h-[80%]"
                ref={ref}
              >
                <motion.p
                  initial={{ y: "40px", opacity: 0.2 }}
                  animate={
                    inView ? { y: 0, opacity: 1 } : { y: "40px", opacity: 0.2 }
                  }
                  exit={{ y: "40px", opacity: 0.2 }}
                  transition={{ duration: 0.5 }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </motion.p>
                <br />
                <motion.p
                  initial={{ y: "40px", opacity: 0.2 }}
                  animate={
                    inView ? { y: 0, opacity: 1 } : { y: "40px", opacity: 0.2 }
                  }
                  exit={{ y: "40px", opacity: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Rutrum tellus pellentesque eu tincidunt. Proin libero nunc
                  consequat interdum varius sit amet. Metus vulputate eu
                  scelerisque felis. Vulputate eu scelerisque felis imperdiet
                  proin fermentum leo vel. Aliquet nec ullamcorper.
                </motion.p>
                <br />
                <motion.p
                  initial={{ y: "40px", opacity: 0.2 }}
                  animate={
                    inView ? { y: 0, opacity: 1 } : { y: "40px", opacity: 0.2 }
                  }
                  exit={{ y: "40px", opacity: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Morem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Aliquam vestibulum morbi blandit.
                </motion.p>
                <br />
                <motion.p
                  initial={{ y: "30px", opacity: 0.2 }}
                  animate={
                    inView ? { y: 0, opacity: 1 } : { y: "30px", opacity: 0.2 }
                  }
                  exit={{ y: "40px", opacity: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Rutrum tellus pellentesque eu tincidunt. Proin libero nunc
                  consequat interdum varius sit amet. Metus vulputate eu
                  scelerisque felis.
                </motion.p>
              </motion.div>
            </div>
            <div className="w-[25%] rounded-t-full h-3/4 rounded-se-full bg-r bg-center bg-cover" />
          </section>
          <section className="h-[110vh] font-Aboreto grid place-items-center">
            <div className="relative flex justify-center w-screen h-screen">
              <div className="bg-b h-[60%] w-[20%] bg-cover bg-center" />
              <h1 className="text-black transform rotate-[-90deg] absolute top-1/2 -translate-y-1/2 text-right text-4xl font-thin lg:text-[3vw]">
                MOHAMMAD T
              </h1>
              <div className="w-[10%]" />
              <div className="bg-3 h-[60%] w-[20%] items-end self-end bg-cover bg-center" />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
