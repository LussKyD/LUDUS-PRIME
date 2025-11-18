
// Simple starfield
const c = document.createElement('canvas');
const ctx = c.getContext('2d');
document.getElementById('canvas-container').appendChild(c);

function resize(){ c.width=innerWidth; c.height=innerHeight; }
resize(); addEventListener('resize', resize);

let stars = Array.from({length:400}, ()=>({
  x:Math.random()*innerWidth,
  y:Math.random()*innerHeight,
  s:Math.random()*2
}));

function draw(){
  ctx.clearRect(0,0,c.width,c.height);
  ctx.fillStyle="#0f0";
  stars.forEach(st=>{
    ctx.fillRect(st.x, st.y, st.s, st.s);
    st.y+=st.s*0.5;
    if(st.y>c.height) st.y=0;
  });
  requestAnimationFrame(draw);
}
draw();

// feed
const feedData=[
  {t:"New phygital collab incoming", time:"Just now"},
  {t:"Kenya Cup analytics posted", time:"2h ago"},
  {t:"Community challenge announced", time:"6h ago"}
];
document.getElementById("feed").innerHTML =
  feedData.map(f=>`<div><strong>${f.t}</strong><br><span style='opacity:.6'>${f.time}</span><hr></div>`).join("");
