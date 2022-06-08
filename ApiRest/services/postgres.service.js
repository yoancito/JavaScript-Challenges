const { Pool } = require('pg');
let POOL_PG = null;

const connectDb = async () => {
    POOL_PG = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'apirest',//
        password: 'postgres',//
        port: 5432 //
    })
    return await POOL_PG.connect()
}

const runSql = async(sql,data) => {
    let pool = null;
    if (POOL_PG == null){
        pool = await connectDb();
    } else {
        pool = POOL_PG;
    }
    console.log(pool);

    const resdb = await pool.query(sql,data);
    return resdb;
}

module.exports = { runSql }