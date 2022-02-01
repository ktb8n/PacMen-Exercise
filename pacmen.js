let crew = []; //array of pacmen
let direction = 0; //in preparation for flipping img so they're not moving backward

//creates and scales numbers to generate random positions and speeds
function setToRandom(scale){
    return {
        x: Math.random() * scale,
        y: Math.random() * scale
    };
};

//creates a new html <img> tag
function newPacMan() {
    //returns an object with values scaled
    let velocity = setToRandom(10);
    let position = setToRandom(200);
    //add image to div id=factoryFloor;
    let factoryFloor = document.getElementById('factoryFloor');
    let newImg= document.createElement('img');
    newImg.style.position = 'absolute';
    newImg.src = "images/PacMan1.png";
    newImg.width = 100;
    newImg.style.left = position.x + "px"; //adding px actually puts them where xy random says
    newImg.style.top = position.y + "px";
    factoryFloor.appendChild(newImg);
    //Create an object//
    return {
        position, 
        velocity, 
        newImg
    };
} 

function movePacMan(){
 crew.forEach((item) => {
     checkCollision(item) //checks to see if the next step will hit a wall
     item.position.x += item.velocity.x;

     console.log("x: " + item.position.x);
     item.position.y += item.velocity.y;
 
     console.log("y: " + item.position.y);

     item.newImg.style.left = item.position.x + "px"; //updates position in DOM
     item.newImg.style.top = item.position.y + "px";
 });

 setTimeout(movePacMan, 20);
}

//check edges of div and other objects
function checkCollision(item){
    if(item.position.x + item.velocity.x + item.newImg.width > window.innerWidth ||
        item.position.x + item.velocity.x < 0 ) item.velocity.x= -item.velocity.x;
    if(item.position.y + item.velocity.y + item.newImg.height > window.innerHeight ||
        item.position.y + item.velocity.y < 0) item.velocity.y = -item.velocity.y;
}

//onClick command to make new pacman and add it to the crew array
function makePacMan() {
    crew.push(newPacMan());
}

