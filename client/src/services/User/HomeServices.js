// Dùng để xử lý logic ở đây, nó chỉ bao gồm các hàm 

import { getArticlesByCategoryIdAPI } from "../../apis/server-api/user-api/user-article-api";
import { getSourceByIdAPI } from "../../apis/server-api/user-api/source-api";
import { updateArticleByIdAPI } from "../../apis/server-api/user-api/article-api";

export async function getAllArticle() {
    try {
        
    } catch (error) {
        console.log(error)
        return null;
    }
}


export async function getArticlesByCategoryId(id) {
    try {
        const articleResult = await getArticlesByCategoryIdAPI(id);
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