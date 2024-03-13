

// fs -> filesysystem  - read files on system ,write to files on system 
const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => {

    res.send('Hello World!')
})

app.listen(port)