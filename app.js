const express = require('express')
const app = express()
const port = 8000

let books = [
    { title: "", author: ""}, // start state
    { title: "Oliver Twist", author: "Charles Dickens" },
    { title: "Frankenstein", author: "Mary Shelley" },
    { title: "Cities of Salt", author: "Abdul Rahman Munif" }

];

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// have a title, send the author
app.get('/books', (req, res) => {
    let book = req.query.title;
    var result = books.filter(obj => {
        return obj.title === book;
    })

    return res.send(result);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})