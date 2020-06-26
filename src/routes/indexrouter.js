const express =  require('express');
const indexRouter = express.Router();

indexRouter.use(express.static('./public'));

function router(nav){

    var stories = [
            {
                title:"Repurpose Content to Reach a Wider Audience",
                site:"97thfloor.com",
                time:"2 hours ago",
                img:"vishen.jpg"
            },
            {
                title:"14 Useful Sites for Designers",
                site:"devgarage.com",
                time:"Yesterday",
                img:"kenny.jpg"
            },
            {
                title:"TrendPaper-What's Trending in the World",
                site:"betali.st",
                time:"Last Week",
                img:"jen.jpg"
            }
    ]
    
    indexRouter.get('/',(req,res)=>{
        res.render('index',{
            nav,
            title:'Library',
            stories,
            login: req.session.login || false,
            admin: req.session.admin || false
        });
    });

    indexRouter.post('/',(req,res)=>{
        res.redirect('index')
    });

 return indexRouter;
}

module.exports = router;