const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hi'))



app.listen(3000, () => console.log('Hi'))

app.use(express.static('Business website'))



// app.use(express.static('OverONs'))
//
// app.use(express.static('Img'))
//
//
//
// // app.use('/static', express.static('Basic1'))
//
// app.use(express.static('Basic1'))
