  import axios from 'axios'

  const API = axios.create({
    baseURL: "https://magic-bricks-p6yv.onrender.com/v1/api/"
  })

  export const fetchAllCity = () => {
    return API.get("property/fetch-all-city")
  }

  export const fetchAllProject = () => {
    return API.get("property/fetch-all-project")
  }

  export const fetchAllProperty = (params = {}) => {
    return API.get("property", { params });
  };
  export const fetchProperties = ({ cityId, projectId, propertyType }) => {
    const params = {};

    if (cityId) params.cityId = cityId;
    if (projectId) params.projectId = projectId;
    if (propertyType) params.propertyType = propertyType;

    return API.get("property", { params }); // axios automatically builds query string
  };

  export const fetchPropertyDetail = (id) => {
  return API.get("property/details", {
    params: { id }
  })
}

  export const UserDetails = (data) => {
    API.post("/contact", data)

  }