const pg = require('pg');

// ze : "postgres://postgres:qFKx3sgV%@CamZBkqryRwGzqV@yz(wH)WRRaW*+xr@ulideparty.ddns.net:5432/postgres"
// Fe : "postgres://postgres:qFKx3sgV%@CamZBkqryRwGzqV@yz(wH)WRRaW*+xr@ulideserver.ddns.net:5432/postgres"

const connectionString = "postgres://postgres:qFKx3sgV%@CamZBkqryRwGzqV@yz(wH)WRRaW*+xr@ulideparty.ddns.net:5434/esp32"
const Pool = pg.Pool
const pool = new Pool({
    connectionString,
    max: 10
})

module.exports = pool;