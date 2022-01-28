import SourceItem from "./SourceItem"
import useSourceAPI from "../../../../apis/server-api/admin-api/source-api"
import { useEffect, useState, useRef } from "react";

const List = (props) => {
    const [sources, setSources] = useState([]); 
    const mounted = useRef(false); 

    const SourceAPI = useSourceAPI();

    useEffect(() => {
        mounted.current = true;
        loadData();
        return () => { mounted.current = false; }
    }, [props])

    const loadData = async () => {
        const response = await SourceAPI.getSources();
        if(mounted.current) setSources(response.data);
    }

    return (
        <div className=" rounded-b-3xl bg-white m-8 mt-0 overflow-y-scroll">
           {
                sources.map((source, index) => {
                    return (
                        <SourceItem 
                            item={source} 
                            key={index}  
                            setFormState={props.setFormState} 
                            setFormOriginalData={props.setFormOriginalData}>
                        </SourceItem>
                    )
                })
            }   
        </div>
      
    )

}

export default List;