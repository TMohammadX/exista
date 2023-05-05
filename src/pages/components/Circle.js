import { useLayoutEffect, useRef } from "react";

const Circle = () => {
  const circleRef = useRef(null);

  useLayoutEffect(() => {
    const circle = circleRef.current;
    let scale = 0;

    const updateScale = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const circleTop = circle.getBoundingClientRect().top;
      const circleHeight = circle.offsetHeight;

      if (circleTop + circleHeight / 2 < windowHeight) {
        scale = (scrollY - circleTop + windowHeight) / windowHeight;
        document.body.classList.remove("overflow-hidden");
      } else {
        scale = 0;
        document.body.classList.add("overflow-hidden");
      }

      circle.style.transform = `scale(${scale})`;

      window.requestAnimationFrame(updateScale);
    };

    window.requestAnimationFrame(updateScale);

    return () => {
      window.cancelAnimationFrame(updateScale);
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div
      ref={circleRef}
      className="w-16 h-16 transform scale-0 bg-red-500 rounded-full"
    />
  );
};

export default Circle;
