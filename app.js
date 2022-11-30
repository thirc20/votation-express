const express = require('express')
const { JacadService, teste, findStudent } = require('./src/jacad/jacad');
const { voto } = require('./src/voto/voto');
const app = express()
const port = process.env.PORT || 3000
const db = require('./db')
// import { findStudent } from "jacad";

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    return res.render('index.hmtl')
})

app.post('/jacad', (req, res)=>{
    let retu = findStudent(req.query)
    console.log(retu)
    return retu
})

app.post('/teste',async (req, res)=>{
    let result = await db.selectAll(req.query)
    console.log(result)
    res.send(JSON.stringify(req.query))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
    