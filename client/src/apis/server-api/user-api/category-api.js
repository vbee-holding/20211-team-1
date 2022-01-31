import axios from "../../mock-api/customAxios"

export const getAllCategoryAPI = async () => {
    const result = await axios.get("api/v1/categories")
    return result.data;
}

export const getCategoryByIdAPI= async(id)=>{
  const result= await axios.get(`api/v1/categories/${id}`);
  return result.data;
}

export const getCategoryDetailsByIdAPI= async (id) => {
  const result = await axios.get( `api/v1/categories/details/${id}`);
  return result.data;
}