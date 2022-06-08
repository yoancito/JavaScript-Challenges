const { runSql } = require('../services/postgres.service');

const consultAdoption = async () => {
    const sql = "SELECT * FROM adopcion";
    const data = [];
    let resDb = await runSql(sql,data);
    return resDb.rows
}

module.exports = { consultAdoption }