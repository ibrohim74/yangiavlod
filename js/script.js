
var dNoneM = document.querySelectorAll('.d-none-m');

function myFunction(x) {
    dNoneM.forEach((item)=>{
        if (x.matches) { // If media query matches
            item.style.display = "none";
        } else {
            item.style.display = "flex";
        }
    })

}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes