const express = require('express');
const AdminController = require ('../controller/AdminController');
const router = express.Router();

router.get('/', AdminController.getAdmins);
router.post('/', AdminController.postAdmin);
router.get('/:adminId', AdminController.getAdmin);
router.put('/:adminId', AdminController.putAdmin);
router.delete('/:adminId', AdminController.deleteAdmin);

module.exports = router;
