$(document).ready(function(){
    var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
          
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay:{
            delay: 2500,
            disableOnInteraction: false,},
        
      });

    /*뉴스에 있는 스와이퍼*/
    var swiper = new Swiper(".release_banner>.mySwiper", {
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    /*공지사항 섹션*/
    $(".choice_box>p").on("click",function(){
      let num = $(this).index()
      $(".show_box").show().eq(num).stop().siblings(".show_box").hide();
      $(this).css({"color":"#fff","background-color":"#3f68b8","border":"1px solid #fff"}).siblings().css({"color":"#3f68b8","background-color":"#fff","border-right":"1px solid #3f68b8"});
    })

    /*푸터 바로가기섹션*/
    $(".list_two").on("click",function(){
      if($(".list_two>ul").css("display")=="none"){
        $(".list_two>ul").css("display","block")
      }else{
        $(".list_two>ul").css("display","none")
      } 
    });

    $(".list_three").on("click",function(){
      if($(".list_three>ul").css("display")=="none"){
        $(".list_three>ul").css("display","block")
      }else{
        $(".list_three>ul").css("display","none")
      } 
    });
    $(".list_four").on("click",function(){
      if($(".list_four>ul").css("display")=="none"){
        $(".list_four>ul").css("display","block")
      }else{
        $(".list_four>ul").css("display","none")
      } 
    });
    
})