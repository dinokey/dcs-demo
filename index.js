const express = require('express');
const app = express();

app.route('/').get((req, res) => res.send('Hello! DCS Demo Here!'));

app.route('/reverse').get((req, res) => {
    let str = req.query.str;
    let newStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    res.send({
        result: newStr
    });
});


app.listen(3000, () => console.log('App listening on port 3000!'));