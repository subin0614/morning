$(document).ready(function(){
	
	//상단 메뉴  마우스오버시 각 항목별 하위 메뉴 슬라이드
	$(".mainmenu").on("mouseenter click",function(){
		$(".mainmenu").removeClass("active");
		$("#white").stop().animate({height:"80px"});
		//$(".submenu").stop().slideUp(); //위로 서서히 올라간 후 display:none;
		$(".submenu").stop().slideDown(); //모든 하위메뉴 슬라이드 
	});
	
	//하위 메뉴에 마우스 갖다 댈 때 메인메뉴 활성화 유지
	$(".submenu").mouseenter (function(){
		$(".mainmenu").removeClass("active");
		$(this).prev().addClass("active");
		
	});
	
	
	//하위 메뉴 마우스아웃시 올라간다
	$("header nav").mouseleave(function(){
			menu();
		/*$(".mainmenu").removeClass("active");
		$(".submenu").stop().slideUp();
		$("#white").stop().animate({height:0});*/
	});
	
	//메뉴 마지막 항목이 포커스를 잃을 때,
	$(".last").blur(function(){
		menu();
	});	
	
	function menu(){
		$(".mainmenu").removeClass("active");
		$(".submenu").stop().slideUp();
		$("#white").stop().animate({height:0});
		
	}
	
	
	
	
	
	
	
	
	
	
	//왼쪽 방향 자동 슬라이드
	setInterval(leftMove,2000);
	function leftMove(){
	$("#sliding div").stop().animate({left:"-1100px"},1000,function(){
		$(this).append(	$(this).children().first() );
		$(this).css("left",0);

	});
	}
	//공지사항 보이기
	$(".show").click(function(){
		$("#popup").fadeIn();
		
	});
	
	//공지사항 닫기
	$("#popup").click(function(){
		$("#popup").fadeOut();
	});
	//키보드 자판에서 어떤 키를 눌렀는지 감지한다.
	$(document).keydown(function(event){
		if(event.key==="Escape"){
			
			$("#popup").fadeOut();
		}
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}); //////////////////end.

/* +마우스오버()와 마우스아웃()사용할 때의 문제점:bubbling현상이 있다. 중첩된 요소들 가각에 기능이 작동한다. 
해당 지정 요소에서만 발생하지 않고 하위 요소에서도 동일한 이벤트가 발생함*/


/*제이쿼리 다중 이벤트 표현하기.
마우스 갖다 댈때 , 클릭할 때, 두가지 한 번에 동일한 실행문 작성 ==> 두 가지 이상의 이벤트를 동시에 감지할 때 on()메소드를 사용. */

/*1.윈도우 2.도큐먼트 3.디스 선택자에 "" 하면 안 됨*/