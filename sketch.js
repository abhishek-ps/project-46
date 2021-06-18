var boardImg;
var dice = 0;
var number = 0;
var player,playerImg;
var d1,d2,d3,d4,d5,d6;
var diceArray = [];
var rollDice,spaceImg;

function preload(){
    boardImg = loadImage("images/Snakes-Ladders.jpg");
    playerImg = loadImage("images/boy.png");
    d1 = loadImage("images/dice1.png");
    d2 = loadImage("images/dice2.png");
    d3 = loadImage("images/dice3.png");
    d4 = loadImage("images/dice4.png");
    d5 = loadImage("images/dice5.png");
    d6 = loadImage("images/dice6.png");
    diceArray = [d1,d2,d3,d4,d5,d6]
    spaceImg = loadImage("images/space.png");
}

function setup(){
    var canvas = createCanvas(boardImg.width+250,boardImg.height);
    player = createSprite(130,900);
    player.addImage(playerImg)
    rollDice = createSprite(width-150,250);
    rollDice.addImage(spaceImg);
    rollDice.scale = 0.5;
}

function draw(){
    background(100);
    imageMode(CENTER);
    image(boardImg,500,500);

    if(keyWentDown("space")){
        dice = Math.round(random(1,6));
        number = number+dice;

        rollDice.addImage(diceArray[dice-1]);

        if(number===1){
            player.x=140;
            player.y=900;
        }

        if(number===2){
            player.x=330;
            player.y=900;
        }

        if(number===3){
            player.x=520;
            player.y=900;
        }

        if(number===4){
            player.x=710;
            player.y=900;
        }

        if(number===5){
            player.x=900;
            player.y=900;
        }
        if(number===6){
            player.x=900;
            player.y=710;
        }

        if(number===7){
            player.x=710;
            player.y=710;
        }

        if(number===8){
            player.x=520;
            player.y=710;
        }

        if(number===9){
            player.x=330;
            player.y=710;
        }

        if(number===10){
            player.x=330;
            player.y=317;
        }

        if(number===11){
            player.x=140;
            player.y=520;
        }

        if(number===12){
            player.x=330;
            player.y=520;
        }

        if(number===13){
            player.x=520;
            player.y=520;
        }

        if(number===14){
           number = 2;
        }

        if(number===15){
            player.x=900;
            player.y=330;
        }
        
        if(number===17){
            player.x=710;
            player.y=330;
        }
        if(number===18){
            player.x=520;
            player.y=330;
        }
        if(number===19){
            player.x=330;
            player.y=330;
        }
        if(number===20){
            player.x=140;
            player.y=330;
        }

        if(number===21){
            number = 13
        }

        if(number===22){
            player.x=330;
            player.y=140;
        }

        if(number===23){
            player.x=520;
            player.y=140;
        }

        if(number===24){
            player.x=710;
            player.y=140;
        }

        if(number===25){
            player.x=900;
            player.y=140;
            text("YOU WIN",0,0);
        }


        
       
    }
    drawSprites();
    
   
}

