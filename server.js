const express = require('express'); 
const app = express();


app.get('/', (req, res)=>{ 
    res.json({success: true});
 });



app.listen(300,()=>{
    console.log('listening on port 300');
});