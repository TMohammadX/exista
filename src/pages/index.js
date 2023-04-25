import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router.js";
import LoadImg from "./components/LoadImg.js";
import Layout from "./components/Layout";

import GlobalStateContext from "./components/GlobalState.js";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { isFirstMount, setIsFirstMount } = useContext(GlobalStateContext);

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
    <div className="grid w-screen h-screen overflow-hidden place-items-center font-Aboreto">
      {loading ? (
        <LoadImg />
      ) : (
        <div className="flex items-center justify-center w-screen h-screen gap-3 px-40 transition-all ">
          <Link
            href="/"
            className="relative w-1/12 transition-all duration-300 bg-center bg-cover cursor-pointer h-3/5 bg-1 hover:w-1/3 hover:h-2/5 grayscale hover:grayscale-0 box"
          >
            <video
              className="object-cover w-full h-full grayscale hover:grayscale-0"
              autoPlay={true}
              loop
              muted
            >
              <source src="/video/ppp.mp4"></source>
            </video>
            <span className="absolute w-px h-full mt-5 bg-stone-400 left-1/2 top-full"></span>
          </Link>
          <Link
            href="/"
            className="relative w-1/12 transition-all duration-300 bg-center bg-cover cursor-pointer h-3/5 bg-2 hover:w-1/3 hover:h-2/5 grayscale hover:grayscale-0 box "
          >
            <video
              className="object-cover w-full h-full grayscale hover:grayscale-0"
              autoPlay={true}
              loop
              muted
            >
              <source src="/video/ppp.mp4"></source>
            </video>
            <span className="absolute w-px h-full mt-5 bg-stone-400 left-1/2 top-full"></span>
          </Link>
          <Link
            href="/"
            className="relative w-1/12 transition-all duration-300 bg-center bg-cover cursor-pointer h-3/5 bg-3 hover:w-1/3 hover:h-2/5 grayscale hover:grayscale-0 box "
          >
            <video
              className="object-cover w-full h-full grayscale hover:grayscale-0"
              autoPlay={true}
              loop
              muted
            >
              <source src="/video/ppp.mp4"></source>
            </video>
            <span className="absolute w-px h-full mt-5 bg-stone-400 left-1/2 top-full"></span>
          </Link>
          <Link
            href="/"
            className="relative w-1/12 transition-all duration-300 bg-center bg-cover cursor-pointer h-3/5 bg-4 hover:w-1/3 hover:h-2/5 grayscale hover:grayscale-0 box "
          >
            <video
              className="object-cover w-full h-full grayscale hover:grayscale-0"
              autoPlay={true}
              loop
              muted
            >
              <source src="/video/ppp.mp4"></source>
            </video>
            <span className="absolute w-px h-full mt-5 bg-stone-400 left-1/2 top-full"></span>
          </Link>
          <Link
            href="/"
            className="relative w-1/12 transition-all duration-300 bg-center bg-cover cursor-pointer h-3/5 bg-5 hover:w-1/3 hover:h-2/5 grayscale hover:grayscale-0 box "
          >
            <video
              className="object-cover w-full h-full grayscale hover:grayscale-0"
              autoPlay={true}
              loop
              muted
            >
              <source src="/video/ppp.mp4"></source>
            </video>
            <span className="absolute w-px h-full mt-5 bg-stone-400 left-1/2 top-full"></span>
          </Link>
          <Link
            href="/"
            className="relative w-1/12 transition-all duration-300 bg-center bg-cover cursor-pointer h-3/5 bg-6 hover:w-1/3 hover:h-2/5 grayscale hover:grayscale-0 box "
          >
            <video
              className="object-cover w-full h-full grayscale hover:grayscale-0"
              autoPlay={true}
              loop
              muted
            >
              <source src="/video/ppp.mp4"></source>
            </video>
            <span className="absolute w-px h-full mt-5 bg-stone-400 left-1/2 top-full"></span>
          </Link>
        </div>
      )}
    </div>
  );
}
