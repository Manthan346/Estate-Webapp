import React, { useState, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { fetchProperties } from "../../api";
import { MapPin } from "lucide-react";
import heroimg from "../assets/heroimg.png";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import { Skeleton } from "../components/ui/skeleton";
import { Button } from "../components/ui/button";

function PropertyListing() {
  const [searchParams] = useSearchParams();
  const [properties, setProperties] = useState([]);
  
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
 



  const cityId = searchParams.get("cityId");
  const projectId = searchParams.get("projectId");
  const propertyType = searchParams.get("propertyType");

  const loadProperties = async () => {
    try {
      setLoading(true);
      const response = await fetchProperties({
        cityId,
        projectId,
        propertyType,
      });
      setProperties(response.data.data.properties || []);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProperties();
  }, [cityId, projectId, propertyType]);

  useEffect(() => {
    if (location.search) {
      navigate(location.pathname, { replace: true });
    }
  }, []);
   if (!loading && properties.length === 0) {
  return (
    <div className="w-full py-24 flex items-center justify-center">
      <div className="text-center max-w-md px-6">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
          <MapPin className="h-8 w-8 text-muted-foreground" />
        </div>

        <h2 className="text-2xl font-semibold text-foreground mb-2">
          No Properties Found
        </h2>

        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
          We couldn’t find any properties matching your search criteria.
          Try adjusting your filters or explore other locations.
        </p>

        <Button
          onClick={() => navigate("/property")}
          className="rounded-full bg-chart-3 px-6 py-2.5 text-sm font-medium text-background hover:bg-chart-2"
        >
          View All Properties
        </Button>
      </div>
    </div>
  );
}

  return (
    <div>
      {/* Hero Section */}
      <div className="w-full">
        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
          <motion.img
            src={heroimg}
            alt="Hero"
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }} // ⚡ triggers every scroll
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" />

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

        {/* Search Bar Animation (keep as-is) */}
        <motion.div
          initial={{ opacity: 1, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.0 }}
          viewport={{ once: false, amount: 0.3 }}
          className="-mt-40"
        >
          <SearchBar />
        </motion.div>
      </div>

      {/* Properties Section */}
      <div className="max-w-8xl mt-50 mx-auto px-4 sm:px-6 lg:px-8">
        <Title Title1={"All"} Title2={"Residentials"} />

        {/* Property Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
          {loading
            ? Array.from({ length: 20 }).map((_, index) => (
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
            : properties.map((property, index) => (
              <motion.div
                key={property.id}
                onClick={() => navigate(`/details?id=${property.id}`)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="group relative bg-background rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <motion.img
                    src={property.heroImage}
                    alt={property.project?.name}
                    className="w-full h-full object-cover transition-transform duration-700"
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
                    <span className="text-sm font-medium">{property.city?.name}</span>
                  </div>

                  <p className="text-sm text-foreground mb-2 line-clamp-2">
                    {property.propertyType}
                  </p>

                  <div className="flex items-center justify-between pt-4">
                    <div>
                      <p className="text-xs text-foreground mb-1">Starting from</p>
                      <p className="text-2xl font-bold text-chart-3">₹{property.price}</p>
                    </div>

                    <button className="px-6 py-2.5 bg-gradient-to-r from-chart-3 to-chart-4 text-background font-semibold rounded-xl">
                      View
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default PropertyListing;
