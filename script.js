

let random = Math.floor(Math.random() * 6 + 1);
const newgame = document.querySelector("#newgame");
const roll = document.querySelector("#roll");
const hold = document.querySelector("#hold");
const dice = document.querySelector(".dice");
const player1 = document.querySelector(".left-0");
const player2 = document.querySelector(".left-1");


let currentscore = 0;
let activeplayer = 0;
let totalscore = [0, 0];
let winner = true;

let switchplayer = function () {
    player1.classList.toggle("leftopacity");
    player2.classList.toggle("leftopacity");
    document.querySelector(`.score-${activeplayer}`).innerHTML = `<h1>${0}</h1>`;
    currentscore = 0;
    activeplayer = activeplayer == 0 ? 1 : 0;
}

dice.addEventListener("click", function () {

    if (winner) {
        random = Math.floor(Math.random() * 6 + 1);
        console.log(random);
        dice.src = `dice-${random}.png`;

        if (random != "1") {
            currentscore += random;
            document.querySelector(`.score-${activeplayer}`).innerHTML = `<h1>${currentscore}<h1>`;
        }
        else {
            switchplayer();
        }
    }
})


hold.addEventListener("click", function () {

    if(winner==true)
{
    totalscore[activeplayer] += currentscore;
    document.querySelector(`.totalscore-${activeplayer}`).innerHTML = `<h1>${totalscore[activeplayer]}<h1>`;
    if (totalscore[activeplayer] >= "50") {
        winner = false;
        document.querySelector(`.left-${activeplayer}`).classList.add("hidden");
        document.querySelector(".overlay").classList.remove("hide");
        document.querySelector(".winner").classList.remove("hide");
        activeplayer=activeplayer==0?1:2;
        document.getElementById("bg").innerHTML=`PLAYER ${activeplayer} WON THE GAME`
        activeplayer=activeplayer==1?1:0
    }
   
    switchplayer();
}
})

newgame.addEventListener("click",function(){

    document.querySelector(`.left-${activeplayer}`).classList.remove("hidden");
     currentscore = 0;
     activeplayer = 0;
     totalscore = [0, 0];
     winner = true;
     for(let i=0;i<=1;i++){
        document.querySelector(`.score-${[i]}`).innerHTML = `<h1>${0}</h1>`;
        document.querySelector(`.totalscore-${[i]}`).innerHTML = `<h1>${0}<h1>`;
     }
     document.querySelector(".overlay").classList.add("hide");
     document.querySelector(".winner").classList.add("hide");
     document.querySelector(`.left-0`).classList.add("leftopacity");
     document.querySelector(`.left-1`).classList.remove("leftopacity");
})



