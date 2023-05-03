// components/TestimonialCarousel.js
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    text: "I recently had the pleasure of working with a top-notch web development service, and I can confidently say that they exceeded my expectations in every way. From start to finish, the team was incredibly professional, communicative, and skilled, making the entire process of building my website a breeze.",
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "Overall, I am thrilled with the results and would highly recommend this web development service to anyone looking for a reliable, high-quality, and cost-effective solution. Whether you are starting from scratch or need help refining an existing website, this team has the skills and expertise to deliver outstanding results.",
  },
  {
    id: 3,
    name: "Michael Brown",
    text: "What really stood out to me was the attention to detail and the dedication to getting everything just right. They took the time to listen to my needs and preferences, and then used their expertise to create a stunning website that perfectly represents my brand and business.",
  },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000); // Change the testimonial every 3 seconds

    return () => {
      clearInterval(timer);
    };
  }, [current]);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const renderCircles = () => {
    return testimonials.map((_, index) => (
      <div
        key={index}
        className={`w-2 h-2 mx-1 rounded-full ${
          index === current ? "bg-black" : "bg-gray-400"
        }`}
      ></div>
    ));
  };

  return (
    <div className="relative w-screen h-screen mb-16 -mt-20 font-Aboreto">
      <AnimatePresence>
        {testimonials.map((testimonial, index) => {
          if (index !== current) return null;

          return (
            <div className="grid h-90% place-items-center">
              <motion.div
                key={testimonial.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className=" grid w-full h-50% place-items-center"
              >
                <p className="text-xl font-semibold text-center">
                  {testimonial.name}
                </p>
                <p className="w-7/12 mt-10 font-semibold text-center text-black text-[1.3vw]">
                  {testimonial.text}
                </p>
              </motion.div>
            </div>
          );
        })}
      </AnimatePresence>

      <div className="absolute flex mb-4 -translate-x-1/2 left-1/2 top-3/4">
        {renderCircles()}
      </div>
    </div>
  );
};

export default TestimonialCarousel;