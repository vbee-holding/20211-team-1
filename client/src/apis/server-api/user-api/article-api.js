import axios from "../../mock-api/customAxios"

export const getAllCategoryAPI = async () => {
  const result = await axios.get("api/v1/articles/")
  return result.data;
}

export const getCategoryByIdAPI = async (id) => {

  const result = await axios.get(`api/v1/articles/${id}`);
  return result.data;
}

export const updateArticleByIdAPI = async (id, data) => {
  const result = await axios.put(`api/v1/articles/${id}`, data);
  return result.data;
}

export const searchArticleAPI = async (text) => {
  const result = await axios.get(`api/v1/articles/search?text=${text}`);
  return result.data;
}
