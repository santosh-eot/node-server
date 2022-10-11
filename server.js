
require('dotenv').config();
const app = require('express')();

let {token} = require('./credential')

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>console.log(`server running at port ${PORT}`))

app.get('/', async(req, res)=>{
    try {
        res.send(await token())
    } catch (error) {
        res.send(error)
    }
})
