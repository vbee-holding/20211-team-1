const axios = require('axios');

class AdminAPI {
    
    url = process.env.REACT_APP_BE_HOST + 'api/v1/admin/';

    logIn = async (admin) => {
        try {
            const res = await axios.post(this.url + "login", admin);
            return res;
        }
        catch (error) {
            console.error(error)
            return error.response;
        }
    }

    
    logOut = async (admin) => {
        try {
            const body = {
                refreshToken : JSON.parse(localStorage.getItem("refreshToken")),
            }
            const res = await axios.post(this.url + "logout", body);
            return res;
        }
        catch (err) {
            console.error(err);
            return err.response;
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
                email : JSON.parse(localStorage.getItem('Email')),
            }
            const res = await axios.post(this.url + "reset-password", body, {
                headers : {
                    authentication : "Bearer " + JSON.parse(localStorage.getItem('accessToken')),
                }
            });
            return res;
        }
        catch (err) {
            console.error(err);
            return err.response;
        }
    }

    crawlData = async () => {
        try {
            const res = await axios.get(this.url + "crawl");
            return res.data;
        }
        catch (err) {
            console.error(err);
        }
    }


}

export default new AdminAPI();
