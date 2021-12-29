var banner = document.getElementById('banner')

window.onscroll = function() {
    var top = document.body.scrollTop + document.documentElement.scrollTop == 0
    banner.style.opacity = top ? '1' : '0'
    banner.style.transition = 'all .3s'
}

luxy.init()



