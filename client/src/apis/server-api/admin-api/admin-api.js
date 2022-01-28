const axios = require('axios');

class AdminAPI {
    
    url = 'http://localhost:4000/api/v1/admin/';

    logIn = async (admin) => {
        try {
            const res = await axios.post(this.url + "login", admin);
            console.log("Login");
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
            console.log("Logout");
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
            console.log("refreshToken");
            return res.data;
        }
        catch (err) {
            console.error(err);
        }
    }

    ressetPassword = async (adminId, admin) => {
        try {
            const res = await axios.put(this.url + adminId, admin);
            return res.data;
        }
        catch (error) {
            console.error(error)
        }
    }

}

export default new AdminAPI();
