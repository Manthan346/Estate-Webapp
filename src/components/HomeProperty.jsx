import React, { useEffect, useState } from 'react'
import {
  Card,
  CardContent,
} from "../components/ui/card";
import heroimg from '../assets/heroimg.png'
import { MapPin } from 'lucide-react';
import { fetchAllProperty } from '../../api';
import { useSearchParams } from 'react-router-dom';

function HomeProperty() {
  console.log("HomeProperty rendered");
   const [properties, setProperties] = useState([]);
  const [searchParams] = useSearchParams();

  const propertyType = searchParams.get("propertyType");

  const fetchProperties = async () => {
  try {
    const params = {};

    if (propertyType) {
      params.propertyType = propertyType;
    }

    const response = await fetchAllProperty(params);

    setProperties(response.data.data.properties);
  } catch (error) {
    console.error("Failed to fetch properties", error);
  }
};

  useEffect(() => {
    console.log("propertyType changed:", propertyType);
    fetchProperties();
  }, [propertyType]);
  return (

    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 -mt-15">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {properties.slice(0, 6).map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group"
          >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={property.heroImage}
                alt={property.project.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {property.project.name}
              </h3>

              <div className="flex items-center text-sm text-gray-600 mb-3">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{property.city.name}</span>
              </div>

              <p className="text-sm text-gray-600 mb-4 line-clamp-1">
                {property.description}
              </p>

              <p className="text-xl font-bold text-gray-900">
                {property.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeProperty