console.log('Loaded')

//show menu after click WORKS
function showMenu() {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("nav-menu");


    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  
}
window.addEventListener('load', showMenu);

//active link
// function linkActivation() {
//     const navLink = document.querySelectorAll('.nav__link')
//     navLink.forEach(n => n.classList.remove('active'))
//     this.classList.add('active')
// }
// window.addEventListener('load', linkActivation)

//Remove Menu AFter Click WORKS
function removeMenu() {
    const navLink = document.querySelectorAll('.nav__link');
    const navMenu = document.getElementById('nav-menu')
    
    navLink.forEach(n => n.addEventListener('click', () => { navMenu.classList.remove('show') }))
}
window.addEventListener('load', removeMenu)

//scroll section active menu
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
       const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
         sectionId = current.getAttribute('id')

         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
         }else{
           document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
         }
     })
 }
 window.addEventListener('scroll', scrollActive)


//change background header -- ANDA --

function scrollHeader(){
    const header = document.getElementById('header')
    if (this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

//change scroltop color -- ANDA --

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    if (this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)