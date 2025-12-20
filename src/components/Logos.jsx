import React from "react";
import LogoLoop from "./LogoLoop";
import Title from "./Title";

function Logos() {
  const imageLogos = [
    { src: "/logo/real-estate/img1.jpg", alt: "Real Estate Builder", href: "#" },
    { src: "/logo/real-estate/img2.jpg", alt: "Property Broker", href: "#" },
    { src: "/logo/real-estate/img3.jpg", alt: "Housing Platform", href: "#" },
    { src: "/logo/real-estate/img4.jpg", alt: "Housing Platform", href: "#" },
    { src: "/logo/real-estate/img5.png", alt: "Housing Platform", href: "#" },
  ];

  return (
    <section className="w-full mt-20 space-y-12">
      {/* Heading */}
      <div className="mt-12 sm:mt-20">
        <Title Title1="BUILDER" Title2="PARTNERS" />
      </div>

      {/* Logo Loop */}
      <LogoLoop
        logos={imageLogos}
        speed={60}                 // smoother on mobile
        direction="left"
        logoHeight={36}             // mobile-first height
        gap={20}                    // mobile-safe gap
        pauseOnHover
        ariaLabel="Real estate partners"
        className="
          relative w-full overflow-hidden
          rounded-2xl
          bg-gradient-to-br from-background via-muted/40 to-background
          py-6 sm:py-10
        "
        renderItem={(item) => (
          <a
            href={item.href}
            className="
              group
              flex items-center justify-center
              h-14 w-32
              sm:h-16 sm:w-40
              md:h-20 md:w-48
              rounded-xl
              bg-background/80 backdrop-blur
              border border-border/40
              transition-all duration-300 ease-out
              hover:scale-105
              hover:shadow-lg
            "
          >
            <img
              src={item.src}
              alt={item.alt}
              draggable={false}
              className="
                h-8
                sm:h-10
                md:h-12
                max-w-full
                object-contain
                transition-transform duration-300
                group-hover:scale-105
              "
            />
          </a>
        )}
      />
    </section>
  );
}

export default Logos;
