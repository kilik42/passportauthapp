const express = require('express');

const router = express.Router();

//login
router.get('/login', (req, res) => res.render('Login'));


//register page
router.get('/register', (req, res) => res.render('register'));


//register handle
router.post('/register', (req, res)=> {
    console.log(req.body);
    res.send('hellow');
}));

module.exports = router;
