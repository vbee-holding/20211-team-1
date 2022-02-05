import useAxois from '../../../services/Admin/useAxios'

const useSourceAPI = () => {
    const privateAxois = useAxois();
    
    const getSources = async () => {
        try {
            const res = await privateAxois.get('sources/');
            return res;
        }
        catch (err) {
            console.error(err);
            return err.response;
        }
    }

    const getSource = async (sourceId) => {
        try {
            const res = await privateAxois.get('sources/' + sourceId);
            return res;
        }
        catch (err) {
            console.error(err);
            return err.response;
        }
    }

    const postSource = async (source) => {
        try {
            const res = await privateAxois.post('sources/', source);
            return res;
        }
        catch (error) {
            console.error(error);
            return error.response;
        }
    }

    const putSource = async (sourceId, source) => {
        try {
            const res = await privateAxois.put('sources/' + sourceId, source);
            return res;
        }
        catch (error) {
            console.error(error);
            return error.response;
        }
    }

    const deleteSource = async (sourceId) => {
        try {
            const res = await privateAxois.delete('sources/' + sourceId);
            return res;
        }
        catch (error) {
            console.error(error);
            return error.response;
        }
    }

    return {
        getSources : getSources,
        getSource : getSource,
        postSource : postSource,
        putSource : putSource,
        deleteSource : deleteSource,
    }
}

export default useSourceAPI;