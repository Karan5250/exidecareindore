const menuToggle=document.querySelector('.menu-toggle');
const navWrap=document.querySelector('.nav-wrap');
if(menuToggle){
  menuToggle.addEventListener('click',()=>{
    const open=navWrap.classList.toggle('menu-open');
    menuToggle.setAttribute('aria-expanded',open?'true':'false');
  });
}
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const el=document.querySelector(a.getAttribute('href'));
    if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth',block:'start'});}
  });
});
