const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number())


// whenver we use get req. we use queryparamter
// for post--> we use body
// when we use sensitive info. ---> we use headers





app.use(express.json());

app.post("/health-checkup", function (req, res) {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)
    if (!response.success) {
        res.status(411).json({
            msg: "input is invalid"
        })
    } else {
        res.send({
            response
        });
    }



});

//global catches 
app.use(function (err, req, res, next) {
    res.json({
        msg: "Sorry"
    })
})

app.listen(3000);