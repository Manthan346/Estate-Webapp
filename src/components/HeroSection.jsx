import React, { useEffect, useState } from "react";
import { Home, MapPin, Building2, Search } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import heroimg from "../assets/heroimg.png";
import { fetchAllProject, fetchAllCity, fetchProperties } from "../../api";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function HeroSection() {
  


  return (
    <div className="w-full">
      {/* Hero Image */}
      <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
        <img src={heroimg} alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-200/40 to-transparent" />

        {/* Hero Text */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 text-center w-full px-4">
          <h1 className="text-background mb-2">
            <span className="text-2xl sm:text-3xl md:text-4xl font-light italic">
              Buy. Sell. Rent.
            </span>
          </h1>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Real Estate Done Right
          </h2>
        </div>
      </div>

      {/* Search Bar */}
      <SearchBar />
     

      {/* Spacer */}
      <div className="h-24 md:h-16" />
    </div>
  );
}
