const express = require('express');
const app = express();
app.get('/numbers',async (req,res)=>{
    const urls = req.query.url;
    const timeout = 500/urls.length;
    var numbers = []
    for(var i of urls){
        try{
        var response = await fetch(i,{timeout:timeout});
        response = await response.json();
        numbers = numbers.concat(response.numbers);}
        catch {}
    }
    numbers = new Set(numbers);
    numbers = Array.from(numbers);
    res.json({numbers:numbers.sort(function(a, b){return a - b})});
})
app.listen(8008,console.log('listening'));