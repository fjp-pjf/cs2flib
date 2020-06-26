const express = require('express');
const Writerdata = require('../model/Writerdata');
const authorRouter = express.Router();

function router(nav){
    // var authors = [
    //     {
    //         name:"Dan Brown",
    //         Country:"American",
    //         Genre:"Science fiction",
    //         img:"dan.jpg"
    //     },
    //     {
    //         name:"Cecelia Ahern",
    //         Country:"Irish",
    //         Genre:"Science fiction",
    //         img:"cecelia.jpg"
    //     },
    //     {
    //         name:"Paulo Coelho",
    //         Country:"Brazilian",
    //         Genre:"Science fiction",
    //         img:"paulo.jpg"
    //     },
    //     {
    //         name:"Harper Lee",
    //         Country:"American",
    //         Genre:"Science fiction",
    //         img:"harper.jpg"
    //     },
    //     {
    //         name:"Daniel Paul Singh",
    //         Country:"Indian",
    //         Genre:"Science fiction",
    //         img:"daniel.jpg"
    //     }
    // ]
    
    authorRouter.get('/',(req,res)=>{
        Writerdata.find()
        .then(function(authors){
            res.render('authors',{
                nav,
                title:'Authors',
                authors,
                login: req.session.login || false,
                admin: req.session.admin || false
            });
        })
    });
    
    
    authorRouter.get('/:id',(req,res)=>{
        const id = req.params.id
          Writerdata.findOne({_id: id})
          .then(function(author){
            res.render('author',{
                nav, 
                title:'Author',
                author,
                login: req.session.login || false,
                admin: req.session.admin || false
            });
        });
    });

    return authorRouter;
}

module.exports = router;