hamburger = document.querySelector('.hamburger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.navlist')
rightnav = document.querySelector('.rightnav')
 


hamburger.addEventListener('click', ()=>{
    rightnav.classList.toggle('rightnav');
    navlist.classList.toggle('navlist');
    // navbar.classList.toggle('navbar');
    
})