import React from "react";
import { motion } from "framer-motion"; // ✅ use framer-motion
import heroimg from "../assets/heroimg.png";
import SearchBar from "./SearchBar";

export default function HeroSection() {
  return (
    <div className="w-full">
      {/* Hero Image */}
      <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
        {/* Background Image */}
        <motion.img
          src={heroimg}
          alt="Hero"
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }} // ⚡ triggers every scroll
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.35 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="absolute inset-0 "
        />

        {/* Hero Text */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 text-center w-full px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-background mb-2"
          >
            <span className="text-2xl sm:text-3xl md:text-4xl font-light italic">
              Buy. Sell. Rent.
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-background text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Real Estate Done Right
          </motion.h2>
        </div>
      </div>

      {/* Search Bar Animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <SearchBar />
      </motion.div>

      {/* Spacer */}
      <div className="h-24 md:h-16" />
    </div>
  );
}
