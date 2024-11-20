$(document).ready(function(){
        $('.gnb>li').on('mouseover',function(){
            $('.gnb>li').children('.submenu').stop().slideDown(200)
        })
        $('.gnb>li').on('mouseout',function(){
            $('.gnb>li').children('.submenu').stop().slideUp(200)
        })
        $('.gnb>li').on('mouseover',function(){
            $('.gnb>li').parents('header').siblings(".bg").stop().show()
        })
        $('.gnb>li').on('mouseout',function(){
             $('.gnb>li').parents('header').siblings(".bg").stop().hide()
        })

        let onOff = true;

        $('.util .box1').on('click',function(){
            onOff = !onOff;
            if(onOff == false){
                $('.bg,.submenu').show()
            }else{
                $('.bg,.submenu').hide()
            }
        })
        
        $('.choice_box>li').on("click",function(){
            let i = $(this).index();
            $('.left_box').children('img').eq(i).animate({"left" : "0%",})
            .siblings().animate({"left" : "100%"})
            $('.center_box').children('img').eq(i).show()
            .siblings().hide()
            $('.right_box').children('img').eq(i).show()
            .siblings().hide()
        })

        var swiper = new Swiper(".mySwiper", {
          
            autoplay: {     //자동슬라이드 (false-비활성화)
                delay: 2500, // 시간 설정
                disableOnInteraction: false, // false-스와이프 후 자동 재생
              },
          });

          let swiperTop = new Swiper('.swiper_top',{
            spaceBetween:0,
            speed:20000,
            centeredSlides:true,//센터모드
            autoplay:{
              delay:0,//시간설정
            },
            loop:true,
              slidesPerView :'1',//한슬라이드에 보여줄 개수. auto는 각 슬라이드 넓이에 맞게 자동설정
              disableOnInteraction: true,
              //false로 설정하면 스와이프 후 자동재생이 비활성화 되지않음
              allowTouchMove:false,
              //false시에 스와이핑이 되지 않음
              //버튼으로만 슬라이드 조작가능
              freemode: true
          })

        
        gsap.from(".slogan_01",{
            x:-1500,opacity:0,
            scrollTrigger:{
            trigger:".row2",
            // markers:true,
            start:"-20% 50%",
            end:"30% 50%",
            scrub:true,
        }
        })
        gsap.from(".slogan_02",{
            x:-1500,opacity:0,
            scrollTrigger:{
            trigger:".row2",
            // markers:true,
            start:"0% 50%",
            end:"50% 50%",
            scrub:true,
        }
        })
        

    
})//script