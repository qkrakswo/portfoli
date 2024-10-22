$(document).ready(function(){
    
$(".img_box").on("click",function(){
    event.preventDefault();
    $(this).parent().siblings(".view").stop().fadeIn()
})
$(".viewX").on("click",function(){
    $(".view").fadeOut()
})
$(".bgClose").on("click",function(){
    $(".view").fadeOut()
})
AOS.init();
})//끝