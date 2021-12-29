/* Variables */
let body = document.querySelector('body')
let banner = document.getElementById ('banner')
let cursor = document.getElementById ('cursor')
let layer = document.querySelectorAll ('layer')
let videos = Array.from(document.querySelectorAll("video"))
let links = Array.from(document.querySelectorAll("button, a"))

/* Banner show/hide function */
window.onscroll = function() {
    var top = document.body.scrollTop + document.documentElement.scrollTop == 0
    banner.style.opacity = top ? '1' : '0'
    banner.style.transition = 'all .3s'
}

/* Custom cursor */ 
document.addEventListener("mousemove", moveCursor)
function moveCursor(e) {
    let x = e.clientX
    let y = e.clientY

   cursor.style.left = `${x}px`
   cursor.style.top = `${y}px`
}

links.forEach (link => {
    link.addEventListener('mousemove', ()=>{
        cursor.classList.add('state-1')
    })
    link.addEventListener('mouseleave', ()=>{
        cursor.classList.remove('state-1')
    })
})

videos.forEach (video => {
    video.addEventListener('mousemove', ()=>{
        cursor.classList.add('state-2')
    })
    video.addEventListener('mouseleave', ()=>{
        cursor.classList.remove('state-2')
    })
})

/* Web preloader */
gsap.to('.layer-1', {y: '-100vh', delay: 0})
gsap.to('.layer-2', {y: '-100vh', delay: 0.3})
gsap.to('.layer-3', {y: '-100vh', delay: 0.6})
gsap.to('.layer-4', {y: '-100vh', delay: 0.9})
gsap.to('.layer-5', {y: '-100vh', delay: 1.2})
gsap.to('.overlay', {y: '-100vh', delay: 1.5})
