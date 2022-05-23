console.log("Webpack is working!")

// const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");



document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("game-canvas");
    canvasEl.width = 400;
    canvasEl.height = 400;

    const ctx = canvasEl.getContext("2d");
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 400, 400);
})

window.MovingObject = MovingObject;