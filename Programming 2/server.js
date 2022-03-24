weath = "winter"

var Grass = require("./Grass");
var GrassEater = require("./GrassEater.js");
var Gishatich = require("./Gishatich.js")
var People = require("./People.js")
var Creator = require("./Creator.js")
let random = require('./random');

matrix = [];
grassArr = []
grassEaterArr = []
gishatichArr = []
peopleArr = []
grassEaterCreatorArr = []
creatorArr = []

function matrixGen() {
    for (var y = 0; y < 20; y++) {
        matrix[y] = []
        for (var x = 0; x < 20; x++) {
            matrix[y][x] = random([0, 1, 2, 3, 4, 5])
        }
    }
}

matrixGen()

function weather() {
    if (weath == "winter") {
        weath = "spring"
    }
    else if (weath == "spring") {
        weath = "summer"
    }
    else if (weath == "summer") {
        weath = "autumn"
    }
    else if (weath == "autumn") {
        weath = "winter"
    }
    io.sockets.emit('weather', weath)
}
setInterval(weather, 5000);

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

function creatingObjects(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                var ge = new GrassEater(x, y, 2)
                grassEaterArr.push(ge)
            } 
            else if (matrix[y][x] == 3) {
                var gi = new Gishatich(x, y, 3)
                gishatichArr.push(gi)
            }
            else if (matrix[y][x] == 4) {
                var p = new People(x, y, 4)
                peopleArr.push(p)
            }
            else if (matrix[y][x] == 5) {
                var c = new Creator(x, y, 5)
                creatorArr.push(c)
            }
        }
    }
}
io.on('connection', function (socket) {
    creatingObjects(matrix)
})


function game() {
    for (var i in grassArr) {
        grassArr[i].mul()
    }

    for (var i in grassEaterArr) {
        grassEaterArr[i].eat()
    }

    for (var i in gishatichArr) {
        gishatichArr[i].eat()
    }

    for (var i in peopleArr) {
        peopleArr[i].eat()
    }

    for (var i in creatorArr) {
        creatorArr[i].mul()
    }

    let sendData = {
        matrix: matrix,
        grassCounter: grassArr.length,
        grassEaterCounter: grassEaterArr.length,
        gishatichCounter: gishatichArr.length,
        peopleCounter: peopleArr.length,
        creatorCounter: creatorArr.length        
    }

    io.sockets.emit("data", sendData);
}

setInterval(game, 1000)
