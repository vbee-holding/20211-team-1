// Dùng để xử lý logic ở đây, nó chỉ bao gồm các hàm 
import {  searchArticleAPI, updateArticleByIdAPI } from "../../apis/server-api/user-api/article-api";
import { getAllCategoryAPI, getCategoryDetailsByIdAPI } from "../../apis/server-api/user-api/category-api";

export async function getAllArticle() {
    try {
        
    } catch (error) {
        console.log(error)
        return null;
    }
}


export async function getCategoryDetailsByID(id) {
    try {
        const articleResult = await getCategoryDetailsByIdAPI(id);
        if (articleResult.success) {
            const articles = articleResult.data.articles; 
            return articles;
        } else {
            console.log("Failed to fetch article");
            return null;
        }

    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function updateArticles(id, data){
    try{
        const articleResult= await updateArticleByIdAPI(id, data);
        if(articleResult.success){
            console.log("Update successful!");
            console.log(articleResult.data)
        }else{
            console.log("Failed to update");
        }
    }catch(error){
        console.log(error);
        return null;
    }
}

export async function getAllCategory(){
    try{
        const category = await getAllCategoryAPI();
        if(category.success==true){
            return category.data;
        }else{
            console.log("Failed to fetch data");
            return null;
        }

    }catch(error){
        console.log(error)
        return null;
    }
}

export async function searchArticle(text){
    try{
        console.log(text)
        const articles= await searchArticleAPI(text);
        if(articles.success==true){
            return articles.data;
        }else{
            console.log("Failed to search");
            return null;
        }
    }catch(error){
        console.log(error);
        return null;
    }
}