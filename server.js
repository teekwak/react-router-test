const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('dist'));

app.get('*', (req, res) => {
    console.log("rendered on server");
    res.sendFile('index.html', { root: path.join(__dirname, './www') });
});

app.listen(3000, function() {
    console.log("Listening on port 3000");
});
