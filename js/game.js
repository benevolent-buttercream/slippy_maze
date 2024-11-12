
var c = document.querySelector(`canvas`)
var ctx = c.getContext(`2d`)
var fps = 1000/60
var timer = setInterval(main, fps)

var gameScenes = ["start", "game", "gameOver"];
var currentScene = gameScenes[0];

/*------------Declare Variables Here--------*/

var avatar = new GameObject();
avatar.color = `#ff0099`;
avatar.vx = 0;
avatar.vy = 0;
avatar.w = 20;
avatar.h = 20;
avatar.x = 10;
avatar.y = 10;
var avatarSpeed = 1;


var mazeWall = new GameObject();
mazeWall.w = 30;
mazeWall.angle = 0;

var mazeWall2 = new GameObject();
mazeWall2.x = 150;
mazeWall2.w = 30;
mazeWall2.angle = 0;

var maze = [];
maze[0] = mazeWall;
maze[1] = mazeWall2;

/*--------------main()------------------------
This is the function that makes the game work
---------------------------------------------*/


function main()
{

    //erases the screen
    ctx.clearRect(0,0,c.width,c.height); 

    switch(currentScene){

        case "start":
            console.log(currentScene);
            ctx.font = "60px Arial";
            ctx.fillText(`Slippy Maze`, c.width/2 -190, c.height/2);
            ctx.fillText(`Click 2 Play`, c.width/2 -190, c.height/1.5);
            addEventListener("click", startGame)
            break;

        case "game":
            console.log(currentScene);
            game();
            break;

        case "gameOver":
            console.log(currentScene);
            ctx.font = "60px Arial";
            ctx.fillText(`you're loss`, c.width/2 -150, c.height/2);
            break;
            
    }

}

function startGame(){
    currentScene = gameScenes[1];
}

function game()
{
    //erases the screen
    ctx.clearRect(0,0,c.width,c.height); 

    //Any changes to numbers
         
    if(a == true || left == true){avatar.vx = -avatarSpeed;}
    if(d == true || right == true){avatar.vx = avatarSpeed;}
    if(w == true || up == true){avatar.vy = -avatarSpeed;}
    if(s == true || down == true){avatar.vy = avatarSpeed;}

    //Any collision detection 

    if(avatar.x < 0 + avatar.w/2){avatar.x = 0 + avatar.w/2;}
    if(avatar.x > c.width + -avatar.w/2){avatar.x = c.width + -avatar.w/2;}
    if(avatar.y < 0 + avatar.h/2){avatar.y = 0 + avatar.h/2;}
    if(avatar.y > c.height + -avatar.h/2){avatar.y = c.height + -avatar.h/2;}

    

    //draw the pictures
    for(var m = 0; m< maze.length;m++){
        maze[m].render();
        if(avatar.overlaps(maze[m])){
            currentScene = gameScenes[2];
        }
    }
    // mazeWall.render();
    // mazeWall2.render();
    //mazeWall.renderMaze2();

    
    avatar.move();
    // if(avatar.overlaps(mazeWall)){
    //     currentScene = gameScenes[2];
    // }
    avatar.render();


}

//random number generator
function rand(_low, _high)
{
    return Math.random()*(_high - _low) + _low;
}
//Converts degrees to radians
function radians(_deg)
{
    return _deg * Math.PI/180
}

//Converts radians to degrees
function degrees(_rad)
{
    return _rad * 180/Math.PI
}