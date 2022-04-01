let LivingCreature = require('./LivingCreature')

module.exports = class Creator extends LivingCreature{
    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];

        if (newCell && this.multiply >= 20) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;

            var newCreator = new Creator(newX, newY, this.index);
            creatorArr.push(newCreator);
            this.multiply = 0;
        }
    }
}
