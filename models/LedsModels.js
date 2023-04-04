const pool = require('../database/connection');

module.exports.getLeds = async function () {
    try {
        let sql = "select * from leo_leds"
        let result = await pool.query(sql)
        console.log(result.rows)
        let leds = result.rows
        return {status: 200, data: leds}
    } catch(e) {
        console.log(e)
        return {status: 500, data: e}
    }
}

module.exports.getState = async function (id) {
    try {
        let sql = "select * from leo_leds where led_id = $1"
        let result = await pool.query(sql, [id])
        let state = result.rows
        return {status: 200, data: state}
    } catch(e) {
        console.log(e)
        return {status: 500, data: e}
    }
}

module.exports.postLed = async function (name, state) {
    try {
        let sql = "insert into leo_leds (led_name, led_state) values ($1, $2) returning *"
        let result = await pool.query(sql, [name, state])
        return {status: 200, data: result.rows}
    } catch(e) {
        console.log(e)
        return {status: 500, data: e}
    }
}