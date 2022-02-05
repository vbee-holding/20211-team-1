import SourceItem from "./SourceItem"
import useSourceAPI from "../../../../apis/server-api/admin-api/source-api"
import loadingGif from "../../../../assets/images/Loading.gif"
import { useEffect, useState, useRef } from "react";

const List = (props) => {
    const [sources, setSources] = useState([]); 
    const [update, setUpdate] = useState(true);
    const [Loading, setLoading] = useState(false);
    const mounted = useRef(false); 

    const SourceAPI = useSourceAPI();

    useEffect(() => {
        mounted.current = true;
        loadData();
        return () => { mounted.current = false; }
    }, [props, update])

    const loadData = async () => {
        setLoading(true);
        const response = await SourceAPI.getSources();

        const afterFiltering = [];

        if(response.status === 200){
            response.data.data.map((source, index) => {
                if(source.name.includes(props.query)) {
                    afterFiltering.push(source);
                }
            })  
        }
        else {
            alert ("Có lỗi máy chủ vui lòng thử lại sau");
        }

        if(afterFiltering.length === 0) {
            alert('Không tìm thấy nguồn báo nào phù hợp');
        }

        if(mounted.current) setSources(afterFiltering);
        setLoading(false);
    }

    const updateFromChild  = () => {
        setUpdate(!update);
    }

    return (
        <div className=" rounded-b-3xl bg-white m-8 mt-0 overflow-y-scroll">
            {
                Loading && (<img src={loadingGif} alt="" className="h-20 absolute right-12 top-56 mt-1"></img>)
            }  
            {
                sources && sources.map((source, index) => {
                    return (
                        <SourceItem 
                            item={source} 
                            key={index}  
                            index={index}
                            setFormState={props.setFormState} 
                            setFormPurpose={props.setFormPurpose}
                            updateFromChild={updateFromChild}
                            setFormOriginalData={props.setFormOriginalData}
                            setLoading={setLoading}>
                        </SourceItem>
                    )
                })
            }   
        </div>
      
    )

}

export default List;