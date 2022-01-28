import useAxois from '../services/Admin/useAxios'

const useSourceAPI = () => {
    const privateAxois = useAxois();
    
    const getSources = async () => {
        try {
            const res = await privateAxois.get('sources/');
            console.log("getSources");
            return res.data;
        }
        catch (err) {
            console.error(err);
        }
    }

    const getSource = async (sourceId) => {
        try {
            const res = await privateAxois.get('sources/' + sourceId);
            console.log("getSource");
            return res.data;
        }
        catch (err) {
            console.error(err);
        }
    }

    const postSource = async (source) => {
        try {
            const res = await privateAxois.post('sources/', source);
            console.log("postSource");
            return res.data;
        }
        catch (error) {
            console.error(error);
        }
    }

    const putSource = async (sourceId, source) => {
        try {
            const res = await privateAxois.put('sources/' + sourceId, source);
            console.log("putSource");
            return res.data;
        }
        catch (error) {
            console.error(error);
        }
    }

    const deleteSource = async (sourceId) => {
        try {
            const res = await privateAxois.delete('sources/' + sourceId);
            console.log("daleteSource");
            return res.data;
        }
        catch (error) {
            console.error(error);
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