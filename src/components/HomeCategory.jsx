import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "./Title";
import { motion } from "framer-motion";

export default function HomeCategory() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const categories = ["residential", "commercial"];

  const handleCategory = (category) => {
    const params = new URLSearchParams(searchParams);

    if (category === "residential") {
      if (params.get("propertyType") === "RESIDENTIAL") {
        params.delete("propertyType");
      } else {
        params.set("propertyType", "RESIDENTIAL");
      }
    }

    if (category === "commercial") {
      if (params.get("propertyType") === "COMMERCIAL") {
        params.delete("propertyType");
      } else {
        params.set("propertyType", "COMMERCIAL");
      }
    }

    setSearchParams(params);
  };

  return (
    <div className="w-full bg-background py-12 sm:py-16 lg:py-15 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Title Title1={"Top"} Title2={"Residentials"} />
        </motion.div>

        {/* Category Filter */}
        <div className="relative mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2">
            {/* Left Arrow */}
            <motion.button
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-card border border-border hover:bg-accent flex-shrink-0 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-muted-foreground" />
            </motion.button>

            <div className="overflow-x-auto scrollbar-hide flex-1">
              <motion.div
                className="flex items-center gap-2 sm:gap-3 justify-start sm:justify-center min-w-max px-2 sm:px-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.1 },
                  },
                }}
              >
                {categories.map((category) => {
                  const isActive =
                    (category === "residential" &&
                      searchParams.get("propertyType") === "RESIDENTIAL") ||
                    (category === "commercial" &&
                      searchParams.get("propertyType") === "COMMERCIAL");

                  return (
                    <motion.div
                      key={category}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Button
                        onClick={() => handleCategory(category)}
                        variant={isActive ? "default" : "outline"}
                        className={`rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium whitespace-nowrap transition-colors ${
                          isActive
                            ? "bg-foreground text-background"
                            : "bg-card text-foreground border-border hover:bg-accent hover:text-accent-foreground"
                        }`}
                      >
                        {category}
                      </Button>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Right Arrow */}
            <motion.button
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 20 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-card border border-border hover:bg-accent flex-shrink-0 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </motion.button>
          </div>
        </div>

        {/* Property Grid Placeholder */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* You can render your property cards here */}
        </motion.div>
      </div>
    </div>
  );
}
