import useAxois from '../services/Admin/useAxios'

const useArticleAPI = () => {
    const privateAxois = useAxois();
    
    const getArticles = async () => {
        try {
            const res = await privateAxois.get('articles/');
            console.log("getArticles");
            return res.data;
        }
        catch (err) {
            console.error(err);
        }
    }

    const getArticle = async (articleId) => {
        try {
            const res = await privateAxois.get('articles/' + articleId);
            console.log("getArticle");
            return res.data;
        }
        catch (err) {
            console.error(err);
        }
    }

    const postArticle = async (article) => {
        try {
            const res = await privateAxois.post('articles/', article);
            console.log("postArticle");
            return res.data;
        }
        catch (error) {
            console.error(error);
        }
    }

    const putArticle = async (articleId, article) => {
        try {
            const res = await privateAxois.put('articles/' + articleId, article);
            console.log("putArticle");
            return res.data;
        }
        catch (error) {
            console.error(error);
        }
    }

    const deleteArticle = async (articleId) => {
        try {
            const res = await privateAxois.delete('articles/' + articleId);
            console.log("deleteArticle");
            return res.data;
        }
        catch (error) {
            console.error(error);
        }
    }

    return {
        getArticles : getArticles,
        getArticle : getArticle,
        postArticle : postArticle,
        putArticle : putArticle,
        deleteArticle : deleteArticle,
    }
}

export default useArticleAPI;