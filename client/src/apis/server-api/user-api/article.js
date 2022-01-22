import axios from "axios"
const url = "https://sever-news.herokuapp.com/api/v1/articles/";

export const getAllArticleAPI = async () => {
    const result = await axios.get(url)
    return result.data;
}

export const getArticleByIdAPI= async(id)=>{
  const result= await axios.get(url+id);
  console.log(result)
  return result.data;
}