const productRepository = require("../repositories/products-repository")

async function createProduct(prodName, prodQuantity, prodPrice)
{
    const prodObj = await productRepository.insertProduct(prodName, prodQuantity, prodPrice)
    console.log(prodObj)
    return prodObj;
}

module.exports = {createProduct:createProduct}