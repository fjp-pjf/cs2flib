const express = require('express');
const adminRouter = express.Router();
const Bookdata = require('../model/Bookdata');

function router(nav){
    
    
    adminRouter.get('/',(req,res)=>{
        res.render('addbooks',{
            nav,
            title:'Add Books',
            updateMode:false,
            action:'/admin/add'
        });
    });

    adminRouter.get('/update/:id',(req,res)=>{
        const id = req.params.id
        Bookdata.findById(id)
        .then((book)=>{
            res.render('addbooks',{
                nav,
                title:'Edit Books',
                updateMode:true,
                action:'/admin/update',
                book
            })
        })
    })

    adminRouter.post('/update',(req,res)=>{
        const id = req.body.bookid;
        Bookdata.findByIdAndUpdate(id,{
            title : req.body.title,
            author : req.body.author,
            genre : req.body.genre,
            image : req.file.filename
         })
         .then(()=>{
            console.log('book updated!');
            res.redirect('/books');
        })
    })

    adminRouter.get('/delete/:id',(req,res)=>{
        const id = req.params.id;
        Bookdata.findByIdAndRemove(id)
        .then(()=>{
            console.log('Deleted');
            res.redirect('/books');
        })
    })

    adminRouter.post('/add',(req,res)=>{
        var item = {
           title : req.body.title,
           author : req.body.author,
           genre : req.body.genre,
           image : req.file.filename
        }
        console.log(req.file);

        var book = Bookdata(item);
        book.save();
        res.redirect('/books');
    });
    return adminRouter;
}

module.exports = router;