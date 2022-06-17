socket = io();
matrix = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]

socket.on('matrix', (stream) => {
    console.log("Matreix here");
    matrix = stream;
    console.log(stream)
});
var side = 15;
let grassArr = []
let grassEaterArr = []
let predaTor = []
let goblin = []
let virus = []

function setup() {
    frameRate(3);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    // for (var y = 0; y < matrix.length; y++) {
    //     for (var x = 0; x < matrix[y].length; x++) {

    //         if (matrix[y][x] == 1) {
    //             let gr = new Grass(x, y)
    //             grassArr.push(gr)
    //         }
    //         else if (matrix[y][x] == 2) {
    //             let gr = new GrassEater(x, y)
    //             grassEaterArr.push(gr)
    //         }
    //         else if (matrix[y][x] == 3) {
    //             let gr = new Predator(x, y)
    //             predaTor.push(gr)
    //         }
    //         else if (matrix[y][x] == 4) {
    //             let gr = new Goblin(x, y)
    //             goblin.push(gr)
    //         }
    //         else if (matrix[y][x] == 5) {
    //             let gr = new Virus(x, y)
    //             virus.push(gr)
    //         }
    //     }
    // }

}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");

                console.log("gr", grassArr.length);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");

                // console.log(get_object);

            }
            else if (matrix[y][x] == 2) {
                console.log("gr_e", grassEaterArr.length);
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                console.log("pr", predaTor.length);
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
            }
            else if (matrix[y][x] == 5) {
                fill("#66ff33");
            }
            rect(x * side, y * side, side, side);


        }
    }
    
    // for (var i in grassArr) {
    //     grassArr[i].mul()
    // }
    // for (let i in grassEaterArr) {
    //     grassEaterArr[i].eat()
    //     // console.log(lol);
    // }
    // for (let i in predaTor) {
    //     predaTor[i].eat()
    // }
    // for (let i in goblin) {
    //     goblin[i].move()
    //     goblin[i].do_spawn(grassArr.length, grassEaterArr.length, predaTor.length)
    // }
    // for (let i in virus) {
    //     virus[i].move()
    //     virus[i].viruss()
    //     // goblin[i].do_spawn(grassArr.length, grassEaterArr.length, predaTor.length)
    // }
}

