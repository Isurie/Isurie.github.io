const header=document.querySelector(".site-header"),toggle=document.querySelector(".nav-toggle"),links=document.querySelector(".nav-links");
window.addEventListener("scroll",()=>header.classList.toggle("scrolled",window.scrollY>20));
if(toggle){toggle.addEventListener("click",()=>{const open=links.classList.toggle("open");toggle.setAttribute("aria-expanded",open)})}
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));