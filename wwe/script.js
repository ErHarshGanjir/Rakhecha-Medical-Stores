setTimeout(()=>{

gsap.to("#loader",{

opacity:0,

duration:0.8,

onComplete(){

document.getElementById("loader").style.display="none";

}

});

},1800);

gsap.from("nav",{

y:-100,

opacity:0,

duration:1

});

gsap.from(".badge",{

opacity:0,

y:60,

duration:1,

delay:2

});

gsap.from("h1",{

opacity:0,

y:80,

duration:1,

delay:2.2

});

gsap.from("p",{

opacity:0,

y:60,

duration:1,

delay:2.5

});

gsap.from(".buttons a",{

opacity:0,

y:40,

stagger:.2,

duration:1,

delay:2.8

});

gsap.from(".glass-card",{

opacity:0,

scale:.5,

rotate:15,

duration:1.4,

delay:2.6

});

const holder=document.getElementById("particles");

for(let i=0;i<60;i++){

const d=document.createElement("div");

d.className="particle";

d.style.left=Math.random()*100+"%";

d.style.animationDuration=(8+Math.random()*8)+"s";

d.style.animationDelay=Math.random()*5+"s";

holder.appendChild(d);

}

document.addEventListener("mousemove",(e)=>{

gsap.to(".glass-card",{

rotationY:(e.clientX/window.innerWidth-.5)*18,

rotationX:-(e.clientY/window.innerHeight-.5)*18,

duration:.6

});

});
