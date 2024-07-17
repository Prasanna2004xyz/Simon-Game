let gameSeq = [];
let userSeq = [];

let btns = ['yellow', 'red', 'purple', 'green'];
let started = false;
let level = 0;
let highScore = 0; 

document.addEventListener("keypress", function() {
    if (!started) {
        console.log("game is started");
        started = true;
        gameSeq = [];
        level = 0;
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add('flash');
    setTimeout(function() {
        btn.classList.remove('flash');
    }, 250);
}

let h2 = document.querySelector('h2');

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);  // Correctly update gameSeq with the random color
    console.log(gameSeq);
    gameFlash(randBtn);
}

function userFlash(btn) {
    btn.classList.add('userflash');
    setTimeout(function() {
        btn.classList.remove('userflash');
    }, 250);
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        if (level > highScore) {
            highScore = level; // Update high score if the current level is higher
        }
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> Press any key to start.`;
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor='white';
        },200)
        resizeTo();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute('id');
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll('.btn'); // Assuming buttons have the class 'btn'
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function resizeTo(){
    started=false;
    gameSeq=[]
    userSeq=[];
    level=0;
}

let h1=document.querySelector('h1');
function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
           resolve("color changed");
        },delay)
    })
   
}
changeColor("red",1000)
.then(()=>{
    console.log("color changed to red color");
    return changeColor("orange",1000);
})

.then(()=>{
    console.log("color changed to orange color");
    return changeColor("pink",1000);
})
.then(()=>{
    console.log("color changed to pink color");
    return changeColor("yellow",1000);
})
.then(()=>{
    console.log("color changed to yellow color");
    return changeColor("blue",1000);
})
.then(()=>{
    console.log("color changed to blue color");
    return changeColor("purple",1000);
})

.then(()=>{
    console.log("color changed to purple color");
    return changeColor("green",1000);
})
.then(()=>{
    console.log("color changed to green color");
    return changeColor("grey",1000);
})
// changeColor('red',1000,()=>{
//     changeColor('orange',1000,()=>{
//         changeColor('pink',1000,()=>{
//             changeColor('orange',1000,()=>{
//                 changeColor('purple',1000,()=>{
//                     changeColor('green',1000)
//                 })
//             })
//         })
//     })
// })


// function savetoDB(data,success,failure){
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     if(internetSpeed >4){
//         success();
//     }
//     else{
//         failure();
//     }
// }
// savetoDB("prassu",()=>{
//     console.log("success 1:data saved")
//     savetoDB("prasanna",()=>{
//         console.log("success 2:data saved")  
//         savetoDB("anji",()=>{
//             console.log("success 3:data saved")   
//         },()=>{
//             console.log("failure 3: Weak connection")
//         })
//     },()=>{
//         console.log("failure 2: Weak connection")
//     })
// },()=>{
//     console.log("failure 1: Weak connection")
// })


function savetoDB(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed >4){
            resolve("success:data saved");
        }
        else{
            reject("failure : weak connection");
        }
    })
}
savetoDB("prasssu").then(()=>{
    console.log("promise was resolved")
})
.catch(()=>{
    console.log("promise was rejected")
})