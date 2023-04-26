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
        <div
          id="smooth-content"
          className="grid w-screen h-2screen place-items-center"
        >
          <Layout title="About" />
          <h1>contact</h1>
        </div>
      </div>
    </>
  );
}
