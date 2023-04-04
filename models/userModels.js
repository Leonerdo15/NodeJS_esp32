const pool = require('../database/connection');

module.exports.getusers = async function () {
    try {
        let sql = "select * from users"
        let result = await pool.query(sql)
        return {status: 200, data: result.rows}
    } catch(e) {
        console.log(e)
        return {status: 500, data: e}
    }
}

module.exports.getuser = async function (id) {
    try {
        let sql = `select * from users where us_id = ${id}`
        let result = await pool.query(sql)
        return {status: 200, data: result.rows}
    } catch(e) {
        console.log(e)
        return {status: 500, data: e}
    }
}