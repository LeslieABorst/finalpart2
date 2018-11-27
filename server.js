const express = require("express");
const users = require('./user-routes');
const app = express();
const port = 8888;

app.use(express.json());
app.use('/users', users);

app.listen(port, () => console.log(`listening on port: ${port}`));