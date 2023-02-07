const expres = require('express')
const app = expres()
const path = require('path')
// const hbs = require('hbs')

// const parpath = path.join(__dirname,"../partials")
// hbs.registerPartials(parpath)

 //const tpath = path.join(__dirname,"../temp")
// const stapsth = path.join(__dirname,"../partials   ")
 


app.set("view engine ","hbs")
// app.set("views",stapsth)

 // app.use(expres.static(stapsth))

app.get("/",(req,res)=>{
    res.render('index.hbs')
})


app.get("/about",(req,res)=>{
res.render("about.hbs")
})


app.get("*",(req,res)=>{
    res.render("aa.hbs")
})
app.listen(4000,()=>{
    console.log("gaurav  patil   ... ")
})