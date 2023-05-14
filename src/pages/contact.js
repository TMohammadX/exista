import { useRef, useEffect, useState } from "react";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Marquee from "react-fast-marquee";

export default function () {
  const el = useRef();
  const [isReady, setIsReady] = useState(false);

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

  const sendEmail = () => {
    console.log("submitted");
  };

  return (
    <>
      <div ref={el}>
        <Nav />
        <div id="smooth-content" className="h-screen">
          <Layout />
          <div className="flex justify-center w-screen h-screen font-Aboreto">
            <div className="w-[50%] h-screen grid place-items-center">
              <form onSubmit={sendEmail} className="grid gap-3">
                <div className="flex gap-3">
                  <input
                    type="text"
                    className="bg-transparent border border-black h-[40px] outline-none p-5 text-xs placeholder:text-gray-400 font-thin"
                    placeholder="first name"
                  />
                  <input
                    type="text"
                    className="bg-transparent border border-black h-[40px] outline-none p-5 text-xs placeholder:text-gray-400 font-thin"
                    placeholder="last name"
                  />
                </div>
                <input
                  type="email"
                  className="bg-transparent border border-black h-[40px] outline-none p-5 text-xs placeholder:text-gray-400 font-thin"
                  placeholder="Email"
                />
                <textarea
                  type="text"
                  className="bg-transparent border border-black h-[25vh] resize-none outline-none pl-5 pt-3 text-xs placeholder:text-gray-400 font-thin"
                  placeholder="message"
                />
              </form>
            </div>

            <h1 className=" absolute text-[4vw] font-thin text-black 2xl:text-5xl  w-max rotate-[-90deg] animatess">
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
            <div className="w-[50%] h-screen grid place-items-center">
              <button
                onClick={sendEmail}
                className="w-[20vh] h-[20vh] bg-black rounded-full text-white"
              >
                send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
