$(document).ready(function () {
    $(".nav>li").on("mouseover", function () {
        $(".nav_bg").stop().slideDown()
    });
    $(".nav>li").on("mouseout", function () {
        $(".nav_bg").stop().slideUp()
    });
})