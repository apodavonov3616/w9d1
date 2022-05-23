const MovingObject = require("./moving_object.js");
const Util = require("./util.js");

function Asteroid(options) {
    // this.color = "grey"
    // this.radius = 50
    // this.pos = options.pos
    // this.vel = Util.randomVec(10)
    console.log("hello")
}


Util.inherits(Asteroid, MovingObject)

module.exports = Asteroid;