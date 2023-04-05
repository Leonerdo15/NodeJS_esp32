const pool = require('../database/connection');

module.exports.getAllPoints = async function () {
    try {
        let sql = "select * from points"
        let result = await pool.query(sql)
        return {status: 200, data: result.rows}
    } catch(e) {
        console.log(e)
        return {status: 500, data: e}
    }
}

module.exports.getPointById = async function (id) {
    try {
        let sql = `select * from points where po_id = ${id}`
        let result = await pool.query(sql)
        return {status: 200, data: result.rows}
    } catch(e) {
        console.log(e)
        return {status: 500, data: e}
    }
}

module.exports.getPointByRouteId = async function (id) {
    try {
        let sql = `select * from points where po_ro_id = ${id}`
        let result = await pool.query(sql)
        return {status: 200, data: result.rows}
    } catch (e) {
        console.log(e)
        return {status: 500, data: e}
    }
}

module.exports.createPoint = async function (po_location, po_altitude, po_velocity, po_TempOutside, po_TempInside, po_gx, po_gy, po_gz, po_ax, po_ay, po_az, po_DistUltraSound, po_ro_id) {
    try {
        let sql = `insert into points (po_location, po_altitude, po_velocity, "po_TempOutside", "po_TempOutside", po_gx, po_gy, po_gz, po_ax, po_ay, po_az, "po_DistUltraSound", po_ro_id) values (POINT(ST_X('${po_location}'), ST_Y('${po_location}')), '${po_altitude}', '${po_velocity}', '${po_TempOutside}', '${po_TempInside}', '${po_gx}', '${po_gy}', '${po_gz}', '${po_ax}', '${po_ay}', '${po_az}', '${po_DistUltraSound}', '${po_ro_id}') returning *`
        let result = await pool.query(sql)
        return {status: 200, data: result.rows[0]}
    } catch(e) {
        console.log(e)
        return {status: 500, data: e}
    }
}
