const Article = require('./models/Article');

class ArticleRouter   {
    async getArticles(req, res, next) {
        try{
            const article =  await Article.find();
            res.json({
                success : true,
                data : article,
            });
            
        }
        catch (err) {
            res.json({
                success: false,
                error : err,
            });
        }
    }

    async getArticle(req, res, next) {
        const { articleId } = req.params;
        try{
            const article = await Article.findById( articleId );
            res.json({
                success : true,
                data : article,
            });
        }
        catch (err) {
            res.status(400).json({
                success: false,
                error : err,
            });
        }
        
    }

    async postArticle (req, res, next) {
        const article = req.body;
        try {
            await Article.create(article);
            res.json({
                success : true,
                data : article,
            })
        }
        catch (err) {
            res.status(400).json({
                success: false,
                error : err,
            })
            console.log(err);
        }

    }

    async putArticle (req, res, next) {
        const updatedFields = req.body;
        const { articleId } = req.params;
        try {
            const updatedArticle = await Article.findByIdAndUpdate( articleId , updatedFields, { new: true });
            res.json({
                success : true,
                data : updatedArticle,
            })
        }
        catch (err) {
            res.status(400).json({
                success: false,
                error : err,
            })
        }

    }


    async deleteArticle (req, res, next) {
        const { articleId } = req.params;
        try {
            await Article.findByIdAndDelete( articleId );
            res.json({
                success : true,
                message : 'Delete successfully'
            })
        }
        catch (err) {
            res.status(400).json({
                success: false,
                error : err,
            });
        }
    }



}

module.exports = new ArticleRouter();

