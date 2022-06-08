const { runSql } = require('../services/postgres.service');

const consultEmployee = async () => {
    const sql = "SELECT * FROM empleado";
    const data = [];
    let resDb = await runSql(sql,data);
    return resDb.rows
}

module.exports = { consultEmployee }