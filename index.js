const express = require('express')
const app = express()
const port = 5200
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Ballot Server listening on port ${port}!`))