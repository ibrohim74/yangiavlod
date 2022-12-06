
var dNoneM = document.querySelectorAll('.d-none-m');
var mobile = document.querySelector('.navMobile')
function myFunction(x) {
    dNoneM.forEach((item)=>{
        if (x.matches) { // If media query matches
            item.style.display = "none";
            mobile.style.display= 'inline-block'
        } else {
            item.style.display = "flex";
            mobile.style.display= 'none'
        }
    })
}

var x = window.matchMedia("(max-width: 992px)")
myFunction(x)
x.addListener(myFunction)