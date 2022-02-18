const axios  = require("axios");



const hideArticle = async () => {
    axios.get(process.env.HOST+"api/v1/articles/hide")
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