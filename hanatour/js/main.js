$(document).ready(function(){
     
     $(".d_block").on("click",function(){
        $(".d_pop").css({"display":"block"});
        $(".departure").css({"border":"1px solid #5e2bb8"})
    })
    
   $(".d_pop>li>a").on("click",function(e){
    e.preventDefault()//a링크 막기
    let txt = $(this).text();
    $(".d_block").text(txt);
    $(".d_pop").css({"display":"none"});
    $(".departure").css({"border":"none"})
   })

   $(function(){
      $("#datepicker").datepicker({
          numberOfMonths:2,//표시되는 달력개수
          monthNames:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
          dateFormat:"yy-mm-dd",
          dayNamesMin:["월","화","수","목","금","토","일"]
      });//datepicker
      $(".calender_box02").datepicker({
         numberOfMonths:2,//표시되는 달력개수
         monthNames:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
         dateFormat:"yy-mm-dd",
         dayNamesMin:["월","화","수","목","금","토","일"]
     });//datepicker
     $(".calender_box03").datepicker({
      numberOfMonths:2,//표시되는 달력개수
      monthNames:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
      dateFormat:"yy-mm-dd",
      dayNamesMin:["월","화","수","목","금","토","일"]
     });//datepicker
     
   })
  
   $(".choice_wrap>li").on("click",function(){
      let num = $(this).index();
      $(this).css({"border-bottom":"2px solid black"})
      .siblings().css({"border-bottom":"none"})
      $(".switch_wrap").children("div").eq(num).css({"display":"block"})
      .siblings().hide()
   })
   let onOff = true
   $(".option_left,.option_right").on("click",function(){
      onOff = !onOff
      if(onOff == false){
         $(this).addClass('on')
     }else{
         $(this).removeClass('on')
     }
   })

   /*스와이퍼*/
   let i = 0;

   setInterval(function(){
      let ns = (i+1) % 4;
      // console.log(ns)
      $(".con").children().eq(ns-1).fadeOut(2000);
      $(".con").children().eq(ns).fadeIn(2000)
      i++;
  },6000)



   var swiper = new Swiper(".mySwiper", {
      speed:500,
      autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
         delay : 6000,   // 시간 설정
         disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
       },
   });


               //row4시작
   $(".conWarp .con").on("click",function(){
      let con = $(this).index();
      console.log(con)
      $(".change_wrap").children(".change_box").eq(con).css({"opacity":"1"})
      .siblings().css({"opacity":"0"})

      $(this).css({"background-color":"black","color":"white"})
      .siblings().css({"background-color":"white","color":"black"})
   })

                //row5시작

   var swiper = new Swiper(".mySwiper_row5", {
      slidesPerView: 4,
      spaceBetween: 18,
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
       },
       loop : true,
      });
   
   //row6시작
   var swiper = new Swiper(".mySwiper_row6", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop : true,
    });
   

   
})//ducument 끝