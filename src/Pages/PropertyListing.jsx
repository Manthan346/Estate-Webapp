import React, { useState, useEffect } from 'react'
import { useSearchParams, useLocation } from "react-router-dom";

import { fetchProperties } from '../../api';
import { MapPin } from 'lucide-react';
import heroimg from '../assets/heroimg.png'
import SearchBar from '../components/SearchBar';
import { useNavigate } from 'react-router-dom';
import Title from '../components/Title';
import { Skeleton } from '../components/ui/skeleton';



function PropertyListing() {
  const [searchParams] = useSearchParams();
  const [properties, setProperties] = useState([])
  const navigate = useNavigate()
  const location = useLocation();
  const [loading, setLoading] = useState(false)


  const cityId = searchParams.get("cityId");
  const projectId = searchParams.get("projectId");
  const propertyType = searchParams.get("propertyType");
  
    
       const loadProperties = async () => {
        try {
        setLoading(true)
      const response = await fetchProperties({
        cityId,
        projectId,
        propertyType,
      });

      setProperties(response.data.data.properties || []);
    }
      
    catch (error) {
      console.log(error.message)
      
    } finally{
      setLoading(false)
    }
  }
   useEffect(() => {

    loadProperties();
  }, [cityId, projectId, propertyType]);
  useEffect(() => {
    if (location.search) {
      navigate(location.pathname, { replace: true });
    }
  }, []);

  return (
    <div>
      <div className="w-full">
        {/* Hero Image */}
        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]  overflow-hidden">
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

        <div className='-mt-40'>
          <SearchBar />
        </div>


        {/* Spacer */}


      </div>

      <div className="max-w-8xl mt-50 mx-auto px-4 sm:px-6 lg:px-8 ">
        <Title Title1={"All"} Title2={"Residentials"} />
        {/* Section Header */}



        {/* Property Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 " >
           {loading ? (
  Array.from({ length: 20 }).map((_, index) => (
    <div
      key={index}
      className="bg-background rounded-3xl overflow-hidden shadow-lg"
    >
      {/* Image Skeleton */}
      <Skeleton className="w-full h-72 rounded-none" />

      {/* Content Skeleton */}
      <div className="p-6 space-y-4">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-2/3" />

        <div className="flex items-center justify-between pt-4">
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-10 w-24 rounded-xl" />
        </div>
      </div>
    </div>
  ))
) : (
  properties.slice(0, 8).map((property) => (
    <div
      key={property.id}
      onClick={() => navigate(`/details?id=${property.id}`)}
      className="group relative bg-background rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={property.heroImage}
          alt={property.project?.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-3">
          {property.project?.name}
        </h3>

        <div className="flex items-center text-foreground mb-4">
          <MapPin className="w-4 h-4 mr-2 text-chart-3" />
          <span className="text-sm font-medium">
            {property.city?.name}
          </span>
        </div>

        <p className="text-sm text-foreground mb-2 line-clamp-2">
          {property.propertyType}
        </p>

        <div className="flex items-center justify-between pt-4">
          <div>
            <p className="text-xs text-foreground mb-1">Starting from</p>
            <p className="text-2xl font-bold text-chart-3">
              ₹{property.price}
            </p>
          </div>

          <button className="px-6 py-2.5 bg-gradient-to-r from-chart-3 to-chart-4 text-background font-semibold rounded-xl">
            View
          </button>
        </div>
      </div>
    </div>
  ))
)}
        </div>

        {/* View All Button */}

      </div>

    </div>
  )
}

export default PropertyListing