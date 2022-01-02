const Admin = require('./models/Admin');

class AdminRouter   {
    async getAdmins(req, res, next) {
        try{
            const admins =  await Admin.find();
            res.json({
                success : true,
                data : admins,
            });
        }
        catch (err) {
            res.json({
                success: false,
                error : err,
            });
        }
    }

    async getAdmin(req, res, next) {
        const { adminId } = req.params;
        try{
            const admin =  await Admin.findById(adminId);
            res.json({
                success : true,
                data : admin,
            });
        }
        catch (err) {
            res.json({
                success: false,
                error : err,
            });
        }
    }

    async postAdmin (req, res, next) {
        const admin = req.body;
        try {
            await Admin.create(admin);
            res.json({
                success : true,
                data : admin,
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

    async putAdmin (req, res, next) {
        const newAdmin = req.body;
        const { adminId } = req.params;
        try {
            await Admin.findByIdAndUpdate( adminId , newAdmin);
            res.json({
                success : true,
                data : newAdmin,
            })
        }
        catch (err) {
            res.status(400).json({
                success: false,
                error : err,
            })
        }

    }

    async deleteAdmin (req, res, next) {
        const { adminId } = req.params;
        try {
            await Admin.findByIdAndDelete( adminId );
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

module.exports = new AdminRouter();

