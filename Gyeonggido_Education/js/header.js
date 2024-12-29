$(document).ready(function () {
    $(".nav_list>li>a, .nav_bg").on("mouseover",function(){
        $(".nav_bg").stop().show()
    });
    $(".nav_bg").on("mouseout",function(){
        $(".nav_bg").stop().hide()
    })
})