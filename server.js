let express = require('express');
let app = express();

app.get('/',function(req, res){
    res.end("Express Server is running");
});

app.get('/contactus', function(req,res){
    res.end("Welcome to Contact Us Page");
})

app.listen(3000,function(){
    console.log("Server is running");
});