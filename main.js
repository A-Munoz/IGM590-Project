    'use strict'
      const canvas = document.querySelector( 'canvas' )
      const ctx = canvas.getContext( '2d' )        
    
///////////////////////////// GRID ////////////////////////////////////////////////////////
      const width = 400
      const height = 400

      let grid = []
      let temp = []
      
      let bgColor = '#DDDDDD'
      let cColor = '#C73E1D'

      canvas.width = width
      canvas.height = height

      for( let y = 0; y < height; y++ ) {
        grid[ y ] = []
        temp[ y ] = [] 

        for( let x = 0; x < width; x++ ) {
          grid[ y ][ x ] = Math.round( Math.random() )
          temp[ y ][ x ] = 0 
        }
      }

//Sets the state of the new cells
    function StateChange( cellOne, cellTwo, cellThree, cellFour) {
        
        if(cellOne == 1){ //Cell One On
            
            if(cellTwo == 1){ //Cell Two On
                
                if(cellThree == 1){ //Cell Three On
                    
                    if(cellFour == 1){ //Cell Four On
                        return 0
                    }
                    else{  //Cell Four Off
                        return 1
                    }
                    
                }
               else{ //Cell Three Off
                          
                    if(cellFour == 1){ //Cell Four On
                        return 1
                    }
                    else{ // Cell Four Off
                        return 1
                    }
                    
               }  
                
            }
            else{   // Cell Two Off
                
                if(cellThree == 1){ // Cell Three On
                    
                    if(cellFour == 1){ // Cell Four On
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
        
    }

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
   
            //Check which neightbors are alive and are not 
            let tL, tM, tR, mL ,mR ,bL , bM ,bR 
 
            if(y == 0){
                if(x == 0){
                    
                 
                     tM = grid[height-1][x] //topMiddle
                   
                     mL = grid[y][width-1] //MiddleLeft
                     mR =grid[y][x+1] //MiddleRight
              
                     bM =grid[y+1][x] //BottomMiddle
                    
                }
                else if(x == width){
                   
                     tM = grid[height-1][x] //topMiddle
                    
                     mL = grid[y][x-1] //MiddleLeft
                     mR =grid[y][0] //MiddleRight
                   
                     bM =grid[y+1][x] //BottomMiddle
                
                }
                else{
        
                     tM = grid[height-1][x] //topMiddle
             
                     mL = grid[y][x-1] //MiddleLeft
                     mR =grid[y][x+1] //MiddleRight
                   
                     bM =grid[y+1][x] //BottomMiddle
                  
                }
            }
            else if(y == (width-1)){
                if(x == 0){
              
                     tM = grid[y-1][x] //topMiddle
                
                     mL = grid[y][width-1] //MiddleLeft
                     mR =grid[y][x+1] //MiddleRight
                 
                     bM =grid[0][x] //BottomMiddle
              
                }
                else if(x==width){
            
                     tM = grid[y-1][x] //topMiddle
                
                     mL = grid[y][x-1] //MiddleLeft
                     mR =grid[y][0] //MiddleRight
                
                     bM =grid[0][x] //BottomMiddle
                 
                }
                else{
               
                     tM = grid[y-1][x] //topMiddle
             
                     mL = grid[y][x-1] //MiddleLeft
                     mR =grid[y][x+1] //MiddleRight
                 
                     bM =grid[0][x] //BottomMiddle
                
                }
                
            }
            else if(x == 0){
                  
                     tM = grid[y-1][x] //topMiddle
                    
                     mL = grid[y][width-1] //MiddleLeft
                     mR =grid[y][x+1] //MiddleRight
                 
                     bM =grid[y+1][x] //BottomMiddle
         
            }
            else if(x == width){
                     tM = grid[y-1][x] //topMiddle

                     mL = grid[y][x-1] //MiddleLeft
                     mR =grid[y][0] //MiddleRight
            
                     bM =grid[y+1][x] //BottomMiddle
                
            }

            else{
          
                     tM = grid[y-1][x] //topMiddle
               
                     mL = grid[y][x-1] //MiddleLeft
                     mR =grid[y][x+1] //MiddleRight
      
                     bM =grid[y-1][x] //BottomMiddle
       
            }
            
            //Does the Cell live or become Alive
          /*  liveCount =  tM + mL +mR+ bM //Add up the population
            if(liveCount >= 3){ //Dies if over populated or underpopulated
                temp[x][y] = 0
            }
            else{ //Become Alive due to repopulation or continues to live
                temp[x][y]= 1
            }*/
            
            temp[y][x] = StateChange(tM, mR, mL, bM)
            
        }
            
        }

        }  

        // after for loop, swap grid and temp arrays
        let swap = grid
        grid = temp
        temp = swap
         }
      
      let count = 0 
      let draw = function() {
        runAutomata()
  
        ctx.fillStyle = bgColor
        ctx.fillRect( 0,0,width,height )
        ctx.fillStyle = cColor


        for( let y = 0; y < height; y++ ) {
          for( let x = 0; x < width; x++ ) {
            if( grid[ y ][ x ] === 1 ) {
              ctx.fillRect( x,y,1,1 ) 
            } 
          }
        }
         
        window.requestAnimationFrame( draw )
      }
            
//////////////////////////////////// SOUND ///////////////////////////////////////////
    
window.AudioContext = window.AudioContext||window.webkitAudioContext
var context = new AudioContext()
    
        
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
        
        
     window.setInterval(function(){ 
         
            var kick = new Kick(context)
         
            var snare = new Snare(context)
         
            var now = context.currentTime
         
         kick.trigger(now) 
         kick.trigger(now +.25)
         kick.trigger(now + .75)
         
         snare.trigger(now + 1)
         
         kick.trigger(now + 1.75)
         kick.trigger(now + 1.85)  
         
         //Change the Color the cells and canvas
         if(cColor == '#C73E1D'){
             cColor = '#A6D49F'
             bgColor = '#333232'
         }
         else{
              cColor = '#C73E1D'
              bgColor = '#DDDDDD'
         }
         
     }, 2000)

/////////////////////////////////////////////////////////////////////////////////////////////
      
      window.requestAnimationFrame( draw )
      