import axios from "axios"
import jwt_decode from "jwt-decode"
import AuthContext from "./AuthContext";
import { useContext, useState } from "react";
import AdminAPI from "../../apis/server-api/admin-api/admin-api"

const baseURL = process.env.REACT_APP_BE_HOST + 'api/v1/';
    
const useAxios= () => {

    const { accessToken, setToken} = useContext(AuthContext);  

    const PrivateAxios = axios.create({
        baseURL,
        headers : {authentication : "Bearer " + accessToken},
    });

    PrivateAxios.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if(config.headers.authentication){
            const decodedToken = jwt_decode(config.headers.authentication.split(" ")[1]);
            if(decodedToken.exp *1000 < currentDate.getTime()) {
                const res = await AdminAPI.refreshToken();
                setToken(res.data.accessToken, res.data.refreshToken);
                config.headers.authentication = `Bearer ${res.data.accessToken}`;

            }
        }
        
        return config;
    })

    return PrivateAxios;

}

export default useAxios;
