import axios from "axios"
const url = "https://sever-news.herokuapp.com/api/v1/sources/";

export const getAllSourceAPI = async () => {
    const result = await axios.get(url)
    return result.data;
}

export const getSourceByIdAPI= async(id)=>{
  const result= await axios.get(url+id);
  return result.data;
}