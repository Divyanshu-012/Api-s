const express = require("express");

const app = express();

app.get("/health-checkup", function (req, res) {
    const username = req.headers.username;
    const password = req.headers.password;
    const KidneyId = req.query.KidneyId;


    if (username != "Div" || password != "pass") {
        res.status(400).json({ "msg": "Something up with your inputs" })
        return
    }

    if (KidneyId != 1 && KidneyId != 2) {
        res.status(400).json({ "msg": "Something up with your inputs" })
        return

    }

    res.json({
        msg: "Your kidney is fine!"
    })



});

app.listen(3000);