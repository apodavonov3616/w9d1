console.log("Webpack is working!")

const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");
const GameView = require("./game_view.js")

document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("game-canvas");
    canvasEl.width = 400;
    canvasEl.height = 400;

    const ctx = canvasEl.getContext("2d");
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 400, 400);

    const game1 = new Game()
    game1.draw(ctx)

    const gameview1 = new GameView(game1, ctx)
    // console.log(gameview1)
    gameview1.start()
    // console.log(game1.start)
})

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Game = Game;
window.GameView = GameView;