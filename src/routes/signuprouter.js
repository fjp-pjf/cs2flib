const express = require('express');
const signupRouter = express.Router();
const Signupdata = require('../model/Signupdata');

//signupRouter.use(express.static('./public'));

 function router(navs){
    
    // signupRouter.get('/',(req,res)=>{
    //     res.render('signup',{
    //         navs,
    //         //title:'Library',
    //         //signup
    //     });
    // });
    signupRouter.get('/',(req,res)=>{
        Signupdata.find()
        // res.json(signup)
       .then(function(signup){
           res.render('signup',{
               navs,
               title:'Library',
               signup
           });
       });
   });

    signupRouter.post('/',(req,res)=>{
        var list = {
           email : req.body.email,
           password : req.body.password,
           address1 : req.body.address1,
           address2 : req.body.address2,
           number : req.body.number,
           city : req.body.city,
           zip : req.body.zip,
           gender : req.body.gender,
           dob : req.body.dob,
           usertype: req.body.usertype
        }

        var sign = Signupdata(list);
        sign.save()
        res.redirect('/');
    });

   
 return signupRouter;
}

module.exports = router;