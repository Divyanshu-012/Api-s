const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://kapariyadiv:1223334444@cluster0.7j9fwna.mongodb.net/userappnew?retryWrites=true&w=majority")

const user = mongoose.model('users', { name: String, email: String, password: String });


app.post("/signup", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await user.findOne({ email: username });
    //CRUD => create, update, delete, Read
    if (existingUser) {
        return res.status(400).send("Username already exists");
    }

    const User = new user({
        name: name,
        email: username,
        password: password
    });

    User.save();
    res.json({
        "msg": "User created successfully"
    })

})


