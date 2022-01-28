import { createContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(()=> localStorage.getItem('accessToken') ? JSON.parse(localStorage.getItem('accessToken')) : null);
    const [refreshToken, setRefreshToken] = useState(()=> localStorage.getItem('refreshToken') ? JSON.parse(localStorage.getItem('refreshToken')) : null);
    const [isLogIn, setIsLogIn] = useState(false);

    const logIn = (res) => {
        localStorage.setItem('accessToken', JSON.stringify(res.data.accessToken));
        localStorage.setItem('refreshToken', JSON.stringify(res.data.refreshToken));
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        setIsLogIn(true);
    }   

    const logOut = () => {
        setAccessToken(null);
        setRefreshToken(null);
        localStorage.clear();
        setIsLogIn(false);
    } 

    const setToken = (newAccessToken, newRefreshToken) => {
        setRefreshToken(newRefreshToken);
        setAccessToken(newAccessToken);
        localStorage.clear();
        localStorage.setItem('accessToken', JSON.stringify(newAccessToken));
        localStorage.setItem('refreshToken', JSON.stringify(newRefreshToken));
    }

    const contextData = {
        accessToken : accessToken,
        setToken : setToken,
        refreshToken : refreshToken,
        isLogIn : isLogIn,
        logIn : logIn,
        logOut : logOut,
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )


}