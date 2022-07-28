/*nav*/
window.addEventListener('scroll',function(){
    const header=document.querySelector('nav')
    header.classList.toggle("sticky",window.scrollY > 0)
})

const menutoggle=document.querySelector('.menutoggle')
    const navigation=document.querySelector('ul')

function togglemenu(){
    
    menutoggle.classList.toggle('active')
    navigation.classList.toggle('active')
}
/*function changeBg() {
    const images=[
        'url("/img/1.jpg")',
        'url("/img/3.jpg")',
        
        'url("/img/5.jpg")',
    ]
    const banner=document.querySelector(".banner")
    const bg=images[Math.floor(Math.random()* images.length)]
    banner.style.backgroundImage= 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),'+bg  
}
setInterval(changeBg,900)*/

/*HACER LENTO*/

/*const body = document.body,
                scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
                height = scrollWrap.getBoundingClientRect().height - 1,
                speed = 0.04;

            var offset = 0;

            body.style.height = Math.floor(height) + "px";

            function smoothScroll() {
                offset += (window.pageYOffset - offset) * speed;

                var scroll = "translateY(-" + offset + "px) translateZ(0)";
                scrollWrap.style.transform = scroll;

                callScroll = requestAnimationFrame(smoothScroll);
            }

            smoothScroll();


*/
  /*$(document).ready(function(){
    $('.sidenav').sidenav();
  });*/
 
  function vamos(){
    menutoggle.classList.remove('active')
    navigation.classList.remove('active')
  }