(function(){
var MENU='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"></path></svg>';
var CLOSE='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"></path></svg>';
Array.prototype.forEach.call(document.querySelectorAll("header"),function(h){
  var box=h.querySelector(":scope > div:last-child");if(!box||h.querySelector(".menu-btn"))return;
  var b=document.createElement("button");b.type="button";b.className="menu-btn";b.setAttribute("aria-label","ម៉ឺនុយ");b.setAttribute("aria-expanded","false");b.innerHTML=MENU;
  b.addEventListener("click",function(){var o=h.classList.toggle("menu-open");b.setAttribute("aria-expanded",o?"true":"false");b.innerHTML=o?CLOSE:MENU});
  box.appendChild(b);
  Array.prototype.forEach.call(h.querySelectorAll("nav a"),function(a){a.addEventListener("click",function(){h.classList.remove("menu-open");b.setAttribute("aria-expanded","false");b.innerHTML=MENU})});
});
})();
