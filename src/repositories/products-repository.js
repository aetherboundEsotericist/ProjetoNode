const db = require("../database");

async function insertProduct(prodName, prodQuantity, prodPrice)
{
    const dbRes = await db.query("INSERT INTO products (productname, quantity, price) VALUES ($1, $2, $3) RETURNING *", [prodName, prodQuantity, prodPrice])
    return dbRes.rows[0];
}

module.exports = {insertProduct:insertProduct, a:0}