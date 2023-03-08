const uuid = require('uuid');
const pool = require('../connections/pool');

const register = (req, res)=>{
    let user = req.body
    user.ballotKey = uuid.v4()
    // res.json(user)
    let sql = `SELECT * FROM users WHERE email = '${req.body.email}'`
    pool.query(sql, (err, result)=>{
        if(err){
            throw err
        }else{
            if(result.length == 0){
                let insertQuery = `INSERT INTO users (fullName, email, password, orgName, ballotKey) VALUES ('${user.fullName}', '${user.email}', '${user.password}', '${user.orgName}', '${user.ballotKey}')`;
                pool.query(insertQuery, (err, result)=>{
                    if (err) {
                        throw err
                    } else {
                        res.json({msg: 'Success'})
                    }
                })
            }else{
                res.status(200).json({msg: 'E-mail Already exists'})
            }
        }
    })
}

let AccountController = { register }
module.exports = AccountController