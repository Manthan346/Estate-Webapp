import React from 'react';
import { Building2, Scale, Home } from 'lucide-react';
import Title from './Title';

const WhatWeDo = () => {
  const services = [
    {
      title: "REAL ESTATE CONSULTING",
      description: "Consulting services in the realm of business and real estate are strategically crafted to cater to the unique needs and objectives of individual enterprises. By offering a wide array of specialized services and leveraging extensive industry knowledge, we empower our clients to navigate the complexities of the market with confidence.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop"
    },
    {
      title: "HOUSE SELLING",
      description: "Our comprehensive house selling services are designed to maximize your property's value and ensure a smooth transaction. From professional photography and strategic marketing to expert negotiations and closing support, we handle every detail to get you the best possible price for your home.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&sat=-100&brightness=110"
    },
    {
      title: "LEGAL CONSULTING",
      description: "Our Chaahat Homes assists you in getting your dream home through home loan services. Throughout the country now buying facility have made it easy for people to buy properties by providing necessary assistance in the entire loan process. We ensure complete legal compliance and protection of your interests.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="bg-background py-16 px-4 sm:px-6 font-sans lg:px-8">
      
      <div className="max-w-8xl mx-auto">
        <div className='flex justify-center mt-15 mb-2'>
           <Title Title1={"WHAT"} Title2={" WE DO"} />
           </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 m gap-8">
            
          {services.map((service, index) => (
            <div key={index} className="group">
              {/* Title */}
              <h3 className="text-chart-3 text-xl font-bold tracking-wide mb-4">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-foreground text-sm leading-relaxed mb-6 min-h-[140px]">
                {service.description}
              </p>
              
              {/* Image */}
              <div className="overflow-hidden rounded-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-90 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;