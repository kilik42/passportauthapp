const express = require('express');

const router = express.Router();

//login
router.get('/login', (req, res) => res.render('Login'));


//register page
router.get('/register', (req, res) => res.render('register'));


//register handle
router.post('/register', (req, res)=> {
    const { name, email, password, password2} = req.body;

    let errors = [];

    //check required fields
    if(!name || !email || !password || !password2){
          errors.push ({msg: 'please fill in all fields'});
    }

    //check passwords match

    if(password !== password2){
      errors.push({msg: 'passwords do not match'});
    }

    //check pass lengthj

    if(password.length < 6){
      errors.push({msg: 'password should be at least 6 characters'});

    }


     if (errors.length >0 ){
       res.render('register',{
         errors,
         name,
         email,
         password,
         password2
       });
     }else{
       res.send('pass')
     }

});
// stopped on 35:01
module.exports = router;
