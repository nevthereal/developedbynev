import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";

const Home = () => {
  const adjectives = useRef(null);

  useEffect(() => {
    const typed = new Typed(adjectives.current, {
      strings: [
        "beautiful",
        "responsive",
        "minimalistic",
        "modern",
        "innovative",
        "creative",
        "professional",
      ],
      typeSpeed: 50,
      loop: true,
      backSpeed: 70,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='p-6 h-[71dvh] bg-gradient-to-t from-purple-600 via-nevBlue to-black'>
      <h1 className='text-5xl font-black'>
        The <span className='font-[Montserrat] italic text-nevBlue'>Dev</span>{" "}
        you have been looking for.
      </h1>
      <p className='mt-4 font-bold text-lg'>
        Looking for <span className='font-[Montserrat]' ref={adjectives} />{" "}
        Websites?
      </p>
      <motion.button
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 500,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='bg-nevBlue border-2 shadow-lg px-4 py-2 text-xl font-bold rounded-2xl mt-4'
      >
        <a href='/work'>See my work</a>
      </motion.button>
    </div>
  );
};

export default Home;
