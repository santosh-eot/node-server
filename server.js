
require('dotenv').config();
const app = require('express')();

let {token} = require('./credential')
let {loggerMiddleware} = require('./helper')

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>console.log(`server running at port ${PORT}`))
app.use(loggerMiddleware)

app.get('/', async(req, res)=>{
    try {
        res.send(await token())
    } catch (error) {
        res.send(error)
    }
})
