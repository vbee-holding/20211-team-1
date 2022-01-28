import CategoryItem from "./CategoryItem"
import useCategoryAPI from "../../../../apis/server-api/admin-api/category-api"
import { useEffect, useState, useRef } from "react";

const List = () => {
    
    const [categories, setCategories] = useState([]); 
    const mounted = useRef(false);

    const CategoryAPI = useCategoryAPI();

    useEffect(() => {
        mounted.current = true;
        loadData();
        return () => {mounted.current = false};
    },[])

    const loadData = async () => {
        const response = await CategoryAPI.getCategories();
        if(mounted.current) setCategories(response.data);
    }

    return (
        <div className=" rounded-b-3xl bg-white m-8 mt-0 overflow-y-scroll">
           {
                categories.map((category, index) => {
                    return (
                        <CategoryItem item={category} index={index} key={index}></CategoryItem>
                    )
                })
            }
        </div>
      
    )

}

export default List;