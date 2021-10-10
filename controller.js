function controller(){
    if(keyDown("w")){
        p1.y = p1.y - 10;
        
    }
    if(keyDown("a")){
        p1.mirrorX = -1;
        p1.x = p1.x - 10;
        
    }
    if(keyDown("s")){
        p1.y = p1.y + 10;
    }
    if(keyDown("d")){
        p1.mirrorX = 1
        p1.x = p1.x + 10;
    }





    //Die
    if (p1.isTouching(e1) && level === 1){
        p1.x = 50;
        p1.y = 350;
        lives = lives - 1;
        deaths = deaths + 1;
    }
    if (p1.isTouching(e2) && level === 2){
        p1.x = 50;
        p1.y = 350;
        lives = lives - 1;
        deaths = deaths + 1;
    }
    if (p1.isTouching(e3) && level === 2){
        p1.x = 50;
        p1.y = 350;
        lives = lives - 1;
        deaths = deaths + 1;
    }
    if (p1.isTouching(e4) && level === 3){
        p1.x = 50;
        p1.y = 350;
        lives = lives - 1;
        deaths = deaths + 1;
    }
    if (p1.isTouching(e5) && level === 3){
        p1.x = 50;
        p1.y = 350;
        lives = lives - 1;
        deaths = deaths + 1;
    }
    if (p1.isTouching(e6) && level === 3){
        p1.x = 50;
        p1.y = 350;
        lives = lives - 1;
        deaths = deaths + 1;
    }
    if (p1.isTouching(b1) && level === 4){
        p1.x = 50;
        p1.y = 350;
        lives = lives - 1;
        deaths = deaths + 1;
    }
    if (p1.isTouching(a1) && level === 4){
        p1.x = 50;
        p1.y = 350;
        lives = lives - 1;
        deaths = deaths + 1;
    }
    if (p1.isTouching(a2) && level === 4){
        p1.x = 50;
        p1.y = 350;
        lives = lives - 1;
        deaths = deaths + 1;
    }
    if (p1.isTouching(a3) && level === 4){
        p1.x = 50;
        p1.y = 350;
        lives = lives - 1;
        deaths = deaths + 1;
    }
    if (lives < 0){
        lives = 20;
        level = 0;
        deaths = 0;
        gameState = "protoGameOver";
    }





    //Win
    if (p1.collide(goal)){
        p1.x = 50;
        p1.y = 350;
        deaths = 0;
        level = level + 1;
    }
}