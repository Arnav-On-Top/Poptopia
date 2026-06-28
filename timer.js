let timeLeft=30;
var timerInterval=null;
function startTimer() {
    clearInterval(timerInterval);   // stop old timer first
    timerInterval = setInterval(function() {
        timeLeft--;
        document.getElementById("timer").innerText = "Time: " + timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            clearInterval(gameInterval);
            timeLeft = 0;   // prevents negative values
            document.getElementById("timer").innerText = "Time: 0";
            alert("Game Over! Your score is " + score);
        }
    }, 1000);
}