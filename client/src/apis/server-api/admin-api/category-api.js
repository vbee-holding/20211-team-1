import useAxois from '../../../services/Admin/useAxios'

const useCategoryAPI = () => {
    const privateAxois = useAxois();
    
    const getCategories = async () => {
        try {
            const res = await privateAxois.get('categories/admin');
            return res.data;
        }
        catch (err) {
            console.error(err);
        }
    }

    const getCategory = async (categoryId) => {
        try {
            const res = await privateAxois.get('categories/' + categoryId);
            return res.data;
        }
        catch (err) {
            console.error(err);
        }
    }

    const postCategory = async (category) => {
        try {
            const res = await privateAxois.post('categories/', category);
            return res.data;
        }
        catch (error) {
            console.error(error);
        }
    }

    const putCategory = async (categoryId, category) => {
        try {
            const res = await privateAxois.put('categories/' + categoryId, category);
            return res.data;
        }
        catch (error) {
            console.error(error);
        }
    }

    const deleteCategory = async (categoryId) => {
        try {
            const res = await privateAxois.delete('categories/' + categoryId);
            return res.data;
        }
        catch (error) {
            console.error(error);
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