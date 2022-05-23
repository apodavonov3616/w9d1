function MovingObject(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
}

MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color
    ctx.beginPath();
    ctx.arc(this.position[0], this.position[1], this.radius, 0, 2 * Math.PI, true);
    ctx.fill()
}

module.exports = MovingObject;