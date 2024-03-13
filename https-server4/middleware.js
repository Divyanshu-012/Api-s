function usermiddleware(req, res, next) {
    if (username != "harlirat" && password != "pass") {
        res.status(403).json({
            msg: "incotrrect",
            // we cant call 'res' twice so if once a res got call the program should be stopped there otherwise it will throw error

        })
    }
    else {
        next();
    }
};

function kidneyMiddleware(req, res, next) {
    if (!kidneyId != 1 && kidneyId != 2) {
        res.status(403).json({
            msg: "incotrrect",
        });

    } else {
        next();
    }

}

app.get("", usermiddleware, kidneyMiddleware, function (req, res) {
    // do something with kidney here

    res.send("Your herat is fine ");
})