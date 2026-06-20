
/* 🎵 MUSIC START FIX */
document.addEventListener("click", function () {
    let music = document.getElementById("bg-music");
    if (music) {
        music.play();
        music.volume = 0.7;
    }
});

/* 📄 PAGE NAVIGATION */
function nextPage(){
document.getElementById("page1").classList.add("hidden");
document.getElementById("page2").classList.remove("hidden");
candle1();
}

function showMemories(){
document.getElementById("page2").classList.add("hidden");
document.getElementById("page3").classList.remove("hidden");
candle2();
}

function showMessage(){
document.getElementById("page3").classList.add("hidden");
document.getElementById("page4").classList.remove("hidden");
}

function openSurprise(){
document.getElementById("page4").classList.add("hidden");
document.getElementById("page5").classList.remove("hidden");
}

/* 🕯️ CANDLE REAL EFFECT */
function candle1(){
setTimeout(()=>{
let c=document.getElementById("candles1");
if(c){
c.style.transform="scale(1.2)";
c.style.filter="brightness(2)";

setTimeout(()=>{
c.innerHTML="💨💨💨";

setTimeout(()=>{
c.innerHTML="🕯️ 🕯️ 🕯️ (Bujh Gayi)";
c.style.transform="scale(1)";
c.style.filter="brightness(1)";
},1000);

},800);

}
},7000);
}

function candle2(){
setTimeout(()=>{
let c=document.getElementById("candles2");
if(c){
c.style.transform="scale(1.2)";
c.style.filter="brightness(2)";

setTimeout(()=>{
c.innerHTML="💨💨💨";

setTimeout(()=>{
c.innerHTML="🕯️ 🕯️ 🕯️ (Bujh Gayi)";
c.style.transform="scale(1)";
c.style.filter="brightness(1)";
},1000);

},800);

}
},7000);
}

/* 🎁 FINAL REVEAL */
function finalReveal(){
let box = document.querySelector(".box");
box.innerHTML="💥";

setTimeout(()=>{
box.style.display="none";
document.getElementById("finalMessage").classList.remove("hidden");
heartBurst();
},800);
}

/* ❤️ HEART BURST */
function heartBurst(){
for(let j=0;j<25;j++){
let h=document.createElement("div");
h.innerHTML="❤️";
h.style.position="fixed";
h.style.left=Math.random()*100+"vw";
h.style.top="50%";
h.style.fontSize="20px";
h.style.animation="fall 3s linear";
document.body.appendChild(h);
setTimeout(()=>h.remove(),3000);
}
}

/* 📸 SLIDER */
let images=["1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg"];
let i=0;

setInterval(()=>{
i=(i+1)%images.length;
let img=document.getElementById("slider");
if(img) img.src=images[i];
},3000);

/* ❤️ CONTINUOUS HEART FALL */
setInterval(()=>{
let h=document.createElement("div");
h.innerHTML="❤️";
h.style.position="fixed";
h.style.left=Math.random()*100+"vw";
h.style.top="-20px";
h.style.fontSize="18px";
h.style.animation="fall 5s linear";
document.body.appendChild(h);
setTimeout(()=>h.remove(),5000);
},400);
