const express = require('express');
const router = express.Router();
const { register, login, allGet } = require('../controllers/auth');

router.post('/register', register);
router.post('/login', login);
router.get('/get', allGet);

module.exports = router