var obstaclecoorX;
var obstaclecoorY;
var stoppingPoint;
stoppingPoint = 750;
//document.querySelector("[obstacle]").style.left = (Math.floor(Math.random() * 2000) + 1) + "px";
window.addEventListener("load", function(){
    setInterval(function(){
        obstaclecoorX = parseInt(document.querySelector("[obstacle]").style.left.split("px")[0]);
        obstaclecoorY = parseInt(document.querySelector("[obstacle]").style.top.split("px")[0]);
        //document.querySelector("[obstacle]").style.top = "10px";
        console.log(obstaclecoorX.toString())
        //

    },10)
})
setInterval(function(){
    if(obstaclecoorY<stoppingPoint){


    document.querySelector("[obstacle]").style.top = `${i.toString()}px`
    i+=obstacleVel.y;
    obstacleVel.y+=0.05;
    console.log(obstaclecoorY)
    console.log("Hewo!")
        
    } else {

        //

            score++
            setTimeout(function(){
                document.querySelector("[obstacle]").style.left = (Math.floor(Math.random() * 1272) + 1) + "px";
                document.querySelector("[obstacle]").style.top = "-400px";
                
                i=-400;
                obstacleVel.y = 0;
                                console.log("Chow" + obstacleVel)

            },1000)
            console.log(score)
            console.log("Hi!")

        //

    }


},)




var i = -400;
var obstacleVel = {
    y: 0,
}




//Math.floor((Math.random()*2000) + 1) + "px"
//the millisecons above need to match the amount of seconds in the obstacle css code - animation-duration1*/