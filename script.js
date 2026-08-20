const stars=document.getElementById("stars");
for(let i=0;i<95;i++){
  const s=document.createElement("span");
  s.className="star";
  const size=Math.random()*2.5+1;
  s.style.width=size+"px";s.style.height=size+"px";
  s.style.left=Math.random()*100+"vw";s.style.top=Math.random()*100+"vh";
  s.style.animationDelay=Math.random()*4+"s";s.style.animationDuration=(1.8+Math.random()*3)+"s";
  stars.appendChild(s);
}
const clouds=document.getElementById("clouds");
for(let i=0;i<4;i++){
  const c=document.createElement("div");c.className="cloud";
  c.style.top=(18+i*21+Math.random()*8)+"%";
  c.style.animation=`cloudMove ${27+i*6}s linear infinite`;
  c.style.animationDelay=(-Math.random()*25)+"s";
  c.style.opacity=(.45+Math.random()*.45);
  c.style.transform=`scale(${.7+Math.random()*.6})`;
  clouds.appendChild(c);
}
const hearts=document.getElementById("hearts");
function makeHeart(){
  const h=document.createElement("div");h.className="floating-heart";
  h.textContent=["♡","♥","✦"][Math.floor(Math.random()*3)];
  h.style.left=Math.random()*100+"vw";
  h.style.fontSize=(12+Math.random()*18)+"px";
  h.style.animationDuration=(6+Math.random()*7)+"s";
  hearts.appendChild(h);
  setTimeout(()=>h.remove(),14000);
}
setInterval(makeHeart,900);

const audio=document.getElementById("music");
const btn=document.getElementById("musicBtn");
btn.addEventListener("click",async()=>{
  if(audio.paused){try{await audio.play();btn.textContent="❚❚ pause"}catch(e){alert("Pastikan file 'Mengejar Mimpi.mp3' sudah di-upload ke folder yang sama.")}}
  else{audio.pause();btn.textContent="▶ putar"}
});
