// Dùng để xử lý logic ở đây, nó chỉ bao gồm các hàm 

import { getArticleByIdAPI } from "../../apis/server-api/user-api/article";
import { getSourceByIdAPI } from "../../apis/server-api/user-api/source-api";

export async function getAllArticle() {
    try {
        
    } catch (error) {
        console.log(error)
        return null;
    }
}


export async function getArticleById(id) {
    try {
        const articleResult = await getArticleByIdAPI(id);
        if (articleResult.success) {
            const article = articleResult.data;
            const sourceResult = await getSourceByIdAPI(article.sourceId);
            if(sourceResult.success){
                const source = sourceResult.data;
                return {
                    thumbnail: article.thumbnail,
                    link: article.link,
                    title: article.title,
                    timeShift: article.releaseTime,
                    logoSource: source.logo,
                }
            }else{
                console.log("Failed to fetch source");
                return null;
            }
            
        } else {
            console.log("Failed to fetch article");
            return null;
        }

    } catch (error) {
        console.log(error);
        return null;
    }
}