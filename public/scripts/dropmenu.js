// function linkActivation() {
//     //active link
//     navLink.forEach(n => n.classList.remove('active'))
//     this.classList.add('active')

//     //remove menu
//     const navMenu = document.getElementById('nav-menu')
//     navMenu.classList.remove('show')
// }

// window.addEventListener('load', navLink.forEach(n => n.addEventListener('click', linkActivation)))

// //scroll section active menu
// const sections = document.querySelectorAll('section[id]')

// function scrollActive(){
//     const scrollY = window.pageYOffset

//     sections.forEach(current =>{
//        const sectionHeight = current.offsetHeight
//         const sectionTop = current.offsetTop - 50;
//          sectionId = current.getAttribute('id')

//          if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//              document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
//          }else{
//            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
//          }
//      })
//  }
//  window.addEventListener('scroll', scrollActive)