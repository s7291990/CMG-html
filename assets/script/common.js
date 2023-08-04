
$(function(){
    common.calendar();
    common.etcEvt();

});

var TOUCH = "ontouchstart" in window;
var tevent = '';
if (TOUCH){
    tevent = "touchstart";
}else{
    tevent = "click";
}


common = {
    calendar:function(){
        $(".datepicker").datepicker({
            dateFormat: "yy-mm-dd"
        });
    },
    etcEvt:function(){
        if($(".select-list-wrap").length){
            $(".select-list-wrap").mCustomScrollbar({axis:"y"});
        }

        $("body").on("click", ".totalmenu-wrap .rela01>ul>li>a", function(){
            var ck = $(this).hasClass("on");
            if(ck){
                $(this).removeClass("on");
            }else{
                $(".totalmenu-wrap .rela01>ul>li>a").removeClass("on");
                $(this).addClass("on");
            }
        });
        $("body").on("click", ".main-mob-page ul li a", function(){
            $(".main-mob-page ul li a").removeClass("on");
            $(this).addClass("on");
        });


        $("body").on("click", ".faq-list dt a", function(){
            var ck = $(this).hasClass("on");
            if(ck){
                $(this).removeClass("on");
                $(this).parents("dt").eq(0).next("dd").removeClass("on");
            }else{
                $(this).addClass("on");
                $(this).parents("dt").eq(0).next("dd").addClass("on");
            }
        });
        $("body").on("click", ".select-item-wrap>a", function(){
            var ck = $(this).hasClass("on");
            if(ck){
                $(this).removeClass("on");
            }else{
                $(this).addClass("on");
            }
        });
        $("body").on("mouseleave", ".select-item-wrap", function(){
            $(".select-item-wrap>a").removeClass("on");
        });

        $("body").on("click", ".mob-menu-wrap li a", function(){
            $(".mob-menu-wrap li a").removeClass("on");
            $(this).addClass("on");
            $(".mob-tabarea").removeClass("on");
            var _id = $(this).attr("data-id");
            $("#"+_id).addClass("on");
        });

        $("body").on("click", ".prod-tabmenu-wrap ul li a", function(){
            $(".prod-tabmenu-wrap ul li a").removeClass("on");
            $(this).addClass("on");
            $(".prod-tabarea-wrap").removeClass("on");
            var _id = $(this).attr("data-id");
            $("#"+_id).addClass("on");
        });

        $("body").on("click", "#contents-tabmenu-slide a", function(){
            $("#contents-tabmenu-slide a").removeClass("on");
            $(this).addClass("on");
            $(".contents-tabs-area").removeClass("on");
            var _id = $(this).attr("data-id");
            $("#"+_id).addClass("on");
        });


        var currentDirection = ''; // 현재의 방향을 나타내는 변수
        var lastScrollTop = 0; // 방향을 구하기 위해 사용되는 변수
        $(window).scroll( $.throttle( 100, function(e) {
            var currentPos = $(this).scrollTop();
            if (currentPos > lastScrollTop){
                // 아래로 스크롤 중
                if(currentDirection != 'down') { // 마지막 방향 확인
                    currentDirection = 'down';
                    $("header").removeClass("up").addClass("down");
                }

            } else {
                // 위로 스크롤 중
                if(currentDirection != 'up') { // 마지막 방향 확인
                    currentDirection = 'up';
                    $("header").removeClass("down").addClass("up");
                }
            }
            lastScrollTop = currentPos; // 방향을 구하기 위해 마지막 스크롤 지점을 저장

            if(lastScrollTop == 0){
                $("header").removeClass("down").removeClass("up");
            }

            if($(document).height() - 150 < $(window).scrollTop() + $(window).height()) {
                $(".fixed-item-wrap").removeClass("on");
            }else{
                $(".fixed-item-wrap").addClass("on");
            }
        }));

        var m_currentDirection = ''; // 현재의 방향을 나타내는 변수
        var m_lastScrollTop = 0; // 방향을 구하기 위해 사용되는 변수
        $(".container").scroll( $.throttle( 100, function(e) {
            var currentPos = $(this).scrollTop();
            if (currentPos > m_lastScrollTop){
                // 아래로 스크롤 중
                if(m_currentDirection != 'down') { // 마지막 방향 확인
                    m_currentDirection = 'down';
                    $("header").removeClass("up").addClass("down");
                }

            } else {
                // 위로 스크롤 중
                if(m_currentDirection != 'up') { // 마지막 방향 확인
                    m_currentDirection = 'up';
                    $("header").removeClass("down").addClass("up");
                }
            }
            m_lastScrollTop = currentPos; // 방향을 구하기 위해 마지막 스크롤 지점을 저장

            if(m_lastScrollTop == 0){
                $("header").removeClass("down").removeClass("up");
            }

            if($(".container").height() - 150 < $(".container").scrollTop() + $(".container").height()) {
                $(".fixed-item-wrap").removeClass("on");
            }else{
                $(".fixed-item-wrap").addClass("on");
            }
        }));

        /*
        $("body").on("click",".board-tabmenu a",function(){
            $(".board-tabmenu a").removeClass("on");
            $(this).addClass("on");
        });
        */
        $("body").on("click",".btn-upload",function(){
            $(this).prev(".hidden").trigger("click");
        });
        $("body").on("change",".hidden",function(){
            $(this).prev(".inp").val($(this).val());
        });

        $("body").on("click",".main-slide-ctrl button",function(){
            var ck = $(this).hasClass("on");
            if(ck){
                $(this).removeClass("on");
                mainSlideWrap.autoplay.start();
            }else{
                $(this).addClass("on");
                mainSlideWrap.autoplay.stop();
            }
        });


        $("body").on("mouseenter", "header .gnb-list>li>a", function(ev){
            $(".side-cont").addClass("on");
            $("header").addClass("active");
            $(".totalmenu-wrap").addClass("on");
        });
        $("body").on("mouseleave", "header", function(ev){
            $(".side-cont").removeClass("on");
            $("header").removeClass("active");
            $(".totalmenu-wrap").removeClass("on");
        });
        $("body").on("click", ".btn-total-nav", function(ev){
            var ck = $(".side-cont").hasClass("on");
            if(ck){
                $(".side-cont").removeClass("on");
                $("header").removeClass("active");
                $(".totalmenu-wrap").removeClass("on");
            }else{
                $(".side-cont").addClass("on");
                $("header").addClass("active");
                $(".totalmenu-wrap").addClass("on");
            }
        });

        $("body").on("mouseenter", ".gnb-box", function(ev){
            ev.preventDefault();
            //ev.stopPropagation();
            $("header").addClass("over");
            setTimeout(function(){
                $("header").addClass("over").addClass("ing");
            },200)

        });
        $("body").on("mouseleave", "header", function(ev){
            ev.preventDefault();
            //ev.stopPropagation();
            $("header").removeClass("ing");
            setTimeout(function(){
                $("header").removeClass("ing").removeClass("over");
            },500)


        });
        $("body").on("mouseenter", ".gnb-list>li", function(ev){
            ev.preventDefault();
            //ev.stopPropagation();
            $(".gnb-list>li").removeClass("on");
            $(this).addClass("on");
        });

        $("body").on("click", ".btn-topbtn", function(ev){
            $("html, body").stop().animate({scrollTop: 0},200, 'easeOutQuad');
            $(".container").stop().animate({scrollTop: 0},200, 'easeOutQuad');
        });

        $("body").on("mouseenter", ".sp-menu-list>li>a", function(ev){
            $(".sp-menu-list>li>a").removeClass("on");
            $(this).addClass("on");
        });
        $("body").on("mouseleave", ".sp-menu-list", function(ev){
            $(".sp-menu-list>li>a").removeClass("on");
        });


    },
    popOpen:function(o){
        $(o).addClass("ing");
        setTimeout(function(){
            $(o).addClass("on");
        },200);
    },
    popClose:function(o){
        $(o).removeClass("on");
        setTimeout(function(){
            $(o).removeClass("ing");
        },500)
    }
}

window.onload = function(){
    AOS.init({
        easing: 'ease-in-out-sine',
        disable: function() {
            var maxWidth = 1024;
            return window.innerWidth < maxWidth;
        }
    });
}

