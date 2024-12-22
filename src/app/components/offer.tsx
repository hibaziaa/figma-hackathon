import React from "react";

interface OfferCardProps {
  icon: string;
  title: string;
  description: string;
}

const OfferCard: React.FC<OfferCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 space-y-4 hover:shadow-2xl transition-shadow duration-300">
      <img src={icon} alt={title} className="w-12 h-12 object-contain" />
      <h3 className="text-lg font-semibold text-indigo-900">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const Offers = () => {
  const offerCards = [
    {
      icon: "/images/free-delivery.png",
      title: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      icon: "/images/money-back.png",
      title: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      icon: "/images/premium-quality.png",
      title: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      icon: "/images/support.png",
      title: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
  ];

  return (
    <section className="py-10 px-5 md:px-20">
      <h2 className="text-[32px] md:text-[42px] font-bold leading-[1.2] font-josefin text-center text-blue mb-12">
        What Shopex Offer!
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {offerCards.map((card, index) => (
          <OfferCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Offers;
