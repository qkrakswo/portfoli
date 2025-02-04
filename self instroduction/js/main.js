$(document).ready(function () {
    $(".a_point").on("click", function () {
        let num = $(this).index();
        console.log(num);
        $(".m_content").css({"opacity":"1"}).eq(num).siblings(".m_content").stop().css({"opacity":"0"})
        $(".a_point").eq(num).css({"height":"70px","top":"-20px","z-index":"99"}).siblings().css({"height":"50px","top":"0px","z-index":"1"})
    });

    AOS.init();

    $(".icon_wrap>img").on("mouseover",function(){
        let count = $(this).index();
        console.log(count);
        $(".picture_box").css({"opacity":"1"}).eq(count).siblings(".picture_box").stop().css({"opacity":"0"});
        $(this).css({"box-shadow":"none"}).siblings(".icon_wrap>img").css({"box-shadow":"4px 4px 10px rgba(0, 0, 0, 0.8)"})
    });

    
    
})