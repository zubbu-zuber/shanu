/* 🎵 MUSIC START FIX */
document.addEventListener("click", function () {
    let music = document.getElementById("bg-music");
    if (music) music.play();
});

/* PAGE NAVIGATION */
function nextPage(){
document.getElementById("page1").classList.add("hidden");
document.getElementById("page2").classList.remove("hidden");
setTimeout(()=>document.getElementById("candles1").innerHTML="💨",3000);
}

function showMemories(){
document.getElementById("page2").classList.add("hidden");
document.getElementById("page3").classList.remove("hidden");
setTimeout(()=>document.getElementById("candles2").innerHTML="💨",3000);
}

function showMessage(){
document.getElementById("page3").classList.add("hidden");
document.getElementById("page4").classList.remove("hidden");
}

function openSurprise(){
document.getElementById("page4").classList.add("hidden");
document.getElementById("page5").classList.remove("hidden");
}

function finalReveal(){
document.querySelector(".box").innerHTML="💥";
setTimeout(()=>{
document.querySelector(".box").style.display="none";
document.getElementById("finalMessage").classList.remove("hidden");
heartBurst();
},800);
}

/* 📸 SLIDER */
let images=["1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg"];
let i=0;
setInterval(()=>{
i=(i+1)%images.length;
let img=document.getElementById("slider");
if(img) img.src=images[i];
},3000);

/* 🎉 HEART BURST */
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

/* ❤️ FALL ANIMATION */
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