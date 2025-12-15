import React, { useState } from 'react';
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import Title from './Title';



export default function LandingLists() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchParams, setSearchParams] = useSearchParams();
  const categories = [
    "residential",
    "commercial"
  ]
  const navigate = useNavigate()
  const handleCategory = (category) => {
    const params = new URLSearchParams(searchParams); // copy current params

    if (category === "residential") {
      if (params.get("propertyType") === "RESIDENTIAL") {
        // already selected, remove
        params.delete("propertyType");
      } else {
        params.set("propertyType", "RESIDENTIAL");
      }
    }

    if (category === "commercial") {
      if (params.get("propertyType") === "COMMERCIAL") {
        // already selected, remove
        params.delete("propertyType");
      } else {
        params.set("propertyType", "COMMERCIAL");
      }
    }

    setSearchParams(params);
  };


  return (
    <div className="w-full bg-background py-12 sm:py-16 lg:py-15 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <Title Title1={"Top Residentials"} />
   

        {/* Category Filter */}
        <div className="relative mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2">
            {/* Left Arrow */}
            <button className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-card border border-border hover:bg-accent flex-shrink-0 transition-colors">
              <ChevronLeft className="w-5 h-5 text-muted-foreground" />
            </button>


            <div className="overflow-x-auto scrollbar-hide flex-1">
              <div className="flex items-center gap-2 sm:gap-3 justify-start sm:justify-center min-w-max px-2 sm:px-0">
                {categories.map((category) => {
                  // determine if this category is active based on URL param
                  const isActive =
                    (category === "residential" && searchParams.get("propertyType") === "RESIDENTIAL") ||
                    (category === "commercial" && searchParams.get("propertyType") === "COMMERCIAL");

                  return (
                    <Button
                      key={category}
                      onClick={() => handleCategory(category)}
                      variant={isActive ? "default" : "outline"}
                      className={`rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium whitespace-nowrap transition-colors ${isActive
                          ? "bg-foreground text-background"
                          : "bg-card text-foreground border-border hover:bg-accent hover:text-accent-foreground"
                        }`}
                    >
                      {category}
                    </Button>
                  );
                })}
              </div>
            </div>


            {/* Right Arrow */}
            <button className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-card border border-border hover:bg-accent flex-shrink-0 transition-colors">
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Property Grid */}


        {/* View All Button */}
      </div>
    </div>

  )
}