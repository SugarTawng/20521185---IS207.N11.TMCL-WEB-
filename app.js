const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const noiDung = {
    "Truong:": "DH CNTT",
    "DC": "Thu Duc"
};

const noiDung2 = {
    "KTX:": "DHQG HCM",
    "DC": "Thu Duc",
    "Khu": "Khu A, Khu B"
};

app.get('/truong', (req, res) => {
    console.log('Sent school information successfully');
    res.send(noidung);
})

app.get('/ktx', (req, res) => {
    console.log('Sent dormitory information successfully');
    res.send(noidung2);
});

app.listen(3002, ()=>{
    console.log('I\'m listening in port 3002');
});