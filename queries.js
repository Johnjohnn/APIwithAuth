const Pool = require("ps").Pool
const pool = new Pool({
    user: "backend",
    host: "localhost",
    database: 'api',
    password: "634712",
    port:5432,
})


const getCountires = (req, res)=> {
    pool.query("SELECT * FROM countries ORDER BY id ASC", (error, results) =>{
      if (error){
          throw error
      }  
      response.status(200).json(results.rows)
    })
}

const getCountryById =  (req, res) =>{
    pool.query("SELECT * FROM countries WHERE id =$1", [id], (err, results) =>{
        if(err){
            throw error
        }
        response.status(200).json(results.rows)
    })
}