$(document).ready(function(){
	
	$("#info").click(function(){
		imgExpandir();
		
	});
	$("#info").mouseleave(function(){
		imgDiminuir();
		
	});
});
function imgExpandir(){
	var menu = $("#info");
	$(menu).animate({left:"400px"});
	
	

}
function imgDiminuir(){
	var menu = $("#info");
	$(menu).animate({left:"-15px"});
	
}