const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/tic_tac_toe/two_player', (req, res) => {
    res.render('mode2');
})

app.get('/tic_tac_toe/play_with_computer', (req, res) => {
    res.render('modeAI');
})

app.listen(3000, () => {
    console.log("SERVING ON PORT 3000");
})