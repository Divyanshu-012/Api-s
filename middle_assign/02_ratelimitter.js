const express = require("express");
const app = express();



let numberofRequestsForUser = {};
setInterval(() => {
    numberofRequestsForUser = {};
}, 1000)



app.use(function (req, res, next) {
    const userId = req.headers["user-id"];

    //numberofRequestUser[userId] = 2 or + < 6
    if (numberofRequestsForUser[userId]) {
        numberofRequestsForUser["user-id"] = numberofRequestsForUser[userId] + 1;
        if (numberofRequestsForUser[userId] > 5) {
            res.status(404).send("no entry");
        } else {
            next();
        }

    } else {
        numberofRequestsForUser[userId] = 1;
        next();
    }

});


