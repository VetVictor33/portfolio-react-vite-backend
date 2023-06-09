require('dotenv').config();
const express = require('express');
const router = require('./src/router.js');
const cors = require("cors");


const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

app.listen(process.env.PORT);