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
        res.status(200).json(results.rows)
    })
}
const createCountry = (req , res) => {
    const {name , capital} = req.body
    pool.query("INSERT INTO countrires (name, capital) VALUES ($1, $2)", [name, capital], (error, results) =>{
        if (error){
            throw error
        }
        res.status(201).send("A new country has been added to the database")
    })
}
const UpdateCountry = (req, res) =>{
    const id = parseInt(req.params.id)
    const {name, capital } = request.body
    
    pool.query(
        "UPDATE countries SET name = $1, capita = $2 WHERE id = $3", 
        [name, capital, id],
        (error, results) =>{
            if (error){
                throw error
            }
            res.status(200).send("country has been updated in the database")
        }
    )
}