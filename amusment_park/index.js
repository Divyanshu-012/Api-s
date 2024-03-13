const express = require("express");

const app = express();


function isOldEnoughMiddleWare(req, res, next) {
    const age = req.query.age;
    if (age >= 14) {
        next();
    } else {
        res.json({
            msg: "Sorry you are not old enough"
        });
    }

}

// if we know that one middleware has to go to every route than we can just 
// call --->
// app.use(isOldEnoughMiddleWare);   ---> and it will be called automatically on every function
// so we wont be needing to give isOldEnoughMiddleWare as a paramter in a function
// but it will only trigger those functions which are beloww the app.use function

app.get("/ride1", isOldEnoughMiddleWare, function (req, res, next) {
    res.json({
        msg: "You have successfully riden the ride1"
    });

});


app.get("/ride2", isOldEnoughMiddleWare, function (req, res, next) {
    res.json({
        msg: "You have successfully riden the ride2",
    });


});

app.listen(3000);