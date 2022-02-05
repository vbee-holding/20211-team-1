const Source = require('../models/Source');
const Article = require('../models/Article')

class SourceRouter   {
    async getSources(req, res, next) {
        try{
            const sources = await Source.find();
            res.json({
                success : true,
                data : sources,
            });
        }
        catch (err) {
            res.status(500).json({
                success: false,
                error : err,
            });
        }
    }

    async getSource(req, res, next) {
        const { sourceId } = req.params;
        try{
            const source = await Source.findById(sourceId);
            res.json({
                success : true,
                data : source,
            });
        }
        catch (err) {
            res.status(500).json({
                success: false,
                error : err,
            });
        }
        
    }

    async postSource (req, res, next) {
        const source = req.body;

        try {
            if(await Source.findOne({ url : source.url })) {
                res.status(400).json({
                  success : false,
                  message : "Tồn tại trang web khác có cùng url"
                });
                return;
            }
            else await Source.create(source);
            res.json({
                success : true,
                data : source,
            })
        }
        catch (err) {
            res.status(500).json({
                success: false,
                error : err,
            })
        }

    }

    async putSource (req, res, next) {
        const updatedFields = req.body;
        const { sourceId } = req.params;
        try {
            const check = await Source.findOne({ url : updatedFields.url })
            if(check && (check._id.toString() !== sourceId)){
                res.status(400).json({
                    success : false,
                    message : "Tồn tại trang web khác có cùng url"
                });
                return;
            }
            else{
                const updatedSource = await Source.findByIdAndUpdate( sourceId , updatedFields, { new: true });
                res.json({
                    success : true,
                    data : updatedSource,
                })
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).json({
                success: false,
                error : err,
            })

        }

    }


    async deleteSource (req, res, next) {
        const { sourceId } = req.params;
        try {
            const articles = await Article.find({ source : sourceId });
            if(articles.length !== 0) {
                res.status(400).json({
                    success: false,
                    message : "Xóa hết bài báo thuộc nguồn này trước",
                });
            }
            else {
                await Source.findByIdAndDelete( sourceId );
                res.json({
                    success : true,
                    message : 'Delete successfully'
                })
            }
        }
        catch (err) {
            res.status(500).json({
                success: false,
                error : err,
            });
        }
    }



}

module.exports = new SourceRouter();
