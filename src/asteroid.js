const MovingObject = require("./moving_object.js");
const Util = require("./util.js");


function Asteroid(options) {
    this.game = options.game;
    this.color = "grey"
    this.radius = 20
    this.pos = options.pos
    this.vel = Util.randomVec(10)
}


Util.inherits(Asteroid, MovingObject)

module.exports = Asteroid;