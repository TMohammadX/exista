import { useRef, useEffect, useState } from "react";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import Circle from "./components/Circle";
import Nav from "./components/Nav";

export default function () {
  const el = useRef();
  const [isReady, setIsReady] = useState(false);

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
        <div id="smooth-content" className="h-[calc(100vh+49vh)]">
          <Nav />
          <Layout />
          <section className="h-screen"></section>
          <Footer />
        </div>
      </div>
    </>
  );
}
