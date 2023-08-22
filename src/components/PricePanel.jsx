import React from "react";

const PricePanel = ({ price }) => {
  return (
    <div className='bg-white text-black border-2 border-nevBlue rounded-2xl my-4 p-4'>
      <h1 className='font-bold text-xl font-[Montserrat]'>
        {price.description}
      </h1>
      <p className='font-semibold text-md text-gray-700'>{price.price} CHF</p>
      <ul className='list-disc list-inside text-sm'>
        {price.features.map((feature, index) => {
          return <li key={index}>{feature}</li>;
        })}
      </ul>
    </div>
  );
};

export default PricePanel;
