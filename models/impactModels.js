const pool = require('../database/connection');

module.exports.getAllImpacts = async function () {
    try {
        let sql = "select * from impacts"
        let result = await pool.query(sql)
        return {status: 200, data: result.rows}
    } catch(e) {
        console.log(e)
        return {status: 500, data: e}
    }
}

module.exports.getImpactById = async function (id) {
    try {
        let sql = `select * from impacts where im_id = ${id}`
        let result = await pool.query(sql)
        return {status: 200, data: result.rows}
    } catch(e) {
        console.log(e)
        return {status: 500, data: e}
    }
}

module.exports.getImpactByUserId = async function (id) {
    try {
        let sql = `select * from impacts where im_us_id = ${id}`
        let result = await pool.query(sql)
        return {status: 200, data: result.rows}
    } catch (e) {
        console.log(e)
        return {status: 500, data: e}
    }
}

module.exports.createImpact = async function (im_force, im_us_id) {
    try {
        let sql = `insert into impacts (im_force, im_us_id) values ('${im_force}', '${im_us_id}') returning *`
        let result = await pool.query(sql)
        return {status: 200, data: result.rows[0]}
    } catch(e) {
        console.log(e)
        return {status: 500, data: e}
    }

}

module.exports.updateImpact = async function (im_movement) {
    try {
        let sql = `update impacts set im_movement = '${im_movement}' where im_id = ${im_id} returning *`
        let result = await pool.query(sql)
        return {status: 200, data: result.rows[0]}
    } catch (e) {
        console.log(e)
        return {status: 500, data: e}
    }
}