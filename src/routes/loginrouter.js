const express = require('express');
const loginRouter = express.Router();
const Signupdata = require('../model/Signupdata');

loginRouter.use(express.static('./public'));

 function router(navs){
    
    loginRouter.get('/',(req,res)=>{
        res.render('login',{
            navs,
            title:'Library'
        });
    });
    
    loginRouter.post('/login',(req,res)=>{
        const {mail,password} = req.body;
        Signupdata.findOne({email:mail,password:password})
        .then((user)=>{
            if(!user){
                res.redirect('/')
            }
            else{
                req.session.login = true;
                req.session.id = user._id;
                if(user.usertype === 'admin'){
                    req.session.admin = true;
                }
                res.redirect('/index')
            }
        })
    })
 return loginRouter;
}

module.exports = router;