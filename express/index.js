const express = require('express');
const app = express();

app.get("/", function(req,res){
    res.send('hello World')
});

// app.get('/usuarios', function(req, res) {
//     nombre: "Daniel",
// });
app.listen(3000)