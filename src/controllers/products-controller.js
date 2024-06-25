const productsService = require("../services/products-service")

async function createProduct(request, response)
{
    const prodResp = await productsService.createProduct(request.body.name, request.body.quantity, request.body.price)
    response.status(201).send(JSON.stringify(prodResp))   
}

module.exports = {createProduct:createProduct}