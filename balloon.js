function createBalloon(){
    let balloon=document.createElement("div");
    balloon.classList.add("balloon");
    let randomLeft=Math.floor(Math.random()*90);
    balloon.style.left=randomLeft+"%";
    let colors=["red", "blue", "green", "yellow", "purple", "orange"];
    balloon.style.background=colors[Math.floor(Math.random()*colors.length)];
    document.getElementById("game-area").appendChild(balloon);
    let bottomValue=0;
    let moveBalloon=setInterval(function(){bottomValue=bottomValue+5;
        balloon.style.bottom=bottomValue+"px";
        if (bottomValue>window.innerHeight) {
            balloon.remove();
            clearInterval(moveBalloon);
        }
    }, 100);
    balloon.onclick=function() {
        score++;
        document.getElementById("score").innerText="Score: "+score;
        if (score>highScore){
            highScore=score;
            localStorage.setItem("highScore", highScore);
            document.getElementById("high-score").innerText="High Score: "+highScore;
        }
        let randomMessage=messages[Math.floor(Math.random()*messages.length)];
        document.getElementById("message").innerText=randomMessage;
        setTimeout(function() {
            document.getElementById("message").innerText="";
        }, 1000);
        balloon.remove()
        clearInterval(moveBalloon);
    };
}