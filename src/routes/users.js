const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/', usersController.list);
router.get('/:id', usersController.get);
router.post('/', usersController.create);

module.exports = router;
