/*nav*/
window.addEventListener('scroll',function(){
    const header=document.querySelector('nav')
    header.classList.toggle("sticky",window.scrollY > 0)
})


function togglemenu(){
    const menutoggle=document.querySelector('.menutoggle')
    const navigation=document.querySelector('ul')
    menutoggle.classList.toggle('active')
    navigation.classList.toggle('active')
}


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