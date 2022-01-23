import axios from "axios"
const url = "http://localhost:4000/api/v1/user/articles/"

export const getAllArticleAPI = async () => {
  const result = await axios.get(url)
  return result.data;
}

export const getArticlesByCategoryIdAPI = async (id) => {
  const result = await axios.get(url + id);
  console.log(result)
  return result.data;
}