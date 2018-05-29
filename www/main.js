// Klikker på startknappen og første del begynner å telle ned samtidig som startknappen 



var button = document.querySelector(".button");
button.addEventListener("click", start);

function start(event){
    
    var bilde = document.querySelector(".bilde");
    bilde.setAttribute('src', 'img/stillbilde_bg.gif');
    setVisible(document.getElementById('info_txt'), true);
    setVisible(document.getElementById('startBtn'), false);
    changeTxt('The pasta is undercooked');
    setTimeout(changeTxt, 7000, 'Al dente');
    setTimeout(changeTxt, 12000, 'Overcooked');
}

function setVisible(element,visible){
    if (visible){
        element.className = element.className.replace('hidden','');
        element.className += element.className.length > 0 ? ' visible' : 'visible'
    }
    else {
        element.className = element.className.replace('visible','');
        element.className += element.className.length > 0 ? ' hidden' : 'hidden'
    }
}
      
function changeTxt (message){
    document.getElementById('info_txt').innerHTML = message;
}




/*

var duration={};

duration.min=0;
duration.sec=3;



startButton.addEventListener("click", knappetrykkefunksjon);

function knappetrykkefunksjon(event){
    console.log(event);
    
    
//skjule knappen etter at den er trykke på
    
    startButton.classList.add("hidden");
    unitTextObject.classList.add("hidden");
    
    body.classList.add("active");
   
// start intervall timer
    
    var intervalObj=setInterval(handleInterval, 1000);
    
    function handleInterval(){
        
        if(duration.min== 0 && duration.sec==0){
            
            clearInterval(intervalObj);
            playAlarm();
            
        }else{
            
            countDown();
            showDuration();
        }
    }
    
    
    }

function playAlarm(){
    timeTextObject.textContent = "Grattis";
    setTimeout (resetClock, 3000);
    
}

function resetClock(){
    
    duration.min =25;
    timeTextObject.textContent=duration.min;
    
    startButton.classList.remove("hidden");
    unitTextObject.classList.remove("hidden");
    body.classList.remove("active");
    
}


//Nedtellingsfunksjon

function countDown(){
    
    duration.sec = duration.sec -1;
    
    if(duration.sec < 0){
        duration.min=duration.min -1;
        duration.sec=59;
    }
    console.log(duration);
    
}
    
    function showDuration(){
        
        var min=duration.min;
        var sec=duration.sec;
        
        if(min<10){
            min="0" + min;
        }
        
        if(sec < 10){
            sec="0" + sec;
        }
        timeTextObject.textContent=min + ":" + sec;
    }



*/



