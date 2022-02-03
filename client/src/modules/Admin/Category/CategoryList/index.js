import CategoryItem from "./CategoryItem"
import useCategoryAPI from "../../../../apis/server-api/admin-api/category-api"
import { useEffect, useState, useRef } from "react";

const List = (props) => {
    
    const [categories, setCategories] = useState([]); 
    const [update, setUpdate] = useState(true);
    const mounted = useRef(false);

    const CategoryAPI = useCategoryAPI();

    useEffect(() => {
        mounted.current = true;
        loadData();
        return () => {mounted.current = false};
    },[props, update])

    const loadData = async () => {
        const response = await CategoryAPI.getCategories();

        const afterFiltering = [];
        response.data.map((category, index) => {
            if(category.name.includes(props.query)) {
                afterFiltering.push(category);
            }
        })  
        if(mounted.current) setCategories(afterFiltering);
    }

    const updateFromChild  = () => {
        setUpdate(!update);
    }

    return (
        <div className=" rounded-b-3xl bg-white m-8 mt-0 overflow-y-scroll">
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
                            setFormOriginalData={props.setFormOriginalData}>
                        </CategoryItem>
                    )
                })
            }
        </div>
      
    )

}

export default List;