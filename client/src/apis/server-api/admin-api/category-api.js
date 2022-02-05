import useAxois from '../../../services/Admin/useAxios'

const useCategoryAPI = () => {
    const privateAxois = useAxois();
    
    const getCategories = async () => {
        try {
            const res = await privateAxois.get('categories/admin');
            return res;
        }
        catch (err) {
            console.error(err);
            return err.response;
        }
    }

    const getCategory = async (categoryId) => {
        try {
            const res = await privateAxois.get('categories/' + categoryId);
            return res;
        }
        catch (err) {
            console.error(err);
            return err.response;
        }
    }

    const postCategory = async (category) => {
        try {
            const res = await privateAxois.post('categories/', category);
            return res;
        }
        catch (error) {
            console.error(error);
            return error.response;
        }
    }

    const putCategory = async (categoryId, category) => {
        try {
            const res = await privateAxois.put('categories/' + categoryId, category);
            return res;
        }
        catch (error) {
            console.error(error);
            return error.response;
        }
    }

    const deleteCategory = async (categoryId) => {
        try {
            const res = await privateAxois.delete('categories/' + categoryId);
            return res;
        }
        catch (error) {
            console.error(error);
            return error.response;
        }
    }

    return {
        getCategories : getCategories,
        getCategory : getCategory,
        postCategory : postCategory,
        putCategory : putCategory,
        deleteCategory : deleteCategory,
    }
}

export default useCategoryAPI;