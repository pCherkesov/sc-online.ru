$(document).ready(function() {
	function heightDetect() {
		$("header").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
});
$(window).load(function() {

}); 