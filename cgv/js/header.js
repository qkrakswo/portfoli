$(document).ready(function () {
    $(".nav>li").on("mouseover", function () {
        $(".nav_bg").stop().slideDown()
    });
    $(".nav>li").on("mouseout", function () {
        $(".nav_bg").stop().slideUp()
    });

    //스크롤시 헤더색 변경
    $(window).on('scroll',function(){
        if($(window).scrollTop()>=200){
            $('.nav_line').addClass('on');
        }else{
            $('.nav_line').removeClass('on');
        }
    });
})