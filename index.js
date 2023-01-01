let Hscore = document.querySelector("#Hscore-el")
let count = 0;
Hscore.textContent = count;


function addoneth(){
        count +=1
        Hscore.textContent =  +count;

}

function add2th(){
    count +=2
    Hscore.textContent = count;

}

function add3th() {
    count += 3
    Hscore.textContent =  count;
}



let GscoreEL = document.getElementById("Gscore-el");
let countG = 0
GscoreEL.innerText =   countG

function addonetg(){
    countG += 1
    GscoreEL.innerText =  countG
}

function add2tg(){
    countG += 2
    GscoreEL.innerText =  countG
}

function add3tg(){
    countG += 3
    GscoreEL.innerText = countG
}
