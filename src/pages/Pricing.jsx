import React from "react";

const priceList = [
  {
    description: "Starter",
    price: 25,
    features: ["Single Page Application", "1 Revision"],
  },
  {
    description: "Silver",
    price: 50,
    features: ["Multi Page Application", "3 Revisions", "Responsive Design"],
  },
  {
    description: "Gold",
    price: 100,
    features: [
      "Multi Page Application",
      "5 Revisions",
      "Responsive Design",
      "Contact Form",
    ],
  },
  {
    description: "Premium",
    price: 200,
    features: [
      "Multi Page Application",
      "Unlimited Revisions",
      "Responsive Design",
      "Contact Form",
      "Firebase Backend Integration",
      "E-Commerce",
    ],
  },
];

const PricePanel = ({ price }) => {
  return (
    <div
      className={`bg-white text-black border-2 border-nevBlue rounded-2xl my-4 p-4`}
    >
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

const Pricing = () => {
  return (
    <div className='m-6'>
      <h1 className='text-4xl font-bold font-[Montserrat] bt-4'>Pricing:</h1>
      {priceList.map((price) => {
        return <PricePanel price={price} key={price.price} />;
      })}
    </div>
  );
};

export default Pricing;
