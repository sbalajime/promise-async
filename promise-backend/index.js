var express = require('express');
var CORS = require('cors');
var bodyParser = require('body-parser');

var app = express();
app.use(CORS());

const users = [{
    id:'1',
    name:'balaji',
    course:'1'
},
{
    id:'2',
    name:'chokkan',
    course:'2'
}]

const courses = [{
    id:'1',
    site:'1',
    name:'React'
},
{
    id: '2',
    site:'2',
    name:'nodeJS'
}]

const sites = [{
    id:'1',
    name:'coursera'
},{
    id:'2',
    name:'edx'
}]
app.get('/users', (req, res) => res.status(200).send(users));

app.get('/courses/:courseID', (req,res) => {
    console.log(req.params.userID)
    const course = courses.filter(course => {
        return course.id == req.params.courseID
    })
    console.log(course)
    res.status(200).send(course)
})

app.get('/sites/:siteID', (req, res) => {
    const site = sites.filter(site => {
       return site.id === req.params.siteID
    })
    res.status(200).send(site)
})
app.listen('8081', () => console.log('listening in 8081'));