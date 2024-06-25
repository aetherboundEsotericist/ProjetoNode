function validator({body, param, query}) {

    return (req, res, next) => {
        const { error, value: validatedBody } = body.validate(req.body, { convert: true })

        if (error != undefined) {
            console.log(error)
            res.status(400).send(JSON.stringify(error.details.map((detail) => {return detail.message})));
            return;
        }

        req.body = validatedBody;
        next();
    }
}

module.exports = validator;