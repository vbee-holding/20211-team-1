import axios from "axios"
const url = "http://localhost:4000/api/v1/articles/";

export const getAllCategoryAPI = async () => {
    const result = await axios.get(url)
    return result.data;
}

export const getCategoryByIdAPI= async(id)=>{
  const result= await axios.get(url+id);
  return result.data;
}

export const updateArticleByIdAPI= async(id,data)=>{
    const result = await axios.put(url+id, data);
    console.log(id)
    return result.data;
}