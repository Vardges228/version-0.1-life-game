let found = require("./all.funct")

module.exports = class Goblin extends found{
    constructor(x, y, matrix) {
        return super(x, y, matrix)
    }
    chooseCell(character) {
        return super.chooseCell(character)
    }
    move() {
        this.energy--
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x] ///kam 2 tiv@
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        }
    }

    spawn_gr_e() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;

            var newGrassEater = new GrassEater(newX, newY);
            grassEaterArr.push(newGrassEater);
            this.energy = 8
        }
    }
    spawn_pr() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;

            var newGrassEater = new Predator(newX, newY);
            predaTor.push(newGrassEater);
            this.energy = 8
        }
    }
    spawn_gr() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;

            var grass = new Grass(newX, newY);
            grassArr.push(grass);
            this.energy = 8
        }
    }

    do_spawn(g_size, gr_size, pr_size) {
        this.found = this.chooseCell(0)
        if (this.found && g_size <= 5 ) {
            this.spawn_gr()
            console.log("spawning grass")
        }
        if (this.found && gr_size <= 5 ){
            this.spawn_gr_e()       
            console.log("spawning grass eater")
        }
        if (this.found && pr_size <= 5 ){
            this.spawn_pr()
            console.log("spawning predator")
        }
        // let char = chooseCell(numbers_arr)
    }

}