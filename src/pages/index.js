import {
  useState,
  useEffect,
  useContext,
  useLayoutEffect,
  useRef,
} from "react";
import Link from "next/link";
import { useRouter } from "next/router.js";
import LoadImg from "./components/LoadImg.js";
import Layout from "./components/Layout";
import GlobalStateContext from "./components/globalState.js";

export default function Home() {
  const router = useRouter();
  const el = useRef();
  const [loading, setLoading] = useState(false);
  const { isFirstMount, setIsFirstMount } = useContext(GlobalStateContext);

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

      return () => {
        smoother.kill();
      };
    };

    loadGsap();
  }, []);

  useEffect(() => {
    if (router.pathname === "/" && isFirstMount) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 5000);
      setIsFirstMount(false);
    }
  }, [isFirstMount]);

  return (
    <div className="grid w-screen h-screen overflow-hidden place-items-center font-Aboreto bg-bwhite">
      {loading ? (
        <LoadImg />
      ) : (
        <div
          className="flex items-center justify-center w-screen h-screen gap-3 px-40 transition-all"
          ref={el}
        >
          <Link
            href="/"
            className="relative w-10% transition-all duration-300 bg-left bg-cover cursor-pointer h-3/5 bg-1 hover:w-1/3 hover:h-2/5  hover:grayscale-0 hover:bg-3 box"
          >
            {/*} <video
              className="object-cover w-full h-full bg-right grayscale hover:grayscale-0"
              autoPlay={true}
              loop
              muted
            >
              <source src="/video/ppp.mp4"></source>
      </video>*/}
            <span className="absolute w-px h-full mt-5 bg-gray-400 left-1/2 top-full"></span>
          </Link>
          <Link
            href="/"
            className="relative w-10% transition-all duration-300 bg-10% bg-cover cursor-pointer h-3/5 bg-1 hover:w-1/3 hover:h-2/5  hover:grayscale-0 hover:bg-3 box "
          >
            {/*} <video
              className="object-cover w-full h-full bg-right grayscale hover:grayscale-0"
              autoPlay={true}
              loop
              muted
            >
              <source src="/video/ppp.mp4"></source>
      </video>*/}
            <span className="absolute w-px h-full mt-5 bg-gray-400 left-1/2 top-full"></span>
          </Link>
          <Link
            href="/"
            className="relative w-10% transition-all duration-300 bg-20% bg-cover cursor-pointer h-3/5 bg-1 hover:w-1/3 hover:h-2/5  hover:grayscale-0 hover:bg-3 box "
          >
            {/*} <video
              className="object-cover w-full h-full bg-right grayscale hover:grayscale-0"
              autoPlay={true}
              loop
              muted
            >
              <source src="/video/ppp.mp4"></source>
      </video>*/}
            <span className="absolute w-px h-full mt-5 bg-gray-400 left-1/2 top-full"></span>
          </Link>
          <Link
            href="/"
            className="relative w-10% transition-all duration-300 bg-30% bg-cover cursor-pointer h-3/5 bg-1 hover:w-1/3 hover:h-2/5  hover:grayscale-0 hover:bg-3 box "
          >
            {/*} <video
              className="object-cover w-full h-full bg-right grayscale hover:grayscale-0"
              autoPlay={true}
              loop
              muted
            >
              <source src="/video/ppp.mp4"></source>
      </video>*/}
            <span className="absolute w-px h-full mt-5 bg-gray-400 left-1/2 top-full"></span>
          </Link>
          <Link
            href="/"
            className="relative w-10% transition-all duration-300 bg-40% bg-cover cursor-pointer h-3/5 bg-1 hover:w-1/3 hover:h-2/5  hover:grayscale-0 hover:bg-3 box "
          >
            {/*} <video
              className="object-cover w-full h-full bg-right grayscale hover:grayscale-0"
              autoPlay={true}
              loop
              muted
            >
              <source src="/video/ppp.mp4"></source>
      </video>*/}
            <span className="absolute w-px h-full mt-5 bg-gray-400 left-1/2 top-full"></span>
          </Link>
          <Link
            href="/"
            className="relative w-10% transition-all duration-300 bg-50% bg-cover cursor-pointer h-3/5 bg-1 hover:w-1/3 hover:h-2/5  hover:grayscale-0 hover:bg-3 box "
          >
            {/*} <video
              className="object-cover w-full h-full bg-right grayscale hover:grayscale-0"
              autoPlay={true}
              loop
              muted
            >
              <source src="/video/ppp.mp4"></source>
      </video>*/}
            <span className="absolute w-px h-full mt-5 bg-gray-400 left-1/2 top-full"></span>
          </Link>
        </div>
      )}
    </div>
  );
}
