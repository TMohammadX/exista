import { useRef, useLayoutEffect, useState } from "react";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

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
        <div id="smooth-content" className="h-[calc(100vh+50vh)]">
          <Layout />
          <section className="contact">
            <h2 className="self-end text-sm italic font-semibold tracking-widest text-gray-600 justify-self-start pl-80 ">
              CONTACT ME
            </h2>
            <div className="input-con">
              <textarea
                className="input-4 inp"
                placeholder="MESSAGE"
              ></textarea>
              <div className="grid h-10% gap-3">
                <input type="text" className="input-1 inp" placeholder="NAME" />
                <input
                  type="text"
                  className="input-2 inp"
                  placeholder="EMAIL"
                />
                <input
                  type="text"
                  className="input-3 inp"
                  placeholder="BUDGET"
                />
                <button className="contact-submit">SUBMIT</button>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </>
  );
}
