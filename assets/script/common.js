
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

        $("body").on("click", ".sub-header-wrap ul li a", function(){
            $(".sub-header-wrap ul li a").removeClass("on");
            $(this).addClass("on");
        });

		$("body").on("click", ".btn-size01", function(){
			$(".btn-size01").removeClass("on");
			$(this).addClass("on");
		});

		$("body").on("click", ".btn-size02", function(){
			$(".btn-size02").removeClass("on");
			$(this).addClass("on");
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

