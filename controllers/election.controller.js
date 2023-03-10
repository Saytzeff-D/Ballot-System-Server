const uuid = require('uuid');
const pool = require('../connections/pool');

const fetchElection = (req, res)=>{
    let sql = `SELECT * FROM elections WHERE user_id = '${req.body.userId}'`
    pool.query(sql, (err, result)=>{
        if (!err) {
            res.status(200).json({data: result})
        } else {
            res.status(300).json('Server Dysfunction')
        }
    })
}

const createElection = (req, res)=>{
    let election = req.body
    election.ballot_key = uuid.v4()
    let sql = `INSERT into elections(title, start_date, end_date, ballot_key, user_id) VALUES('${election.title}', '${election.start_date}', '${election.end_date}', '${election.ballot_key}', '${election.user_id}')`
    pool.query(sql, (err, result)=>{
        if (!err) {
            res.status(200).json({msg: 'Success'})
        } else {
            res.status(300).json('Server Dysfunction')
        }
    })
}

let ElectionController = { fetchElection, createElection }
module.exports = ElectionController