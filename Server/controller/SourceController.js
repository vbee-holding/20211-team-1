const Source = require('./models/Source');

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
            res.json({
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
            res.status(400).json({
                success: false,
                error : err,
            });
        }
        
    }

    async postSource (req, res, next) {
        const source = req.body;
        try {
            await Source.create(source);
            res.json({
                success : true,
                data : source,
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

    async putSource (req, res, next) {
        const updatedFields = req.body;
        const { sourceId } = req.params;
        try {
            const updatedSource = await Source.findByIdAndUpdate( sourceId , updatedFields, { new: true });
            res.json({
                success : true,
                data : updatedSource,
            })
        }
        catch (err) {
            res.status(400).json({
                success: false,
                error : err,
            })
        }

    }


    async deleteSource (req, res, next) {
        const { sourceId } = req.params;
        try {
            await Source.findByIdAndDelete( sourceId );
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

module.exports = new SourceRouter();

