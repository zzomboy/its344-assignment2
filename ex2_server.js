var express = require("express"),
    http = require("http"),
    app = express(),
    count = {"qty":0};
console.log(count);

app.use(express.static(__dirname + "/client"));
http.createServer(app).listen(3000);

app.get("/count.json", function(req, res) {
    res.json(count);
});

app.post("/plus", function (req, res) {
    count.qty++;
    console.log(count);
});
app.post("/minus", function (req, res) {
    count.qty--;
    console.log(count);
});