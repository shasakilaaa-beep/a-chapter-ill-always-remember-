const sky=document.getElementById("sky");
for(let i=0;i<110;i++){
  const s=document.createElement("span");
  s.className="star";
  const size=1+Math.random()*2.6;
  s.style.width=size+"px";s.style.height=size+"px";
  s.style.left=Math.random()*100+"vw";s.style.top=Math.random()*100+"vh";
  s.style.animationDelay=Math.random()*4+"s";
  s.style.animationDuration=(1.5+Math.random()*3)+"s";
  sky.appendChild(s);
}

const cloudLayer=document.getElementById("cloud-layer");
for(let i=0;i<5;i++){
  const c=document.createElement("div");
  c.className="cloud";
  c.style.top=(12+i*18+Math.random()*7)+"%";
  c.style.animation=`cloudMove ${28+i*5}s linear infinite`;
  c.style.animationDelay=(-Math.random()*30)+"s";
  c.style.transform=`scale(${.7+Math.random()*.6})`;
  cloudLayer.appendChild(c);
}

const hearts=document.getElementById("floating-hearts");
function floatingHeart(){
  const h=document.createElement("div");
  h.className="floating-heart";
  h.textContent=["♡","♥","✦","✧"][Math.floor(Math.random()*4)];
  h.style.left=Math.random()*100+"vw";
  h.style.fontSize=(12+Math.random()*20)+"px";
  h.style.animationDuration=(6+Math.random()*7)+"s";
  hearts.appendChild(h);
  setTimeout(()=>h.remove(),15000);
}
setInterval(floatingHeart,850);

const audio=document.getElementById("music");
const musicBtn=document.getElementById("musicBtn");
musicBtn.addEventListener("click",async()=>{
  if(audio.paused){
    try{
      await audio.play();
      musicBtn.textContent="❚❚ pause";
      musicBtn.classList.add("playing");
    }catch(e){
      alert("Upload file 'Mengejar Mimpi.mp3' ke folder yang sama dengan index.html terlebih dahulu.");
    }
  }else{
    audio.pause();
    musicBtn.textContent="▶ putar";
    musicBtn.classList.remove("playing");
  }
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity="1";
      entry.target.style.transform="none";
    }
  });
},{threshold:.15});
document.querySelectorAll(".fade-up").forEach(el=>observer.observe(el));

const bar=document.getElementById("bar");
const percent=document.getElementById("percent");
let progressStarted=false;
const progressObserver=new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting && !progressStarted){
    progressStarted=true;
    let n=0;
    const timer=setInterval(()=>{
      n++;
      bar.style.width=n+"%";
      percent.textContent=n+"%";
      if(n>=37) clearInterval(timer);
    },35);
  }
},{threshold:.5});
progressObserver.observe(document.querySelector(".progress-wrap"));

const text="terima kasih untuk semua yang pernah kita punya. semoga kita sama-sama menemukan versi terbaik dari diri kita. ♡";
const typing=document.getElementById("typing");
let index=0;
function typeText(){
  if(index<text.length){
    typing.textContent+=text.charAt(index++);
    setTimeout(typeText,45);
  }
}
const typingObserver=new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting){
    typeText();
    typingObserver.disconnect();
  }
},{threshold:.4});
typingObserver.observe(document.querySelector(".final-message"));

window.addEventListener("scroll",()=>{
  const y=window.scrollY;
  document.querySelector(".moon")?.style.setProperty("transform",`translateY(${Math.min(y*.04,18)}px)`);
});

const style=document.createElement("style");
style.textContent="@keyframes cloudMove{from{margin-left:-380px}to{margin-left:calc(100vw + 380px)}}";
document.head.appendChild(style);
