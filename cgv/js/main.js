$(document).ready(function () {
    //비디오 재생 및 소리 버튼
    var video = $(".my_video").get(0);

    $(".stop").on("click", function () {
        video.pause();
        $(".play").css("display", "block");
        $(".stop").css("display", "none");
    });

    $(".play").on("click", function () {
        video.play();
        $(".stop").css("display", "block");
        $(".play").css("display", "none");
    });

    $(".no_sound").on("click", function () {
        $(".my_video").prop('muted', false);
        $(".sound").css("display", "block");
        $(".no_sound").css("display", "none");
    });

    $(".sound").on("click", function () {
        $(".my_video").prop('muted', true);
        $(".no_sound").css("display", "block");
        $(".sound").css("display", "none");
    });
    //영상 버튼 끝



    //인기영화 나열 스와이퍼 시작
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 5,
        spaceBetween: 30,
        slidesPerGroup: 5,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    $(".planned_movie").on("click", function () {
        $(".first_swiper").css("display", "none");
        $(".second_swiper").css("display", "block");
        $(".movie_chart").css({ "font-weight": "400", "color": "#666" });
        $(this).css({ "font-weight": "bold", "color": "#222" });


    });
    $(".movie_chart").on("click", function () {
        $(".first_swiper").css("display", "block");
        $(".second_swiper").css("display", "none");
        $(".planned_movie").css({ "font-weight": "400", "color": "#666" });
        $(this).css({ "font-weight": "bold", "color": "#222" });


    });
    //인기영화 나열 스와이퍼 끝

    //특별 영화관 코드
    $(".choice_box>a").on("mouseover", function () {
        let num = $(this).index();
        $(".switch_imgbox>img").show().eq(num).siblings().hide();
        $(this).css({ "border-radius": "10px", "border": "1px solid #222" }).siblings().css({ "border-radius": 0, "border": 0 });
        $(this).children(".point_txt").css("font-weight", "bold").parent().siblings().children().css("font-weight", "normal");
    });



})