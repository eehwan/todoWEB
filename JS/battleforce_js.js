/**
 * Created by Administrator on 2018-10-14.
 * Design nas.
 */


$(document).ready(function() {
    Logic();



    $('#sc03_slides').slidesjs({
        width:388,
        height:237,
        play: {
            active: false, // play/stop 버튼 활성화 , true=활성화, false=비활성화
            interval: 3000, // 대기시간, 1000=1초,
            effect: "fade", // 효과, slide/fade
            auto: false, // 자동시작
            pauseOnHover: false, // 마우스 오버시 멈춤
            restartDelay: 2500 // 마우스 아웃시 재동작 시간
        },
        navigation: {// 이전/다음 버튼
            active: true, // 버튼 활성화/비활성화
            effect: "fade"
        },
        pagination: {// 페이지네이션, 현재 선택된 슬라이드표시, 전체 갯수 표시
            active: false,
            effect: "fade"
        },
        effect: { // 효과 옵션
            fade: {
                speed: 800
            },
            slide: {
                speed: 1600
            }
        }
    });

    $('#section03 .box .bg_box .prev_btn').on('click',function(){
        $('#sc03_slides .slidesjs-previous').trigger('click');
    });
    $('#section03 .box .bg_box .next_btn').on('click',function(){
        $('#sc03_slides .slidesjs-next').trigger('click');
    });


    $('#sc04_slides').slidesjs({
        width:286,
        height:254,
        play: {
            active: false, // play/stop 버튼 활성화 , true=활성화, false=비활성화
            interval: 3000, // 대기시간, 1000=1초,
            effect: "fade", // 효과, slide/fade
            auto: false, // 자동시작
            pauseOnHover: false, // 마우스 오버시 멈춤
            restartDelay: 2500 // 마우스 아웃시 재동작 시간
        },
        navigation: {// 이전/다음 버튼
            active: true, // 버튼 활성화/비활성화
            effect: "fade"
        },
        pagination: {// 페이지네이션, 현재 선택된 슬라이드표시, 전체 갯수 표시
            active: false,
            effect: "fade"
        },
        effect: { // 효과 옵션
            fade: {
                speed: 800
            },
            slide: {
                speed: 1600
            }
        }
    });

    $('#section04 .box .bg_box .prev_btn').on('click',function(){
        $('#sc04_slides .slidesjs-previous').trigger('click');
    });
    $('#section04 .box .bg_box .next_btn').on('click',function(){
        $('#sc04_slides .slidesjs-next').trigger('click');
    });




    $('#pop_01 .steps .step01').on('mouseenter',function () {
        $('#pop_01 .steps > div').removeClass('on');
        $('#pop_01 .steps .step01 .text01').addClass('on');
        $('#pop_01 .steps .step01 .icon01').addClass('on');
        $('#pop_01 .steps .step01 .text01 .line').addClass('on');
        $('#pop_01 .steps .step01 .text01 .square').addClass('on');
    });
    $('#pop_01 .steps .step01').on('mouseleave',function () {
        $('#pop_01 .steps > div').removeClass('on');
        $('#pop_01 .steps .step01 .text01').removeClass('on');
        $('#pop_01 .steps .step01 .icon01').removeClass('on');
        $('#pop_01 .steps .step01 .text01 .line').removeClass('on');
        $('#pop_01 .steps .step01 .text01 .square').removeClass('on');
    });
    $('#pop_01 .steps .step02').on('mouseenter',function () {
        $('#pop_01 .steps > div').removeClass('on');
        $('#pop_01 .steps .step02 .text02').addClass('on');
        $('#pop_01 .steps .step02 .icon02').addClass('on');
        $('#pop_01 .steps .step02 .text02 .line').addClass('on');
        $('#pop_01 .steps .step02 .text02 .square').addClass('on');
    });
    $('#pop_01 .steps .step02').on('mouseleave',function () {
        $('#pop_01 .steps > div').removeClass('on');
        $('#pop_01 .steps .step02 .text02').removeClass('on');
        $('#pop_01 .steps .step02 .icon02').removeClass('on');
        $('#pop_01 .steps .step02 .text02 .line').removeClass('on');
        $('#pop_01 .steps .step02 .text02 .square').removeClass('on');
    });
    $('#pop_01 .steps .step03').on('mouseenter',function () {
        $('#pop_01 .steps > div').removeClass('on');
        $('#pop_01 .steps .step03 .text03').addClass('on');
        $('#pop_01 .steps .step03 .icon03').addClass('on');
        $('#pop_01 .steps .step03 .text03 .line').addClass('on');
        $('#pop_01 .steps .step03 .text03 .square').addClass('on');
    });
    $('#pop_01 .steps .step03').on('mouseleave',function () {
        $('#pop_01 .steps > div').removeClass('on');
        $('#pop_01 .steps .step03 .text03').removeClass('on');
        $('#pop_01 .steps .step03 .icon03').removeClass('on');
        $('#pop_01 .steps .step03 .text03 .line').removeClass('on');
        $('#pop_01 .steps .step03 .text03 .square').removeClass('on');
    });


    $('#section01 .scroll').on('mouseenter',function () {
        $('#section01 .scroll .next_title').addClass('on');
        $('#section01 .scroll .scroll_text > li').addClass('on');
    });

    $('#section01 .scroll').on('mouseleave',function () {
        $('#section01 .scroll .next_title').removeClass('on');
        $('#section01 .scroll .scroll_text > li').removeClass('on');
    });

    $('#section06 .color_bar .colors03 .oat').on('click',function () {
        $('#section06 .box .pic .pic03 > div').fadeOut(700);
    });
    $('#section06 .color_bar .colors03 .black').on('click',function () {
        $('#section06 .box .pic .pic03 > div').fadeIn(700);
    });

    $('#section06 .color_bar .colors .black').on('click',function () {
        $('#section06 .box .pic .pic01 > div').fadeOut(700);
        $('#section06 .box .pic .pic01 > div:nth-child(1)').fadeIn(700);

    });
    $('#section06 .color_bar .colors .khaki').on('click',function () {
        $('#section06 .box .pic .pic01 > div').fadeOut(700);
        $('#section06 .box .pic .pic01 > div:nth-child(2)').fadeIn(700);
    });
    $('#section06 .color_bar .colors .yellow').on('click',function () {
        $('#section06 .box .pic .pic01 > div').fadeOut(700);
        $('#section06 .box .pic .pic01 > div:nth-child(3)').fadeIn(700);
    });


    $("#section06 .box .pic").slick({
        dots: true, //네이베이션 사용여부
        arrows: true, //화살표 사용여부
        nextArrow: $('#section06 .box .btn'), //다음 화살표
        autoplay:false, //자동넘김
        autoplaySpeed: 4000, //자동넘김 속도
        pauseOnHover:false, //마우스 오버시 자동재생 멈춤
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        swipe: true, //스와이프
        centerMode: false, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        draggable:false,
        variableWidth: true,
        slidesToShow: 2, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
    });

    $('#section06 .box .pic')
        .on('init', function(event, slick){

        })
        .on('beforeChange', function(event, slick, currentSlide, nextSlide){

        })
        .on('afterChange', function(event, slick, currentSlide, nextSlide){
            $('#section06 .box .pic .pic01,#section06 .box .pic .pic02,#section06 .box .pic .pic03').removeClass('on');
            starList_2();
        });


    // /바지/
    function list01_2(){
        $('#section06 .box .pic .pic03').addClass('on');
        $('#section06 .box .pic .pic01,#section06 .box .pic .pic02').removeClass('on');
        $('#section06 .box .inner_text_box02,#section06 .box .inner_text_box03').removeClass('on');
        $('#section06 .box .inner_text_box').addClass('on');
        $('#section06 .box .color_bar .colors02,#section06 .box .color_bar .colors').fadeOut(700);
        $('#section06 .box .color_bar .colors03').fadeIn(700);


    }
    // /운동화/
    function list02_2(){
        $('#section06 .box .pic .pic02,#section06 .box .pic .pic03').removeClass('on');
        $('#section06 .box .pic .pic01').addClass('on');
        $('#section06 .box .inner_text_box,#section06 .box .inner_text_box03').removeClass('on');
        $('#section06 .box .inner_text_box02').addClass('on');
        $('#section06 .box .color_bar .colors02,#section06 .box .color_bar .colors03').fadeOut(700);
        $('#section06 .box .color_bar .colors').fadeIn(700);

    }
    function list03_2(){
        $('#section06 .box .pic .pic01,#section06 .box .pic .pic03').removeClass('on');
        $('#section06 .box .pic .pic02').addClass('on');
        $('#section06 .box .inner_text_box,#section06 .box .inner_text_box02').removeClass('on');
        $('#section06 .box .inner_text_box03').addClass('on');
        $('#section06 .box .color_bar .colors,#section06 .box .color_bar .colors03').fadeOut(700);
        $('#section06 .box .color_bar .colors02').fadeIn(700);
    }

    function starList_2(){

        if($('#slick-slide00').hasClass('slick-active')){
            list01_2();
        }

        if($('#slick-slide01').hasClass('slick-active')){
            list02_2();
        }

        if($('#slick-slide02').hasClass('slick-active')){
            list03_2();
        }

    }


    $('#fullpage').fullpage({

        anchors: ['page01', 'page02', 'page03', 'page04', 'page05', 'page06'],

        navigation: true,
        navigationTooltips: ['page01', 'page02', 'page03', 'page04', 'page05', 'page06'],

        afterLoad: function(anchorLink, index){

            if (index == 1) {// 01 = true
                $('#navigation').removeClass('on');
                $('#section01 .play_bar').addClass('on');

            } else { // 01 = false
                $('#section01 .play_bar').removeClass('on');

            }
            if(index ==2){// 02 = true
                $('#navigation').addClass('on');
                $('#navigation > div:nth-child(1)').addClass('on');
                $('#section02 .text_box').addClass('on');
                $('#section02 .shoe').addClass('on');
                $('#section02 .bar').addClass('on');
            }else{//02 = false
                $('#navigation > div:nth-child(1)').removeClass('on');
                $('#section02 .text_box').removeClass('on');
                $('#section02 .shoe').removeClass('on');
                $('#section02 .bar').removeClass('on');
            }
            if(index ==3){// 03 = true
                $('#navigation').addClass('on');
                $('#navigation > div:nth-child(2)').addClass('on');
                $('#section03 .text_box').addClass('on');
                $('#section03 .logo').addClass('on');
                $('#section03 .bar').addClass('on');
            }else{//02 = false
                $('#navigation > div:nth-child(2)').removeClass('on');
                $('#section03 .text_box').removeClass('on');
                $('#section03 .logo').removeClass('on');
                $('#section03 .bar').removeClass('on');
            }
            if(index ==4){// 04 = true
                $('#navigation').addClass('on');
                $('#navigation > div:nth-child(3)').addClass('on');
                $('#section04 .text_box').addClass('on');
                $('#section04 .logo').addClass('on');
                $('#section04 .bar').addClass('on');

            }else{//02 = false
                $('#navigation > div:nth-child(3)').removeClass('on');
                $('#section04 .text_box').removeClass('on');
                $('#section04 .logo').removeClass('on');
                $('#section04 .bar').removeClass('on');
            }
            if(index ==5){// 05 = true
                $('#navigation').addClass('on');
                $('#navigation > div:nth-child(4)').addClass('on');
                $('#section05 .text_box').addClass('on');
                $('#section05 .ball').addClass('on');
                $('#section05 .bar').addClass('on');

            }else {//02 = false
                $('#navigation > div:nth-child(4)').removeClass('on');
                $('#section05 .text_box').removeClass('on');
                $('#section05 .ball').removeClass('on');
                $('#section05 .bar').removeClass('on');
            }
            if(index ==6){// 06 = true
                $('#navigation').addClass('on');
                $('#navigation > div:nth-child(5)').addClass('on');
                $('#section06 .text_box').addClass('on');
                $('#section06 .bar').addClass('on');

            }else{//02 = false
                $('#navigation > div:nth-child(5)').removeClass('on');
                $('#section06 .text_box').removeClass('on');
                $('#section06 .bar').removeClass('on');
            }

        },

        onLeave: function(index, destination, direction){
            var leavingSection = this;

            if(index == 1 && direction =='down'){//01 - >02

            }

            if(index == 2 && direction == 'down'){//02 -> 03

            } else if(index == 2 && direction == 'up'){//02 -> 01

            }

            if(index == 3 && direction == 'down'){//03 -> 04
                $('#sc03_slides').fadeOut(0);
            } else if(index == 3 && direction == 'up'){//03 -> 02
                $('#sc03_slides').fadeIn(0);
            }
            if(index == 4 && direction == 'down'){//04 -> 05

            } else if(index == 4 && direction == 'up'){//04 -> 03
            }
            if(index == 5 && direction == 'down'){//05 -> 06

            } else if(index == 5 && direction == 'up'){//05 -> 04

            }
            if(index == 6 && direction == 'down'){//05 -> 06
                $('#navigation').fadeOut(100);
            } else if(index == 6 && direction == 'up'){//05 -> 04
                $('#navigation').fadeIn(100);
            }

        }
    });

    $('#section02 .box .btn').on(' click',function () {
        $('#section02 .box .bg_box').addClass('on');
        $('#section02 .box .btn').fadeOut(0);
        $('#section02 .box .btn_x').fadeIn(0);
    });
    $('#section02 .box .btn_x').on(' click',function () {
        $('#section02 .box .bg_box').removeClass('on');
        $('#section02 .box .btn_x').fadeOut(0);
        $('#section02 .box .btn').fadeIn(0);
    });

    $('#section03 .box .btn').on(' click',function () {
        $('#section03 .box .bg_box').addClass('on');
        $('#sc03_slides').addClass('on');
        $('#section03 .box .logo').removeClass('on');
        $('#section03 .box .btn').fadeOut(0);
        $('#section03 .box .btn_x').fadeIn(0);
    });
    $('#section03 .box .btn_x').on(' click',function () {
        $('#section03 .box .bg_box').removeClass('on');
        $('#sc03_slides').removeClass('on');
        $('#section03 .box .logo').addClass('on');
        $('#section03 .box .btn_x').fadeOut(0);
        $('#section03 .box .btn').fadeIn(0);
    });

    $('#section04 .box .btn').on(' click',function () {
        $('#section04 .box .bg_box').addClass('on');
        $('#section04 .box .logo').removeClass('on');
        $('#section04 .box .btn').fadeOut(0);
        $('#section04 .box .btn_x').fadeIn(0);
    });
    $('#section04 .box .btn_x').on(' click',function () {
        $('#section04 .box .bg_box').removeClass('on');
        $('#section04 .box .logo').addClass('on');
        $('#section04 .box .btn_x').fadeOut(0);
        $('#section04 .box .btn').fadeIn(0);
    });

    $('#section05 .box .btn').on(' click',function () {
        $('#section05 .box .bg_box').addClass('on');
        $('#section05 .box .btn').fadeOut(0);
        $('#section05 .box .btn_x').fadeIn(0);
    });
    $('#section05 .box .btn_x').on(' click',function () {
        $('#section05 .box .bg_box').removeClass('on');
        $('#section05 .box .btn_x').fadeOut(0);
        $('#section05 .box .btn').fadeIn(0);
    });

    $('#header .wrap').on('click',function () {
       $('#menu').fadeIn(700);
       $('#header .wrap').addClass('on');
       $('#menu .wrap').removeClass('on');
    });
    $('#menu .wrap,#menu .menu_btn > div').on('click',function () {
        $('#menu').fadeOut(700);
        $('#header .wrap').removeClass('on');
        $('#menu .wrap').addClass('on');
    });

    $('#section02 .text_box .readmore_btn').on('click',function () {
        $('#pop_01').fadeIn(700);
        $('#pop_01 .text').addClass('on');
        $('#pop_01 .box').addClass('on');
    });
    $('#pop_01 .btn_x').on('click',function () {
        $('#pop_01').fadeOut(700);
        $('#pop_01 .text').removeClass('on');
        $('#pop_01 .box').removeClass('on');
    });

    $('#section03 .text_box .readmore_btn').on('click',function () {
        $('#pop_02').fadeIn(700);
        $('#pop_02 .text').addClass('on');
        $('#pop_02 .box').addClass('on');
    });
    $('#pop_02 .btn_x').on('click',function () {
        $('#pop_02').fadeOut(700);
        $('#pop_02 .text').removeClass('on');
        $('#pop_02 .box').removeClass('on');
    });

    $('#section04 .text_box .readmore_btn').on('click',function () {
        $('#pop_03').fadeIn(700);
        $('#pop_03 .text').addClass('on');
        $('#pop_03 .box').addClass('on');
    });
    $('#pop_03 .btn_x').on('click',function () {
        $('#pop_03').fadeOut(700);
        $('#pop_03 .text').removeClass('on');
        $('#pop_03 .box').removeClass('on');
    });

    $('#section05 .text_box .readmore_btn').on('click',function () {
        $('#pop_04').fadeIn(700);
        $('#pop_04 .text').addClass('on');
        $('#pop_04 .box').addClass('on');
    });
    $('#pop_04 .btn_x').on('click',function () {
        $('#pop_04').fadeOut(700);
        $('#pop_04 .text').removeClass('on');
        $('#pop_04 .box').removeClass('on');
    });

    $('#menu .menu_btn > div:nth-child(1)').on('mouseenter',function () {
        $('#menu .menu_img > div').fadeOut(200);
        $('#menu .menu_img > div:nth-child(1)').fadeIn(200);
    });
    $('#menu .menu_btn > div:nth-child(2)').on('mouseenter',function () {
        $('#menu .menu_img > div').fadeOut(200);
        $('#menu .menu_img > div:nth-child(2)').fadeIn(200);
    });
    $('#menu .menu_btn > div:nth-child(3)').on('mouseenter',function () {
        $('#menu .menu_img > div').fadeOut(200);
        $('#menu .menu_img > div:nth-child(3)').fadeIn(200);
    });
    $('#menu .menu_btn > div:nth-child(4)').on('mouseenter',function () {
        $('#menu .menu_img > div').fadeOut(200);
        $('#menu .menu_img > div:nth-child(4)').fadeIn(200);
    });
    $('#menu .menu_btn > div:nth-child(5)').on('mouseenter',function () {
        $('#menu .menu_img > div').fadeOut(200);
        $('#menu .menu_img > div:nth-child(5)').fadeIn(200);
    });



    $('#pop_01 .box .steps .step01').on('mouseenter',function () {
        $('#pop_01 .box .box_img > div').fadeOut(200);
        $('#pop_01 .box .box_img > div:nth-child(1)').fadeIn(200);
    });

    $('#pop_01 .box .steps .step02').on('mouseenter',function () {
        $('#pop_01 .box .box_img > div').fadeOut(200);
        $('#pop_01 .box .box_img > div:nth-child(2)').fadeIn(200);
    });

    $('#pop_01 .box .steps .step03').on('mouseenter',function () {
        $('#pop_01 .box .box_img > div').fadeOut(200);
        $('#pop_01 .box .box_img > div:nth-child(3)').fadeIn(200);
    });


    $('#pop_03 .box_navi > div:nth-child(1)').on('click',function () {
        $('#pop_03 .box_navi >  div:nth-child(1)').addClass('on');
        $('#pop_03 .box_navi >  div:nth-child(2)').removeClass('on');
        $('#pop_03 .box_text').addClass('on');
        $('#pop_03 .box_text02').removeClass('on');
    });
    $('#pop_03 .box_navi > div:nth-child(2)').on('click',function () {
        $('#pop_03 .box_navi >  div:nth-child(1)').removeClass('on');
        $('#pop_03 .box_navi >  div:nth-child(2)').addClass('on');
        $('#pop_03 .box_text').removeClass('on');
        $('#pop_03 .box_text02').addClass('on');
    });



});