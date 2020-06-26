const express = require('express');
const writerRouter = express.Router();
const Writerdata = require('../model/Writerdata');

function router(nav){
    
    writerRouter.get('/',(req,res)=>{
        res.render('addauthor',{
           nav,
           title:'Add Author'
        });
    });

    writerRouter.post('/adds',(req,res)=>{
        
        var items = {
           title : req.body.title,
           author : req.body.author,
           genre : req.body.genre,
           image : req.file.filename
        }

        var writer = Writerdata(items);
        writer.save();
        res.redirect('/authors');
    });

    return writerRouter;
}
module.exports = router;