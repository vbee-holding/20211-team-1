import CategoryItem from "./CategoryItem"
import useCategoryAPI from "../../../../apis/server-api/admin-api/category-api"
import loadingGif from "../../../../assets/images/Loading.gif"
import { useEffect, useState, useRef } from "react";

const List = (props) => {
    
    const [categories, setCategories] = useState([]); 
    const [update, setUpdate] = useState(true);
    const [Loading, setLoading] = useState(false);
    const mounted = useRef(false);

    const CategoryAPI = useCategoryAPI();

    useEffect(() => {
        mounted.current = true;
        loadData();
        return () => {mounted.current = false};
    },[props, update])

    const loadData = async () => {
        setLoading(true);
        const response = await CategoryAPI.getCategories();

        const afterFiltering = [];
        if(response && response.data) {
            response.data.map((category, index) => {
                if(category.name.includes(props.query)) {
                    afterFiltering.push(category);
                }
            })  
        }

        if(afterFiltering.length === 0) {
            alert('Không tìm thấy chủ đề nào phù hợp');
        }

        if(mounted.current) setCategories(afterFiltering);
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
                categories && categories.map((category, index) => {
                    return (
                        <CategoryItem 
                            item={category} 
                            index={index} 
                            key={index}
                            setFormState={props.setFormState} 
                            setFormPurpose={props.setFormPurpose}
                            updateFromChild={updateFromChild}
                            setFormOriginalData={props.setFormOriginalData}
                            setLoading={setLoading}>
                        </CategoryItem>
                    )
                })
            }
        </div>
      
    )

}

export default List;