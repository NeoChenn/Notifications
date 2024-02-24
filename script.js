let button = document.querySelector(".button")
let star = document.querySelectorAll(".newNotification")
let highlight = document.querySelectorAll(".unread")

button.addEventListener("click",function(){
    star.forEach(function(star){
        star.style.display="none"
    })
    highlight.forEach(function(highlight){
        highlight.style.backgroundColor="transparent"
    })
})