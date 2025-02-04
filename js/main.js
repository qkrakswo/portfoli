$(document).ready(function () {
    setTimeout(function() {
        $('#popup').fadeIn().addClass('show');  // 팝업이 3초 후에 부드럽게 나타납니다.
      }, 3000);
    
      $('#popup-close').click(function() {
        $('#popup').fadeOut().removeClass('show');  // 닫기 버튼 클릭 시 팝업 사라짐
      });
    
      $('#popup-yes').click(function() {
        $('#popup').fadeOut().removeClass('show');  // "네" 버튼 클릭 시 팝업 사라짐
        alert("팝업을 확인하셨습니다!");
      });
    
      $('#popup-no').click(function() {
        $('#popup').fadeOut().removeClass('show');  // "아니요" 버튼 클릭 시 팝업 사라짐
      });

    //팝업 끝



    $('#btn1').click(function () {
        var offset = $('.m_c_pc01').offset();
        $('html').animate({ scrollTop: offset.top }, 400);
    });

    $('#btn2').click(function () {
        var offset = $('.sub_01').offset();
        $('html').animate({ scrollTop: offset.top }, 800);
    });

    $('#btn3').click(function () {
        var offset = $('.sub_02').offset();
        $('html').animate({ scrollTop: offset.top }, 800);
    });

    $('#btn4').click(function () {
        var offset = $('.last_content').offset();
        $('html').animate({ scrollTop: offset.top }, 1200);
    });

    $(".box_01").on("click", function () {
        $(this).siblings(".view01").stop().fadeIn()
    })
    $(".box_02").on("click", function () {
        $(this).siblings(".view02").stop().fadeIn()
    })
    $(".box_03").on("click", function () {
        $(this).siblings(".view03").stop().fadeIn()
    })
    $(".box_04").on("click", function () {
        $(this).siblings(".view04").stop().fadeIn()
    })
    $(".viewX").on("click", function () {
        $(".view").fadeOut()
    })
    $(".bgClose").on("click", function () {
        $(".view").fadeOut()
    })
    AOS.init();
})//끝