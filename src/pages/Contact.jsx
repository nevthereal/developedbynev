import { faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ContactCard = ({ icon, tag, message, link, provider }) => {
  return (
    <div className='bg-white text-black p-4 border-2 rounded-2xl border-nevBlue my-4'>
      <div className='flex justify-between'>
        <h1 className='text-3xl font-semibold font-[Montserrat]'>{provider}</h1>
        <a href={link} target='_blank' className='my-auto text-2xl'>
          <FontAwesomeIcon icon={icon} />
        </a>
      </div>
      <a href={link}>
        <p className='text-md font-bold text-gray-500'>{tag}</p>
      </a>
      <p>{message}</p>
    </div>
  );
};

const Contact = () => {
  return (
    <div className='m-6'>
      <h1 className='text-4xl font-bold font-[Montserrat] bt-4'>Contact Me:</h1>
      <div className='flex flex-col'>
        <ContactCard
          icon={faInstagram}
          provider={"Instagram"}
          tag={"@nevillebrem"}
          link={"https://instagram.com/nevillebrem"}
          message={"Follow and DM me on Instagram!"}
        />
        <ContactCard
          icon={faEnvelope}
          provider={"Mail"}
          tag={"contact@nevillebrem.com"}
          link={"mailto:contact@nevillebrem.com"}
          message={"Contact me via mail"}
        />
        <ContactCard
          icon={faXTwitter}
          provider={
            <span>
              <span className='font-extrabold'>X</span> (Twitter)
            </span>
          }
          tag={"@BremNeville"}
          link={"https://x.com/BremNeville"}
          message={"Contact me via Twitter"}
        />
      </div>
    </div>
  );
};

export default Contact;
