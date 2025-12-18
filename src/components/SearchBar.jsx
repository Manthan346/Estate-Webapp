
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

function SearchBar() {
    const [allProjects, setAllProjects] = useState([]);
  const [allCity, setAllCity] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedProject, setSelectedProject] = useState("");

  const navigate = useNavigate()

  // Fetch projects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetchAllProject();
        setAllProjects(response?.data?.data?.project || []);
      } catch (error) {
        console.error("Failed to fetch projects", error);
      }
    };
    fetchProjects();
  }, []);

  // Fetch cities
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetchAllCity();
        setAllCity(response?.data?.data?.city || []);
      } catch (error) {
        console.error("Failed to fetch cities", error);
      }
    };
    fetchCities();
  }, []);
  console.log(selectedCity, selectedProject, selectedType)
  const handleSearch = () => {
    const params = new URLSearchParams();

    if (selectedCity) params.append("cityId", selectedCity);
    if (selectedProject) params.append("projectId", selectedProject);
    if (selectedType) params.append("propertyType", selectedType);

    navigate(`/property?${params.toString()}`);
  };
  return (
    <div> <div className="relative -mt-25 sm:-mt-10 z-50 px-4">
        <div className="bg-background  shadow-lg rounded-3xl  md:rounded-full max-w-4xl mx-auto flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-border">

          {/* Location */}
          <div className="flex items-center gap-2 px-5 py-4 flex-1 min-w-0">
            <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger className="bg-transparent border-none shadow-none px-0 h-auto text-sm min-w-0">
                <SelectValue placeholder="Select Location" />
              </SelectTrigger>
              <SelectContent position="popper" className="w-full">
                {allCity.length > 0 ? (
                  allCity.map((item, index) => (
                    <SelectItem key={index} value={item.id}>
                      {item.name}
                    </SelectItem>
                  ))
                ) : (
                  <SelectItem value="none" disabled>
                    No cities found
                  </SelectItem>
                )}
              </SelectContent>
            </Select>
          </div>

          {/* Buy / Rent */}
          <div className="flex items-center gap-2 px-5 py-4 flex-1 min-w-0">
            <Building2 className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="bg-transparent border-none shadow-none px-0 h-auto text-sm min-w-0">
                <SelectValue placeholder="Select Property Type" />
              </SelectTrigger>
              <SelectContent position="popper" className="w-full">
                <SelectItem value="RESIDENTIAL">Residential</SelectItem>
                <SelectItem value="COMMERCIAL">Commercial</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Project */}
          <div className="flex items-center gap-2 px-5 py-4 flex-1 max-w-2xl">
            <Home className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <Select value={selectedProject} onValueChange={setSelectedProject}>
              <SelectTrigger className="bg-transparent border-none shadow-none px-0 h-auto text-sm min-w-0">
                <SelectValue placeholder="Select Project" />
              </SelectTrigger>
              <SelectContent position="popper" className="w-full">
                {allProjects.length > 0 ? (
                  allProjects.map((item, index) => (
                    <SelectItem key={index} value={item.id}>
                      {item.name}
                    </SelectItem>
                  ))
                ) : (
                  <SelectItem value="none" disabled>
                    No projects found
                  </SelectItem>
                )}
              </SelectContent>
            </Select>
          </div>

          {/* Button */}
          <div className="flex items-center justify-center px-4 py-4 md:px-5 flex-shrink-0">
            <Button
              onClick={handleSearch}
              className="rounded-full hover:bg-chart-4 px-6 py-3 w-full sm:w-auto h-full bg-chart-3 flex items-center justify-center"
            >
              <Search className="w-4 h-4 mr-2" />
              Find Property
            </Button>
          </div>

        </div>
      </div></div>
  )
}

export default SearchBar