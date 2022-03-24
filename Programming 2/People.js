let LivingCreature = require('./LivingCreature')

module.exports = class People extends LivingCreature{
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 8;
    }

    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }

    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];


        if (newCell && this.energy >= 12) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;

            var newPeople = new People(newX, newY, this.index);
            peopleArr.push(newPeople);
        }
    }

    move() {
        var emptyCells = this.chooseCell(0);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;

            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;

            this.energy--;
        }

        this.die()
        if (!newCell) {
            this.energy--;
        }
    }

    eat() {
        var emptyCells = this.chooseCell(3);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;

            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;

            this.energy++;

            for (var i in gishatichArr) {
                if (newX == gishatichArr[i].x && newY == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1);
                    break;
                }
            }

            this.mul()
        } else {
            this.move()
        }
    }

    die() {
        if (this.energy <= 0) {
            for (var i in peopleArr) {
                if (this.x == peopleArr[i].x && this.y == peopleArr[i].y) {
                    peopleArr.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                    break;
                }
            }
        }
    }

}
