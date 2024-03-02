
function loading(){
    
var tl=gsap.timeline();

tl.to('#yellow1',{
    top:'-100%',
    delay:0.5,
    duration:0.7,
    ease:'expo.out'
})

tl.from('#yellow2',{
    top:'100%',
    delay:0.6,
    duration:0.7,
    ease:'expo.out'
},'anim')
tl.to('.loader h1',{
    delay:0.6,
    duration:0.7,
    color:'black'
},'anim')

tl.to('.loader',{
    display:'none',
})
tl.to('.loader',{
    opacity:0,
})
}
loading()

function loco(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });
    let elems=document.querySelectorAll('.elem');
    let page=document.querySelector('.page2');
    elems.forEach((e,i)=>{
        e.firstElementChild.addEventListener('mouseover',()=>{
            let bg=e.getAttribute('data-img')
            page.style.backgroundImage=`url(${bg})`
        })
    })
    
    document.getElementById('top').addEventListener('click',()=>{
        scroll.scrollTo(0)
    })
}
loco();