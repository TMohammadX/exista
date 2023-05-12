import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function () {
  const [isVisible, setIsVisible] = useState(true); // State to manage visibility

  const handleAnimationComplete = () => {
    setIsVisible(false); // Set visibility to false when animation is complete
  };

  return (
    <div>
      {isVisible && (
        <motion.div
          initial={{ width: "100vw", height: "100vh" }}
          animate={{
            zIndex: "10",
            width: "50%",
            height: "60%",
          }}
          exit={{ opacity: 0 }}
          transition={{
            type: "tween",
            duration: 5,
          }}
          onAnimationComplete={handleAnimationComplete}
          className="absolute hidden w-2/4 -translate-x-1/2 -translate-y-1/2 bg-black h-3/5 left-1/2 top-1/2 sm:block"
        >
          <video
            className="object-cover w-full h-full grayscale"
            autoPlay
            muted
            loop
          >
            <source src="/video/ppp.mp4"></source>
          </video>
        </motion.div>
      )}
    </div>
  );
}
