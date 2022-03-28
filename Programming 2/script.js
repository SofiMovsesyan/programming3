var socket = io();
function setup() {
    var weath = 'winter'
    var side = 20;
    var matrix = []
    let grassCountElement = document.getElementById('grassCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let gishatichCountElement = document.getElementById('gishatichCount');
    let peopleCountElement = document.getElementById('peopleCount');
    let creatorCountElement = document.getElementById('creatorCount');

    socket.on("data", draw)
    socket.on("weather", function (data) {
        weath = data
    })

    function draw(data) {
        matrix = data.matrix
        grassCountElement.innerText = data.grassCounter;
        grassEaterCountElement.innerText = data.grassEaterCounter;
        gishatichCountElement.innerText = data.gishatichCounter;
        peopleCountElement.innerText = data.peopleCounter;
        creatorCountElement.innerText = data.creatorCounter;

        frameRate(8);
        createCanvas(matrix[0].length * side, matrix.length * side);
        background('#acacac');
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {

                if (matrix[y][x] == 1) {
                    // fill("green");
                    if (weath == "spring") {
                        fill("green")
                    }
                    else if(weath == "summer") {
                        fill("#bcf542")
                    }
                    else if(weath == "autumn") {
                        fill("#ffbe4d")
                    }
                    else if(weath == "winter") {
                        fill("white")
                    }
                }
                else if (matrix[y][x] == 2) {
                    fill("yellow");
                    /*if (weath == "spring") {
                        fill("yellow")
                    }
                    else if(weath == "summer") {
                        fill("#966208")
                    }
                    else if(weath == "autumn") {
                        fill("lightgray")
                    }
                    else if(weath == "winter") {
                        fill("#383636")
                    }*/
                }
                else if (matrix[y][x] == 3) {
                    fill("black");
                    /*if (weath == "spring") {
                        fill("#401d1d")
                    }
                    else if(weath == "summer") {
                        fill("#9c6565")
                    }
                    else if(weath == "autumn") {
                        fill("#381f1f")
                    }
                    else if(weath == "winter") {
                        fill("black")
                    }*/
                }
                else if (matrix[y][x] == 4) {
                    //fill("blue");
                    if (weath == "spring") {
                        fill("cyan")
                    }
                    else if(weath == "summer") {
                        fill("lightblue")
                    }
                    else if(weath == "autumn") {
                        fill("blue")
                    }
                    else if(weath == "winter") {
                        fill("darkblue")
                    }
                }
                else if (matrix[y][x] == 5) {
                    //fill("magenta");
                    if (weath == "spring") {
                        fill("magenta")
                    }
                    else if(weath == "summer") {
                        fill("red")
                    }
                    else if(weath == "autumn") {
                        fill("pink")
                    }
                    else if(weath == "winter") {
                        fill("#acacac")
                    }
                }
                else if (matrix[y][x] == 0) {
                    fill("#acacac");
                }

                rect(x * side, y * side, side, side);
            }
        }
    }

}
function kill() {
    socket.emit("kill")
}
function addGrass() {
    socket.emit("add grass")
}
function addGrassEater() {
    socket.emit("add grassEater")
}

function addGishatich() {
    socket.emit("add gishatich")
}

function addPeople() {
    socket.emit("add people")
}

function addCreator() {
    socket.emit("add creator")
}

