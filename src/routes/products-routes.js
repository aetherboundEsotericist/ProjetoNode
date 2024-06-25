const express = require("express");
const productRouter = express.Router();
const db = require("../database");
const Joi = require("joi");
const validator = require("../middlewares/validator")

const productController = require("../controllers/products-controller")

const productCreationSchema = Joi.object({
    name: Joi.string().alphanum().min(2).max(32),
    quantity: Joi.number().min(1).max(65535),
    price: Joi.number().min(0).max(999.99)
})

//GET
//retorna um JSON com todos os produtos e suas características
productRouter.get("/", async (request, response) => {
    const dbRes = await db.query("SELECT * FROM products")
    console.log(dbRes.rows)
    response.send(JSON.stringify(dbRes.rows))

})

//retorna um produto específico
/* productRouter.get("/:id", async (request, response) => {
    const dbResponse = await db.query(`SELECT * FROM products WHERE productid = '${request.params.id}'`)

    if(dbResponse.rowCount == 0)
    {
        response.status(404).send("Product not found")
        console.log("Product not found")
        return
    }
    response.send(JSON.stringify(dbResponse.rows[0]))
}) */

productRouter.get("/test", async (request, response) => {
    console.log("test");
})


//POST
productRouter.post("/", validator({body: productCreationSchema}), productController.createProduct)


//PUT
productRouter.put("/:id/price", async (request, response) => {
    const validationSchema = Joi.object({
        price: Joi.number().min(0).max(999.99),
        name: Joi.allow(),
        quantity: Joi.allow()
    })
    const {error, value:validatedBody} = validationSchema.validate(request.body);
    console.log(error)
    console.log(validatedBody)

    if(error != undefined){
        response.status(500).send(error.detail);
        return;
    }

    try
    {
        const dbRes = await db.query(`UPDATE products SET price = ${request.body.price} WHERE productid = ${request.params.id}`);
        //console.log(dbRes)
        response.send('Product price updated')
    }
    catch (error)
    {
        console.log("deu ruimmmm")
        response.status(500).send(error.detail);
    }

})


//DELETE
productRouter.delete("/:id", async (request, response) => {
    try
    {
        const dbRes = await db.query(`DELETE FROM products WHERE productid = ${request.params.id}`);
        console.log(dbRes)
        response.send(`Product with ID ${request.params.id} deleted`)
    }
    catch (error)
    {
        console.log("deu ruim em algo")
        response.status(500).send(error.detail);
    }


})


module.exports = productRouter;