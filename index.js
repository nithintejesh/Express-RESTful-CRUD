//index route  get   /posts    to get data for all posts
//create route   post  /posts  to add a new post
//2 routes 1. serve the form   get  /posts/new 2. add the new post   post  /posts
//implement: get /posts/:id
//show route   get /posts/:id   to get one post (using id)
// implement: patch /posts/:id
//update route  patch  /posts/:id to update specific post

//uuid package - universally unique indentifier (npm install uuid)
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const {v4: uuidv4} = require("uuid");
// uuidv4(); generates unique id's
const methodOverride = require("method-override");

app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

app.get("/", (req, res) => {
    res.send("serving working well");
});

let posts = [
    {
        id: uuidv4(),
        username: "nithintejesh",
        content: "Hello!!!",
    },
    {
        id: uuidv4(),
        username: "deepthinker",
        content: "What's up?",
    },
    {
        id: uuidv4(),
        username: "notthinking",
        content: "Life is fun",
    },
]

app.get("/posts", (req, res) => {
    res.render("index.ejs",{posts});
});

app.get("/posts/add", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    // console.log(content);
    let id = uuidv4();
    posts.push({id, username, content});
    // res.send("added data successfully");
    // res.redirect("index.ejs"); //redirects to index.ejs status code 3..
    res.redirect("/posts"); 
})

app.get("/posts/:id", (req, res) =>{
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    // console.log(post);
    res.render("show.ejs",{post});
});

app.patch("/posts/:id", (req, res) =>{
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    // res.redirect(`/posts/${id}`);
    res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
    let {id} = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);
    console.log(post);
    res.render("edit.ejs",{post});
});

// app.get("/posts/:id/delete", (req, res) => {
//     let {id} = req.params;
//     posts = posts.filter((p) => id != p.id);
//     res.redirect("/posts");
// });

app.delete("/posts/:id", (req, res) => {
    let {id} = req.params;
    posts = posts.filter((p) => id != p.id);
    res.redirect("/posts");
});

app.listen(port, () => {
    console.log("listening to port : 8080");
});

//can only send get or patch requests in html forms
//package method-override
//all the posts requests from a form which has "_method=DELETE"can be changed to delete (patch, put)
//action="resource?_method=DELETE"
// can write other than _method also but we follow it