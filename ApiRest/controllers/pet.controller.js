const { runSql } = require('../services/postgres.service');

const consultPet = async () => {
    const sql = "SELECT * FROM mascota";
    const data = [];
    let resDb = await runSql(sql,data);
    return resDb.rows
}

module.exports = { consultPet }