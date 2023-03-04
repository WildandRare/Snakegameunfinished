var snakeX;
var snakeY;
window.addEventListener('mousemove', (event) => {
    console.log(event)

    for (let index = 1; index < 34; index++) {
        setTimeout(function(){
            document.querySelector(`[snake='${index}']`).style.left = event.pageX + "px";
            document.querySelector(`[snake='${index}']`).style.top = event.pageY + "px";
            if(index==1){
                snakeX = document.querySelector("[snake='1']").style.left.split("px")[0];
                snakeY = document.querySelector("[snake='1']").style.top.split("px")[0];
            }
        }, ((index*50)-50))
    }
});

window.addEventListener("load", function(){
    for (let index = 2; index < 35; index++) {
        var element;
        element = document.createElement("div")
        element.setAttribute("snake", index.toString())
        console.log(element);
        document.querySelector("[canvas]").appendChild(element);
    }
})

setInterval(function(){
    if(snakeX>(obstaclecoorX+30)&&snakeX<(obstaclecoorX+100)){
        alert("Collision detected in X!")
    }
}, 3000)
