const pool = require('../database/connection');

module.exports.getIp = async function () {
    try {
        let sql = "select * from ip_esp32"
        let result = await pool.query(sql)
        console.log(result.rows)
        let ip = result.rows
        return {status: 200, data: ip}
    } catch(e) {
        console.log(e)
        return {status: 500, data: e}
    }
}

module.exports.updateIp = async function (ip) {
    try {
        let sql = "update ip_esp32 set ip_number = $1 where ip_id = 1 returning *"
        let result = await pool.query(sql, [ip])
        return {status: 200, data: result.rows}
    } catch(e) {
        console.log(e)
        return {status: 500, data: e}
    }
}