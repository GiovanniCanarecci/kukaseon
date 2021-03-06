const express = require('express');
const app = express();
const port = 3000;

const cors = require('cors');
app.use(cors());

// get same as in Login.jsx for axios
app.get('/test', (req, res) => {
    if(req.query.user == 'admin' && req.query.pass == 'abc123')
        res.status(200).json({'authenticated':true,'name':'Big Kahoona'});
    else
        res.status(200).json({'authenticated':false});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));