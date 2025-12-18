import React from "react";
import LogoLoop from "./LogoLoop";
import Title from "./Title";

function Logos() {


 const imageLogos = [
  {
    src: "/logo/real-estate/img1.jpg",
    alt: "Real Estate Builder",
    href: "https://company1.com",
  },
  {
    src: "/logo/real-estate/img2.jpg",
    alt: "Property Broker",
    href: "https://company2.com",
  },
  {
    src: "/logo/real-estate/img3.jpg",
    alt: "Housing Platform",
    href: "https://company3.com",
  },
  {
    src: "/logo/real-estate/img4.jpg",
    alt: "Housing Platform",
    href: "https://company3.com",
  },
  {
    src: "/logo/real-estate/img5.png",
    alt: "Housing Platform",
    href: "https://company3.com",
  },
  
 
];

  return (
   
<div className="space-y-12 ">
       
  {/* Heading */}
  <div className="text-center space-y-3">


   
  </div>
  <div className="mt-20">
  <Title Title1={"Builder"} Title2={"Partners"} />
  </div>

  {/* Logo Loop */}
  <LogoLoop
    logos={imageLogos}
    speed={80}
    direction="left"
    logoHeight={56}
    gap={56}
    pauseOnHover
    ariaLabel="Real estate partners"
    className="
      relative rounded-2xl
      bg-gradient-to-br from-background via-muted/40 to-background
      py-10
    "
    renderItem={(item) => (
      <a
        href={item.href}
        className="
          group flex items-center justify-center
          h-20 w-48
          rounded-xl
          border border-transparent
          bg-background/80 backdrop-blur
          transition-all duration-300 ease-out
          hover:scale-[1.05]
          hover:border-border
          hover:shadow-lg
        "
      >
        <img
          src={item.src}
          alt={item.alt}
          className="
            h-12 object-contain
            transition-transform duration-300
            group-hover:scale-105
          "
          draggable={false}
        />
      </a>
    )}
  />
</div>


  );
}

export default Logos;
