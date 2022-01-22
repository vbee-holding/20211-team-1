import axios from "axios"
const url = "https://sever-news.herokuapp.com/api/v1/categories/";

export const getAllCategoryAPI = async () => {
    const result = await axios.get(url)
    return result.data;
}

export const getCategoryByIdAPI= async(id)=>{
  const result= await axios.get(url+id);
  return result.data;
}