const pool = require('../database/connection');

module.exports.postJoystick = async function (x, y, z) {
    try {
        let sql = "insert into joystick (cord_x, cord_y, cord_z) values ($1, $2, $3) returning *"
        let result = await pool.query(sql, [x, y, z])
        return {status: 200, data: result.rows}
    } catch(e) {
        console.log(e)
        return {status: 500, data: e}
    }
}