const timer = document.getElementById('timer');

const startBtn =  document.getElementById('start'); 

const pauseBtn =  document.getElementById('pause'); 

const resumeBtn = document.getElementById('resume');

var startTime;
var pauseTime = 0;
var isPaused = false;
var currentTime= 0;
var elapsed;

function updateTimer(){

 elapsed = elapsedTime(startTime,pauseTime); //
  
  var seconds = Math.round(elapsed%60);

  elapsed = Math.floor(elapsed/60);

  var minutes =  Math.round(elapsed%60);

  elapsed = Math.floor(elapsed/60);

  var hours = Math.round(elapsed%24);

  elapsed = Math.floor(elapsed/24);


  timer.textContent = `${hours}: ${minutes}: ${seconds}`;

}


function elapsedTime(startTime,pauseTime){
  currentTime = Date.now();
  console.log('paused time',pauseTime/1000);
  return(currentTime - startTime - pauseTime)/1000;
}

startBtn.addEventListener('click', () => {

  startTime = Date.now(); //fetch the start time while clicked
  intervalId = setInterval(updateTimer,1000); //start updating the timer
  startBtn.disabled = true;

});

pauseBtn.addEventListener('click',()=>{

    clearInterval(intervalId);
  	
    pauseTime = Date.now() - currentTime;
    console.log('pause time',pauseTime/1000, 'start time', startTime/1000);
  
  });


  resumeBtn.addEventListener('click',()=>{
    // startTime = Date.now();
    intervalId = setInterval(updateTimer,1000);
 
  });


  




