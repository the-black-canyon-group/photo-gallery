const express = require('express');
const app = express();
const port = 3003;
const bodyParser = require('body-parser');
const db = require('./database/index.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));


app.get('/api/propertyImages/:id', (req, res) => {
    const id = req.params.id;
    db.query(`SELECT image, description FROM propertyImages WHERE foreignKey = ${id}`, (err, response) => {
        if (err) {
            console.log('Query Error: ', err);
        } else {
            res.send(response);
        }
    })
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})