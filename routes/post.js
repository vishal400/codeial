const express = require('express');
const postController = require('../controllers/post_controller');
const router = express.Router();

router.get('/', postController.post);

module.exports = router
