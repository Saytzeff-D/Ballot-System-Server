const pool = require('../connections/pool');

const register = (req, res)=>{
    let user = req.body
    let sql = `SELECT * FROM users WHERE email = '${req.body.email}'`
    pool.query(sql, (err, result)=>{
        if(err){
            throw err
        }else{
            if(result.length == 0){
                let insertQuery = `INSERT INTO users (fullName, email, password, orgName) VALUES ('${user.fullName}', '${user.email}', '${user.password}', '${user.orgName}')`;
                pool.query(insertQuery, (err, result)=>{
                    if (err) {
                        throw err
                    } else {
                        user.id = result.insertId
                        res.json({msg: 'Success', data: user})
                    }
                })
            }else{
                res.status(200).json({msg: 'E-mail Already exists'})
            }
        }
    })
}
const login =(req, res)=>{
    let loginInfo = req.body
    let sql = `SELECT * FROM users WHERE (email = '${loginInfo.email}' AND password = '${loginInfo.password}')`
    pool.query(sql, (err, result)=>{
        if (err) {
            throw err
        } else {
            if (result.length == 0) {
                res.status(200).send({msg: 'Login Failed!'})
            } else {
                res.status(200).send({msg: 'Success', data: result[0]})
            }                        
        }
    })
}

let AccountController = { register, login }
module.exports = AccountController