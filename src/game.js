const Asteroid = require("./asteroid.js");
const Util = require("./util.js");

function Game() {

this.asteroids = [];
this.addAsteroids();
};

Game.DIM_X = 400;
Game.DIM_Y = 400;
Game.NUM_ASTEROIDS = 10;

Game.prototype.addAsteroids = function (){
    for (let i=0; i< Game.NUM_ASTEROIDS; i++) {
        this.asteroids.push(new Asteroid({pos: [Game.DIM_X* Math.random(), Game.DIM_Y* Math.random()]}))
    }
}

Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y)
    ctx.fillStyle= "blue";
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
    for (i=0; i<this.asteroids.length; i++) {
        this.asteroids[i].draw(document.getElementById("game-canvas").getContext("2d"))
    }
}

Game.prototype.moveObjects = function () {
    for (i=0; i<this.asteroids.length; i++) {
        this.asteroids[i].move()
    }
}

Game.prototype.wrap = function(pos) {
    for (i=0; i< 2; i++) {
        if (pos[i] > 400) {
            pos[i] = 0
        }
        if (pos[i] < 0) {
            pos[i] = 400
        }
    }
    return pos
}

module.exports = Game