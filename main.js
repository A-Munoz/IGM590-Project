////////////////////////////////
// IGM-590 
//Project 1
//Name: Alexia Munoz
//Due: 4/10/2017
////////////////////////////////

    'use strict'
      const canvas = document.querySelector( 'canvas' )
      const ctx = canvas.getContext( '2d' )    
    
///////////////////////////// GRID ////////////////////////////////////////////////////////
      const width = 200
      const height = 200

      let grid = []
      let temp = []
      
      let bgColor = '#DDDDDD'
      let cColor = '#C73E1D'
      let currentPattern = 1
      let musicPattern = 1
    
      let beatOne = ['5','2','1','3','1','4']
      let beatTwo = ['6','','5']
      let beatThree = ['5','3','3','1']
      
      
      //Changable Values
      let colorWhite ='#DDDDDD' // White
      let colorOrange ='#C73E1D' // orange
      let colorGrey = '#333232' //grey
      let colorGreen = '#A6D49F' //green
      
      let timerOne = 1000;
      let timerTwo = 1500;
      let timerThree =2000;
      
      let mouseX;
      let mouseY;
      

      canvas.width = width;
      canvas.height = height;
      
      
      document.onmousemove = function(e){
          let mouse = getMousePos(canvas, e)
          mouseX = mouse.x
          mouseY = mouse.y
      }
   

      for( let y = 0; y < height; y++ ) {
        grid[ y ] = []
        temp[ y ] = [] 

        for( let x = 0; x < width; x++ ) {
          grid[ y ][ x ] = Math.round( Math.random() )
          temp[ y ][ x ] = 0 
        }
      }

//Sets the state of the new cells
  /*  function fourStateChange( cellOne, cellTwo, cellThree, cellFour) {
       
        
            if(cellOne === 1){ //Cell One On
            
            if(cellTwo === 1){ //Cell Two On
                
                if(cellThree === 1){ //Cell Three On
                    
                    if(cellFour === 1){ //Cell Four On
                        return 0
                    }
                    else{  //Cell Four Off
                        return 1
                    }
                    
                }
               else{ //Cell Three Off
                          
                    if(cellFour === 1){ //Cell Four On
                        return 1
                    }
                    else{ // Cell Four Off
                        return 1
                    }
                    
               }  
                
            }
            else{   // Cell Two Off
                
                if(cellThree === 1){ // Cell Three On
                    
                    if(cellFour === 1){ // Cell Four On
                        return 0
                    }
                    else{ //Cell Four Off
                        return 1
                    }
                    
                }
               else{ //Cell Three Off
                          
                    if(cellFour == 1){ // Cell Four On
                        return 1
                    }
                    else{ // Cell Four Off
                        return 1
                    }
                    
               }
                 
            } 
            
        }
                     else{
            return 0
        }
    
        
        return 0
        
    }*/

      let runAutomata = function() {
        // loop through every cell
        // look at cell neighbors and count the live ones
        // determine next cell state based on neighbor count
        // set temp[y][x] -> new cell state
        if (grid == undefined){  //incase of error
               for( let y = 0; y < height; y++ ) {
        grid[ y ] = []
        temp[ y ] = [] 

        for( let x = 0; x < width; x++ ) {
          grid[ y ][ x ] = Math.round( Math.random() )
          temp[ y ][ x ] = 0 
        }
        }
     }
        else{
        for( let y = 0; y < height; y++ ) {
        
        for( let x = 0; x < width; x++ ) {
            

            let liveCount = 0
   
       //Check which neightbors are alive and are not */
            let tL, tM, tR, mL ,mR ,bL , bM ,bR 
         
            if(y == 0){
                if(x == 0){
                    
                     tL = grid[height-1][width-1] //topLeft
                     tM = grid[height-1][x] //topMiddle
                     tR = grid[height-1][x+1] //topRight
                     mL = grid[y][width-1] //MiddleLeft
                     mR =grid[y][x+1] //MiddleRight
                     bL = grid[y+1][width-1]  //BottomLeft
                     bM =grid[y+1][x] //BottomMiddle
                     bR =grid[y+1][x+1] //BottomRight
                }
                else if(x == width){
                     tL = grid[height-1][x-1] //topLeft
                     tM = grid[height-1][x] //topMiddle
                     tR = grid[height-1][0] //topRight
                     mL = grid[y][x-1] //MiddleLeft
                     mR =grid[y][0] //MiddleRight
                     bL = grid[y+1][x-1]  //BottomLeft
                     bM =grid[y+1][x] //BottomMiddle
                     bR =grid[y+1][0] //BottomRight
                }
                else{
                     tL = grid[height-1][x-1] //topLeft
                     tM = grid[height-1][x] //topMiddle
                     tR = grid[height-1][x+1] //topRight
                     mL = grid[y][x-1] //MiddleLeft
                     mR =grid[y][x+1] //MiddleRight
                     bL = grid[y+1][x-1]  //BottomLeft
                     bM =grid[y+1][x] //BottomMiddle
                     bR =grid[y+1][x+1] //BottomRight
                }
            }
            else if(y == (width-1)){
                if(x == 0){
                     tL = grid[y-1][width-1] //topLeft
                     tM = grid[y-1][x] //topMiddle
                     tR = grid[y-1][x+1] //topRight
                     mL = grid[y][width-1] //MiddleLeft
                     mR =grid[y][x+1] //MiddleRight
                     bL = grid[0][width-1]  //BottomLeft
                     bM =grid[0][x] //BottomMiddle
                     bR =grid[0][x+1] //BottomRight
                     
                     musicPattern = 2
                }
                else if(x==width){
                     tL = grid[y-1][x-1] //topLeft
                     tM = grid[y-1][x] //topMiddle
                     tR = grid[y-1][0] //topRight
                     mL = grid[y][x-1] //MiddleLeft
                     mR =grid[y][0] //MiddleRight
                     bL = grid[0][x-1]  //BottomLeft
                     bM =grid[0][x] //BottomMiddle
                     bR =grid[0][0] //BottomRight
                }
                else{
                     tL = grid[y-1][x-1] //topLeft
                     tM = grid[y-1][x] //topMiddle
                     tR = grid[y-1][x+1] //topRight
                     mL = grid[y][x-1] //MiddleLeft
                     mR =grid[y][x+1] //MiddleRight
                     bL = grid[0][x-1]  //BottomLeft
                     bM =grid[0][x] //BottomMiddle
                     bR =grid[0][x+1] //BottomRight
                }
                
            }
            
            else if(x == 0){
                     tL = grid[y-1][width-1] //topLeft
                     tM = grid[y-1][x] //topMiddle
                     tR = grid[y-1][x+1] //topRight
                     mL = grid[y][width-1] //MiddleLeft
                     mR =grid[y][x+1] //MiddleRight
                     bL = grid[y+1][width-1]  //BottomLeft
                     bM =grid[y+1][x] //BottomMiddle
                     bR =grid[y+1][x+1] //BottomRight
            }
            
            else if(x == width){
                    tL = grid[y-1][x-1] //topLeft
                     tM = grid[y-1][x] //topMiddle
                     tR = grid[y-1][0] //topRight
                     mL = grid[y][x-1] //MiddleLeft
                     mR =grid[y][0] //MiddleRight
                     bL = grid[y+1][x-1]  //BottomLeft
                     bM =grid[y+1][x] //BottomMiddle
                     bR =grid[y+1][0] //BottomRight
            }

            
            else{
                    tL = grid[y-1][x-1] //topLeft
                     tM = grid[y-1][x] //topMiddle
                     tR = grid[y-1][x+1] //topRight
                     mL = grid[y][x-1] //MiddleLeft
                     mR =grid[y][x+1] //MiddleRight
                     bL = grid[y-1][x-1]  //BottomLeft
                     bM =grid[y-1][x] //BottomMiddle
                     bR =grid[y-1][x+1] //BottomRight
            }
            
         liveCount = tL + tM + tR + mL +mR+ bL+ bM+ bR //Add up the population
            switch(currentPattern){
                case 1: 
                    
                    if(liveCount > 5 || liveCount < 1){ //Dies if over populated or underpopulated
                        temp[x][y] = 0
                               }
                    else{ //Become Alive due to repopulation or continues to live
                        temp[x][y]= 1
                    }
                    
                    break;
                case 2: 
                    
                    if(liveCount > 8 || liveCount < 3){ //Dies if over populated or underpopulated
                        temp[x][y] = 0
                    }
                    else{ //Become Alive due to repopulation or continues to live
                        temp[x][y]= 1
                    }
                    
                    break;
                case 3: 
                    
                       if(liveCount > 7 || liveCount < 4){ //Dies if over populated or underpopulated
                            temp[x][y] = 0
                        }
                        else{ //Become Alive due to repopulation or continues to live
                            temp[x][y]= 1
                        }
                    
                    break;
                case 4: 
                    
                     if(liveCount > 6 || liveCount < 4){ //Dies if over populated or underpopulated
                            temp[x][y] = 0
                        }
                        else{ //Become Alive due to repopulation or continues to live
                            temp[x][y]= 1
                        }
                    
                    break;
                    
                case 5: //Revival Pattern
                    
                    if(liveCount > 5){ 
                        temp[x][y] = 0
                    } else{
                        temp[x][y]= 1
                    }
                    
                    break;
                default: 
                    
                        for( let x = 0; x < width; x++ ) {
                            grid[ y ][ x ] = Math.round( Math.random() )
                            temp[ y ][ x ] = 0 
                        }
                    
                    break;
            }
   
        }
            
        }

        }  

        // after for loop, swap grid and temp arrays
        let swap = grid
        grid = temp
        temp = swap
        
         }
 /////////////////////////////////// End of Grid //////////////////////////////////////////////     

            
//////////////////////////////////// SOUND ///////////////////////////////////////////
//Reference:
//https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/type

    
window.AudioContext = window.AudioContext||window.webkitAudioContext
var context = new AudioContext()
    
/////////////////////////////////////////////////////////////////////////
//https://dev.opera.com/articles/drum-sounds-webaudio/
function Kick(context) {
     
	this.context = context;
     
}

Kick.prototype.setup = function() {
    
	this.osc = this.context.createOscillator()
	this.gain = this.context.createGain()
	this.osc.connect(this.gain)
	this.gain.connect(this.context.destination)
}

Kick.prototype.trigger = function(time) {
    
	this.setup()

	this.osc.frequency.setValueAtTime(150, time)
	this.gain.gain.setValueAtTime(1, time)

	this.osc.frequency.exponentialRampToValueAtTime(0.01, time + 0.5)
	this.gain.gain.exponentialRampToValueAtTime(0.01, time + 0.5)

	this.osc.start(time)

	this.osc.stop(time + 0.5)

}
        
function Snare(context) {
	this.context = context
}

Snare.prototype.noiseBuffer = function() {
	var bufferSize = this.context.sampleRate
	var buffer = this.context.createBuffer(1, bufferSize, this.context.sampleRate)
	var output = buffer.getChannelData(0)

	for (var i = 0; i < bufferSize; i++) {
		output[i] = Math.random() * 2 - 1
	}

	return buffer;
};
        
Snare.prototype.setup = function() {
	this.noise = this.context.createBufferSource()
	this.noise.buffer = this.noiseBuffer()
	var noiseFilter = this.context.createBiquadFilter()
	noiseFilter.type = 'highpass'
	noiseFilter.frequency.value = 1000
	this.noise.connect(noiseFilter)

    
    this.noiseEnvelope = this.context.createGain()
    noiseFilter.connect(this.noiseEnvelope)

    this.noiseEnvelope.connect(this.context.destination)

        this.osc = this.context.createOscillator()
    this.osc.type = 'triangle'

    this.oscEnvelope = this.context.createGain()
    this.osc.connect(this.oscEnvelope);
    this.oscEnvelope.connect(this.context.destination);
    
};
        
Snare.prototype.trigger = function(time) {
	this.setup()

	this.noiseEnvelope.gain.setValueAtTime(1, time);
	this.noiseEnvelope.gain.exponentialRampToValueAtTime(0.01, time + 0.2)
	this.noise.start(time)

	this.osc.frequency.setValueAtTime(100, time)
	this.oscEnvelope.gain.setValueAtTime(0.7, time)
	this.oscEnvelope.gain.exponentialRampToValueAtTime(0.01, time + 0.1)
	this.osc.start(time)

	this.osc.stop(time + 0.2)
	this.noise.stop(time + 0.2)
};
///////////////////////////////////////////////////////////////////////////

///////////// Altered Examples ///////////////////////////////////////

function Snare2(context) {
	this.context = context
}

Snare2.prototype.noiseBuffer = function() {
	var bufferSize = this.context.sampleRate
	var buffer = this.context.createBuffer(1, bufferSize, this.context.sampleRate)
	var output = buffer.getChannelData(0)

	for (var i = 0; i < bufferSize; i++) {
		output[i] = Math.random() * 2 - 1
	}

	return buffer;
};
        
Snare2.prototype.setup = function() {
	this.noise = this.context.createBufferSource()
	this.noise.buffer = this.noiseBuffer()
	var noiseFilter = this.context.createBiquadFilter()
	noiseFilter.type = 'highshelf'
	noiseFilter.frequency.value = 100
	this.noise.connect(noiseFilter)

    
    this.noiseEnvelope = this.context.createGain()
    noiseFilter.connect(this.noiseEnvelope)

    this.noiseEnvelope.connect(this.context.destination)

        this.osc = this.context.createOscillator()
    this.osc.type = 'sine'

    this.oscEnvelope = this.context.createGain()
    this.osc.connect(this.oscEnvelope);
    this.oscEnvelope.connect(this.context.destination);
    
};
        
Snare2.prototype.trigger = function(time) {
	this.setup()

	this.noiseEnvelope.gain.setValueAtTime(1, time);
	this.noiseEnvelope.gain.exponentialRampToValueAtTime(0.01, time + 0.2)
	this.noise.start(time)

	this.osc.frequency.setValueAtTime(45, time)
	this.oscEnvelope.gain.setValueAtTime(0.2, time)
	this.oscEnvelope.gain.exponentialRampToValueAtTime(0.01, time + 0.1)
	this.osc.start(time)

	this.osc.stop(time + 0.2)
	this.noise.stop(time + 0.7)
};
  
function Expermental(context) {
     
	this.context = context;
     
}

Expermental.prototype.setup = function() {
    
	this.osc = this.context.createOscillator()
	this.gain = this.context.createGain()
	this.osc.connect(this.gain)
	this.gain.connect(this.context.destination)
}

Expermental.prototype.trigger = function(time, length) {
    
	this.setup()

	this.osc.frequency.setValueAtTime(-100, time)
	this.gain.gain.setValueAtTime(1, time)

	this.osc.frequency.exponentialRampToValueAtTime(1, time + 0.5)
	this.gain.gain.exponentialRampToValueAtTime(0.01, time + 0.5)

	this.osc.start(time)

	this.osc.stop(time + 0.8)

}
function Expermental2(context) {
     
	this.context = context;
     
}
Expermental2.prototype.setup = function() {
    
	this.osc = this.context.createOscillator()
	this.gain = this.context.createGain()
	this.osc.connect(this.gain)
	this.gain.connect(this.context.destination)
}

Expermental2.prototype.trigger = function(time, length) {
    
	this.setup()

	this.osc.frequency.setValueAtTime(-900, time)
	this.gain.gain.setValueAtTime(1, time)

	this.osc.frequency.exponentialRampToValueAtTime(0.5, time + 0.5)
	this.gain.gain.exponentialRampToValueAtTime(0.01, time + 0.5)

	this.osc.start(time)

	this.osc.stop(time + 0.8)

}
function Expermental3(context) {

	this.context = context

     
}
Expermental3.prototype.setup = function() {
    
	this.osc = this.context.createOscillator()
	this.gain = this.context.createGain()
	this.osc.connect(this.gain)
	this.gain.connect(this.context.destination)
}

Expermental3.prototype.trigger = function(time, length) {
    
	this.setup()

	this.osc.frequency.setValueAtTime(-1200, time)
	this.gain.gain.setValueAtTime(1, time)

	this.osc.frequency.exponentialRampToValueAtTime(.5, time + 0.5)
	this.gain.gain.exponentialRampToValueAtTime(0.01, time + 0.5)

	this.osc.start(time)

	this.osc.stop(time + length)

}
function Expermental4(context) {

	this.context = context

     
}
Expermental4.prototype.setup = function() {
    
	this.osc = this.context.createOscillator()
	this.gain = this.context.createGain()
	this.osc.connect(this.gain)
	this.gain.connect(this.context.destination)
}

Expermental4.prototype.trigger = function(time, length) {
    
	this.setup()

	this.osc.frequency.setValueAtTime(-1800, time)
	this.gain.gain.setValueAtTime(1, time)

	this.osc.frequency.exponentialRampToValueAtTime(.5, time + 0.5)
	this.gain.gain.exponentialRampToValueAtTime(0.01, time + 0.5)

	this.osc.start(time)

	this.osc.stop(time + length)

}

function beatCreation(pattern){
         
          console.log("test:",pattern)
          var number1 = pattern[1]
          console.log(number1)
            var kick = new Kick(context) 
            var snare = new Snare(context)
            var snare2 = new Snare2(context) // altered Snare
            var exp1 = new Expermental(context)
            var exp2 = new Expermental2(context)
            var exp3 = new Expermental3(context)
            var exp4 = new Expermental4(context)
            var now = context.currentTime
    
            console.log(pattern.length)
            let time = .25
    for (var i = 0; i < pattern.length; i++){
        
        console.log("beep")
        let number = pattern[i-1]
        console.log("test2",number)
        
        switch(number){
            case "1":
                exp1.trigger(now + time, )
                break;
            case "2":
                exp2.trigger(now +time, .5)
                exp2.trigger(now + time, .5)
                break;
            case "3":
                exp3.trigger(now + time, .5)
                break;
            case "4":
                snare.trigger(now + time, .5)
                break;
            case "5":
               snare2.trigger(now + time, .5)
                break;
            case "6":
                kick.trigger(now + time, .5)
                break;
            default:
                exp4.trigger(now + time, .5)
        }
        time += .25
    }
}

function stringParse(str){
    
    var tempArr = str.split(",")
    
    if(tempArr.count == 0){
        tempArr = str.split(" ")
    }
    return tempArr
}

//////////////////////////////
        
var beat = function(){
          
      var  intervalOne = setInterval(function(){ 

      beatCreation(beatOne)
         
         //Change the Color the cells and canvas
         if(cColor === colorOrange){
             cColor = colorGreen
             bgColor = colorGrey
         }
         else{
              cColor = colorOrange
              bgColor = colorWhite
         }
         
     }, timerOne)
         
    var  intervalTwo = setInterval(function(){ 
         beatCreation(beatTwo);
          
          if(currentPattern < 6){
              currentPattern ++
          }
          else{
              currentPattern = 1
          }
          
     }, timerTwo)
       
var intervalThree = setInterval(function(){ 
            console.log(beatThree) 
        beatCreation(beatThree);
        if(beatThree.count < 6){
            currentPattern = beatThree.count
        } else{
             currentPattern = Math.floor(Math.random() * 6) + 1 
        }

    

             
     }, timerThree)
            
     }

        
/////////////////////////////////////////////////////////////////////////////////////////////
 
///////////////////////////// DRAW FUNCTION //////////////////////////////////////////
function getMousePos(canvas, mouse) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: mouse.clientX - rect.left,
          y: mouse.clientY - rect.top
        };
      }
       
        beat()
      
      let draw = function() {
        runAutomata()
          
        ctx.fillStyle = bgColor
        ctx.fillRect( 0,0,width,height )
        ctx.fillStyle = cColor

        for( let y = 0; y < height; y++ ) {
          for( let x = 0; x < width; x++ ) {
              
                
               console.log(mouse)
                if( y == mouse.x && x == mouse.y ) {
                grid[x-1][y-1] = 0;
                grid[x-1][y] = 0;
                grid[x-1][y+1] = 0;
                grid[x][y-1] = 0;
                grid[x][y+1] = 0;
                grid[x+1][y+1] = 0;
                 grid[x+1][y] = 0;
                grid[x+1][y-1] = 0;
            } 
            if( grid[ y ][ x ] === 1 ) {
              ctx.fillRect( x,y,1,1 ) 
            } 
          }
        }
         
        window.requestAnimationFrame( draw )
      }
      
      window.requestAnimationFrame( draw )
     
      
/////////////////// USER INPUT ////////////////////////////////////////////////////
      
document.querySelector("#OneButton").onclick = function(){
    var colorValue = document.getElementById("colorOne").value
    colorOrange = colorChange(colorValue,colorOrange)
    
}
document.querySelector("#TwoButton").onclick = function(){
    var colorValue = document.getElementById("colorTwo").value
    colorWhite = colorChange(colorValue,colorWhite)
    
}
document.querySelector("#ThreeButton").onclick = function(){
    var colorValue = document.getElementById("colorThree").value
    colorGreen = colorChange(colorValue,colorGreen)
    
}
document.querySelector("#FourButton").onclick = function(){
    var colorValue = document.getElementById("colorFour").value
    colorGrey = colorChange(colorValue,colorGrey)

}

document.querySelector("#OneTimerButton").onclick = function(){
    var str = document.getElementById("timerOne").value
    beatOne = stringParse(str)
}
document.querySelector("#TwoTimerButton").onclick = function(){
    var str  = document.getElementById("timerTwo").value
   beatTwo = stringParse(str)
}
document.querySelector("#ThreeTimerButton").onclick = function(){
    var str = document.getElementById("timerThree").value
   beatThree = stringParse(str)
    
}



function clear(){
    clearInterval(intervalOne)
    clearInterval(intervalThree)
    clearInterval(intervalTwo)
}



//Valid hex check
///http://stackoverflow.com/questions/8027423/how-to-check-if-a-string-is-a-valid-hex-color-representation
function colorChange(value,color){
    var check = /^#[0-9A-F]{6}$/i.test(value)
    if(check === true){
        return value
    }

       return color
    
}
function timerCheck(value,current){
    if(value > 1000){
        return value
    }
    return current
}

/////////////// END OF USER INPUT //////////////////////////////////////////