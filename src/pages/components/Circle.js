// components/Circle.js
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Circle = () => {
  const circleRef = useRef(null);

  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableScroll = () => {
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const circle = circleRef.current;
    disableScroll();

    const onScroll = () => {
      const scrollPercentage =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      gsap.to(circle, { width: `${scrollPercentage * 100}%`, duration: 0.5 });
    };

    const onAnimationComplete = () => {
      enableScroll();
      window.removeEventListener("scroll", onScroll);
    };

    gsap.to(circle, {
      width: "100%",
      duration: 2,
      onComplete: onAnimationComplete,
    });

    return () => {
      enableScroll();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div ref={circleRef} className="w-0 h-32 bg-blue-500 rounded-full"></div>
  );
};

export default Circle;
