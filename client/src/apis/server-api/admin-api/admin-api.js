const axios = require('axios');

class AdminAPI {
    
    url = process.env.REACT_APP_BE_HOST + 'api/v1/admin/';

    logIn = async (admin) => {
        try {
            const res = await axios.post(this.url + "login", admin);
            return res.data;
        }
        catch (error) {
            console.error(error)
        }
    }

    
    logOut = async (admin) => {
        try {
            const body = {
                refreshToken : JSON.parse(localStorage.getItem("refreshToken")),
            }
            const res = await axios.post(this.url + "logout", body, {
                headers : {
                    authentication : "Bearer " + JSON.parse(localStorage.getItem('accessToken')),
                }
            });
            return res.data;
        }
        catch (err) {
            console.error(err);
        }
    }

    refreshToken = async () => {
        try {
            const res = await axios.post(this.url + "refresh", {
                refreshToken : JSON.parse(localStorage.getItem('refreshToken')),
            });
            return res.data;
        }
        catch (err) {
            console.error(err);
        }
    }

    ressetPassword = async (password) => {
        try {
            const body = {
                password : password.password,
                newPassword : password.newPassword,
                email : JSON.parse(localStorage.getItem('userEmail')),
            }
            const res = await axios.post(this.url + "reset-password", body, {
                headers : {
                    authentication : "Bearer " + JSON.parse(localStorage.getItem('accessToken')),
                }
            });
            return res.data;
        }
        catch (err) {
            console.error(err);
        }
    }

}

export default new AdminAPI();
