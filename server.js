
require('dotenv').config();
const app = require('express')();

let {token} = require('./credential')

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>console.log(`server running at port ${PORT}`))

// console.log(testing)
let testToken = async()=>{
    console.log(await token())
}
testToken()