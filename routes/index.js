const express = require('express');

const router = express.Router();

//login
router.get('/', (req, res) => res.render('welcome'));



module.exports = router;
