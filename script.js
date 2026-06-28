let score=0;
let gameInterval;
let highScore=localStorage.getItem("highScore") ||0;
document.getElementById("high-score").innerText="High Score: "+highScore;
function startGame() {
    clearInterval(gameInterval);
    clearInterval(timerInterval);
    score=0;
    timeLeft=30;
    document.getElementById("score").innerText="Score: 0";
    document.getElementById("timer").innerText="Time: 30";
    document.getElementById("message").innerText="";
    document.getElementById("game-area").innerHTML="";
    startTimer();
    gameInterval=setInterval(function() {
        createBalloon();
    }, 1000);
}
function pauseGame() {
    clearInterval(timerInterval);
    clearInterval(gameInterval);
    document.getElementById("message").innerText="Game Paused";
}
function resetGame() {
    clearInterval(timerInterval);
    clearInterval(gameInterval);
    score=0;
    timeLeft=30;
    document.getElementById("score").innerText="Score: 0";
    document.getElementById("timer").innerText="Time: 30";
    document.getElementById("message").innerText="Game Reset!";
    document.getElementById("game-area").innerHTML="";
}