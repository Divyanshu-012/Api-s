const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000
app.use(bodyParser.json());





app.post('/conversations', (req, res) => {
    const message = req.body.message;
    console.log(message);
    res.json('Hello World')
})

app.listen(port, function () {
    console.log(`Example app listening on port ${port}`)
})