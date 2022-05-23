document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("game-canvas");
    canvasEl.width = 400;
    canvasEl.height = 400;

    const ctx = canvasEl.getContext("2d");
    ctx.fillStyle = "grey";
    ctx.fillRect(0, 0, 400, 400);
})