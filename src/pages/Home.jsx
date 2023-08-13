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
        "stunning",
        "hooking",
        "innovative",
        "creative",
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
    <div className='m-6'>
      <h1 className='text-5xl font-black'>
        The <span className='font-[Montserrat]'>Dev</span> you have been looking
        for.
      </h1>
      <p className='mt-4 font-bold text-lg'>
        I will create you <span className='text-nevBlue' ref={adjectives} />{" "}
        Websites
      </p>
      <motion.button className='bg-nevBlue shadow-lg shadow-nevBlue/75 px-4 py-2 text-xl font-bold rounded-full'>
        See my work!
      </motion.button>
    </div>
  );
};

export default Home;
