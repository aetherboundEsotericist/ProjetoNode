const express = require("express");
const server = express();

const router = require("./routes");

server.use(express.json());

server.use((req, res, next) => {
    console.log(new Date(), req.path);
    next();
})

server.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
})

server.use(router);

server.listen(3000, () => console.log("server is listening"));