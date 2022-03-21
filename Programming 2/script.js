var matrix = [];
var grassArr = []
var grassEaterArr = []
var gishatichArr = []
var peopleArr = []
var grassEaterCreatorArr = []
var creatorArr = []

var side = 20;


function setup() {
    for (var y = 0; y < 20; y++) {
        matrix[y] = []
        for (var x = 0; x < 20; x++) {
            matrix[y][x] = random([0, 1, 2, 3, 4, 5])
        }
    }

    frameRate(3);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

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


function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("black");
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
            }
            else if (matrix[y][x] == 5) {
                fill("magenta");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }

            rect(x * side, y * side, side, side);
        }
    }

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
}