const pool = require('../database/connection');

module.exports.getAllUsers = async function () {
    try {
        let sql = "select * from users"
        let result = await pool.query(sql)
        return {status: 200, data: result.rows}
    } catch(e) {
        console.log(e)
        return {status: 500, data: e}
    }
}

module.exports.getUserById = async function (id) {
    try {
        let sql = `select * from users where us_id = ${id}`
        let result = await pool.query(sql)
        return {status: 200, data: result.rows}
    } catch(e) {
        console.log(e)
        return {status: 500, data: e}
    }
}

module.exports.getUserIpById = async function (id) {
    try {
        let sql = `select us_ip from users where us_id = ${id}`
        let result = await pool.query(sql)
        return {status: 200, data: result.rows[0]}
    } catch(e) {
        console.log(e)
        return {status: 500, data: e}
    }
}


module.exports.updateUserIpById = async function (id, ip) {
    try {
        let sql = `update users set us_ip = '${ip}' where us_id = ${id} returning *`
        let result = await pool.query(sql)
        return {status: 200, data: result.rows[0]}
    } catch(e) {
        console.log(e)
        return {status: 500, data: e}
    }
}

module.exports.getLoginAuth = async function (usEmail, usPassword) {
    try {
        let sql = `select * from users where us_email = '${usEmail}' and us_password = '${usPassword}'`
        let result = await pool.query(sql)
        return {status: 200, data: result.rows[0]}
    } catch(e) {
        console.log(e)
        return {status: 500, data: e}
    }
}

module.exports.createUser = async function (usName, usEmail, usPassword) {
    try {
        let sql = `insert into users (us_name, us_email, us_password) values ('${usName}', '${usEmail}', '${usPassword}') returning *`
        let result = await pool.query(sql)
        return {status: 200, data: result.rows[0]}
    } catch(e) {
        console.log(e)
        return {status: 500, data: e}
    }
}