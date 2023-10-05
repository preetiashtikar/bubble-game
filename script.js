var panelBody = document.getElementById("panelBody");
var hitNumber = document.getElementById("hitNumber");
var timerNumber = document.getElementById("timerNumber");
var scoreVal = document.getElementById("scoreVal");


var rnHit,clicketBubble,randomNumberHit;
var timer = 60;
var score = 0;

function generateBubble(){
    var clutter = '';
    for(var i = 1; i<=72; i++){
        var randomNumber = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${randomNumber}</div>`
    }

    panelBody.innerHTML = clutter;
}

function gererateHit(){
    rnHit = Math.floor(Math.random()*10);
    hitNumber.innerHTML = rnHit
}

function updateTime(){
    var timerInterval = setInterval(function(){
            if(timer>0){
            timer--
            timerNumber.textContent = timer
            }
            else{
                clearInterval(timerInterval)
                panelBody.innerHTML = `<h2 id="timeOut">Oops... Time Out!!!!!<br><br>Your Score is ${score}</h2>`
            }
        },1000)
}

function updateScore(){
    score += 10;
    scoreVal.innerHTML = score
}


panelBody.addEventListener('click', function(event){
    clicketBubble = (Number(event.target.textContent))
    if(rnHit == clicketBubble){
        updateScore()
    }
    generateBubble()
    gererateHit()

})

generateBubble()
gererateHit()
updateTime()
    
