let found = require("./all.funct")

module.exports = class Grass extends found{

    constructor(x, y, matrix, matrixN) {
        return super(x, y, matrix, matrixN);
    }
    chooseCell(character) {
        return super.chooseCell(character)
    }

    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell && this.multiply >= 8) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;

            var newGrass = new Grass(newX, newY, 1);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }

}

