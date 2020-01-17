const express = require('express')

const app = express()

app.get('/home', (req, res) => {
    var hours =   new Date().getHours()
    if(hours > 8 && hours < 17)
    {res.sendFile(__dirname + '/public/home.html')}
    else
    {res.sendFile(__dirname + '/public/closed.html')}
    
})

app.get('/services', (req, res) => {
    if(hours > 8 && hours < 17)
    {res.sendFile(__dirname + '/public/ourservices.html')}
    else
    {res.sendFile(__dirname + '/public/closed.html')}

})

app.get('/contact', (req, res) => {
    if(hours > 8 && hours < 17)
    {res.sendFile(__dirname + '/public/contact.html')}
    else
    {res.sendFile(__dirname + '/public/closed.html')}

})


app.listen(3000, (err) => {
    if (err)
        console.log("not running")
    else
        console.log(" running")


})

var currentdate = new Date().toLocaleTimeString();
var datetime =   ( currentdate.getHours() + ":"+ currentdate.getMinutes()+ ":"+ currentdate.getSeconds() );

console.log(currentdate);