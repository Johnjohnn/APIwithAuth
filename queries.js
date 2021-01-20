const Pool = require("ps").Pool
const pool = new Pool({
    user: "backend",
    host: "localhost",
    database: 'api',
    password: "634712",
    port:5432,
})