AOS.init();


// scroll
$(window).scroll(function(){
    $('.header_container, .header_main, ul.navbar_gnb, .enbMap a, .enbShop a, .trigger .icon_bar').addClass('scroll');
    if($(window).scrollTop() == 0){
        $('.header_container, .header_main, ul.navbar_gnb, .enbMap a, .enbShop a, .trigger .icon_bar').removeClass('scroll');
    } 
});

// pc menu
$('.navbar_gnb li, .sub_shadow').on('mouseenter mouseleave',function(aa){ // mouseover mouseout== mouseenter mouseleave
    if($(window).width() > 1239){ // pc(데스크탑) 상태였을 때 실행
        if(aa.type == 'mouseenter'){ // mouseenter 였을 때만 적용
            $('.sub').stop().slideDown(); // stop() 이벤트가 바뀌면 멈춤
            $('.sub_shadow').stop().fadeIn();
        } else {
            $('.sub').stop().slideUp(200, function(){
                $('.sub').removeAttr('style') /*콜백함수*/
            });
            $('.sub_shadow').stop().fadeOut(200, function(){ 
                $(this).removeAttr('style')
            }); // 지저분하게 있는 style 정리
        }
    }
});

// menu scroll 
$('.header_container').hover(function(){
    $('.header_container, .header_main, ul.navbar_gnb, .enbMap a, .enbShop a, .trigger .icon_bar').addClass('menu_on');},
    function(){
        $('.header_container, .header_main, ul.navbar_gnb, .enbMap a, .enbShop a, .trigger .icon_bar').removeClass('menu_on');
    }
);


// mobile menu

const $mainBtn = $('.navbar_gnb > li > a'); // 메인 메뉴 

$mainBtn.click(function(){
    if( $(window).width() < 1240) {     // 모바일 상태였을 때만
        if( !$(this).parents('li').hasClass('on')){ // 클릭한 a 의 부모 li 에 on 클래스가 없을 때
            $('.sub').slideUp(300); // sub 메뉴 누르면 이미 열려있는 메뉴는 닫히고 새로 선택한 메뉴만 오픈
            $('.navbar_gnb > li').removeClass('on');
            $(this).siblings('.sub').slideDown(500); // siblings 형제 요소만 적용
            $(this).parents('li').addClass('on'); // .parents() 나 자신보다 윗단계에 있는 모든 요소
        } else { // 클릭한 부분이 이미 열려 있는 상태 (on 이 이미 있는 상태)
            $('.sub').slideUp(300);
            $(this).parents('li').removeClass('on');
        }
    }
});


const $footerBtn = $('.mFamilySiteContainer');

$footerBtn.click(function(){
    if( $(window).width() < 1240) { 
        if( !$(this).parents('li').hasClass('on')){ 
            
        }
    }
});


// 모바일 상태에서 햄버거 버튼을 누르면 사이드바가 열리고 닫힘
$('.trigger').click(function(){
    $(this).toggleClass('open');
    
    if($(this).hasClass('open')){
        $('.gnb').animate({right:0},400);
        $('header').animate({left:-250},400);
    } else {
        $('.gnb').animate({right:-250},200);
        $('header').animate({left:0},200);
    }
})

// 모바일 상태에서 서브 메뉴를 열고 데스크탑 상태로 바꾸면 서브가 그냥 보여지는 상태 (수정하기)


$(window).resize(function(){
    if($(window).width() > 1239){
        $('ul.navbar_gnb').removeAttr('style');
        $('.sub').removeAttr('style');
        $('.navbar_gnb > li').removeClass('on');
    }
});


// footer 


$(document).ready(function(){
    btn = $('.mFamilySiteContainer'); //버튼 아이디 변수 선언
    layer = $('.mFamilySiteBox'); //레이어 아이디 변수 선언

    btn.click(function(){
    layer.toggle(
        function(){layer.addClass('show')}, //클릭하면 show클래스 적용되서 보이기
        function(){layer.addClass('hide')} //한 번 더 클릭하면 hide클래스가 숨기기
    );
    });
});



// 스크롤 이벤트

//   let count=$("#mainCountYear .countContainer").offset().top; //tasteul의 위치값
//   let winH = $(window).height(); //브라우저창 높이값
//   let countH = $("#mainCountYear .countContainer").height()/2; // tasteul의 높이값

//   $(window).on("scroll",function(){
//       if($(window).scrollTop()>count-winH+countlH){ // 1빙그레맛등장
//           $(".countContainer .countBox .countNum").addClass("countUp delay");
//       }
//       if($(window).scrollTop()<count-winH+countlH){ // 1빙그레맛사라짐
//           $(".countContainer .countBox .countNum").removeClass("countUp delay");
//       }
//   });


$(window).resize(function(){
    if($(window).width() > 1239){
        $('ul.navbar_gnb').removeAttr('style');
        $('.sub').removeAttr('style');
        $('.navbar_gnb > li').removeClass('on');
    }
});




$(function(){
    $('.instaBox').slick({
        slidesToShow : 4, 
        slidesToScroll: 1,
        infinite: true,
        speed : 1000,
        autoplaySpeed : 1000, 
        arrows : true,
        autoplay : true,

    responsive: [ // 반응형 웹 구현 옵션
                {  
                    breakpoint: 1200, //화면 사이즈 1200
                    settings: {
                    slidesToShow : 3, 
                    } 
                },
                { 
                    breakpoint: 790, //화면 사이즈 790
                    settings: {    
                    slidesToShow : 1, 
                    } 
                }
            ]
    });
    $('.storeDesc').slick({
        infinite: true,
        speed : 1000,
        autoplaySpeed : 500, 
        autoplay : true,
    });
});


/*********** 슬릭 연습 ***********/
// $(function(){
//     $('#slider-div').slick({
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 3
//       });    
// })

        // $(function(){
        //   $('#slider-div').slick({
        //       slide: 'div',        //슬라이드 되어야 할 태그 ex) div, li 
        //       infinite : true,     //무한 반복 옵션     
        //       slidesToShow : 4,        // 한 화면에 보여질 컨텐츠 개수
        //       slidesToScroll : 1,        //스크롤 한번에 움직일 컨텐츠 개수
        //       speed : 100,     // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        //       arrows : true,         // 옆으로 이동하는 화살표 표시 여부
        //       dots : true,         // 스크롤바 아래 점으로 페이지네이션 여부
        //       autoplay : true,            // 자동 스크롤 사용 여부
        //       autoplaySpeed : 10000,         // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        //       pauseOnHover : true,        // 슬라이드 이동    시 마우스 호버하면 슬라이더 멈추게 설정
        //       vertical : false,        // 세로 방향 슬라이드 옵션
        //       prevArrow : "<button type='button' class='slick-prev'>Previous</button>",        // 이전 화살표 모양 설정
        //       nextArrow : "<button type='button' class='slick-next'>Next</button>",        // 다음 화살표 모양 설정
        //       dotsClass : "slick-dots",     //아래 나오는 페이지네이션(점) css class 지정
        //       draggable : true,     //드래그 가능 여부 
              
        //       responsive: [ // 반응형 웹 구현 옵션
        //           {  
        //               breakpoint: 960, //화면 사이즈 960px
        //               settings: {
        //                   //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
        //                   slidesToShow:3 
        //               } 
        //           },
        //           { 
        //               breakpoint: 768, //화면 사이즈 768px
        //               settings: {    
        //                   //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
        //                   slidesToShow:2 
        //               } 
        //           }
        //       ]

        //   });
        // })

$(function(){
  $(window).scroll(function(){
    if ($(this).scrollTop() > 300){
      $('#topBtn').fadeIn();
      $('#topBtn').css('opacity','1');
    }else{
      $('#topBtn').fadeOut();
    }
  });

  $('#topBtn').click(function(){
    $('html, body').animate({
      scrollTop : 0
    }, 400);
  });
});