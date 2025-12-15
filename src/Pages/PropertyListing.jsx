import React, { useState,useEffect } from 'react'
import { useSearchParams } from "react-router-dom";
import { fetchProperties } from '../../api';


function PropertyListing() {
    const [searchParams] = useSearchParams();
    const [properties, setProperties]= useState([])

    const cityId = searchParams.get("cityId");
    const projectId = searchParams.get("projectId");
    const propertyType = searchParams.get("propertyType");
    useEffect(() => {
        const loadProperties = async () => {
            const response = await fetchProperties({
                cityId,
                projectId,
                propertyType,
            });

            setProperties(response.data.data.properties || []);
        };

        loadProperties();
    }, [cityId, projectId, propertyType]);

    return (
        <div>
            {properties.map((property) => (
                <div key={property.id}>
                    <h3>{property.project.name}</h3>
                    <p>{property.city.name}</p>
                    <p>{property.price}</p>
                </div>
            ))}

        </div>
    )
}

export default PropertyListing