import React, { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import { fetchAllProperty } from "../../api";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Skeleton } from "./ui/skeleton";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

function HomeProperty() {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const propertyType = searchParams.get("propertyType");
  const [loading, setLoading] = useState(false);

  const fetchProperties = async () => {
    try {
      setLoading(true);
      const params = {};
      if (propertyType) params.propertyType = propertyType;

      const response = await fetchAllProperty(params);
      setProperties(response.data.data.properties);
    } catch (error) {
      console.error("Failed to fetch properties", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, [propertyType]);

  useEffect(() => {
    if (location.search) {
      navigate(location.pathname, { replace: true });
    }
  }, []);

  return (
    <div className="max-w-8xl mx-auto px-4 -mt-20 sm:px-6 lg:px-8 py-12">
      {/* Property Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="bg-background rounded-3xl overflow-hidden shadow-lg"
              >
                <Skeleton className="w-full h-72 rounded-none" />
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
          : properties.slice(0, 8).map((property) => (
              <motion.div
                key={property.id}
                onClick={() => navigate(`/details?id=${property.id}`)}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
                whileHover={{ scale: 1.03 }}
                className="group relative bg-background rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <motion.img
                    src={property.heroImage}
                    alt={property.project?.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    whileHover={{ scale: 1.1 }}
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
                    <span className="text-sm font-medium">{property.city?.name.charAt(0).toUpperCase() + property.city?.name.slice(1)}</span>
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

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2.5 bg-gradient-to-r from-chart-3 to-chart-4 text-background font-semibold rounded-full"
                    >
                      View
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
      </div>

      {/* View All Button */}
      <motion.div
        className="mt-12 text-center"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.Button
          onClick={() => navigate("/property")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-chart-3 text-background font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          View All Properties
        </motion.Button>
      </motion.div>
    </div>
  );
}

export default HomeProperty;
