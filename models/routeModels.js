const pool = require('../database/connection');

module.exports.getAllRoutes = async function () {
    try {
        let sql = "select * from routes"
        let result = await pool.query(sql)
        return {status: 200, data: result.rows}
    } catch(e) {
        console.log(e)
        return {status: 500, data: e}
    }
}

module.exports.getRouteById = async function (id) {
    try {
        let sql = `select * from routes where ro_id = ${id}`
        let result = await pool.query(sql)
        return {status: 200, data: result.rows}
    } catch(e) {
        console.log(e)
        return {status: 500, data: e}
    }
}

module.exports.getRouteByUserId = async function (id) {
    try {
        let sql = `select * from routes where ro_us_id = ${id}`
        let result = await pool.query(sql)
        return {status: 200, data: result.rows}
    } catch (e) {
        console.log(e)
        return {status: 500, data: e}
    }
}

module.exports.updateEndDate = async function (ro_id, ro_end_date) {
    try {
        let sql = `update routes set "ro_DateEnded" = '${ro_end_date}' where ro_id = ${ro_id} returning *`
        let result = await pool.query(sql)
        return {status: 200, data: result.rows[0]}
    } catch(e) {
        console.log(e)
        return {status: 500, data: e}
    }
}

module.exports.createRoute = async function (ro_name, ro_us_id) {
    try {
        let sql = `insert into routes (ro_name, ro_us_id) values ('${ro_name}', '${ro_us_id}') returning *`
        let result = await pool.query(sql)
        return {status: 200, data: result.rows[0]}
    } catch(e) {
        console.log(e)
        return {status: 500, data: e}
    }
}