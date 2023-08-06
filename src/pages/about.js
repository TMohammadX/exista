import { useRef, useState, useEffect } from "react";
import Layout from "./components/Layout";
import { motion } from "framer-motion";
import Nav from "./components/Nav";
import { useInView } from "react-intersection-observer";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Link from "next/link";

export default function () {
  const el = useRef();
  const [isReady, setIsReady] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [ref, inView] = useInView();

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
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
      const { ScrollSmoother } = await import("../contexts/ScrollSmoother");

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
            <Parallax speed={3}>
              <section className="relative grid w-screen h-[130vh] font-Aboreto">
                <div className="relative h-screen">
                  <div className="absolute left-0 flex animates">
                    <div className="flex justify-around w-[50%]">
                      <div className="w-[20vw] bg-m bg-cover bg-center h-[60vh]" />
                      <div className="w-[20vw] bg-t bg-cover bg-center h-[60vh]" />
                      <div className="w-[20vw] bg-b bg-cover bg-center h-[60vh]" />
                      <div className="w-[20vw] bg-e bg-cover bg-center h-[60vh]" />
                      <div className="w-[20vw] bg-s bg-cover bg-center h-[60vh]" />
                      <div className="w-[20vw] bg-m bg-cover bg-center h-[60vh]" />
                      <div className="w-[20vw] bg-t bg-cover bg-center h-[60vh]" />
                      <div className="w-[20vw] bg-b bg-cover bg-center h-[60vh]" />
                      <div className="w-[20vw] bg-s bg-cover bg-center h-[60vh]" />
                      <div className="w-[20vw] bg-m bg-cover bg-center h-[60vh]" />
                    </div>
                    <div className="flex justify-around w-[50%]">
                      <div className="w-[20vw] bg-t bg-cover bg-center h-[60vh]" />
                      <div className="w-[20vw] bg-b bg-cover bg-center h-[60vh]" />
                      <div className="w-[20vw] bg-e bg-cover bg-center h-[60vh]" />
                      <div className="w-[20vw] bg-s bg-cover bg-center h-[60vh]" />
                      <div className="w-[20vw] bg-m bg-cover bg-center h-[60vh]" />
                      <div className="w-[20vw] bg-t bg-cover bg-center h-[60vh]" />
                      <div className="w-[20vw] bg-b bg-cover bg-center h-[60vh]" />
                      <div className="w-[20vw] bg-s bg-cover bg-center h-[60vh]" />
                      <div className="w-[20vw] bg-m bg-cover bg-center h-[60vh]" />
                      <div className="w-[20vw] bg-t bg-cover bg-center h-[60vh]" />
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
                  I am a highly skilled web developer with expertise in HTML,
                  CSS, and JavaScript. With fluency in Next.js, Sass, Tailwind
                  CSS, and React Native, I possess a comprehensive toolkit to
                  build robust and dynamic web applications.
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
                  I am a fully dedicated and disciplined individual, committed
                  to delivering high-quality work in the fastest possible time.
                  I thrive on challenging projects and am willing to go the
                  extra mile to ensure exceptional results.
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
                  My proficiency in these technologies allows me to create
                  visually appealing and functional websites. Additionally
                  enabling me to build responsive and interactive web
                  applications.
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
                  I pride myself on my meticulous attention to detail and strong
                  problem-solving abilities. I am constantly seeking to expand
                  my knowledge and stay up to date with the latest industry
                  trends and technologies.
                </motion.p>
              </motion.div>
            </div>
            <ParallaxProvider>
              <Parallax speed={10}>
                <div className="w-[25vw] rounded-t-full h-3/4 rounded-se-full bg-m bg-center bg-cover" />
              </Parallax>
            </ParallaxProvider>
          </section>
          <section className="h-[110vh] font-Aboreto grid place-items-center">
            <ParallaxProvider>
              <Parallax speed={10}>
                <div className="relative flex justify-center w-screen h-screen">
                  <div
                    className="bg-t h-[60%] w-[20%] bg-cover bg-center cursor-pointer"
                    onClick={() => {
                      location.href = "mailto:bargineo@gmail.com";
                    }}
                  />
                  <Link
                    href="/contact"
                    className="text-black transform rotate-[-90deg] absolute top-1/2 -translate-y-1/2 text-right text-4xl font-thin lg:text-[3vw]"
                  >
                    Get In Touch
                  </Link>
                  <div className="w-[10%]" />
                  <div
                    className="bg-e h-[60%] w-[20vw] items-end self-end bg-cover bg-center cursor-pointer"
                    onClick={() => {
                      location.href = "https://twitter.com/TMohammadX";
                    }}
                  />
                </div>
              </Parallax>
            </ParallaxProvider>
          </section>
        </div>
      </div>
    </>
  );
}
