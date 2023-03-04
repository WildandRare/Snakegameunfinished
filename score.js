var score = 0;
function updateScore(){
    //  document.querySelector("[scoredisplay]").innerHTML = "<br>"+score;
    document.querySelector("[scoredisplay]").innerHTML = "<br>"+ obstaclecoorY + " - " + snakeY
}
window.addEventListener("load",function(){
    function updateScore(){
        //  document.querySelector("[scoredisplay]").innerHTML = "<br>"+score;
        document.querySelector("[scoredisplay]").innerHTML = "<br>"+ obstaclecoorY + " - " + snakeY
    }
})


setInterval(function(){updateScore()})

updateScore()
//var i = 0;
//below is making sure the score display looks good on all devices
/*setInterval(function(){
    if (window.innerHeight>window.innerWidth) {
        document.querySelector("[scoredisplay]").style.width="100%";
        document.querySelector("[scoredisplay]").style.height="9%";
        document.querySelector("[scoredisplay]").style.fontSize="4.3vw";
    }
}, 3)*/