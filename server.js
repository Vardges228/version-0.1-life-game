var express = require('express');
var app = express();
var server = require('http').createServer(app);
var socket = require('socket.io')(server);

let port = 8080
let mess_p = "Server started on port " + port
var messages = [];

app.use(express.static("."));

app.get('/', function (req, res) {
   res.redirect('index.html');
});

server.listen(port);
console.log(mess_p)

// Verables
num_g = 5
num_ge = 1
num_pr = 3
num_gb = 1
num_vr = 1

var side = 15;
// let sizes = []
let grassArr = []
let grassEaterArr = []
let predaTor = []
let goblin = []
let virus = []

// Objects
Grass = require("./grass")
GrassEater = require("./grass_eater")
Predator = require("./predatpr")
Goblin = require("./goblin")
Virus = require("./virus")
// found = require("./all.funct")

// functions
function generate(matLen, gr, grEat, pRed, GB, vr) {
   let matrix = []
   for (let i = 0; i < matLen; i++) {
      matrix[i] = []
      for (let j = 0; j < matLen; j++) {
         matrix[i][j] = 0
      }
   }

   for (let i = 0; i < gr; i++) {
      let x = Math.floor(Math.random() * matLen)
      let y = Math.floor(Math.random() * matLen)
      if (matrix[y][x] == 0) {
         matrix[y][x] = 1
      }
   }
   for (let i = 0; i < grEat; i++) {
      let x = Math.floor(Math.random() * matLen)
      let y = Math.floor(Math.random() * matLen)

      if (matrix[y][x] == 0) {
         matrix[y][x] = 2
      }
   }
   for (let i = 0; i < pRed; i++) {
      let x = Math.floor(Math.random() * matLen)
      let y = Math.floor(Math.random() * matLen)

      if (matrix[y][x] == 0) {
         matrix[y][x] = 3;
      }
   }
   for (let i = 0; i < GB; i++) {
      let x = Math.floor(Math.random() * matLen)
      let y = Math.floor(Math.random() * matLen)

      if (matrix[y][x] == 0) {
         matrix[y][x] = 4;
      }
   }

   for (let i = 0; i < vr; i++) {
      let x = Math.floor(Math.random() * matLen)
      let y = Math.floor(Math.random() * matLen)

      if (matrix[y][x] == 0) {
         matrix[y][x] = 5;
      }
   }
   return matrix
}
function createOBJ(matrix) {
   for (var y = 0; y < matrix.length; y++) {
      for (var x = 0; x < matrix[y].length; x++) {

         if (matrix[y][x] == 1) {
            let gr = new Grass(x, y, matrix, grassArr)
            grassArr.push(gr)
         }
         else if (matrix[y][x] == 2) {
            let gr = new GrassEater(x, y, matrix, grassEaterArr)
            grassEaterArr.push(gr)
         }
         else if (matrix[y][x] == 3) {
            let gr = new Predator(x, y, matrix, predaTor)
            predaTor.push(gr)
         }
         else if (matrix[y][x] == 4) {
            let gr = new Goblin(x, y, matrix)
            goblin.push(gr)
         }
         else if (matrix[y][x] == 5) {
            let gr = new Virus(x, y, matrix)
            virus.push(gr)
         }
      }
   }
}
function game() {
   for (var i in grassArr) {
      grassArr[i].mul()
   }
   for (let i in grassEaterArr) {
      grassEaterArr[i].eat()
      // console.log(lol);
   }
   for (let i in predaTor) {
      predaTor[i].eat()
   }
   for (let i in goblin) {
      goblin[i].move()
      goblin[i].do_spawn(grassArr.length, grassEaterArr.length, predaTor.length)
   }
   for (let i in virus) {
      virus[i].move()
      virus[i].viruss()
   }
}

// code

socket.on('connection', (stream) => {
   setInterval(() => {
      console.log('Sending matrix');
      GenMatrix = generate(15, num_g, num_g, num_pr, num_gb, num_vr)
      normMatrix = createOBJ(GenMatrix)
      game()
      stream.emit('matrix', GenMatrix)
   }, 300);
});