const express = require('express');
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send("Api is running");
});
const port = 3000;
app.listen(port, () => {
    console.log("server is running");
});
app.get('/', (req, res) => {
    res.send("Api is running");
});