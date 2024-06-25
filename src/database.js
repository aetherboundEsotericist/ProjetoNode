const {Pool} = require("pg");
const pool = new Pool({connectionString: "postgres://postgres:1234@localhost:5432/crudapp"})
pool.on("connect", () => {
    console.log('Base de Dados conectado com sucesso!')});

module.exports = pool;