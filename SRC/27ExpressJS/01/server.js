const express = require('express')
const app = express();
const port = 3001;

//서버 START
app.listen(port,()=>{
    console.log(`SERVER is RUNNING ON http://localhost:${port}`)
})