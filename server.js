const express = require('express')

const app = express ()

app.get('/api/info', (req, res) => {
    res.json({
        name: 'Asher',
        age: 3,
        msg: 'hello webpack'
    })
})

app.listen('9092')