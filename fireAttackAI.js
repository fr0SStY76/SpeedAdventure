var choice = 0;
function attackAI(){
    if(frameCount % round(random(60,80)) === 0){
        choice = round(random(0,3));
    }
    if(choice === 1){
        a1.velocityX = random(-15, 15);
        a1.velocityY = random(-15, 15);
    }
    if(choice === 2){
        a2.velocityX = random(-15, 15);
        a2.velocityY = random(-15, 15);
    }
    if(choice === 3){
        a3.velocityX = random(-15, 15);
        a3.velocityY = random(-15, 15);
    }
    if(choice === 0){
        a1.x = b1.x;
        a1.y = b1.y;

        a2.x = b1.x;
        a2.y = b1.y;

        a3.x = b1.x;
        a3.y = b1.y;
    }
}