(function(){
var reduce=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function $$(sel,root){return Array.prototype.slice.call((root||document).querySelectorAll(sel))}
function visiblePage(el){var p=el.closest(".pg");return !p||!p.hidden}
// --- static enhancements
$$('section[aria-label="ទំព័រដើម"] > div[style*="border-radius:16px"], main > section:first-child > div[style*="border-radius:16px"]').forEach(function(c){c.classList.add("hero-card")});
$$('button[aria-label="មើលវីដេអូពេញ"],button[aria-label="ចាក់វីដេអូ"],button[aria-label="មើលវីដេអូ"]').forEach(function(b){b.classList.add("play-pulse")});
$$('a[style*="background:#fdb813"],a[style*="background:#00a652"],a[style*="background:#ed1b24"]').forEach(function(a){a.classList.add("shine")});
$$('a[style*="border-radius:6px"],a[style*="border-radius:999px"],button[style*="border-radius:999px"]').forEach(function(a){if(!a.closest("#row"))a.classList.add("lift")});
$$('nav[aria-label="សេវាកម្ម"] a').forEach(function(a){a.classList.add("cat-ico")});
$$('main img[style*="border-radius:12px"]').forEach(function(im){im.classList.add("zoom-img")});
// tilt cards
var tiltSel='main article, main div[style*="border-radius:12px"][style*="padding:32px"], main div[style*="border-radius:12px"][style*="padding:28px"], main div[style*="border-radius:12px"][style*="padding:24px"]';
$$(tiltSel).forEach(function(c){if(c.closest("#stations")||c.closest("#row"))return;c.classList.add("tilt");
  if(reduce)return;
  c.addEventListener("mousemove",function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform="perspective(900px) rotateY("+(x*7)+"deg) rotateX("+(-y*7)+"deg) translateY(-4px)"});
  c.addEventListener("mouseleave",function(){c.style.transform=""});
});
// floating stat cards
$$('#stations > div:nth-child(2) > div:last-child > div').forEach(function(c,i){c.classList.add(i%2?"float-b":"float-a")});
if(reduce){var st0=document.getElementById("stations");if(st0)st0.classList.add("go");return;}
// --- scroll progress
var bar=document.createElement("div");bar.id="scroll-progress";document.body.appendChild(bar);
// --- parallax layers: full-bleed images inside sections (hero, page heroes, video, terminals photo)
var layers=[];
$$("main section").forEach(function(s){
  var im=s.querySelector(":scope > img");
  if(im&&/position:absolute/.test(im.getAttribute("style")||"")){im.style.top="-14%";im.style.bottom="auto";im.style.height="128%";im.classList.add("px");layers.push({el:im,box:s,speed:0.28,scale:1.06})}
});
$$('main div[style*="overflow:hidden"] > img[style*="position:absolute"]').forEach(function(im){if(im.classList.contains("px"))return;im.style.top="-12%";im.style.bottom="auto";im.style.height="124%";im.classList.add("px");layers.push({el:im,box:im.parentNode,speed:0.16,scale:1.02})});
// collage / feature images move at different speeds inside their columns (subtle)
$$('main section img[style*="border-radius:12px"]').forEach(function(im,i){if(im.closest("#stations")||im.classList.contains("px"))return;layers.push({el:im,box:im,speed:(i%2?0.06:0.1),scale:1,soft:true})});
// hero card counter-parallax
$$(".hero-card").forEach(function(c){layers.push({el:c,box:c.parentNode,speed:-0.12,scale:1,card:true})});
var ticking=false;
function frame(){
  ticking=false;var vh=window.innerHeight,doc=document.documentElement;
  var max=doc.scrollHeight-vh;bar.style.transform="scaleX("+(max>0?Math.min(1,window.scrollY/max):0)+")";
  layers.forEach(function(L){
    if(!visiblePage(L.el))return;
    var r=L.box.getBoundingClientRect();if(r.bottom<-200||r.top>vh+200)return;
    var off=(r.top+r.height/2-vh/2)*-L.speed;
    if(L.card){L.el.style.translate="0 "+off.toFixed(1)+"px";return}
    if(L.soft){L.el.style.translate="0 "+(off*0.5).toFixed(1)+"px";return}
    L.el.style.transform="translate3d(0,"+off.toFixed(1)+"px,0) scale("+L.scale+")";
  });
}
function onScroll(){if(!ticking){ticking=true;requestAnimationFrame(frame)}}
window.addEventListener("scroll",onScroll,{passive:true});window.addEventListener("resize",onScroll);window.addEventListener("hashchange",function(){setTimeout(onScroll,80)});frame();
// mouse parallax on hero
$$('section[aria-label="ទំព័រដើម"]').forEach(function(s){var im=s.querySelector(":scope > img");s.addEventListener("mousemove",function(e){var r=s.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;if(im)im.style.translate=(x*-18).toFixed(1)+"px "+(y*-12).toFixed(1)+"px"})});
// --- map section trigger
var stEl=document.getElementById("stations");if(stEl){var io3=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){stEl.classList.add("go");io3.disconnect()}})},{threshold:.2});io3.observe(stEl)}
// --- reveal targets with variants
var targets=[];
function isPhoto(el){if(el.tagName==="IMG")return true;var imgs=el.querySelectorAll("img");return imgs.length>0&&(el.textContent||"").trim().length<25&&el.querySelectorAll("h1,h2,h3").length===0}
function add(el,cls,d){el.classList.add("rv");if(cls)el.classList.add(cls);if(d!=null)el.style.setProperty("--d",d+"ms");targets.push(el)}
$$("main section").forEach(function(s){
  if(s.getAttribute("aria-label")==="ទំព័រដើម"||s.id==="stations"||s.querySelector(":scope > .hero-card"))return;
  $$(":scope > div, :scope > h1, :scope > h2, :scope > p, :scope > nav",s).forEach(function(k){
    while(k.children.length===1&&k.tagName==="DIV"&&!isPhoto(k)){var only=k.children[0],oc=getComputedStyle(only);if(oc.display==="flex"||oc.display==="grid"){k=only}else break}
    var cs=getComputedStyle(k),kids=$$(":scope > *",k);
    var isRow=(cs.display==="flex"&&cs.flexWrap==="wrap");
    if(isRow&&kids.length===2){add(kids[0],isPhoto(kids[0])?"rv-f":"rv-l",0);add(kids[1],isPhoto(kids[1])?"rv-f":"rv-r",150);return}
    if((cs.display==="grid"||isRow)&&kids.length>1&&kids.length<14){kids.forEach(function(c,i){add(c,isPhoto(c)?"rv-f":"rv-p",Math.min(i,7)*90)});return}
    add(k,null,0);
  });
});
$$("#stations > div").forEach(function(k,i){add(k,i?"rv-p":null,i*140)});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{rootMargin:"0px 0px -10% 0px",threshold:0.06});
targets.forEach(function(t){io.observe(t)});
function kick(){var vh=window.innerHeight;targets.forEach(function(t){if(t.classList.contains("in")||!visiblePage(t))return;var r=t.getBoundingClientRect();if(r.top<vh*0.92&&r.bottom>0){t.classList.add("in");io.unobserve(t)}})}
setTimeout(kick,120);window.addEventListener("load",kick);window.addEventListener("scroll",function(){requestAnimationFrame(kick)},{passive:true});window.addEventListener("hashchange",function(){setTimeout(kick,120)});
window.addEventListener("hashchange",function(){setTimeout(function(){targets.forEach(function(t){if(!t.classList.contains("in")){io.unobserve(t);io.observe(t)}})},60)});
// --- count-up
var nums=$$("main p").filter(function(p){var t=p.textContent.trim();return /^[\d,]+[+M]?$/.test(t)&&parseFloat(getComputedStyle(p).fontSize)>=32&&t!=="1993"&&t.length<8});
var io2=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io2.unobserve(e.target);var el=e.target,txt=el.textContent.trim(),suf=/[+M]$/.test(txt)?txt.slice(-1):"",comma=/,/.test(txt),end=parseInt(txt.replace(/[^\d]/g,""),10),t0=null,dur=1600;
  function fmt(v){var s=String(v);if(comma)s=s.replace(/\B(?=(\d{3})+(?!\d))/g,",");return s+suf}
  function step(ts){if(!t0)t0=ts;var k=Math.min(1,(ts-t0)/dur),v=Math.round(end*(1-Math.pow(1-k,4)));el.textContent=fmt(v);if(k<1)requestAnimationFrame(step)}
  requestAnimationFrame(step)})},{threshold:.4});
nums.forEach(function(n){io2.observe(n)});
})();
