const express = require('express');
const router = express.Router();
const SourceController = require ('../controller/SourceController');

router.get('/', SourceController.getSources);
router.get('/:sourceId', SourceController.getSource);
router.post('/', SourceController.postSource);
router.put('/:sourceId', SourceController.putSource);
router.delete('/:sourceId', SourceController.deleteSource);


module.exports = router;