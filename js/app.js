/* Variables */
var banner = document.getElementById ('banner')

/* Banner show/hide function */
window.onscroll = function() {
    var top = document.body.scrollTop + document.documentElement.scrollTop == 0
    banner.style.opacity = top ? '1' : '0'
    banner.style.transition = 'all .3s'
}


/* 
Enable for smooth scroll
This shi still got some bugs

luxy.init()
*/



