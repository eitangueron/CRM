const express = require("express");
const path = require("path");
const bodyParser = require(`body-parser`)
const api = require(`./server/routes/api`)
const app = express();

const Sequelize = require('sequelize')
// const db = new Sequelize('mysql://root:1234@localhost/crm_project')
const db = new Sequelize('mysql://bf7de9fd81a34a:1d8826be@eu-cdbr-west-03.cleardb.net/heroku_026d942682a000c?reconnect=true')


// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
//     next()

// })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(express.static(path.join(__dirname, 'dist')))
// app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(`/`, api)

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = 4000;
app.listen(process.env.PORT || PORT, () => console.log(`Server is running on port ${PORT}`));