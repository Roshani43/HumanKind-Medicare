let gameSeq=[];  // to track game sequence i.e in which order from starting colors pressed
let userSeq=[];  // to track user sequence i.e to track in which orders user press colors which will always be new sequence 

let btns=["one","two","three","four"];

let started=false;  // to know game start or not -> initially game is not started
let level=0; // bcoz game not started

let h2=document.querySelector("h2");
let body=document.querySelector("body");

document.addEventListener("keypress",function(){  // when we press any key on document then game should start but started should be false bcoz when game start then no need to start it again.
    if(started==false){
        started=true;
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");    // add flash class so background color changes to white
    setTimeout(function(){  // after 1s class remove 
        btn.classList.remove("flash");
    },200);
}

let high_score=0;

function levelUp(){
    userSeq=[]; // user will enter all colors again
    level++;
    h2.innerText=`Level ${level}`;

    let randInd=Math.floor(Math.random()*4);
    let randColor=btns[randInd];
    let randBtn=document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    
    // button flash when user press any button and when level up then any random button flash
    btnFlash(randBtn);  // choose any random button and then that button flash
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

function matchSeq(index){ // now we check userSeq and game sequence same or not. size of user sequnce and game sequence equal to level number to proceed in game so just check always last element of both sequences in each level
    if(gameSeq[index] === userSeq[index]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp(),10000);  // we use set-timeout so that if same colors come then we know for that
        }
    }
    else{
        if(level>high_score){
            high_score=level;
        }
        h2.innerHTML=`Game Over! Your score was ${level} points.<br>Your Highest Score is ${high_score}.<br>Press any key to restart the game`;
        body.style.backgroundColor="red";
        setTimeout(function(){
            body.style.backgroundColor="white";
        },200);
        reset();  // Game will reset
    }
}

function btnPress(){
    let btn=this;
    btnFlash(btn);

    user_id=btn.getAttribute("id");
    userSeq.push(user_id);
    matchSeq(userSeq.length-1);
}


let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}
