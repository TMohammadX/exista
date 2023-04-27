import { useRef, useLayoutEffect, useState } from "react";
import Layout from "./components/Layout";

export default function () {
  const el = useRef();
  const [isReady, setIsReady] = useState(false);

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
        <div id="smooth-content" className="w-screen h-4screen">
          <Layout title="About" />
          <div className="relative grid w-screen h-screen font-Aboreto">
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
          </div>
          <div className="w-screen h-screen place-items-center font-Aboreto">
            <div className="flex items-center justify-between w-screen px-56 border border-b-0 border-black border-solid border-t-1 h-1/5">
              <h1 className="text-3xl font-semibold">DESIGN</h1>
              <h1 className="text-sm font-semibold">DESIGN desc</h1>
            </div>
            <div className="flex items-center justify-between w-screen px-56 border border-b-0 border-black border-solid h-1/5">
              <h1 className="text-3xl font-semibold">FRONTEND</h1>
              <h1 className="text-sm font-semibold">DESIGN desc</h1>
            </div>
            <div className="flex items-center justify-between w-screen px-56 border border-black border-solid border-b-1 h-1/5">
              <h1 className="text-3xl font-semibold">BACKEND</h1>
              <h1 className="text-sm font-semibold">DESIGN desc</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
