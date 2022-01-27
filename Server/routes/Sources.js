const express = require('express');
const router = express.Router();
const SourceController = require ('../controller/SourceController');
const Verify = require ('../util/Verify');

router.get('/', SourceController.getSources);
router.get('/:sourceId', SourceController.getSource);
router.post('/', Verify.verify, SourceController.postSource);
router.put('/:sourceId', Verify.verify, SourceController.putSource);
router.delete('/:sourceId', Verify.verify, SourceController.deleteSource);


module.exports = router;