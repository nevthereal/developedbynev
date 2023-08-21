import {
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer className=' h-[16dvh] text-center font-extrabold font-[Montserrat] py-4 text-2xl'>
      <p>©Neville Brem</p>
      <div className='flex justify-center gap-3 text-5xl mt-2'>
        <a href='https://instagram.com/nevillebrem' target='_blank'>
          <FontAwesomeIcon icon={faInstagramSquare} />
        </a>
        <a href='https://twitter.com/BremNeville' target='_blank'>
          <FontAwesomeIcon icon={faTwitterSquare} />
        </a>
        <a href='mailto:contact@nevillebrem.com' target='_blank'>
          <FontAwesomeIcon icon={faEnvelopeSquare} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
