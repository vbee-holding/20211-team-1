// Dùng để xử lý logic ở đây, nó chỉ bao gồm các hàm 

import { getArticlesByCategoryIdAPI } from "../../apis/server-api/user-api/article";
import { getSourceByIdAPI } from "../../apis/server-api/user-api/source-api";

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