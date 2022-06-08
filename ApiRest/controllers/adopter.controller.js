const { runSql } = require('../services/postgres.service');

const consultAdopter = async () => {
    const sql = "SELECT * FROM adoptador";
    const data = [];
    let resDb = await runSql(sql,data);
    return resDb.rows
}

module.exports = {consultAdopter}