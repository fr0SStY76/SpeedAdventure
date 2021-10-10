function levelSwitch(){

    //All Colision:
    //Basic Collision
    p1.collide(edges);

    e1.bounceOff(edges);
    e2.bounceOff(edges);
    e3.bounceOff(edges);
    e4.bounceOff(edges);
    e5.bounceOff(edges);
    e6.bounceOff(edges);

    b1.bounceOff(edges);
    a1.bounceOff(edges);
    a2.bounceOff(edges);
    a3.bounceOff(edges);

    p1.collide(barrier);

    e1.bounceOff(barrier);
    e2.bounceOff(barrier);
    e3.bounceOff(barrier);
    e4.bounceOff(barrier);
    e5.bounceOff(barrier);
    e6.bounceOff(barrier);

    b1.bounceOff(barrier);
    a1.bounceOff(barrier);
    a2.bounceOff(barrier);
    a3.bounceOff(barrier);

    p1.collide(goal);


    //Enemy Collision
    //L1
    e1.bounceOff(w1);

    //L2
    e2.bounceOff(w2);
    e2.bounceOff(w3);
    e2.bounceOff(w4);

    e3.bounceOff(w2);
    e3.bounceOff(w3);
    e3.bounceOff(w4);

    //L3
    e4.bounceOff(w5);
    e4.bounceOff(w6);

    e5.bounceOff(w5);
    e5.bounceOff(w6);

    e6.bounceOff(w5);
    e6.bounceOff(w6);

    b1.bounceOff(w7);
    b1.bounceOff(w8);
    b1.bounceOff(w9);

    a1.bounceOff(w7);
    a1.bounceOff(w8);
    a1.bounceOff(w9);
    a2.bounceOff(w7);
    a2.bounceOff(w8);
    a2.bounceOff(w9);
    a3.bounceOff(w7);
    a3.bounceOff(w8);
    a3.bounceOff(w9);

    //Visible/Collision
    if (level === 1){
        levelname = "Prototype Sandbox 1";
        p1.collide(w1);

        w1.visible = true;
    w2.visible = false;
    w3.visible = false;
    w4.visible = false;
    w5.visible = false;
    w6.visible = false;
    w7.visible = false;
    w8.visible = false;
    w9.visible = false;

        e1.visible = true;
    e2.visible = false;
    e3.visible = false;
    e4.visible = false;
    e5.visible = false;
    e6.visible = false;

    b1.visible = false;
    a1.visible = false;
    a2.visible = false;
    a3.visible = false;

    x1.visible = false;
    x2.visible = false;
    x3.visible = false;
    x4.visible = false;
    x5.visible = false;
    x6.visible = false;

    }
    if (level === 2){
        levelname = "Prototype Sandbox 2";

        p1.collide(w2);
        p1.collide(w3);
        p1.collide(w4);

        w1.visible = false;
    w2.visible = true;
    w3.visible = true;
    w4.visible = true;
    w5.visible = false;
    w6.visible = false;
    w7.visible = false;
    w8.visible = false;
    w9.visible = false;

        e1.visible = false;
    e2.visible = true;
    e3.visible = true;
    e4.visible = false;
    e5.visible = false;
    e6.visible = false;

    b1.visible = false;
    a1.visible = false;
    a2.visible = false;
    a3.visible = false;

    x1.visible = false;
    x2.visible = false;
    x3.visible = false;
    x4.visible = false;
    x5.visible = false;
    x6.visible = false;
    }
    if (level === 3){
        levelname = "Prototype Sandbox 3";

        p1.collide(w5);
        p1.collide(w6);

        w1.visible = false;
    w2.visible = false;
    w3.visible = false;
    w4.visible = false;
    w5.visible = true;
    w6.visible = true;
    w7.visible = false;
    w8.visible = false;
    w9.visible = false;

        e1.visible = false;
    e2.visible = false;
    e3.visible = false;
    e4.visible = true;
    e5.visible = true;
    e6.visible = true;

    b1.visible = false;
    a1.visible = false;
    a2.visible = false;
    a3.visible = false;

    x1.visible = false;
    x2.visible = false;
    x3.visible = false;
    x4.visible = false;
    x5.visible = false;
    x6.visible = false;
    }
    if (level === 4){
        levelname = "Prototype Boss Sandbox 1";

        p1.collide(w7);
        p1.collide(w8);
        p1.collide(w9);

        w1.visible = false;
    w2.visible = false;
    w3.visible = false;
    w4.visible = false;
    w5.visible = false;
    w6.visible = false;
    w7.visible = true;
    w8.visible = true;
    w9.visible = true;

        e1.visible = false;
    e2.visible = false;
    e3.visible = false;
    e4.visible = false;
    e5.visible = false;
    e6.visible = false;

    b1.visible = true;
    a1.visible = true;
    a2.visible = true;
    a3.visible = true;

    x1.visible = false;
    x2.visible = false;
    x3.visible = false;
    x4.visible = false;
    x5.visible = false;
    x6.visible = false;
    }


    //Part 2
    if (level === 5){
        levelname = "Prototype Sandbox 4";

        p1.collide(x1);
        p1.collide(x2);

        w1.visible = false;
    w2.visible = false;
    w3.visible = false;
    w4.visible = false;
    w5.visible = false;
    w6.visible = false;
    w7.visible = false;
    w8.visible = false;
    w9.visible = false;

        e1.visible = false;
    e2.visible = false;
    e3.visible = false;
    e4.visible = false;
    e5.visible = false;
    e6.visible = false;

    b1.visible = false;
    a1.visible = false;
    a2.visible = false;
    a3.visible = false;

    x1.visible = true;
    x2.visible = true;
    x3.visible = false;
    x4.visible = false;
    x5.visible = false;
    x6.visible = false;
    }
    if (level === 6){
        levelname = "Prototype Sandbox 5";

        p1.collide(x3);

        w1.visible = false;
        w2.visible = false;
        w3.visible = false;
        w4.visible = false;
        w5.visible = false;
        w6.visible = false;
        w7.visible = false;
        w8.visible = false;
        w9.visible = false;
    
            e1.visible = false;
        e2.visible = false;
        e3.visible = false;
        e4.visible = false;
        e5.visible = false;
        e6.visible = false;
    
        b1.visible = false;
        a1.visible = false;
        a2.visible = false;
        a3.visible = false;

        x1.visible = false;
    x2.visible = false;
    x3.visible = true;
    x4.visible = false;
    x5.visible = false;
    x6.visible = false;
    }
    if (level === 7){
        levelname = "Prototype Sandbox 6";

        p1.collide(x4);
        p1.collide(x5);
        p1.collide(x6);

        w1.visible = false;
    w2.visible = false;
    w3.visible = false;
    w4.visible = false;
    w5.visible = false;
    w6.visible = false;
    w7.visible = false;
    w8.visible = false;
    w9.visible = false;

        e1.visible = false;
    e2.visible = false;
    e3.visible = false;
    e4.visible = false;
    e5.visible = false;
    e6.visible = false;

    b1.visible = false;
    a1.visible = false;
    a2.visible = false;
    a3.visible = false;

    x1.visible = false;
    x2.visible = false;
    x3.visible = false;
    x4.visible = true;
    x5.visible = true;
    x6.visible = true;
    }
    if (level >= 8){
        gameState = "protoEnd";
        w1.visible = false;
    w2.visible = false;
    w3.visible = false;
    w4.visible = false;
    w5.visible = false;
    w6.visible = false;
    w7.visible = false;
    w8.visible = false;
    w9.visible = false;

        e1.visible = false;
    e2.visible = false;
    e3.visible = false;
    e4.visible = false;
    e5.visible = false;
    e6.visible = false;

    b1.visible = false;
    a1.visible = false;
    a2.visible = false;
    a3.visible = false;

    x1.visible = false;
    x2.visible = false;
    x3.visible = false;
    x4.visible = false;
    x5.visible = false;
    x6.visible = false;
    }

}