
$(function() {
	$('body').append('<div id="Loading" style="visibility:visible;">Loading...</div>');
	var $h = '';
	var $w = '';
	var $x = 0;
	var $y = 0;
	var $at = 0;
	var $now = '1';
	var $now_group = 'group0';
	var $box_num = 0;
	var $index = '';
	var $box_id = '#page1';
	var $before_id = '';
	var $case_id = '#page_case1';
	var $this_case = '';
	var $moved = 'Moved';
	var $sub = $('.Sub');
	var $box = $('.Page');
	var $box_case = $('.PageCase');
	var $box_str = '.Page';
	var $box_case_str = '.PageCase';
	var $btnArea = $('.BtnArea');
	var $navi_g = $('#GNV li a');
	var $navi_sl = $('.BtnPrev');
	var $navi_sr = $('.BtnNext');
	var $navi_op = $('.OtherPage');
	var $navi_nPage = $('.BtnNPage');
	var $boxW = 0;
	var $boxH = 0;
	var $boxCW = 780;
	var $boxCH = 0;
	var $boxX = 0;
	var $boxY = 0;
	var $scTopNum = 0;
	var $bgImage1 = $('.BgImage1');
	var $bgImage2 = $('.BgImage2');
	var $naviSwitch = $('#GNV li h3 span');
	var $naviBox = $('#GNV li ul');
	
	//外箱にID付加
	$box_case.each(function(){
		$(this).attr('id','page_case'+($box_case.index(this)+1));
	});
	
	function size () {
		$h = $(window).height();
		$w = $(window).width();
		$box_case.css('width',2*$w+'px');
		$box_case.css('height',$h+'px');
		$btnArea.css('width',($w-180)+'px');
		$box.css('width',$w+'px');
		$box.css('height',$h+'px');
	}
	function fadeInImg(){
		if($($box_id+' .Box .Img').css('display')=='none'){
			$($box_id+' .Box .Img').fadeIn(1500);
		}
	}
	function setting ($ths) {
		$before_id = $box_id;
		$box_id = $ths.attr('href');
		$x = $($box_id).offset().left;
		$y = $($box_id).offset().top;
		$box_case.removeClass($moved);
		$case_id = '#'+$($box_id).closest($box_case_str).attr('id');
		fadeInImg();
	}
	//センタリング
		function boxMiddle () {
		$box.each(function () {
		var $boxC = $(this).children('.Box');
		$boxW = $(this).width();
		$boxH = $(this).height();
		$boxCH = $boxC.height();
		$boxX = ($boxW-$boxCW-180)/2;
		$boxY = (($boxH-$boxCH)/2)+15;
		$boxC.css('top',Math.floor($boxY)+'px');
		if($boxX<=20){
			$boxC.css('left','200px');
			$('.BtnPrev').css('left','0px');
			$('.BtnNext').css('right','0px');
		}else{
			$boxC.css('left',Math.floor($boxX)+180+'px');
			$('.BtnPrev').css('left','-'+Math.floor($boxX-20)+'px');
			$('.BtnNext').css('right','-'+Math.floor($boxX-20)+'px');
		}
		});
	}
	
	
	//GNV
	function gnvNow () {
		var $old = $now;
		var $old_group = $now_group;
		$now = $box_id.substr(5,1);
		if($now >= 2 && $now <= 4 ){
			$now_group = 'group1';
		}else if($now >= 5 && $now <= 6 ){
			$now_group = 'group2';
		}else if($now >= 7 && $now <= 9 ){
			$now_group = 'group3';
		}else{
			$now_group = 'group0';
		}
		if($now_group==$old_group){
		}else{
			$naviSwitch.removeClass('Open');
			$naviBox.animate( { height: 'hide' }, 'fast' );
			$('#GNV li h3 span.page'+$now+':not(:animated)').addClass('Open');
			$('#GNV li h3 span.page'+$now+':not(:animated)').closest('h3').closest('li').children('ul').animate( { height: 'toggle' }, 'fast' );
		}
		$('#GNV li a').removeClass('Now');
		$('#GNV li span').removeClass('Now');
		$('#GNV li .page'+$now).addClass('Now');
		fadeInImg();
		$btnArea.css('display','none');
		$($box_id).children('.BtnArea').css('display','block');
	}
	function moveGnv(){
		if ($($before_id).closest($box_str).closest($box_case_str).offset().left==0){
				$('html:not(:animated), body:not(:animated)').animate({ scrollLeft: -(window.pageXOffset)},0, 'easeOutQuint');
			$('html:not(:animated), body:not(:animated)').animate({ scrollTop: $y},1280, 'easeOutQuint');
		gnvNow();
		}else{
			$box_case.animate({ marginLeft: '0px'},{duration:640, easing:'swing', complete:function(){
				$('html:not(:animated), body:not(:animated)').animate({ scrollLeft: -(window.pageXOffset)},0, 'easeOutQuint');
				$('html:not(:animated), body:not(:animated)').animate({ scrollTop: $y},1280, 'easeOutQuint');
				}
			});
		gnvNow();
		}
	}
	function movePage(){
		if ($($before_id).closest($box_str).closest($box_case_str).offset().left==0){
			$('html:not(:animated), body:not(:animated)').animate({ scrollTop: $y},1280, 'easeOutQuint');
		}else{
			$box_case.animate({ marginLeft: '0px'},{duration:640, easing:'swing', complete:function(){
				$('html:not(:animated), body:not(:animated)').animate({ scrollTop: $y},1280, 'easeOutQuint');
				}
			});
		}
	}
	
	//リサイズ
	$( window ).resize(function(){
		size();
		$y = $($box_id).offset().top;
		$x = $($box_id).offset().left;
		$($box_id).each(function(){
		$box_num = -($(this).closest($case_id).children('div').index(this))*$w;
		$(this).closest($case_id).css('margin-left',$box_num+'px');
		});
		$('html:not(:animated), body:not(:animated)').animate({ scrollTop: $y},0, 'swing' );
		$($box_id).closest($case_id).children($box).size();
		boxMiddle();
	});
	
	
	
	//GNV
	$navi_g.click(function() {
		setting($(this));
		moveGnv();
		return false;
	});
	$naviSwitch.click(function() {
		if($(this).hasClass('Open')){
			$(this).removeClass('Open');
			$(this).closest('h3').closest('li').children('ul').animate( { height: 'hide' }, 'fast' );
		}else{
			$naviBox.animate( { height: 'hide' }, 'fast' );
			$(this).closest('h3').closest('li').children('ul').animate( { height: 'toggle' }, 'fast' );
			$naviSwitch.removeClass('Open');
			$(this).addClass('Open');
		}
	});
	$navi_op.click(function() {
		setting($(this));
		var $ths_url = $(this).attr('href');
		if($ths_url.substr(0,6)==$before_id.substr(0,6)){
					if($ths_url.substr(6)=='_2'){
						$($case_id).animate({ marginLeft: '-'+$x+'px'},{duration:640, easing:'easeOutQuint', complete:function(){
							$btnArea.css('display','none');
							$($ths_url).children('.BtnArea').css('display','block');
						}
						});
					}else{
						$($case_id).animate({ marginLeft: '0px'},{duration:640, easing:'easeOutQuint', complete:function(){
							$btnArea.css('display','none');
							$($ths_url).children('.BtnArea').css('display','block');
						}
					});
					}
		}else{
			$('html:not(:animated), body:not(:animated)').animate({ scrollTop: $y},{duration:640, easing:'swing', complete:function(){
					if($ths_url.substr(6)=='_2'){
						$($case_id).animate({ marginLeft: '-'+$x+'px'},{duration:640, easing:'easeOutQuint', complete:function(){
							$btnArea.css('display','none');
							$($ths_url).children('.BtnArea').css('display','block');
						}
						});
					}else{
						$($case_id).animate({ marginLeft: '0px'},{duration:640, easing:'easeOutQuint', complete:function(){
							$btnArea.css('display','none');
							$($ths_url).children('.BtnArea').css('display','block');
						}
					});
					}
				}
			});
		}
		return false;
	});
	
	//NextPage
	$navi_nPage.click(function() {
		setting($(this));
		var $ths_url = $(this).attr('href');
		if($ths_url.substr(6)=='_2'){
			$this_case = $(this).closest('.BtnArea').closest($box_str).closest($box_case_str);
			$('html:not(:animated), body:not(:animated)').animate({ scrollTop: $y},1280,'easeOutQuint');
			$this_case.animate({ marginLeft: '-'+$w+'px'},1280, 'easeOutQuint');
			$this_case.addClass($moved);
			$box_case.each(function(){
				if($(this).hasClass($moved)){
				}else{
					$(this).animate({ marginLeft: '0px'},1280,'easeOutQuint');
				}
			});
				$btnArea.css('display','none');
				$($box_id).children('.BtnArea').css('display','block');
		}else{
			movePage();
		}
		return false;
	});
	
	
	
	
	//Scroll
	$(window).scroll(function () {
		
		//$('.Main').each(function(){
		//	var $pid =  $(this).closest('.PageCase').attr('id');
		//	var $bgnum = $pid.substr(9);
		//	if($bgnum==1){
		//		$(this).children('.BgText').css('top', Math.floor( 300+($(document).scrollTop())-(($bgnum-1)*$h) ) + 'px');
		//	}else if($bgnum<5){
		//		$(this).children('.BgText').css('top', Math.floor( 300+($(document).scrollTop())-(($bgnum-1)*$h)-300 ) + 'px');
		//	}else if($bgnum>4){
		//		$(this).children('.BgText').css('top', Math.floor( 300+($(document).scrollTop())-(($bgnum-1)*$h)-600 ) + 'px');
		//	}
		//});
		if($h<=Math.abs($(document).scrollTop()-$y)){
			$('.'+$moved).css('margin-left','0px');
			$('.'+$moved).removeClass($moved);
		}
		if($(document).scrollTop()<=$h-(0.4*$h)){
			$box_id = '#page1';
		}else if($(document).scrollTop()<=(2*$h)+300-(0.4*$h)){
			$box_id = '#page2';
		}else if($(document).scrollTop()<=(3*$h)+300-(0.4*$h)){
			$box_id = '#page3';
		}else if($(document).scrollTop()<=(4*$h)+300-(0.4*$h)){
			$box_id = '#page4';
		}else if($(document).scrollTop()<=(5*$h)+300-(0.4*$h)){
			$box_id = '#page5';
		}else if($(document).scrollTop()<=(6*$h)+600-(0.4*$h)){
			$box_id = '#page6';
		}else if($(document).scrollTop()<=(7*$h)+600-(0.4*$h)){
			$box_id = '#page7';
		}else if($(document).scrollTop()<=(8*$h)+600-(0.4*$h)){
			$box_id = '#page8';
		}else if($(document).scrollTop()<=(9*$h)+600-(0.4*$h)){
			$box_id = '#page9';
		}else if($(document).scrollTop()<=(10*$h)+600){
			$box_id = '#pageA';
		}
		$case_id = '#'+$($box_id).closest($box_case_str).attr('id');
		if($($case_id).css('margin-left')=='0px'){
		}else{
		$box_id = $box_id+'_2';
		$this_case.addClass($moved);
		}
		$bgImage2.css('background-position', '100% ' + Math.floor( -($(document).scrollTop()) / 5 ) + 'px');
		$bgImage1.css('background-position', '100% ' + Math.floor( ($(document).scrollTop()) / 3 ) + 'px');
		gnvNow();
		
		//装飾number
		$scTopNum = $(document).scrollTop();
		$('.Random .Num01 tt').text((($scTopNum*213)+'').substr(0,3)+','+(($scTopNum*433)+'').substr(0,3));
		$('.Random .Num02 tt').text((($scTopNum*119)+'').substr(0,3)+','+(($scTopNum*319)+'').substr(0,3));
		$('.Random .Num03 tt').text((($scTopNum*172)+'').substr(0,3)+','+(($scTopNum*183)+'').substr(0,3));
		$('.Random .Num04 tt').text((($scTopNum*312)+'').substr(0,1)+','+(($scTopNum*312)+'').substr(1,3)+','+(($scTopNum*398)+'').substr(0,3)+','+(($scTopNum*214)+'').substr(0,3));
		$('.Random .Num05 tt').text((($scTopNum*417)+'').substr(0,3)+','+(($scTopNum*417)+'').substr(3,3)+','+(($scTopNum*317)+'').substr(0,3));
	});
	
	
	//Movie
	var $movieList = '.MolieList li';
	var $movieListID = 'Player01';
	var $movieID = 'Player01';
	var $swfURL = '';
		
	function movieLoad(mid){
		$movieID = mid;
		$('#FlashArea').empty();
		$('#FlashArea').append('<div id="Flash"></div>');
		if($('body').attr('class')=='English'){
			$swfURL = '/swf/top/player/en/'+$movieID+'.swf';
		}else{
			$swfURL = '/swf/top/player/'+$movieID+'.swf';
		}
		
		$($movieList).removeClass('Now');
		$($movieList+'#'+$movieID).addClass('Now');
	
		//swfObject
		var vars = {
		};
		var params = {
		menu:'false',
		bgcolor:'#BD7EE0',
		wmode:'transparent'
		};
		var attributes = { id:'flashContent', name:'flashContent' };
		swfobject.embedSWF($swfURL, "Flash", "540", "411", "9", "", vars, params, attributes );
	}
	$($movieList).click(function() {
		$movieListID = $(this).attr('id');
		movieLoad($movieListID);
	});
	
		
	
	//初期設定
	size();
	gnvNow();
	boxMiddle();
	movieLoad($movieListID);
 	$("div#Loading").fadeOut("slow");
	$('#HeaderArea').css('visibility','visible');
	$('#SideArea').css('visibility','visible');
	$('#PageCase').css('visibility','visible');
	
	
	//Slider
	$('#Slide ul').bxSlider({
	auto: true,
	pager: true,
    speed: 500,
    pause: 6000,
	});
	$('#Slide .bx-wrapper .bx-pager a').each(function(){
		$(this).empty();
		$(this).append('●');
	});
	$('#Slide .bx-wrapper').hover(
	function () {
		$('#Slide .bx-wrapper .bx-prev').fadeIn(500);
		$('#Slide .bx-wrapper .bx-next').fadeIn(500);
	},
	function () {
		$('#Slide .bx-wrapper .bx-prev').fadeOut(500);
		$('#Slide .bx-wrapper .bx-next').fadeOut(500);
	}
	);
	
	
	
	
	
	
	
});
