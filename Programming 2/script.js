function setup() {
    var weath = 'winter'
    var socket = io();
    var side = 20;
    var matrix = []
    let grassCountElement = document.getElementById('grassCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let gishatichCountElement = document.getElementById('gishatichCount');
    let peopleCountElement = document.getElementById('peopleCount');
    let creatorCountElement = document.getElementById('creatorCount');

    socket.on("data", draw)

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
    }

}


