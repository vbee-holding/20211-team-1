import SourceItem from "./SourceItem"
import useSourceAPI from "../../../../apis/server-api/admin-api/source-api"
import { useEffect, useState, useRef } from "react";

const List = (props) => {
    const [sources, setSources] = useState([]); 
    const [update, setUpdate] = useState(true);
    const mounted = useRef(false); 

    const SourceAPI = useSourceAPI();

    useEffect(() => {
        mounted.current = true;
        loadData();
        return () => { mounted.current = false; }
    }, [props, update])

    const loadData = async () => {
        const response = await SourceAPI.getSources();

        const afterFiltering = [];
        response.data.map((source, index) => {
            if(source.name.includes(props.query)) {
                afterFiltering.push(source);
            }
        })  
        if(mounted.current) setSources(afterFiltering);
    }

    const updateFromChild  = () => {
        setUpdate(!update);
    }

    return (
        <div className=" rounded-b-3xl bg-white m-8 mt-0 overflow-y-scroll">
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
                            setFormOriginalData={props.setFormOriginalData}>
                        </SourceItem>
                    )
                })
            }   
        </div>
      
    )

}

export default List;