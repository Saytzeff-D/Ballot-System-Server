const express = require('express')
const app = express()
const cors = require('cors');
const port = 5200
const bodyParser = require("body-parser");
const AccountRouter = require('./routes/account');

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors({origin: '*'}))
app.use('/account', AccountRouter)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Ballot Server listening on port ${port}`))