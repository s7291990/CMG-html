var work = [
    /*회원*/
	{ "cate":"m01", "dep01":"페이지", "dep02":"메인", "url":"html/page/index.html", "date":"2023-08-07" },
	{ "cate":"m01", "dep01":"페이지", "dep02":"콘텐츠상세", "url":"html/page/contents-view.html", "date":"2023-08-07" },
	{ "cate":"m01", "dep01":"페이지", "dep02":"헬스케어", "url":"html/page/healthcare.html", "date":"2023-08-07" },
	{ "cate":"m01", "dep01":"페이지", "dep02":"로그인", "url":"html/page/login.html", "date":"2023-08-07" },
	{ "cate":"m01", "dep01":"페이지", "dep02":"마이페이지", "url":"html/page/mypage.html", "date":"2023-08-07" },
	{ "cate":"m01", "dep01":"페이지", "dep02":"파트너", "url":"html/page/partner.html", "date":"2023-08-07" },
	{ "cate":"m01", "dep01":"페이지", "dep02":"회원가입-약관동의", "url":"html/page/step01.html", "date":"2023-08-07" },
	{ "cate":"m01", "dep01":"페이지", "dep02":"회원가입-정보입력", "url":"html/page/step02.html", "date":"2023-08-07" },
	{ "cate":"m01", "dep01":"페이지", "dep02":"회원가입-완료", "url":"html/page/step03.html", "date":"2023-08-07" },




];

 
$(function(){   
	listTable(".siteNavi li", ".siteNavi li .num");
}); 
 
function listTable(cls, num){   
	var tr;
	for(i=0; i<work.length; i++){
		tr += "<tr class="+work[i].cate+">";
		tr += "<td>"+work[i].dep01+"</td>";
		tr += "<td>"+work[i].dep02+"</td>";
		tr += "<td><a href='./"+work[i].url+"' target='_blank'>"+work[i].url+"</a></td>";
		tr += "<td class='ac'>"+work[i].date+"</td>";
		tr += "</tr>"; 
	}  
	$("table tbody").append(tr);  
	
	$(num).each(function(z){
		if(z===0){
			$(num).eq(z).text("("+work.length+"p)");
		}else{
			$(num).eq(z).text("("+$('.m0'+z).length+"p)");
		} 
	}); 
	$("body").on("click",cls, function(){
		$(cls).removeClass("on"); 
		$(this).addClass("on");
		$("table tbody tr").hide();
		if($(this).index() === 0){
			$("table tbody tr").show();
		}else{
			$(".m0"+$(this).index()).show();
		} 
	});  
}  
