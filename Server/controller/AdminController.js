const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const Admin = require("../models/Admin");

class AdminRouter {
  async getAdmins(req, res, next) {
    try {
      const admins = await Admin.find();
      res.json({
        success: true,
        data: admins,
      });
    } catch (err) {
      res.json({
        success: false,
        error: err,
      });
    }
  }

  async getAdmin(req, res, next) {
    const { adminId } = req.params;
    try {
      const admin = await Admin.findById(adminId);
      res.json({
        success: true,
        data: admin,
      });
    } catch (err) {
      res.json({
        success: false,
        error: err,
      });
    }
  }

  // Login
  async login(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    try {
      const admin = await Admin.findOne({ email: email });

      if (admin) {
        const match = await bcrypt.compare(password, admin.password);

        if (match) {
          const token = jwt.sign(
            {
              exp: Math.floor(Date.now() / 1000) + 60 * 60,
              email: admin.email,
            },
            "secret"
          );

          res.json({
            success: true,
            data: {
              access_token: token,
              exp: Math.floor(Date.now() / 1000) + 60 * 60,
            },
          });
        }
      } else {
        res.json({
          success: false,
          message: "Tài khoản không tồn tại hoặc sai mật khẩu!",
        });
      }
    } catch (err) {
      res.json({
        success: false,
        error: err,
      });
    }
  }

  // SignUp
  async postAdmin(req, res, next) {
    var admin = req.body;

    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);

    admin.password = bcrypt.hashSync(admin.password, salt);

    try {
      await Admin.create(admin);

      res.json({
        success: true,
        data: admin,
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        error: err,
      });
      console.log(err);
    }
  }

  async putAdmin(req, res, next) {
    const newAdmin = req.body;
    const { adminId } = req.params;
    try {
      await Admin.findByIdAndUpdate(adminId, newAdmin);
      res.json({
        success: true,
        data: newAdmin,
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        error: err,
      });
    }
  }

  async deleteAdmin(req, res, next) {
    const { adminId } = req.params;
    try {
      await Admin.findByIdAndDelete(adminId);
      res.json({
        success: true,
        message: "Delete successfully",
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        error: err,
      });
    }
  }
}

module.exports = new AdminRouter();
