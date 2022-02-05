import useAxois from '../../../services/Admin/useAxios'

const useArticleAPI = () => {
    const privateAxois = useAxois();
    
    const getArticles = async () => {
        try {
            const res = await privateAxois.get('articles/');
            return res.data;
        }
        catch (err) {
            console.error(err);
            return err.response;
        }
    }

    const getArticle = async (articleId) => {
        try {
            const res = await privateAxois.get('articles/' + articleId);
            return res.data;
        }
        catch (err) {
            console.error(err);
        }
    }

    const postArticle = async (article) => {
        try {
            const res = await privateAxois.post('articles/', article);
            return res.data;
        }
        catch (error) {
            console.error(error);
        }
    }

    const putArticle = async (articleId, article) => {
        try {
            const res = await privateAxois.put('articles/' + articleId, article);
            return res;
        }
        catch (error) {
            console.error(error);
            return error.response;
        }
    }

    const deleteArticle = async (articleId) => {
        try {
            const res = await privateAxois.delete('articles/' + articleId);
            return res;
        }
        catch (error) {
            console.error(error);
            return error.response;
        }
    }

    
    const hideData = async () => {
        try {
            const res = await privateAxois.get('articles/hide');
            return res;
        }
        catch (err) {
            console.error(err);
            return err.response;
        }
    }

    return {
        getArticles : getArticles,
        getArticle : getArticle,
        postArticle : postArticle,
        putArticle : putArticle,
        deleteArticle : deleteArticle,
        hideData : hideData,
    }
}

export default useArticleAPI;