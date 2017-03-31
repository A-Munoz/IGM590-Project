
"use strict";

var app = app || {};

app.main = {
    //properties
    
    //Canvas properties
    WIDTH: 1000,
    HEIGHT: 1000,
    canvas: undefined,
    ctx: undefined,
    //Gradient Values
    gx1: 0,
    gx2: window.innerWidth,
    gy1: 0,
    gy2: window.innerHeight,
    aud: new AudioContext(),
    osc: aud.createOscillator(),
    grid: [],
    temp:[],
    
    
    init: function(){
        console.log("app.main.init() called")
        this.canvas = document.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.WIDTH = window.innerWidth;
        this.HEIGHT = window.innerHeight;
        this.canvas.width = this.WIDTH;
        this.canvas.height = this.HEIGHT;
        
        
           canvas.width = width
      canvas.height = height

      for( let y = 0; y < height; y++ ) {
        grid[ y ] = []
        temp[ y ] = [] /* ADDED AFTER CLASS */

        for( let x = 0; x < width; x++ ) {
          grid[ y ][ x ] = Math.round( Math.random() )
          temp[ y ][ x ] = 0 /* ADDED AFTER CLASS */
        }
      }
        
        this.draw();
        
        window.requestAnimationFrame( draw )
    },
    
    //Function
    update: function(){
        
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
            
        let tM,mL,mR,bM
        
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
        
        let liveCount = tM + mR + mL + bM
        
        if(liveCount >= 3  ){
            temp[x][y] = 0
        }
        else{
            temp[x][y] = 1
        }
                }
                }
         }
        
        let swap = grid
        grid = temp
        temp = swap
    
    },
    
    draw: function(){
        
         this.update();
        
        ctx.fillStyle = '#e0e0e0'
        ctx.fillRect( 0,0,width,height )
        ctx.fillStyle = '#329999'
        
        
           for( let y = 0; y < height; y++ ) {
                for( let x = 0; x < width; x++ ) {
                    if( grid[ y ][ x ] === 1 ) {
                        ctx.fillRect( x,y,1,1 ) 
            } 
          }
        }
        
        window.requestAnimationFrame( draw )
    }
    
    stateChanger: function(cellOne, cellTwo, cellThree, cellFour){
        
        switch(cellOne){
                
        }

    
    },
    
};