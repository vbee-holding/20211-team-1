import axios  from "../../mock-api/customAxios"; 
export const getAllSourceAPI = async () => {
    const result = await axios.get("api/v1/sources/")
    return result.data;
}

export const getSourceByIdAPI= async(id)=>{
  const result= await axios.get(`api/v1/sources/${id}`);
  return result.data;
}