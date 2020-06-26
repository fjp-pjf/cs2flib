const express = require('express');
const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');

function router(nav){
    // var books = [
    //     {
    //         title:"Origin",
    //         Author:"Dan Brown",
    //         Genre:"Science fiction",
    //         img:"origin.jpg"
    //     },
    //     {
    //         title:"A place called here",
    //         Author:"Cecelia Ahern",
    //         Genre:"Fantasy",
    //         img:"place.jpg"
    //     },
    //     {
    //         title:"The Alchemist",
    //         Author:"Paulo Coelho",
    //         Genre:"Fiction",
    //         img:"alchemist.jpg"
    //     },
    //     {
    //         title:"To kill a MockingBird",
    //         Author:"Harper Lee",
    //         Genre:"Novel",
    //         img:"bird.jpg"
    //     },
    //     {
    //         title:"11Hours",
    //         Author:"Daniel Paul Singh",
    //         Genre:"Science fiction",
    //         img:"11hours.jpg"
    //     }
    // ]
    
    booksRouter.get('/',(req,res)=>{
        Bookdata.find()
        .then(function(books){
            res.render('books',{
                nav,
                title:'Library',//display books
                books,
                login: req.session.login || false,
                admin: req.session.admin || false
            });
        });
    });
    
    
    booksRouter.get('/:id',(req,res)=>{
        const id = req.params.id
        Bookdata.findOne({_id: id})//display single book
        .then(function(book){
            res.render('book',{
                nav,
                title:'Library',
                book,
                login: req.session.login || false,
                admin: req.session.admin || false
            });
        });
        
    });

    return booksRouter;
}   

module.exports = router;