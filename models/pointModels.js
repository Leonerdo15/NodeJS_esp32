const pool = require('../database/connection');

module.exports.getAllPoints = async function () {
    try {
        let sql = "select *, st_x(po_location) po_lat, st_y(po_location) po_long from points"
        let result = await pool.query(sql)
        return {status: 200, data: result.rows}
    } catch(e) {
        console.log(e)
        return {status: 500, data: e}
    }
}

module.exports.getPointById = async function (id) {
    try {
        let sql = `select *, st_x(po_location) po_lat, st_y(po_location) po_long from points where po_id = ${id}`
        let result = await pool.query(sql)
        return {status: 200, data: result.rows}
    } catch(e) {
        console.log(e)
        return {status: 500, data: e}
    }
}

module.exports.getPointByRouteId = async function (id) {
    try {
        let sql = `select *, st_x(po_location) po_lat, st_y(po_location) po_long from points where po_ro_id = ${id}`
        let result = await pool.query(sql)
        return {status: 200, data: result.rows}
    } catch (e) {
        console.log(e)
        return {status: 500, data: e}
    }
}

module.exports.createPoint = async function (po_location, po_velocity, po_TempOutside, po_gx, po_gy, po_gz, po_ax, po_ay, po_az, po_DistUltraSound, po_ro_id) {
    try {
        let sql = `insert into points (po_velocity, "po_TempInside", po_gx, po_gy, po_gz, po_ax, po_ay, po_az, "po_DistUltraSound", po_ro_id) values ( ${po_velocity}, ${po_TempOutside}, ${po_gx}, ${po_gy}, ${po_gz}, ${po_ax}, ${po_ay}, ${po_az}, ${po_DistUltraSound}, ${po_ro_id}) returning *`
        let result = await pool.query(sql)
        return {status: 200, data: result.rows[0]}
    } catch(e) {
        console.log(e)
        return {status: 500, data: e}
    }
}
