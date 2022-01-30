const axios  = require("axios");



const hideArticle = async () => {
    axios.get("http://localhost:4000/api/v1/articles/hide")
        .then((result) => {
            console.log(result)
            if (result.data.success == true) {
                console.log(result.data)
            } else {
                console.log(result.data)
            }
        })
        .catch(error => {
            console.log(error)
        }
    )
}

hideArticle();