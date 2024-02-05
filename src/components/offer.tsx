import React from 'react';
import Image, { StaticImageData } from 'next/image';
import AccessibilityNewIcon from '../../public/icons/universal-access.png';
import SpeedIcon from '../../public/icons/performance.png';
import DevicesIcon from '../../public/icons/responsive-design.png';
import SearchIcon from '../../public/icons/seo.png';

interface OfferCardProps {
  title: string;
  description: string;
  iconSrc: StaticImageData;
}

const OfferCard: React.FC<OfferCardProps> = ({ title, description, iconSrc }) => {
  return (
    <div className="h-screen">
      <div className="max-w-xs text-center m-2 bg-gray-800 text-white p-4">
        <div className="flex justify-center">
          <Image src={iconSrc} alt={title} width={64} height={64} />
        </div>
        <h5 className="text-4xl font-anton my-2">
          {title}
        </h5>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
};

const Offer: React.FC = () => {
  return (
    <>
      <h2 className="text-heading-2 font-anton text-center mt-4 mb-4">
        My expertise
      </h2>
      <div className="flex justify-center flex-wrap">
        <OfferCard
          title="Accessibility"
          description="Dedicated to creating inclusive web experiences that are accessible to all users, regardless of their abilities."
          iconSrc={AccessibilityNewIcon}
        />
        <OfferCard
          title="Performance"
          description="Focused on optimizing web applications for speed and efficiency to enhance user experience and engagement."
          iconSrc={SpeedIcon}
        />
        <OfferCard
          title="Responsive Design"
          description="Expert in crafting websites that provide an optimal viewing experience across a wide range of devices."
          iconSrc={DevicesIcon}
        />
        <OfferCard
          title="SEO Optimization"
          description="Skilled in optimizing websites to rank higher in search engine results, increasing visibility and traffic."
          iconSrc={SearchIcon}
        />
        {/* Add more cards as needed */}
      </div>
    </>
  );
};

export default Offer;