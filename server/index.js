const express = require('express');
const app = express();
const port = 3003;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/property-images/:id', (req, res) => {
    res.send()
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})