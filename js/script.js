// history.go()
//
// setTimeout(()=>{
//     document.location.reload()
// },10000)
var dNoneM = document.querySelectorAll('.d-none-m');
var mobile = document.querySelector('.navMobile');
var splideM =document.querySelector('.splideM')
var splideD =document.querySelector('.splideD')
function myFunction(x) {
    dNoneM.forEach((item)=>{
        if (x.matches) { // If media query matches
            item.style.display = "none";
            mobile.style.display= 'inline-block'
            splideM.style.display = 'block'
            splideD.style.display = 'none'

        } else {
            item.style.display = "flex";
            mobile.style.display= 'none'
            splideM.style.display = 'none'
            splideD.style.display = 'block'
        }
    })
}

var x = window.matchMedia("(max-width: 992px)")
myFunction(x)
x.addListener(myFunction)

var splide1 = new Splide( '.splideM', {
    type   : 'loop',
    perPage: 1,
    perMove: 1,
    breakpoints: true
} );
splide1.mount();


var splide = new Splide( '.splideD', {

    type   : 'loop',
    perPage: 3,
    perMove: 1,
    breakpoints: true
} );
splide.mount();



