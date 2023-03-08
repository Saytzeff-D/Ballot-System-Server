const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors');
const port = process.env.PORT
const bodyParser = require("body-parser");
const AccountRouter = require('./routes/account');
const pool = require('./connections/pool');

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors({origin: '*'}))
app.use('/account', AccountRouter)

pool.getConnection((err, conn)=>{
    if(!err){
        console.log('SQL Server connected')
    }else{
        console.log('Connection Error', err)
    }
})
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Ballot Server listening on port ${port}`))