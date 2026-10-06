(function(){
var ids=["fuel","lube","transport","lab","stations","partners"];
function set(a){ids.forEach(function(id){var t=document.querySelector('[data-tab="'+id+'"]');if(!t)return;var on=id===a;t.setAttribute("aria-current",on?"true":"false");t.style.background=on?"#00a652":"#ffffff";t.style.borderColor=on?"#0a753d":"#c5c3b0";var i=t.querySelector("[data-ico]");if(i){i.style.background=on?"#ffffff":"#f6f5f0";i.style.color=on?"#0a753d":"#1c1b16"}if(on&&t.scrollIntoView&&t.parentNode.scrollWidth>t.parentNode.clientWidth){t.parentNode.scrollTo({left:t.offsetLeft-16,behavior:"smooth"})}})}
set("fuel");
ids.forEach(function(id){var t=document.querySelector('[data-tab="'+id+'"]');if(t)t.addEventListener("click",function(){set(id)})});
if("IntersectionObserver" in window){var vis={};var io=new IntersectionObserver(function(es){es.forEach(function(e){vis[e.target.id]=e.isIntersecting});var b=ids.filter(function(id){return vis[id]})[0];if(b)set(b)},{rootMargin:"-100px 0px -60% 0px",threshold:0});ids.forEach(function(id){var el=document.getElementById(id);if(el)io.observe(el)})}
})();
