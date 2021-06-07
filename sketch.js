

function preload(){
    playerAnimation = loadAnimation("walking_1.png","walking_5.png","walking_7.png", "walking_8.png")
    lightningImg1 = loadImage("1.png")
    lightningImg2 = loadImage("2.png")
    lightningImg3 = loadImage("3.png")
    lightningImg4 = loadImage("4.png")
    backgroundAnimation = loadImage("jungle.png")
}


function setup(){
    createCanvas(800, 400);
    bg=createSprite(400,200,800,400)
    bg.addImage("bg", backgroundAnimation)
    bg.velocityX = -3
    bg.scale = 1.7
    player=createSprite(200,340,30,40)
    player.addAnimation("Anim1",playerAnimation)
    player.scale = 0.2
    
}

function draw(){
    for (var i=0;i<100;i++){
        drops.push(new drops(random(0,400),random(0,400)))
    }
    drawSprites();
}   

