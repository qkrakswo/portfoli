$(document).ready(function(){

$('#btn1').click(function(){
    var offset = $('.m_c_pc01').offset();
$('html').animate({scrollTop : offset.top}, 400);});

$('#btn2').click(function(){
    var offset = $('.sub_01').offset();
$('html').animate({scrollTop : offset.top}, 800);});

$('#btn3').click(function(){
    var offset = $('.sub_02').offset();
$('html').animate({scrollTop : offset.top}, 800);});

$('#btn4').click(function(){
    var offset = $('.last_content').offset();
$('html').animate({scrollTop : offset.top}, 1200);});    
    
$(".box_01").on("click",function(){
    $(this).siblings(".view01").stop().fadeIn()
})
$(".box_02").on("click",function(){
    $(this).siblings(".view02").stop().fadeIn()
})
$(".box_03").on("click",function(){
    $(this).siblings(".view03").stop().fadeIn()
})
$(".box_04").on("click",function(){
    $(this).siblings(".view04").stop().fadeIn()
})
$(".viewX").on("click",function(){
    $(".view").fadeOut()
})
$(".bgClose").on("click",function(){
    $(".view").fadeOut()
})
AOS.init();
})//끝