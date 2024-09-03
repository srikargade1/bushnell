var express = require("express")

var app = express.createServer()

app.get('/', function(req, res)
{
    res.send("Welcome to Node Twitter")
})

app.post('/submit', function(req, res)
{
    res.send("Submitted successfully")
})

app.listen(8000)