// change navbar stlye on scroll
window.addEventListener('scroll', ()=> {
   document.querySelector('nav').classList.toggle
   ('window-scroll', window.scrollY > 100)
})