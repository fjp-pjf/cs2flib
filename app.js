const express = require('express');
const bodyParser = require("body-parser");
const multer  = require('multer');
const app = new express();
const session=require('express-session');
const MongoDBStore=require('connect-mongodb-session')(session);

const imageStorage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./public/images/');
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
});

const store= new MongoDBStore({
    uri:'mongodb://localhost:27017/library',
    collection:'sessions'
   });
app.use(session({
    secret:'this has got all',
    resave:false,
    saveUninitialized:false,
    store:store
}));

const nav = [
    {link:'/index',name:'Home'},
    {link:'/books',name:'books'},
    {link:'/admin',name:'Add Books'},
    {link:'/addauthor',name:'Add Author'},
    {link:'/authors',name:'Authors'},
    {link:'/signup',name:'Signup'},
    {link:'/',name:'Login'}
    ];

const link = [
    {link:'/index',name:'Home'},
    {link:'/books',name:'books'},
    {link:'/authors',name:'Authors'},
    {link:'/signup',name:'Signup'},
    {link:'/',name:'Login'}
]

const navs = [
    //{link:'/index',name:'Home'},
    {link:'/signup',name:'SignUp'},
    {link:'/',name:'Login'}
];    

const booksRouter = require('./src/routes/bookroutes')(nav);
const authorRouter = require('./src/routes/authorrouter')(nav);
const writerRouter = require('./src/routes/writerrouter')(nav);//addauthor
const adminRouter = require('./src/routes/adminroutes')(nav);//addbook
const signupRouter = require('./src/routes/signuprouter')(navs);
const indexRouter = require('./src/routes/indexrouter')(nav);
const loginRouter = require('./src/routes/loginrouter')(navs);


app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(multer({storage:imageStorage}).single('image'));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/signup',signupRouter);
app.use('/index',indexRouter);
app.use('/admin',adminRouter);//addbooks
app.use('/addauthor',writerRouter);//addauthor
app.use('/',loginRouter);


// app.get('/',(req,res)=>{
//     res.render('login',
//     {
//         navs,
//         title:'Library'
//     });
// });

app.post('/',(req,res)=>{
    res.redirect('/index')
});

app.post('/signup',(req,res)=>{
    res.redirect('/')
});

app.listen(3000);